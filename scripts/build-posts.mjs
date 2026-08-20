import { mkdir, readdir, readFile, writeFile } from 'node:fs/promises';
import { join } from 'node:path';
import matter from 'gray-matter';
import { marked } from 'marked';

const root = process.cwd();
const postsDir = join(root, 'posts');
const outFile = join(root, 'data', 'blog.json');

marked.setOptions({ gfm: true, breaks: false });

function toExcerpt(description, body) {
	const explicit = (description || '').trim();
	if (explicit) return explicit;
	const plain = body
		.replace(/```[\s\S]*?```/g, ' ')
		.replace(/[#>*_`[\]]/g, '')
		.replace(/\s+/g, ' ')
		.trim();
	if (plain.length <= 180) return plain;
	return `${plain.slice(0, 177).trim()}…`;
}

function toIsoDate(value) {
	if (!value) return '';
	const date = value instanceof Date ? value : new Date(value);
	if (Number.isNaN(date.getTime())) return String(value);
	return date.toISOString().slice(0, 10);
}

async function main() {
	await mkdir(postsDir, { recursive: true });
	await mkdir(join(root, 'data'), { recursive: true });

	const files = (await readdir(postsDir)).filter((name) => name.endsWith('.md'));
	const posts = [];

	for (const name of files) {
		const raw = await readFile(join(postsDir, name), 'utf8');
		const parsed = matter(raw);
		const data = parsed.data || {};
		if (data.draft === true) continue;

		const slug = name.replace(/\.md$/i, '');
		const body = parsed.content.trim();
		posts.push({
			slug,
			title: String(data.title || slug),
			date: toIsoDate(data.date),
			description: toExcerpt(data.description, body),
			html: marked.parse(body),
		});
	}

	posts.sort((a, b) => String(b.date).localeCompare(String(a.date)) || a.title.localeCompare(b.title));

	await writeFile(outFile, `${JSON.stringify({ posts }, null, 2)}\n`);
	console.log(`Wrote ${posts.length} post(s) to data/blog.json`);
}

main().catch((error) => {
	console.error(error);
	process.exit(1);
});
