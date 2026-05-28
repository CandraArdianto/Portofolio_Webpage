"use client";
import { useState } from "react";

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [errors, setErrors] = useState<{name?: string, email?: string, message?: string}>({});  // ← add this line

  
const handleSubmit = async () => {
  const newErrors: {name?: string, email?: string, message?: string} = {};
  if (!form.name) newErrors.name = "Name is required";
  if (!form.email) newErrors.email = "Email is required";
  if (!form.message) newErrors.message = "Message is required";

  if (Object.keys(newErrors).length > 0) {
    setErrors(newErrors);
    return;
  }

  setErrors({});
  setStatus("loading");
  try {
    const res = await fetch("/api/contact", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(form),
    });
    if (res.ok) {
      setStatus("success");
      setForm({ name: "", email: "", message: "" });
    } else {
      setStatus("error");
    }
  } catch {
    setStatus("error");
  }
};

  const inputStyle = {
    width: "100%", padding: "10px 14px", fontSize: 14,
    border: "1px solid var(--border)", borderRadius: 4,
    background: "var(--bg)", color: "var(--text)",
    outline: "none", fontFamily: "'DM Sans', sans-serif",
    transition: "border-color 0.2s",
  };

  return (
    <section id="contact" style={{ padding: "5rem 2rem 4rem", maxWidth: 1100, margin: "0 auto" }}>
      <div className="contact-grid-container" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "4rem", alignItems: "start" }}>
        
        {/* Left — contact info */}
        <div>
          <p style={{ fontFamily: "'DM Mono', monospace", fontSize: 11, letterSpacing: "0.15em", color: "var(--muted)", textTransform: "uppercase", marginBottom: 8 }}>04 — Contact</p>
          <h2 style={{ fontFamily: "'Playfair Display', serif", fontSize: "clamp(1.8rem, 3vw, 2.5rem)", fontWeight: 400, marginBottom: "1rem" }}>
            Let's build something<br />
            <em style={{ fontStyle: "italic", color: "var(--accent)" }}>together.</em>
          </h2>
          <p style={{ fontSize: 15, color: "var(--muted)", lineHeight: 1.8, maxWidth: 400, marginBottom: "2rem" }}>
            Open to full-time PM roles, consulting engagements, and interesting projects.
          </p>

          <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
            {[
              { label: "Email", val: "ardiantocandra93@gmail.com", href: "mailto:ardiantocandra93@gmail.com" },
              { label: "WhatsApp", val: "+62 812 227 222 652", href: "https://wa.me/6281227222652" },
              { label: "LinkedIn", val: "@candra-ardianto-pd", href: "https://linkedin.com/in/candra-ardianto-pd" },
              { label: "Portfolio", val: "View case studies", href: "/candra-ardianto-portfolio.pdf"},
            ].map((item) => (
              <a key={item.label} href={item.href} target="_blank" rel="noopener noreferrer" style={{
                display: "flex", alignItems: "center", justifyContent: "space-between",
                background: "var(--card)", border: "1px solid var(--border)",
                borderRadius: 8, padding: "0.875rem 1.25rem",
                textDecoration: "none", color: "var(--text)",
                transition: "border-color 0.2s",
              }}
                onMouseEnter={e => (e.currentTarget.style.borderColor = "var(--accent)")}
                onMouseLeave={e => (e.currentTarget.style.borderColor = "var(--border)")}
              >
                <div>
                  <p style={{ fontSize: 11, fontFamily: "'DM Mono', monospace", color: "var(--muted)", marginBottom: 2 }}>{item.label}</p>
                  <p style={{ fontSize: 13, fontWeight: 500 }}>{item.val}</p>
                </div>
                <span style={{ color: "var(--accent)" }}>↗</span>
              </a>
            ))}
          </div>
        </div>

        {/* Right — contact form */}
        <div style={{ background: "var(--card)", border: "1px solid var(--border)", borderRadius: 8, padding: "2rem" }}>
          <p style={{ fontSize: 15, fontWeight: 500, marginBottom: "1.5rem" }}>Send a message</p>

          <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
            <div>
              <label style={{ fontSize: 11, fontFamily: "'DM Mono', monospace", color: "var(--muted)", letterSpacing: "0.1em", textTransform: "uppercase", display: "block", marginBottom: 6 }}>Name</label>
              <input
                type="text"
                placeholder="Your name"
                value={form.name}
                onChange={e => setForm({ ...form, name: e.target.value })}
                style={inputStyle}
                onFocus={e => (e.currentTarget.style.borderColor = "var(--accent)")}
                onBlur={e => (e.currentTarget.style.borderColor = "var(--border)")}
              />
              {errors.name && <p style={{ fontSize: 11, color: "#c0392b", marginTop: 4 }}>{errors.name}</p>}
            </div>
            <div>
              <label style={{ fontSize: 11, fontFamily: "'DM Mono', monospace", color: "var(--muted)", letterSpacing: "0.1em", textTransform: "uppercase", display: "block", marginBottom: 6 }}>Email</label>
              <input
                type="email"
                placeholder="your@email.com"
                value={form.email}
                onChange={e => setForm({ ...form, email: e.target.value })}
                style={inputStyle}
                onFocus={e => (e.currentTarget.style.borderColor = "var(--accent)")}
                onBlur={e => (e.currentTarget.style.borderColor = "var(--border)")}
              />
              {errors.email && <p style={{ fontSize: 11, color: "#c0392b", marginTop: 4 }}>{errors.email}</p>}
            </div>
            <div>
              <label style={{ fontSize: 11, fontFamily: "'DM Mono', monospace", color: "var(--muted)", letterSpacing: "0.1em", textTransform: "uppercase", display: "block", marginBottom: 6 }}>Message</label>
              <textarea
                placeholder="What would you like to discuss?"
                value={form.message}
                onChange={e => setForm({ ...form, message: e.target.value })}
                rows={5}
                style={{ ...inputStyle, resize: "vertical" }}
                onFocus={e => (e.currentTarget.style.borderColor = "var(--accent)")}
                onBlur={e => (e.currentTarget.style.borderColor = "var(--border)")}
              />
              {errors.message && <p style={{ fontSize: 11, color: "#c0392b", marginTop: 4 }}>{errors.message}</p>}
            </div>

            <button
              onClick={handleSubmit}
              disabled={status === "loading"}
              style={{
                fontSize: 13, fontWeight: 500,
                background: status === "loading" ? "var(--muted)" : "var(--accent)",
                color: "#fff", border: "none", padding: "11px 24px",
                borderRadius: 4, cursor: status === "loading" ? "not-allowed" : "pointer",
                transition: "opacity 0.2s", textAlign: "center",
              }}
            >
              {status === "loading" ? "Sending..." : "Send message →"}
            </button>

            {status === "success" && (
              <p style={{ fontSize: 13, color: "var(--accent)", fontWeight: 500 }}>
                ✓ Message sent — I'll get back to you soon!
              </p>
            )}
            {status === "error" && (
              <p style={{ fontSize: 13, color: "#c0392b" }}>
                Something went wrong. Please email me directly.
              </p>
            )}
          </div>
        </div>
      </div>

      {/* Footer */}
      <div style={{ marginTop: "3rem", paddingTop: "2rem", borderTop: "1px solid var(--border)", display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap", gap: 12 }}>
        <span style={{ fontFamily: "'Playfair Display', serif", fontSize: 16 }}>Candra Ardianto</span>
        <span style={{ fontSize: 12, color: "var(--muted)", fontFamily: "'DM Mono', monospace" }}>
          Yogyakarta, Indonesia · {new Date().getFullYear()}
        </span>
      </div>

    </section>
  );
}