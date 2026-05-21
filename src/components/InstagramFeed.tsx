import { useEffect, useState } from 'react'

interface IgPost {
  id: string
  media_type: 'IMAGE' | 'VIDEO' | 'CAROUSEL_ALBUM'
  media_url: string
  permalink: string
  thumbnail_url?: string
}

const FALLBACK = [
  { src: '/assets/work/studiophotos/glazed-pieces-arrangement-1.jpeg', alt: 'Glazed pieces arrangement' },
  { src: '/assets/work/cups/green-speckled-mug-1.jpeg', alt: 'Green speckled mug' },
  { src: '/assets/work/bowls/sun-design-bowl-lit-window.jpeg', alt: 'Sun design bowl by the window' },
  { src: '/assets/work/decorations/bud-vases-lineup.jpeg', alt: 'Lineup of bud vases' },
  { src: '/assets/work/studiophotos/many-glazed-pieces-overhead.jpeg', alt: 'Many glazed pieces from overhead' },
]

export default function InstagramFeed() {
  const [posts, setPosts] = useState<IgPost[]>([])
  const [status, setStatus] = useState<'loading' | 'ready' | 'error'>('loading')

  useEffect(() => {
    const token = import.meta.env.VITE_INSTAGRAM_TOKEN
    if (!token) {
      setStatus('error')
      return
    }

    fetch(
      `https://graph.instagram.com/me/media?fields=id,media_type,media_url,permalink,thumbnail_url&limit=5&access_token=${token}`
    )
      .then(r => {
        if (!r.ok) throw new Error('API error')
        return r.json()
      })
      .then(data => {
        setPosts(data.data ?? [])
        setStatus('ready')
      })
      .catch(() => setStatus('error'))
  }, [])

  return (
    <section className="section instagram-section" aria-label="Instagram feed">
      <div className="container">
        <h3>From the Studio</h3>
        <a
          className="ig-handle"
          href="https://www.instagram.com/pottery_lala/"
          target="_blank"
          rel="noreferrer"
        >
          @pottery_lala
        </a>

        <div className="ig-row">
          {status === 'loading' && (
            FALLBACK.map((_, i) => (
              <div key={i} className="ig-item ig-item--skeleton" />
            ))
          )}

          {status === 'ready' && posts.map(post => (
            <a
              key={post.id}
              className="ig-item"
              href={post.permalink}
              target="_blank"
              rel="noreferrer"
            >
              <img
                src={post.media_type === 'VIDEO' ? post.thumbnail_url : post.media_url}
                alt="Instagram post from @pottery_lala"
                loading="lazy"
              />
            </a>
          ))}

          {status === 'error' && (
            FALLBACK.map((item, i) => (
              <a
                key={i}
                className="ig-item"
                href="https://www.instagram.com/pottery_lala/"
                target="_blank"
                rel="noreferrer"
              >
                <img src={item.src} alt={item.alt} />
              </a>
            ))
          )}
        </div>
      </div>
    </section>
  )
}
