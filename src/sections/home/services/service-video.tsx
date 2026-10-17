'use client';

import { useEffect, useRef, useState } from 'react';
import './service-video.css';

export function ServiceVideo({
  id,
  title,
  poster,
}: {
  id: string;
  title: string;
  poster: string;
}) {
  const video = useRef<HTMLVideoElement>(null);
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    const media = video.current;
    if (!media) return;
    const motion = window.matchMedia('(prefers-reduced-motion: reduce)');
    let visible = false;
    const updatePlayback = () => {
      if (
        visible &&
        media.getAttribute('src') &&
        !document.hidden &&
        !motion.matches
      ) {
        void media.play().catch(() => {});
      } else {
        media.pause();
      }
    };
    const observer = new IntersectionObserver(
      ([entry]) => {
        visible = entry.isIntersecting && entry.intersectionRatio >= 0.25;
        if (entry.isIntersecting) setLoaded(true);
        updatePlayback();
      },
      { threshold: [0, 0.25] },
    );
    observer.observe(media);
    media.addEventListener('loadeddata', updatePlayback);
    document.addEventListener('visibilitychange', updatePlayback);
    motion.addEventListener('change', updatePlayback);
    return () => {
      observer.disconnect();
      media.pause();
      media.removeEventListener('loadeddata', updatePlayback);
      document.removeEventListener('visibilitychange', updatePlayback);
      motion.removeEventListener('change', updatePlayback);
    };
  }, []);

  return (
    <video
      ref={video}
      className="service-autoplay-video"
      src={loaded ? `/videos/services/${id}.mp4` : undefined}
      poster={poster}
      aria-label={title}
      autoPlay
      tabIndex={-1}
      disablePictureInPicture
      disableRemotePlayback
      muted
      loop
      playsInline
      preload={loaded ? 'auto' : 'none'}
    />
  );
}
