"use client";
import { useState, useEffect } from "react";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const links = ["Work", "Skills", "Education", "Contact"];

  return (
    <nav style={{
      position: "fixed", top: 0, left: 0, right: 0, zIndex: 100,
      background: scrolled ? "rgba(248,246,241,0.95)" : "transparent",
      backdropFilter: scrolled ? "blur(12px)" : "none",
      borderBottom: scrolled ? "1px solid var(--border)" : "1px solid transparent",
      transition: "all 0.3s ease",
      padding: "1rem 2rem",
      display: "flex", alignItems: "center", justifyContent: "space-between",
    }}>
      <span style={{ fontFamily: "'Playfair Display', serif", fontSize: 18, fontWeight: 500 }}>
        Candra Ardianto
      </span>
      <div style={{ display: "flex", gap: "2rem", alignItems: "center" }}>
        {links.map((l) => (
          <a key={l} href={"#" + l.toLowerCase()}
            style={{ fontSize: 13, color: "var(--muted)", textDecoration: "none", letterSpacing: "0.04em" }}>
            {l}
          </a>
        ))}
        <a href="mailto:ardiantocandra93@gmail.com"
          style={{ fontSize: 13, fontWeight: 500, background: "var(--accent)", color: "#fff", padding: "8px 20px", borderRadius: 4, textDecoration: "none" }}>
          Get in touch
        </a>
      </div>
    </nav>
  );
}
