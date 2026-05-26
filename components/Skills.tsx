"use client";
const coreSkills = ["PRD Creation", "Metabase / SQL", "Figma", "Postman / API Testing"];
const skills = [
  "Product Research", "UX Research", "Business Analysis",
  "Test Case Creation", "Scrum Master", "Product Owner",
  "Agile / Kanban", "Roadmapping", "Stakeholder Management",
  "Technical Documentation", "Data Analysis", "Market Research",
];

export default function Skills() {
  return (
    <section id="skills" style={{ padding: "5rem 2rem", borderBottom: "1px solid var(--border)", maxWidth: 1100, margin: "0 auto" }}>
      <div style={{ marginBottom: "2.5rem" }}>
        <p style={{ fontFamily: "'DM Mono', monospace", fontSize: 11, letterSpacing: "0.15em", color: "var(--muted)", textTransform: "uppercase", marginBottom: 8 }}>02 — Skills & Tools</p>
        <h2 style={{ fontFamily: "'Playfair Display', serif", fontSize: "clamp(1.8rem, 3vw, 2.5rem)", fontWeight: 400 }}>What I bring to the table</h2>
      </div>

      <div style={{ marginBottom: "1.5rem" }}>
        <p style={{ fontSize: 11, fontFamily: "'DM Mono', monospace", color: "var(--muted)", letterSpacing: "0.1em", marginBottom: "0.75rem", textTransform: "uppercase" }}>Core tools</p>
        <div style={{ display: "flex", flexWrap: "wrap", gap: 8 }}>
          {coreSkills.map(s => (
            <span key={s} style={{
              fontSize: 13, fontWeight: 500, padding: "7px 16px",
              border: "1px solid var(--accent)", borderRadius: 4,
              color: "var(--accent)", background: "var(--accent-light)",
            }}>{s}</span>
          ))}
        </div>
      </div>

      <div>
        <p style={{ fontSize: 11, fontFamily: "'DM Mono', monospace", color: "var(--muted)", letterSpacing: "0.1em", marginBottom: "0.75rem", textTransform: "uppercase" }}>Competencies</p>
        <div style={{ display: "flex", flexWrap: "wrap", gap: 8 }}>
          {skills.map(s => (
            <span key={s} style={{
              fontSize: 13, padding: "7px 16px",
              border: "1px solid var(--border)", borderRadius: 4,
              color: "var(--muted)", background: "var(--card)",
              transition: "border-color 0.2s, color 0.2s",
              cursor: "default",
            }}
              onMouseEnter={e => {
                (e.currentTarget as HTMLElement).style.borderColor = "var(--accent)";
                (e.currentTarget as HTMLElement).style.color = "var(--accent)";
              }}
              onMouseLeave={e => {
                (e.currentTarget as HTMLElement).style.borderColor = "var(--border)";
                (e.currentTarget as HTMLElement).style.color = "var(--muted)";
              }}
            >{s}</span>
          ))}
        </div>
      </div>

      <div style={{ marginTop: "3rem", display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 12 }}>
        {[
          { label: "Languages", items: ["Indonesian — Native", "English — Professional"] },
          { label: "Methodologies", items: ["Agile / Scrum", "Kanban", "Design Thinking"] },
          { label: "Platforms", items: ["Mobile (iOS & Android)", "Web", "IoT", "DApps / Web3"] },
        ].map(group => (
          <div key={group.label} style={{
            background: "var(--card)", border: "1px solid var(--border)",
            borderRadius: 8, padding: "1.25rem",
          }}>
            <p style={{ fontSize: 11, fontFamily: "'DM Mono', monospace", color: "var(--muted)", letterSpacing: "0.1em", textTransform: "uppercase", marginBottom: 10 }}>{group.label}</p>
            {group.items.map(item => (
              <p key={item} style={{ fontSize: 13, color: "var(--text)", marginBottom: 4 }}>{item}</p>
            ))}
          </div>
        ))}
      </div>

      <style>{`
        @media (max-width: 640px) {
          div[style*="repeat(3, 1fr)"] { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  );
}
