import { riddles } from '../../data/riddles';

// /r/[slug] → /riddles/[slug]/ with UTM passthrough
//
// Usage in pinned YouTube comments, TikTok overlays, IG caption:
//   riddleking.co.uk/r/silence/   (short, readable, pronounceable on screen)
//
// Vercel turns the returned { redirect } into a proper 301 at build time.
// All 329 slugs are pre-generated — no server required.

export async function getStaticPaths() {
  return {
    paths: riddles.map(r => ({ params: { slug: r.slug } })),
    fallback: false, // 404 for any slug not in the riddles data
  };
}

export async function getStaticProps({ params }) {
  const riddle = riddles.find(r => r.slug === params.slug);
  if (!riddle) return { notFound: true };

  // UTM params are appended client-side by the bio link — we don't need to
  // touch them here. The redirect just needs to land on the right riddle page.
  return {
    redirect: {
      destination: `/riddles/${riddle.slug}/`,
      permanent: true, // 301 — search engines and browsers will cache this
    },
  };
}

// Required export — never actually renders (redirect fires first)
export default function ShortLink() {
  return null;
}
