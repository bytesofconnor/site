# flowconnor.dev

Personal portfolio website built with vanilla HTML, CSS, and JavaScript. Originally designed in Webflow, now deployed on Vercel.

## Tech Stack

- **Frontend**: HTML5, CSS3, JavaScript
- **Hosting**: Vercel
- **Domain**: [flowconnor.dev](https://flowconnor.dev)
- **CMS**: [Sveltia CMS](https://sveltiacms.app/) (git-based, writes Markdown)
- **Forms**: Formspree
- **Fonts**: Google Fonts (Manrope)

## Writing

Posts are Markdown files in `posts/`. You don’t need Cursor to publish.

1. Open [flowconnor.dev/admin/](https://flowconnor.dev/admin/)
2. Sign in with an access token
3. Create a [classic GitHub token](https://github.com/settings/tokens/new?description=flowconnor-cms&scopes=public_repo) with the `public_repo` scope
4. Paste it, write, publish

That commits a Markdown file. Vercel rebuilds and the post shows up under **Blog.** Drafts stay off the site until you uncheck Draft.

## Development

```bash
npm install
npm run build
python -m http.server 8000
```

`npm run build` turns `posts/*.md` into `data/blog.json` for the Blog list and post pages.

## Deployment

Deploys automatically to Vercel on push to `main`.

**Manual deploy:**
```bash
vercel --prod
```

## Links

- **Live Site**: [flowconnor.dev](https://flowconnor.dev)
- **Write**: [flowconnor.dev/admin/](https://flowconnor.dev/admin/)
- **Form Dashboard**: [Formspree](https://formspree.io/forms/mnqklnog/submissions)
