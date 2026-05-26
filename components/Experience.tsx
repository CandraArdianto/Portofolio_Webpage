"use client";
import { useState } from "react";

const jobs = [
  {
    company: "GAMESKII",
    role: "Product Manager",
    period: "Aug 2023 – Jul 2025",
    location: "Yogyakarta",
    industry: "Gaming",
    color: "#1a3a5c",
    bullets: [
      "Built product architecture from zero to launch across mobile and web platforms",
      "Generated full developer documentation enabling seamless cross-platform development",
      "Collaborated with business team to acquire first 100 users and define revenue streams",
      "Built SQL-powered Metabase dashboards to surface business insights from raw data",
    ],
  },
  {
    company: "JALA TECH",
    role: "Product Manager, IoT",
    period: "Jan 2023 – May 2023",
    location: "Yogyakarta",
    industry: "IoT",
    color: "#1a4a3a",
    bullets: [
      "Led IoT team for the Baruno water quality tester production and regulatory certification",
      "Led R&D phase for shrimp auto-feeder hardware product from concept to prototype",
      "Conducted field research to gather requirements and compliance documentation",
      "Collaborated with lead engineer to secure product certifications for Baruno device",
    ],
  },
  {
    company: "GAMESTA",
    role: "Product Manager, Web3",
    period: "May 2022 – Sep 2022",
    location: "Bali",
    industry: "Web3",
    color: "#4a2a1a",
    bullets: [
      "Led dev team to build DApps Launchpad for NFT marketplace and crypto web game",
      "Collaborated with CTO on platform architecture design and system planning",
      "Iterated UI/UX with design team across multiple release cycles",
      "Defined platform cryptonomics with business and community teams",
    ],
  },
  {
    company: "ERUDIFI",
    role: "Product Manager",
    period: "Apr 2021 – May 2022",
    location: "Jakarta",
    industry: "Fintech",
    color: "#3d1a5c",
    bullets: [
      "Launched in-house mini CRM tool, cutting third-party CRM operating costs by 30%",
      "Enhanced account registration UX via partner dashboard integration",
      "Created and maintained PRDs for the product team as primary documentation owner",
      "Led developers as Scrum Master across Indonesia and Philippines teams",
    ],
  },
  {
    company: "Qatros Teknologi Nusantara",
    role: "Product Manager",
    period: "Sep 2019 – Apr 2021",
    location: "Yogayakarta",
    industry: "Software Solution",
    color: "#4b6539",
    bullets: [
      "Built product architecture from zero to launch across mobile and web platforms",
      "Processing client requirements as PRD, SRS, and the Project Timeline",
      "Lead development team to achieve each milestone",
      "Collaborate with QA to conduct user acceptance test",
    ],
  },
];

export default function Experience() {
  const [active, setActive] = useState(0);

  return (
    <section id="work" style={{ padding: "5rem 2rem", borderBottom: "1px solid var(--border)", maxWidth: 1100, margin: "0 auto" }}>
      <div style={{ marginBottom: "2.5rem" }}>
        <p style={{ fontFamily: "'DM Mono', monospace", fontSize: 11, letterSpacing: "0.15em", color: "var(--muted)", textTransform: "uppercase", marginBottom: 8 }}>01 — Experience</p>
        <h2 style={{ fontFamily: "'Playfair Display', serif", fontSize: "clamp(1.8rem, 3vw, 2.5rem)", fontWeight: 400 }}>Where I've shipped</h2>
      </div>

      <div style={{ display: "grid", gridTemplateColumns: "220px 1fr", gap: "2px", minHeight: 340 }}>
        {/* Tabs */}
        <div style={{ display: "flex", flexDirection: "column", gap: 2 }}>
          {jobs.map((j, i) => (
            <button key={i} onClick={() => setActive(i)} style={{
              background: active === i ? "var(--card)" : "transparent",
              border: active === i ? "1px solid var(--border)" : "1px solid transparent",
              borderLeft: active === i ? `3px solid ${j.color}` : "3px solid transparent",
              padding: "1rem 1.25rem",
              textAlign: "left", cursor: "pointer",
              borderRadius: "4px 0 0 4px",
              transition: "all 0.2s",
            }}>
              <div style={{ fontSize: 14, fontWeight: 500, color: active === i ? "var(--text)" : "var(--muted)", marginBottom: 3 }}>{j.company}</div>
              <div style={{ fontSize: 11, color: "var(--muted)", fontFamily: "'DM Mono', monospace" }}>{j.period}</div>
            </button>
          ))}
        </div>

        {/* Detail panel */}
        <div style={{
          background: "var(--card)", border: "1px solid var(--border)", borderRadius: "0 8px 8px 0",
          padding: "2rem", position: "relative", overflow: "hidden",
        }}>
          <div style={{
            position: "absolute", top: 0, left: 0, right: 0, height: 3,
            background: jobs[active].color,
          }} />
          <div style={{ display: "flex", alignItems: "flex-start", justifyContent: "space-between", gap: 12, marginBottom: "1.5rem" }}>
            <div>
              <h3 style={{ fontFamily: "'Playfair Display', serif", fontSize: 22, fontWeight: 500, marginBottom: 4 }}>{jobs[active].role}</h3>
              <p style={{ fontSize: 13, color: "var(--muted)" }}>{jobs[active].company} · {jobs[active].location}</p>
            </div>
            <span style={{
              fontSize: 11, fontWeight: 500, padding: "4px 12px", borderRadius: 20,
              background: jobs[active].color + "18",
              color: jobs[active].color,
              whiteSpace: "nowrap",
              border: `1px solid ${jobs[active].color}30`,
            }}>
              {jobs[active].industry}
            </span>
          </div>

          <ul style={{ listStyle: "none", display: "flex", flexDirection: "column", gap: 10 }}>
            {jobs[active].bullets.map((b, i) => (
              <li key={i} style={{ display: "flex", gap: 10, fontSize: 14, color: "var(--muted)", lineHeight: 1.7 }}>
                <span style={{ color: jobs[active].color, marginTop: 2, flexShrink: 0 }}>→</span>
                <span>{b}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <style>{`
        @media (max-width: 640px) {
          div[style*="grid-template-columns: 220px"] { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  );
}
