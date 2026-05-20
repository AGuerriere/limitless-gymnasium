"use client";

import { useEffect, useState, useRef } from "react";

const ASHBOURNE_URL =
  "https://secure.ashbournemanagement.co.uk/signupUK/index.aspx?fn=GRDT2";

const ASCND_BOOKING_URL =
  "https://goteamup.com/p/12305984-ascnd/start/?utm_source=ig&utm_medium=social&utm_content=link_in_bio&utm_id=97760_v0_s00_e0_tv3";

const NAV_LINKS = [
  { href: "#about", label: "About" },
  { href: "#gym", label: "The Gym" },
  { href: "#team", label: "Team" },
  { href: "#visit", label: "Visit" },
  { href: "#classes", label: "Classes" },
];

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [activeIdx, setActiveIdx] = useState(-1);
  const sectionsRef = useRef<(HTMLElement | null)[]>([]);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 24);

      const y = window.scrollY + 120;
      let idx = -1;
      sectionsRef.current.forEach((s, i) => {
        if (s && s.offsetTop <= y) idx = i;
      });
      setActiveIdx(idx);
    };

    sectionsRef.current = NAV_LINKS.map((l) =>
      document.querySelector<HTMLElement>(l.href)
    );

    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav className={`nav${scrolled ? " scrolled" : ""}`} id="nav">
      <a href="#top" aria-label="Limitless Gymnasium home">
        <span className="wordmark">
          <span className="l1">LIMITLESS</span>
          <span className="l2">GYMNASIUM</span>
        </span>
      </a>
      <div className="links">
        {NAV_LINKS.map((link, i) => (
          <a
            key={link.href}
            href={link.href}
            className={activeIdx === i ? "active" : ""}
          >
            {link.label}
          </a>
        ))}
      </div>
      <div className="cta-group">
        <a className="cta cta-alt" href={ASCND_BOOKING_URL} target="_blank" rel="noopener noreferrer">
          <span>Book Classes</span>
          <span className="arr">→</span>
        </a>
        <a className="cta" href={ASHBOURNE_URL} target="_blank" rel="noopener noreferrer">
          <span>Memberships &amp; Day Passes</span>
          <span className="arr">→</span>
        </a>
      </div>
    </nav>
  );
}
