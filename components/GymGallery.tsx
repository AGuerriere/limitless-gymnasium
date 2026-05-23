"use client";

import Image from "next/image";
import { useState, useCallback, useEffect } from "react";

const TILES = ["t1", "t2", "t3", "t4", "t5"] as const;

const ALL_PHOTOS = [
  { src: "/gym/main.webp",        alt: "Main training floor", cap: "01 · Main floor"    },
  { src: "/gym/main-2.webp",      alt: "Training area",       cap: "02 · Training area" },
  { src: "/gym/back.webp",        alt: "Back station",        cap: "03 · Back"           },
  { src: "/gym/dumbells.webp",    alt: "Dumbbells",           cap: "04 · Dumbbells"      },
  { src: "/gym/legs.webp",        alt: "Legs area",           cap: "05 · Legs"           },
  { src: "/gym/abs-machine.webp", alt: "Abs machine",         cap: "06 · Abs machine"    },
  { src: "/gym/back-2.webp",      alt: "Back equipment",      cap: "07 · Back"           },
  { src: "/gym/hack-squat.webp",  alt: "Hack squat",          cap: "08 · Hack squat"     },
  { src: "/gym/t-bar.webp",       alt: "T-bar row",           cap: "09 · T-bar"          },
  { src: "/gym/triceps.webp",     alt: "Triceps station",     cap: "10 · Triceps"        },
];

const PAGE_SIZE = 5;
const TOTAL_PAGES = Math.ceil(ALL_PHOTOS.length / PAGE_SIZE);

export default function GymGallery() {
  const [page, setPage] = useState(0);
  const [lightbox, setLightbox] = useState<number | null>(null);

  const open = (idx: number) => setLightbox(idx);
  const close = () => setLightbox(null);

  const goPrev = useCallback(
    () => setLightbox(i => (i !== null ? (i - 1 + ALL_PHOTOS.length) % ALL_PHOTOS.length : null)),
    []
  );
  const goNext = useCallback(
    () => setLightbox(i => (i !== null ? (i + 1) % ALL_PHOTOS.length : null)),
    []
  );

  useEffect(() => {
    if (lightbox === null) return;
    const handler = (e: KeyboardEvent) => {
      if (e.key === "Escape") close();
      if (e.key === "ArrowLeft") goPrev();
      if (e.key === "ArrowRight") goNext();
    };
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, [lightbox, goPrev, goNext]);

  useEffect(() => {
    document.body.style.overflow = lightbox !== null ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [lightbox]);

  const photos = ALL_PHOTOS.slice(page * PAGE_SIZE, (page + 1) * PAGE_SIZE);

  return (
    <>
      <div className="gym-grid">
        {photos.map((p, i) => (
          <div
            key={p.src}
            className={`tile ${TILES[i]}`}
            onClick={() => open(page * PAGE_SIZE + i)}
            style={{ cursor: "pointer" }}
          >
            <Image src={p.src} alt={p.alt} fill style={{ objectFit: "cover" }} />
            <span className="cap">{p.cap}</span>
          </div>
        ))}
      </div>

      <div className="gym-grid-nav">
        <button
          className="grid-nav-btn"
          onClick={() => setPage(p => Math.max(0, p - 1))}
          disabled={page === 0}
          aria-label="Previous photos"
        >←</button>
        <span className="grid-nav-count">{page + 1} / {TOTAL_PAGES}</span>
        <button
          className="grid-nav-btn"
          onClick={() => setPage(p => Math.min(TOTAL_PAGES - 1, p + 1))}
          disabled={page === TOTAL_PAGES - 1}
          aria-label="Next photos"
        >→</button>
      </div>

      {lightbox !== null && (
        <div className="lightbox" onClick={close}>
          <button className="lightbox-close" onClick={close} aria-label="Close">✕</button>
          <button
            className="lightbox-nav lightbox-prev"
            onClick={e => { e.stopPropagation(); goPrev(); }}
            aria-label="Previous"
          >←</button>
          <div className="lightbox-img" onClick={e => e.stopPropagation()}>
            <Image
              key={ALL_PHOTOS[lightbox].src}
              src={ALL_PHOTOS[lightbox].src}
              alt={ALL_PHOTOS[lightbox].alt}
              fill
              style={{ objectFit: "contain" }}
            />
          </div>
          <button
            className="lightbox-nav lightbox-next"
            onClick={e => { e.stopPropagation(); goNext(); }}
            aria-label="Next"
          >→</button>
        </div>
      )}
    </>
  );
}
