"use client";
export default function Contact() {
  return (
    <section id="contact" style={{ padding: "5rem 2rem 4rem", maxWidth: 1100, margin: "0 auto" }}>
      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "4rem", alignItems: "center" }}>
        <div>
          <p style={{ fontFamily: "'DM Mono', monospace", fontSize: 11, letterSpacing: "0.15em", color: "var(--muted)", textTransform: "uppercase", marginBottom: 8 }}>04 — Contact</p>
          <h2 style={{ fontFamily: "'Playfair Display', serif", fontSize: "clamp(1.8rem, 3vw, 2.5rem)", fontWeight: 400, marginBottom: "1rem" }}>
            Let's build something<br />
            <em style={{ fontStyle: "italic", color: "var(--accent)" }}>together.</em>
          </h2>
          <p style={{ fontSize: 15, color: "var(--muted)", lineHeight: 1.8, maxWidth: 400 }}>
            Open to full-time PM roles, consulting engagements, and interesting projects across
            product strategy, digital transformation, and growth.
          </p>
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
          {[
            { label: "Email", val: "ardiantocandra93@gmail.com", href: "mailto:ardiantocandra93@gmail.com" },
            { label: "WhatsApp", val: "+62 812 227 222 652", href: "https://wa.me/6281227222652" },
            { label: "LinkedIn", val: "@candraardianto", href: "https://linkedin.com/in/candraardianto" },
            { label: "Portfolio", val: "View case studies", href: "https://bit.ly/productportfolioardiantocandra" },
          ].map((item) => (
            <a key={item.label} href={item.href} target="_blank" rel="noopener noreferrer" style={{
              display: "flex", alignItems: "center", justifyContent: "space-between",
              background: "var(--card)", border: "1px solid var(--border)",
              borderRadius: 8, padding: "1rem 1.25rem",
              textDecoration: "none", color: "var(--text)",
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
              <div>
                <p style={{ fontSize: 11, fontFamily: "'DM Mono', monospace", color: "var(--muted)", letterSpacing: "0.08em", marginBottom: 3 }}>{item.label}</p>
                <p style={{ fontSize: 14, fontWeight: 500 }}>{item.val}</p>
              </div>
              <span style={{ color: "var(--accent)", fontSize: 18 }}>↗</span>
            </a>
          ))}
        </div>
      </div>

      <div style={{
        marginTop: "4rem", paddingTop: "2rem", borderTop: "1px solid var(--border)",
        display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap", gap: 12,
      }}>
        <span style={{ fontFamily: "'Playfair Display', serif", fontSize: 16 }}>Candra Ardianto</span>
        <span style={{ fontSize: 12, color: "var(--muted)", fontFamily: "'DM Mono', monospace" }}>
          Yogyakarta, Indonesia · {new Date().getFullYear()}
        </span>
      </div>

      <style>{`
        @media (max-width: 768px) {
          section#contact > div { grid-template-columns: 1fr !important; gap: 2rem !important; }
        }
      `}</style>
    </section>
  );
}
