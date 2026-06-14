"use client";
import { useEffect, useRef } from "react";
import Image from "next/image";

const stats = [
  { val: "5", label: "Years of product experience" },
  { val: "4", label: "Industries shipped" },
  { val: "30%", label: "CRM cost reduction at Erudifi" },
  { val: "2×", label: "Agile certified (PO + SM)" },
];

export default function Hero() {
  const headRef = useRef<HTMLHeadingElement>(null);

  useEffect(() => {
    const el = headRef.current;
    if (!el) return;
    el.style.opacity = "0";
    el.style.transform = "translateY(24px)";
    setTimeout(() => {
      el.style.transition = "opacity 0.7s ease, transform 0.7s ease";
      el.style.opacity = "1";
      el.style.transform = "translateY(0)";
    }, 100);
  }, []);

  return (
    <section id="work" style={{
      minHeight: "100vh",
      padding: "6rem 2rem 4rem",
      display: "grid",
      gridTemplateColumns: "320px 1fr 260px",
      gap: "2rem",
      alignItems: "center",
      borderBottom: "1px solid var(--border)",
      maxWidth: 1200,
      margin: "0 auto",
      position: "relative",
      zIndex: 1,
    }} className="hero-section">
      
      {/* Profile photo — desktop: tall card, mobile: circle avatar */}
      <div className="hero-photo-desktop" style={{
        position: "relative",
        width: "100%",
        height: 480,
        borderRadius: "0 52px 52px 0",
        overflow: "hidden",
        background: "var(--card)",
        boxShadow: "0 4px 24px rgba(0,0,0,0.06)",
      }}>
        <Image
          src="/profile.webp"
          alt="Candra Ardianto"
          width={340}
          height={520}
          style={{ objectFit: "cover", objectPosition: "center top", width: "100%", height: "100%"}}
          priority={true}
        />
      </div>

      {/* Content */}
      <div>
        {/* Mobile avatar */}
         <div className="hero-avatar-mobile" style={{ display: "none", marginBottom: "1.25rem" }}>
          <div style={{
            width: 80, height: 80, borderRadius: "50%", overflow: "hidden",
            border: "3px solid var(--accent)", flexShrink: 0,
          }}>
            <Image
              src="/profile.webp"
              alt="Candra Ardianto"
              width={80} height={80}
              style={{ objectFit: "cover", objectPosition: "center top", width: "100%", height: "100%" }}
            />
        </div>
      </div> 

       
        <h1 ref={headRef} style={{
          fontFamily: "'Playfair Display', serif",
          fontSize: "clamp(2.2rem, 5vw, 4rem)",
          fontWeight: 500, lineHeight: 1.08,
          letterSpacing: "-0.02em", marginBottom: "1rem",
        }}>
          Product Manager<br />
          <em style={{ fontStyle: "italic", color: "var(--accent)" }}>&amp; Digital Strategist</em>
        </h1>

        <p style={{ fontSize: 14, color: "var(--muted)", marginBottom: "1.5rem", letterSpacing: "0.02em", fontFamily: "'DM Mono', monospace" }}>
          5 years · Gaming · Fintech · IoT · Web3 · MBA @ UGM
        </p>

        <p style={{ fontSize: 15, lineHeight: 1.8, color: "var(--muted)", maxWidth: 500, marginBottom: "2rem" }}>
          I build digital products from zero to launch — bridging user research,
          technical documentation, and business strategy across multiple platforms and industries.
        </p>

        <div style={{ display: "flex", gap: 12, flexWrap: "wrap" }}>
          <a href="/candra-ardianto-portfolio.pdf" style={{
            fontSize: 13, fontWeight: 500, background: "var(--accent)", color: "#fff",
            padding: "11px 24px", borderRadius: 4, textDecoration: "none",
          }}>
            View portfolio →
          </a>
          <a href="https://linkedin.com/in/candra-ardianto-pd" target="_blank" rel="noopener noreferrer" style={{
            fontSize: 13, fontWeight: 400, background: "transparent", color: "var(--text)",
            border: "1px solid var(--border)", padding: "11px 24px", borderRadius: 4, textDecoration: "none",
          }}>
            LinkedIn
          </a>
          <a href="/candra-ardianto-cv.pdf" style={{
            fontSize: 13, fontWeight: 400, background: "transparent", color: "var(--text)",
            border: "1px solid var(--border)", padding: "11px 24px", borderRadius: 4, textDecoration: "none",
          }}>
            Download CV
          </a>
        </div>
          <a href="https://cofibean.vercel.app/chat" target="_blank" rel="noopener noreferrer" style={{
          fontSize: 13, fontWeight: 500, background: "transparent", color: "var(--accent)",
          border: "1px solid var(--accent)", padding: "11px 24px", borderRadius: 4, textDecoration: "none",
          display: "flex", alignItems: "center", gap: 6,
        }}>
          <img src="/Cofibean_AI-32x32.png" width={16} height={16} alt="" />
          ☕ Cofibean AI →
        </a>
      </div>

      {/* Stats */}
      <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
        {stats.map((s, i) => (
          <div key={i} style={{
            background: "var(--card)", border: "1px solid var(--border)",
            borderRadius: 8, padding: "1.1rem 1.25rem",
            display: "flex", alignItems: "baseline", justifyContent: "space-between", gap: 12,
            transition: "border-color 0.2s, box-shadow 0.2s",
          }}
            onMouseEnter={e => {
              (e.currentTarget as HTMLElement).style.borderColor = "var(--accent)";
              (e.currentTarget as HTMLElement).style.boxShadow = "0 2px 12px rgba(45,90,61,0.08)";
            }}
            onMouseLeave={e => {
              (e.currentTarget as HTMLElement).style.borderColor = "var(--border)";
              (e.currentTarget as HTMLElement).style.boxShadow = "none";
            }}
          >
            <span style={{ fontFamily: "'Playfair Display', serif", fontSize: 28, fontWeight: 500, color: "var(--accent)" }}>
              {s.val}
            </span>
            <span style={{ fontSize: 12, color: "var(--muted)", textAlign: "right", lineHeight: 1.4, maxWidth: 160 }}>
              {s.label}
            </span>
          </div>
        ))}
      </div>
      
      <style>{`
        @media (max-width: 1024px) {
          .hero-section {
            grid-template-columns: 1fr 280px !important;
          }
          .hero-photo-desktop { display: none !important; }
          .hero-avatar-mobile { display: flex !important; }
        }
        @media (max-width: 768px) {
          .hero-section {
            grid-template-columns: 1fr !important;
            padding: 5rem 1.25rem 3rem !important;
            min-height: auto !important;
            gap: 1.5rem !important;
          }
          .hero-photo-desktop { display: none !important; }
          .hero-avatar-mobile { display: flex !important; }
          .hero-stats {
            display: grid !important;
            grid-template-columns: 1fr 1fr !important;
            gap: 8px !important;
          }
        }
        @media (max-width: 480px) {
          .hero-stats {
            grid-template-columns: 1fr 1fr !important;
          }
        }
      `}</style>
    </section>
  );
}
