"use client";
const edu = [
  {
    school: "Universitas Gadjah Mada",
    degree: "Master of Business Administration",
    period: "Aug 2025 – Present",
    note: "Currently enrolled at MM UGM",
  },
  {
    school: "Universitas Negeri Yogyakarta",
    degree: "Bachelor in English Literature",
    period: "Aug 2013 – Jan 2020",
    note: "GPA: 3.34",
  },
];

const certs = [
  { name: "Product Management", issuer: "Binar Academy", year: "2019" },
  { name: "Certified Product Owner", issuer: "Ekipa Agile Consultancy", year: "2021" },
  { name: "Certified Scrum Master", issuer: "Ekipa Agile Consultancy", year: "2021" },
];

export default function Education() {
  return (
    <section id="education" style={{ padding: "5rem 2rem", borderBottom: "1px solid var(--border)", maxWidth: 1100, margin: "0 auto" }}>
      <div style={{ marginBottom: "2.5rem" }}>
        <p style={{ fontFamily: "'DM Mono', monospace", fontSize: 11, letterSpacing: "0.15em", color: "var(--muted)", textTransform: "uppercase", marginBottom: 8 }}>03 — Education</p>
        <h2 style={{ fontFamily: "'Playfair Display', serif", fontSize: "clamp(1.8rem, 3vw, 2.5rem)", fontWeight: 400 }}>Academic background</h2>
      </div>

      <div className="edu-grid-container" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 12, marginBottom: "2.5rem" }}>
        {edu.map((e, i) => (
          <div key={i} style={{
            background: "var(--card)", border: "1px solid var(--border)",
            borderRadius: 8, padding: "1.5rem",
          }}>
            <p style={{ fontSize: 15, fontWeight: 500, marginBottom: 5 }}>{e.school}</p>
            <p style={{ fontSize: 13, color: "var(--muted)", marginBottom: 8, lineHeight: 1.5 }}>{e.degree}</p>
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
              <span style={{ fontSize: 11, fontFamily: "'DM Mono', monospace", color: "var(--muted)" }}>{e.period}</span>
              <span style={{ fontSize: 11, color: "var(--accent)", fontWeight: 500 }}>{e.note}</span>
            </div>
          </div>
        ))}
      </div>

      <p style={{ fontFamily: "'DM Mono', monospace", fontSize: 11, letterSpacing: "0.12em", color: "var(--muted)", textTransform: "uppercase", marginBottom: "1rem" }}>Certifications</p>
      <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
        {certs.map((c, i) => (
          <div key={i} style={{
            background: "var(--card)", border: "1px solid var(--border)",
            borderRadius: 6, padding: "1rem 1.25rem",
            display: "flex", alignItems: "center", justifyContent: "space-between", gap: 12,
          }}>
            <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
              <span style={{ width: 6, height: 6, borderRadius: "50%", background: "var(--accent)", flexShrink: 0 }} />
              <span style={{ fontSize: 14, fontWeight: 500 }}>{c.name}</span>
            </div>
            <div style={{ display: "flex", gap: 16, alignItems: "center" }}>
              <span style={{ fontSize: 12, color: "var(--muted)" }}>{c.issuer}</span>
              <span style={{ fontSize: 11, fontFamily: "'DM Mono', monospace", color: "var(--muted)" }}>{c.year}</span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
