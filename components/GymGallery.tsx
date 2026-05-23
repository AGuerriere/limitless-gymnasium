"use client";

import Image from "next/image";
import { useState, useCallback, useEffect, useRef } from "react";

const TILES = ["t1", "t2", "t3", "t4", "t5"] as const;

const ALL_PHOTOS = [
  // Page 1
  { src: "/gym/push.webp",                  alt: "Push section",           cap: "01 · Push"          },
  { src: "/gym/push-2.webp",                alt: "Push section",           cap: "02 · Push"          },
  { src: "/gym/pull.webp",                  alt: "Pull section",           cap: "03 · Pull"          },
  { src: "/gym/dumbells.webp",              alt: "Dumbbells",              cap: "04 · Dumbbells"     },
  { src: "/gym/legs.webp",                  alt: "Legs area",              cap: "05 · Legs"          },
  // Page 2
  { src: "/gym/push-3.webp",                alt: "Push section",           cap: "06 · Push"          },
  { src: "/gym/abs-machine.webp",           alt: "Abs machine",            cap: "07 · Abs machine"   },
  { src: "/gym/pull-2.webp",                alt: "Pull section",           cap: "08 · Pull"          },
  { src: "/gym/hack-squat.webp",            alt: "Hack squat",             cap: "09 · Hack squat"    },
  { src: "/gym/t-bar.webp",                 alt: "T-bar row",              cap: "10 · T-bar"         },
  // Page 3
  { src: "/gym/triceps.webp",               alt: "Triceps station",        cap: "11 · Triceps"       },
  { src: "/gym/cardio.webp",                alt: "Cardio area",            cap: "12 · Cardio"        },
  { src: "/gym/classes.webp",               alt: "Classes",                cap: "13 · Classes"       },
  { src: "/gym/lateral-raise-machine.webp", alt: "Lateral raise machine",  cap: "14 · Lateral raise" },
  { src: "/gym/stairs.webp",                alt: "Stairs",                 cap: "15 · Stairs"        },
];

const PAGE_SIZE = 5;
const TOTAL_PAGES = Math.ceil(ALL_PHOTOS.length / PAGE_SIZE);

export default function GymGallery() {
  const [page, setPage] = useState(0);
  const [lightbox, setLightbox] = useState<number | null>(null);
  const touchStartX = useRef<number | null>(null);

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

  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.touches[0].clientX;
  };

  const handleTouchEnd = (e: React.TouchEvent) => {
    if (touchStartX.current === null) return;
    const delta = e.changedTouches[0].clientX - touchStartX.current;
    if (Math.abs(delta) > 50) {
      delta < 0 ? goNext() : goPrev();
    }
    touchStartX.current = null;
  };

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
          suppressHydrationWarning
          aria-label="Previous photos"
        >←</button>
        <span className="grid-nav-count" suppressHydrationWarning>{page + 1} / {TOTAL_PAGES}</span>
        <button
          className="grid-nav-btn"
          onClick={() => setPage(p => Math.min(TOTAL_PAGES - 1, p + 1))}
          disabled={page === TOTAL_PAGES - 1}
          suppressHydrationWarning
          aria-label="Next photos"
        >→</button>
      </div>

      {lightbox !== null && (
        <div
          className="lightbox"
          onClick={close}
          onTouchStart={handleTouchStart}
          onTouchEnd={handleTouchEnd}
        >
          <button className="lightbox-close" onClick={close} aria-label="Close">✕</button>
          <button
            className="lightbox-nav lightbox-prev"
            onClick={e => { e.stopPropagation(); goPrev(); }}
            aria-label="Previous"
          >←</button>
          <div className="lightbox-img">
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
