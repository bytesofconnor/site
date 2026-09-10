(() => {
	const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)');
	if (reduceMotion.matches) return;

	const canHover = window.matchMedia('(hover: hover) and (pointer: fine)').matches;
	const fields = document.querySelectorAll('.pixel-field');
	if (!fields.length) return;

	fields.forEach((field, index) => bindField(field, index));

	function bindField(field, index) {
		const img = field.querySelector('img');
		const canvas = field.querySelector('.pixel-field-canvas');
		if (!img || !canvas) return;

		const ctx = canvas.getContext('2d', { alpha: true });
		if (!ctx) return;

		const MAX_BLOCK = 14;
		const CELL = 12;
		const RADIUS = 150;
		const PUSH = 20;
		const GAP = 1;
		const IN_TAU = 280;
		const FOLLOW_TAU = 70;
		const SPRING_TAU = 90;
		const BREATH_MS = 8000;
		const PHASE_MS = index * 2800;

		let mosaics = [];
		let cells = [];
		let width = 0;
		let height = 0;
		let dpr = 1;
		let hot = false;
		let intensity = 0;
		let hoverPush = 0;
		let running = false;
		let visible = true;
		let lastTime = 0;
		let mouseX = 0;
		let mouseY = 0;
		let hasMouse = false;
		let mx = 0;
		let my = 0;

		function cssSize() {
			return {
				w: Math.max(1, field.clientWidth),
				h: Math.max(1, field.clientHeight),
			};
		}

		function drawCover(target, image, w, h) {
			const ir = image.naturalWidth / image.naturalHeight;
			const br = w / h;
			let dw;
			let dh;
			let dx;
			let dy;
			if (ir > br) {
				dh = h;
				dw = h * ir;
				dx = (w - dw) / 2;
				dy = 0;
			} else {
				dw = w;
				dh = w / ir;
				dx = 0;
				dy = (h - dh) / 2;
			}
			target.clearRect(0, 0, w, h);
			target.drawImage(image, dx, dy, dw, dh);
		}

		function makeMosaic(source, block, w, h) {
			const sw = Math.max(1, Math.round(w / block));
			const sh = Math.max(1, Math.round(h / block));
			const tile = document.createElement('canvas');
			tile.width = sw;
			tile.height = sh;
			const tctx = tile.getContext('2d');
			if (!tctx) return null;
			tctx.imageSmoothingEnabled = false;
			tctx.drawImage(source, 0, 0, sw, sh);
			return tile;
		}

		function rebuild() {
			const { w, h } = cssSize();
			width = w;
			height = h;
			dpr = Math.min(window.devicePixelRatio || 1, 2);
			canvas.width = Math.max(1, Math.floor(w * dpr));
			canvas.height = Math.max(1, Math.floor(h * dpr));

			const sample = document.createElement('canvas');
			sample.width = w;
			sample.height = h;
			const sctx = sample.getContext('2d', { willReadFrequently: true });
			if (!sctx || !img.naturalWidth) return;
			drawCover(sctx, img, w, h);
			const data = sctx.getImageData(0, 0, w, h).data;

			mosaics = [null, sample];
			for (let block = 2; block <= MAX_BLOCK; block += 1) {
				mosaics[block] = makeMosaic(sample, block, w, h);
			}

			const cols = Math.max(8, Math.floor(w / CELL));
			const rows = Math.max(8, Math.floor(h / CELL));
			cells = [];
			for (let y = 0; y < rows; y += 1) {
				const y0 = Math.round((y * h) / rows);
				const y1 = Math.round(((y + 1) * h) / rows);
				for (let x = 0; x < cols; x += 1) {
					const x0 = Math.round((x * w) / cols);
					const x1 = Math.round(((x + 1) * w) / cols);
					const cw = Math.max(1, x1 - x0);
					const ch = Math.max(1, y1 - y0);
					const px = Math.min(w - 1, x0 + Math.floor(cw / 2));
					const py = Math.min(h - 1, y0 + Math.floor(ch / 2));
					const i = (py * w + px) * 4;
					cells.push({
						ox: x0,
						oy: y0,
						cx: x0 + cw / 2,
						cy: y0 + ch / 2,
						dx: 0,
						dy: 0,
						w: cw,
						h: ch,
						color: `rgb(${data[i]},${data[i + 1]},${data[i + 2]})`,
						edge: y === 0 || x === 0 || y === rows - 1 || x === cols - 1,
					});
				}
			}
		}

		function blit(tile, alpha) {
			if (!tile || alpha <= 0.001) return;
			ctx.globalAlpha = alpha;
			ctx.drawImage(tile, 0, 0, tile.width, tile.height, 0, 0, width, height);
		}

		function breath(now) {
			const t = ((now + PHASE_MS) % BREATH_MS) / BREATH_MS;
			return t < 0.5 ? t * 2 : 2 - t * 2;
		}

		function tick(now) {
			if (!running) return;
			const dt = lastTime ? Math.min(48, now - lastTime) : 16.6;
			lastTime = now;

			const ambient = breath(now);
			if (hot) {
				intensity += (1 - intensity) * (1 - Math.exp(-dt / IN_TAU));
				if (intensity < 0.28) intensity = 0.28;
			} else {
				intensity = ambient;
			}

			const pushTarget = hot && hasMouse ? 1 : 0;
			hoverPush += (pushTarget - hoverPush) * (1 - Math.exp(-dt / SPRING_TAU));
			if (hoverPush < 0.01) hoverPush = 0;

			if (hasMouse) {
				const follow = 1 - Math.exp(-dt / FOLLOW_TAU);
				mx += (mouseX - mx) * follow;
				my += (mouseY - my) * follow;
			}

			ctx.setTransform(1, 0, 0, 1, 0, 0);
			ctx.clearRect(0, 0, canvas.width, canvas.height);

			if (intensity > 0.002 && mosaics[1]) {
				ctx.save();
				ctx.beginPath();
				ctx.rect(0, 0, canvas.width, canvas.height);
				ctx.clip();
				ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
				ctx.imageSmoothingEnabled = false;

				const block = 1 + intensity * (MAX_BLOCK - 1);
				const b0 = Math.max(1, Math.floor(block));
				const b1 = Math.min(MAX_BLOCK, b0 + 1);
				const frac = block - b0;
				blit(mosaics[b0], intensity);
				blit(mosaics[b1], intensity * frac);

				const spring = 1 - Math.exp(-dt / SPRING_TAU);
				for (let i = 0; i < cells.length; i += 1) {
					const cell = cells[i];
					let tx = 0;
					let ty = 0;
					if (!cell.edge && hoverPush > 0.01) {
						const ddx = cell.cx - mx;
						const ddy = cell.cy - my;
						const dist = Math.hypot(ddx, ddy) || 0.001;
						const t = 1 - Math.min(dist / RADIUS, 1);
						const falloff = t * t * (3 - 2 * t);
						const push = falloff * PUSH * hoverPush;
						tx = (ddx / dist) * push;
						ty = (ddy / dist) * push;
					}
					cell.dx += (tx - cell.dx) * spring;
					cell.dy += (ty - cell.dy) * spring;
					if (cell.edge) continue;
					if (Math.abs(cell.dx) < 0.15 && Math.abs(cell.dy) < 0.15) continue;
					const pw = Math.max(1, cell.w - GAP);
					const ph = Math.max(1, cell.h - GAP);
					const x = Math.min(Math.max(0, cell.ox + cell.dx), width - pw);
					const y = Math.min(Math.max(0, cell.oy + cell.dy), height - ph);
					ctx.globalAlpha = Math.min(1, intensity * 1.15);
					ctx.fillStyle = cell.color;
					ctx.fillRect(Math.round(x), Math.round(y), Math.round(pw), Math.round(ph));
				}

				ctx.globalAlpha = 1;
				ctx.restore();
			}

			if (!visible) {
				running = false;
				lastTime = 0;
				return;
			}
			requestAnimationFrame(tick);
		}

		function start() {
			if (running || !visible) return;
			running = true;
			lastTime = 0;
			requestAnimationFrame(tick);
		}

		function onEnter(event) {
			hot = true;
			field.classList.add('is-hot');
			const rect = field.getBoundingClientRect();
			mouseX = event.clientX - rect.left;
			mouseY = event.clientY - rect.top;
			if (!hasMouse) {
				mx = mouseX;
				my = mouseY;
				hasMouse = true;
			}
			start();
		}

		function onMove(event) {
			const rect = field.getBoundingClientRect();
			mouseX = event.clientX - rect.left;
			mouseY = event.clientY - rect.top;
			hasMouse = true;
			if (hot) start();
		}

		function onLeave() {
			hot = false;
			hasMouse = false;
			field.classList.remove('is-hot');
			start();
		}

		function ready() {
			rebuild();
			if (canHover) {
				field.addEventListener('pointerenter', onEnter);
				field.addEventListener('pointermove', onMove);
				field.addEventListener('pointerleave', onLeave);
			}
			window.addEventListener(
				'resize',
				() => {
					rebuild();
				},
				{ passive: true }
			);
			const io = new IntersectionObserver(
				(entries) => {
					visible = entries.some((entry) => entry.isIntersecting);
					if (visible) start();
				},
				{ threshold: 0.12 }
			);
			io.observe(field);
			start();
		}

		if (img.complete && img.naturalWidth) {
			ready();
		} else {
			img.addEventListener('load', ready, { once: true });
		}
	}
})();
