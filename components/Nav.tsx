"use client";

import { useEffect, useState, useRef } from "react";

const ASHBOURNE_URL =
  "https://secure.ashbournemanagement.co.uk/signupUK/index.aspx?fn=GRDT2";

const NAV_LINKS = [
  { href: "#about", label: "About" },
  { href: "#gym", label: "The Gym" },
  { href: "#team", label: "Team" },
  { href: "#visit", label: "Opening Hours" },
  { href: "#classes", label: "Classes" },
];

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [activeIdx, setActiveIdx] = useState(-1);
  const [menuOpen, setMenuOpen] = useState(false);
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

  useEffect(() => {
    if (!menuOpen) return;
    const onKey = (e: KeyboardEvent) => { if (e.key === "Escape") setMenuOpen(false); };
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, [menuOpen]);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [menuOpen]);

  return (
    <>
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

        <a className="cta" href={ASHBOURNE_URL} target="_blank" rel="noopener noreferrer">
          <span>Memberships &amp; Day Passes</span>
          <span className="arr">→</span>
        </a>

        <button
          className={`hamburger${menuOpen ? " open" : ""}`}
          aria-label={menuOpen ? "Close menu" : "Open menu"}
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen((v) => !v)}
        >
          <span />
          <span />
          <span />
        </button>
      </nav>

      <div
        className={`mobile-menu${menuOpen ? " open" : ""}`}
        aria-hidden={!menuOpen}
        onClick={(e) => { if (e.target === e.currentTarget) setMenuOpen(false); }}
      >
        <div className="mobile-menu-inner">
          <nav className="mobile-links">
            {NAV_LINKS.map((link, i) => (
              <a
                key={link.href}
                href={link.href}
                className={activeIdx === i ? "active" : ""}
                onClick={() => setMenuOpen(false)}
              >
                {link.label}
              </a>
            ))}
          </nav>
          <a
            className="btn-big mobile-cta"
            href={ASHBOURNE_URL}
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => setMenuOpen(false)}
          >
            <span>Memberships &amp; Day Passes</span>
            <span className="arr">→</span>
          </a>
        </div>
      </div>
    </>
  );
}
