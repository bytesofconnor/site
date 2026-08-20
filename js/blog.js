(function () {
	const MONTHS = [
		'January',
		'February',
		'March',
		'April',
		'May',
		'June',
		'July',
		'August',
		'September',
		'October',
		'November',
		'December',
	];

	function formatDate(iso) {
		if (!iso) return '';
		const parts = String(iso).slice(0, 10).split('-');
		if (parts.length !== 3) return iso;
		const month = MONTHS[Number(parts[1]) - 1];
		if (!month) return iso;
		return `${month} ${Number(parts[2])}, ${parts[0]}`;
	}

	function postUrl(slug) {
		return 'blog.html?p=' + encodeURIComponent(slug);
	}

	async function loadPosts() {
		const response = await fetch('data/blog.json', { cache: 'no-cache' });
		if (!response.ok) return [];
		const payload = await response.json();
		return Array.isArray(payload.posts) ? payload.posts : [];
	}

	function currentSlug() {
		return new URLSearchParams(window.location.search).get('p') || '';
	}

	async function renderList(root) {
		if (!root) return;
		let posts = [];
		try {
			posts = await loadPosts();
		} catch (error) {
			posts = [];
		}

		if (!posts.length) {
			root.innerHTML = '<p class="blog-empty-text">New posts coming soon.</p>';
			root.classList.add('blog-empty');
			root.classList.remove('blog-feed');
			return;
		}

		root.classList.remove('blog-empty');
		root.classList.add('blog-feed');
		root.innerHTML = posts
			.map(function (post) {
				const date = formatDate(post.date);
				const excerpt = post.description ? '<p class="blog-item-excerpt">' + escapeHtml(post.description) + '</p>' : '';
				return (
					'<a class="blog-item" href="' +
					postUrl(post.slug) +
					'">' +
					(date ? '<span class="blog-item-date">' + escapeHtml(date) + '</span>' : '') +
					'<span class="blog-item-title">' +
					escapeHtml(post.title) +
					'</span>' +
					excerpt +
					'</a>'
				);
			})
			.join('');
	}

	async function renderPost(root) {
		if (!root) return;
		const slug = currentSlug();
		if (!slug) {
			root.innerHTML =
				'<p class="blog-empty-text">No post selected. <a class="link" href="index.html#thoughts-section">Back to Blog.</a></p>';
			return;
		}

		let posts = [];
		try {
			posts = await loadPosts();
		} catch (error) {
			posts = [];
		}

		const post = posts.find(function (entry) {
			return entry.slug === slug;
		});

		if (!post) {
			root.innerHTML =
				'<p class="blog-empty-text">This post isn’t published. <a class="link" href="index.html#thoughts-section">Back to Blog.</a></p>';
			return;
		}

		document.title = post.title + ' — Connor Barrett';
		const date = formatDate(post.date);
		root.innerHTML =
			'<p class="blog-post-date">' +
			escapeHtml(date) +
			'</p>' +
			'<h1 class="blog-post-title">' +
			escapeHtml(post.title) +
			'</h1>' +
			'<div class="blog-prose">' +
			(post.html || '') +
			'</div>';
	}

	function escapeHtml(value) {
		return String(value)
			.replace(/&/g, '&amp;')
			.replace(/</g, '&lt;')
			.replace(/>/g, '&gt;')
			.replace(/"/g, '&quot;');
	}

	window.SiteBlog = {
		renderList: renderList,
		renderPost: renderPost,
	};
})();
