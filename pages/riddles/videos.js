import Head from 'next/head';
import { useState } from 'react';

const videos = [
  {
    id: 'YOUTUBE_ID_1',
    title: 'What has hands but cannot clap?',
    answer: 'A Clock',
    part: 1,
  },
  {
    id: 'YOUTUBE_ID_2',
    title: 'What has hands but cannot clap? — Answer',
    answer: 'A Clock',
    part: 2,
  },
  {
    id: 'YOUTUBE_ID_3',
    title: 'What breaks the moment you say it?',
    answer: 'Silence',
    part: 1,
  },
  {
    id: 'YOUTUBE_ID_4',
    title: 'What breaks the moment you say it? — Answer',
    answer: 'Silence',
    part: 2,
  },
];

const schemaData = {
  '@context': 'https://schema.org',
  '@type': 'ItemList',
  name: 'The King\'s Riddles — Video Series',
  description: 'Watch the Riddle King deliver riddles and reveal answers in our TikTok and YouTube video series.',
  itemListElement: videos.map((v, i) => ({
    '@type': 'ListItem',
    position: i + 1,
    item: {
      '@type': 'VideoObject',
      name: v.title,
      description: `Can you solve the riddle? ${v.title}`,
      thumbnailUrl: `https://img.youtube.com/vi/${v.id}/maxresdefault.jpg`,
      embedUrl: `https://www.youtube.com/embed/${v.id}`,
      uploadDate: '2026-05-01',
      publisher: {
        '@type': 'Organization',
        name: 'Riddle King',
        url: 'https://www.riddleking.co.uk',
      },
    },
  })),
};

export default function VideosPage() {
  const [activeVideo, setActiveVideo] = useState(null);

  return (
    <>
      <Head>
        <title>The King's Riddles — Video Series | Riddle King</title>
        <meta
          name="description"
          content="Watch the Riddle King deliver riddles and reveal answers. Can you solve them before the king does?"
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
        />
      </Head>

      <main style={styles.page}>
        <header style={styles.header}>
          <p style={styles.eyebrow}>Hear ye! Hear ye!</p>
          <h1 style={styles.title}>The King&apos;s Riddles</h1>
          <p style={styles.subtitle}>
            Can you solve the riddle before the king reveals the answer?
          </p>
        </header>

        <div style={styles.grid}>
          {videos.map((video) => (
            <button
              key={video.id}
              style={styles.card}
              onClick={() => setActiveVideo(video)}
              aria-label={`Watch: ${video.title}`}
            >
              <div style={styles.thumbWrap}>
                <img
                  src={`https://img.youtube.com/vi/${video.id}/maxresdefault.jpg`}
                  alt={video.title}
                  style={styles.thumb}
                  loading="lazy"
                />
                <div style={styles.playOverlay}>
                  <div style={styles.playBtn}>&#9654;</div>
                </div>
                {video.part === 2 && (
                  <div style={styles.answerBadge}>Answer</div>
                )}
              </div>
              <div style={styles.cardBody}>
                <p style={styles.cardTitle}>{video.title}</p>
              </div>
            </button>
          ))}
        </div>

        {activeVideo && (
          <div style={styles.modalBackdrop} onClick={() => setActiveVideo(null)}>
            <div style={styles.modal} onClick={(e) => e.stopPropagation()}>
              <button
                style={styles.closeBtn}
                onClick={() => setActiveVideo(null)}
                aria-label="Close video"
              >
                ✕
              </button>
              <div style={styles.embedWrap}>
                <iframe
                  src={`https://www.youtube.com/embed/${activeVideo.id}?autoplay=1`}
                  title={activeVideo.title}
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  style={styles.iframe}
                />
              </div>
              <p style={styles.modalTitle}>{activeVideo.title}</p>
            </div>
          </div>
        )}
      </main>
    </>
  );
}

