// Builds robots.txt automatically: welcomes all search and AI crawlers
// and points them to your sitemap. Nothing to edit here.
import { me } from '../../my-details.mjs';

export function GET() {
  const site = me.siteUrl.replace(/\/$/, '');
  return new Response(
    `User-agent: *\nAllow: /\n\nSitemap: ${site}/sitemap-index.xml\n`,
    { headers: { 'Content-Type': 'text/plain; charset=utf-8' } },
  );
}
