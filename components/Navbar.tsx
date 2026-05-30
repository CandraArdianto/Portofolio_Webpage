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

  const links = [
    { label: "Work", href: "/#work" },
    { label: "Portfolio", href: "/candra-ardianto-portfolio.pdf" },
    { label: "Skills", href: "/#skills" },
    { label: "Education", href: "/#education" },
    { label: "Contact", href: "/#contact" },
  ];

  return (
    <>
      <nav style={{
        position: "fixed", top: 0, left: 0, right: 0, zIndex: 100,
        background: scrolled || menuOpen ? "rgba(248,246,241,0.97)" : "transparent",
        backdropFilter: scrolled || menuOpen ? "blur(12px)" : "none",
        borderBottom: scrolled || menuOpen ? "1px solid var(--border)" : "1px solid transparent",
        transition: "all 0.3s ease",
        padding: "1rem 2rem",
        display: "flex", alignItems: "center", justifyContent: "space-between",
      }}>
        <button onClick={() => window.location.href = "/"} style={{
          fontFamily: "'Playfair Display', serif", fontSize: 18, fontWeight: 500,
          background: "none", border: "none", cursor: "pointer", color: "var(--text)", padding: 0,
        }}>
          Candra Ardianto
        </button>

        {/* Desktop links */}
        <div className="nav-desktop" style={{ display: "flex", gap: "2rem", alignItems: "center" }}>
          {links.map((l) => (
            <a key={l.label} href={l.href} style={{ fontSize: 13, color: "var(--muted)", textDecoration: "none", letterSpacing: "0.04em" }}>
              {l.label}
            </a>
          ))}
          <a href="mailto:ardiantocandra93@gmail.com" style={{
            fontSize: 13, fontWeight: 500, background: "var(--accent)", color: "#fff",
            padding: "8px 20px", borderRadius: 4, textDecoration: "none",
          }}>
            Get in touch
          </a>
        </div>

        {/* Hamburger button */}
        <button
          className="nav-hamburger"
          onClick={() => setMenuOpen(!menuOpen)}
          style={{ background: "none", border: "none", cursor: "pointer", padding: 4, display: "none" }}
          aria-label="Toggle menu"
        >
          <div style={{ width: 22, height: 2, background: "var(--text)", marginBottom: 5, transition: "all 0.3s", transform: menuOpen ? "rotate(45deg) translate(5px, 5px)" : "none" }} />
          <div style={{ width: 22, height: 2, background: "var(--text)", marginBottom: 5, opacity: menuOpen ? 0 : 1, transition: "all 0.3s" }} />
          <div style={{ width: 22, height: 2, background: "var(--text)", transition: "all 0.3s", transform: menuOpen ? "rotate(-45deg) translate(5px, -5px)" : "none" }} />
        </button>
      </nav>

      {/* Mobile menu */}
      {menuOpen && (
        <div style={{
          position: "fixed", top: 57, left: 0, right: 0, zIndex: 99,
          background: "rgba(248,246,241,0.97)", backdropFilter: "blur(12px)",
          borderBottom: "1px solid var(--border)",
          padding: "1.5rem 2rem 2rem",
          display: "flex", flexDirection: "column", gap: "1.25rem",
        }}>
          {links.map((l) => (
            <a key={l.label} href={l.href} onClick={() => setMenuOpen(false)} style={{
              fontSize: 16, color: "var(--text)", textDecoration: "none",
              fontWeight: 500, borderBottom: "1px solid var(--border)", paddingBottom: "1rem",
            }}>
              {l.label}
            </a>
          ))}
          <a href="mailto:ardiantocandra93@gmail.com" onClick={() => setMenuOpen(false)} style={{
            fontSize: 14, fontWeight: 500, background: "var(--accent)", color: "#fff",
            padding: "12px 20px", borderRadius: 4, textDecoration: "none", textAlign: "center",
          }}>
            Get in touch
          </a>
        </div>
      )}

      <style>{`
        @media (max-width: 768px) {
          .nav-desktop { display: none !important; }
          .nav-hamburger { display: block !important; }
        }
      `}</style>
    </>
  );
}