const styles = {
  page: {
    maxWidth: '1100px',
    margin: '0 auto',
    padding: '3rem 1.5rem',
    background: '#FAF6EE',
    minHeight: '100vh',
    fontFamily: 'Georgia, serif',
  },
  header: {
    textAlign: 'center',
    marginBottom: '3rem',
  },
  eyebrow: {
    fontSize: '0.85rem',
    letterSpacing: '0.15em',
    textTransform: 'uppercase',
    color: '#E8B84B',
    fontFamily: 'Georgia, serif',
    margin: '0 0 0.5rem',
  },
  title: {
    fontSize: 'clamp(2rem, 5vw, 3.5rem)',
    color: '#2a1a5e',
    margin: '0 0 1rem',
    fontFamily: 'Georgia, serif',
    fontWeight: 700,
  },
  subtitle: {
    fontSize: '1.1rem',
    color: '#5a4a7a',
    margin: 0,
    maxWidth: '500px',
    marginLeft: 'auto',
    marginRight: 'auto',
    lineHeight: 1.6,
  },
  grid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fill, minmax(240px, 1fr))',
    gap: '1.5rem',
  },
  card: {
    background: '#fff',
    border: '1px solid #e8e0d0',
    borderRadius: '10px',
    overflow: 'hidden',
    cursor: 'pointer',
    textAlign: 'left',
    padding: 0,
    transition: 'transform 0.15s ease, box-shadow 0.15s ease',
    boxShadow: '0 2px 8px rgba(42,26,94,0.07)',
  },
  thumbWrap: {
    position: 'relative',
    paddingTop: '56.25%',
    background: '#2a1a5e',
    overflow: 'hidden',
  },
  thumb: {
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    objectFit: 'cover',
    display: 'block',
  },
  playOverlay: {
    position: 'absolute',
    inset: 0,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    background: 'rgba(42,26,94,0.3)',
    opacity: 0,
    transition: 'opacity 0.2s ease',
  },
  playBtn: {
    width: '52px',
    height: '52px',
    borderRadius: '50%',
    background: '#E8B84B',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    fontSize: '1.2rem',
    color: '#2a1a5e',
    paddingLeft: '4px',
  },
  answerBadge: {
    position: 'absolute',
    top: '10px',
    right: '10px',
    background: '#E8B84B',
    color: '#2a1a5e',
    fontSize: '0.7rem',
    fontWeight: 700,
    letterSpacing: '0.08em',
    textTransform: 'uppercase',
    padding: '3px 9px',
    borderRadius: '4px',
    fontFamily: 'Georgia, serif',
  },
  cardBody: {
    padding: '0.85rem 1rem',
  },
  cardTitle: {
    margin: 0,
    fontSize: '0.9rem',
    color: '#2a1a5e',
    lineHeight: 1.4,
    fontFamily: 'Georgia, serif',
  },
  modalBackdrop: {
    position: 'fixed',
    inset: 0,
    background: 'rgba(20,10,50,0.85)',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    zIndex: 1000,
    padding: '1rem',
  },
  modal: {
    background: '#1a0e3a',
    borderRadius: '12px',
    width: '100%',
    maxWidth: '760px',
    padding: '1rem',
    position: 'relative',
  },
  closeBtn: {
    position: 'absolute',
    top: '-14px',
    right: '-14px',
    background: '#E8B84B',
    border: 'none',
    borderRadius: '50%',
    width: '32px',
    height: '32px',
    cursor: 'pointer',
    fontSize: '0.85rem',
    color: '#2a1a5e',
    fontWeight: 700,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    zIndex: 10,
  },
  embedWrap: {
    position: 'relative',
    paddingTop: '56.25%',
    borderRadius: '8px',
    overflow: 'hidden',
    background: '#000',
  },
  iframe: {
    position: 'absolute',
    inset: 0,
    width: '100%',
    height: '100%',
    border: 'none',
  },
  modalTitle: {
    color: '#FAF6EE',
    fontFamily: 'Georgia, serif',
    fontSize: '0.9rem',
    margin: '0.75rem 0 0',
    textAlign: 'center',
    opacity: 0.8,
  },
};
