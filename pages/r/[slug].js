import { riddles } from '../../data/riddles';

export async function getServerSideProps({ params }) {
  const riddle = riddles.find(r => r.slug === params.slug);
  if (!riddle) return { notFound: true };
  return {
    redirect: {
      destination: `/riddles/${riddle.slug}/`,
      permanent: true,
    },
  };
}

export default function ShortLink() {
  return null;
}
