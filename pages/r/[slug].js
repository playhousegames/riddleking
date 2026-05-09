import { useEffect } from 'react';
import { useRouter } from 'next/router';
import { riddles } from '../../data/riddles';

export async function getStaticPaths() {
  return {
    paths: riddles.map(r => ({ params: { slug: r.slug } })),
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  const riddle = riddles.find(r => r.slug === params.slug);
  if (!riddle) return { notFound: true };
  return { props: { targetSlug: riddle.slug } };
}

export default function ShortLink({ targetSlug }) {
  const router = useRouter();

  useEffect(() => {
    router.replace(`/riddles/${targetSlug}/`);
  }, [targetSlug]);

  return null;
}
