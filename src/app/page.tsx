import "./home.css";
import { PricingCard } from "@/components/PricingCard";

export default function HomePage() {
  return (
    <>
      {/* SECTION 1: Hero */}
      <section className="hero section-dark">
        <div className="hero-gradient-orb" aria-hidden="true"></div>
        <div className="container hero-inner">
          <div className="hero-content">
            <span className="badge badge-green-solid">
              Now accepting 5 hotels into our Founding Cohort
            </span>
            <h1 className="hero-title">
              Your Reservations Team Goes Home at 6PM.
              <br />
              Your Guests Don&apos;t Stop Inquiring.
            </h1>
            <p className="hero-sub">
              Malaysian hotels lose direct bookings every night to unanswered WhatsApp messages, unfollowed emails, and after-hours silence. Nocturn AI captures every inquiry, responds instantly, follows up automatically, and shows you exactly what you&apos;re converting — 24/7.
            </p>
            <div className="hero-ctas">
              <a href="/apply" className="btn btn-primary btn-lg">
                Apply for Founding Cohort →
              </a>
              <div className="text-small text-gray-500" style={{ marginTop: 8 }}>
                30-day free pilot · No setup fee · Live in 48 hours
              </div>
            </div>
            <div className="hero-proof">
              <span>✓ Built for Malaysian hospitality</span>
              <span>·</span>
              <span>✓ WhatsApp + Email + Web</span>
              <span>·</span>
              <span>✓ No system replacement required</span>
            </div>
          </div>
          <div className="hero-visual">
            <div className="hero-mockup">
              <div className="mockup-browser">
                <div className="mockup-dots">
                  <span></span><span></span><span></span>
                </div>
                <div className="mockup-screen">
                  <div className="mockup-dashboard">
                    <div className="dash-header">
                      <span className="dash-logo">Nocturn AI</span>
                      <span className="dash-status">● Live</span>
                    </div>
                    <div className="dash-stats">
                      <div className="dash-stat"><span className="dash-num">42</span><span className="dash-label">Inquiries Today</span></div>
                      <div className="dash-stat"><span className="dash-num">28s</span><span className="dash-label">Avg Response</span></div>
                      <div className="dash-stat"><span className="dash-num">3</span><span className="dash-label">Channels Live</span></div>
                    </div>
                    <div className="dash-conversations">
                      <div className="dash-conv">
                        <div className="conv-avatar">A</div>
                        <div><div className="conv-name">Ahmad R.</div><div className="conv-msg">Hi, do you have rooms available for 14-16 Feb?</div></div>
                        <span className="conv-time">2m ago</span>
                      </div>
                      <div className="dash-conv">
                        <div className="conv-avatar">S</div>
                        <div><div className="conv-name">Sarah L.</div><div className="conv-msg">What are your corporate rates for 10 rooms?</div></div>
                        <span className="conv-time">5m ago</span>
                      </div>
                      <div className="dash-conv">
                        <div className="conv-avatar">K</div>
                        <div><div className="conv-name">Kumar P.</div><div className="conv-msg">Is breakfast included in the package?</div></div>
                        <span className="conv-time">8m ago</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="whatsapp-bubble animate-float">
                <div className="wa-header">
                  <span className="wa-icon">💬</span>
                  <span>WhatsApp</span>
                </div>
                <div className="wa-msg wa-guest">Hi, any rooms for tonight? 2 adults</div>
                <div className="wa-msg wa-ai">Hello! 😊 Yes, we have availability tonight. Our Deluxe Room is RM 280/night including breakfast. Shall I reserve it for you?</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 2: Pain Agitation */}
      <section className="section section-white" id="pain">
        <div className="container">
          <span className="eyebrow">THE PROBLEM</span>
          <h2 style={{ marginTop: 12 }}>The Inquiry Graveyard: Where Direct Bookings Go to Die</h2>
          <div className="stat-grid">
            <div className="stat-card">
              <div className="stat-number" data-target="90" data-suffix="%">0%</div>
              <div className="stat-label">of Malaysian hotel bookings come from manual channels</div>
              <div className="stat-sub">WhatsApp, phone calls, emails, walk-ins — not your website.</div>
              <div className="stat-source">Based on industry operator interviews, 2025</div>
            </div>
            <div className="stat-card">
              <div className="stat-number" data-target="30" data-suffix="+">0</div>
              <div className="stat-label">daily inquiry touchpoints per property</div>
              <div className="stat-sub">And your reservation desk has 3 people to handle them all.</div>
              <div className="stat-source">Malaysian hotel operator data, 2025</div>
            </div>
            <div className="stat-card">
              <div className="stat-number" data-target="0" data-suffix="%">0%</div>
              <div className="stat-label">of inquiries captured after 6PM</div>
              <div className="stat-sub">When your reservations team goes home, every inquiry is dropped.</div>
              <div className="stat-source">Independent hotel operator interviews, 2025</div>
            </div>
          </div>
          <div className="pain-body-container">
            <p className="pain-body">
              Here&apos;s what happens every single day at hotels across Malaysia:
            </p>
            <p className="pain-body">
              ❌ <strong>The WhatsApp message at 9:47 PM</strong> — a family asking about rooms for the weekend. Unanswered until morning. They booked on Agoda instead. You paid 18% commission on a guest who tried to book direct.
            </p>
            <p className="pain-body">
              ❌ <strong>The corporate email requesting rates for 10 rooms</strong> — buried under 40 other emails on a Wednesday. No follow-up sent. The RM 15,000 group booking goes silent.
            </p>
            <p className="pain-body">
              ❌ <strong>The phone call during peak check-in</strong> — &quot;Can you call back?&quot; They never do. You&apos;ll never know what you lost.
            </p>
            <p className="pain-body" style={{ fontWeight: 600, marginTop: 16 }}>
              This isn&apos;t a technology problem. It&apos;s revenue falling on the floor every day — and nobody is picking it up.
            </p>
          </div>
        </div>
      </section>

      {/* SECTION 2.5: Who This Is For */}
      <section className="section section-light" style={{ padding: "80px 0", borderBottom: "1px solid var(--color-gray-200)" }}>
        <div className="container">
          <div style={{ textAlign: "center", marginBottom: 40 }}>
            <span className="eyebrow">WHO THIS IS FOR</span>
            <h2 style={{ marginTop: 12 }}>Built for Hotels That Run on WhatsApp, Not Enterprise Software</h2>
            <p className="text-gray-600" style={{ maxWidth: 600, margin: "16px auto 0" }}>
              If your reservation team juggles WhatsApp, phone calls, emails, and walk-ins — and drops inquiries when the office closes — this is for you.
            </p>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: 24 }}>
            <div className="card" style={{ padding: 24, display: "flex", gap: 16 }}>
              <div style={{ fontSize: 32 }}>🛎️</div>
              <div>
                <strong style={{ display: "block", fontSize: 18, marginBottom: 4 }}>The Reservation Manager</strong>
                <p style={{ fontSize: 14, color: "var(--color-gray-600)" }}>
                  You handle 30+ daily touchpoints across WhatsApp, email, and phone. On busy days it hits 200-300. Your &quot;primary operational weakness&quot; is follow-up — and you know it.
                </p>
              </div>
            </div>
            <div className="card" style={{ padding: 24, display: "flex", gap: 16 }}>
              <div style={{ fontSize: 32 }}>📈</div>
              <div>
                <strong style={{ display: "block", fontSize: 18, marginBottom: 4 }}>The Revenue Manager</strong>
                <p style={{ fontSize: 14, color: "var(--color-gray-600)" }}>
                  You&apos;re watching 15-25% of every booking go to OTA commissions. You know guests are trying to book direct, but they&apos;re not getting responses fast enough.
                </p>
              </div>
            </div>
            <div className="card" style={{ padding: 24, display: "flex", gap: 16 }}>
              <div style={{ fontSize: 32 }}>👔</div>
              <div>
                <strong style={{ display: "block", fontSize: 18, marginBottom: 4 }}>The General Manager</strong>
                <p style={{ fontSize: 14, color: "var(--color-gray-600)" }}>
                  Your ownership wants higher RevPAR with a flat budget. You need proof that direct bookings are being captured — a morning report you can show the board.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 4: The Solution */}
      <section className="section section-light">
        <div className="container">
          <div className="solution-grid">
            <div className="solution-visual">
              <div className="solution-screenshot animate-float">
                <div className="mockup-browser" style={{ maxWidth: 480 }}>
                  <div className="mockup-dots"><span></span><span></span><span></span></div>
                  <div className="mockup-screen">
                    <div className="mockup-dashboard" style={{ padding: 16 }}>
                      <div style={{ fontWeight: 700, marginBottom: 12, color: "var(--color-navy)" }}>Live Conversations</div>
                      <div className="dash-conv" style={{ marginBottom: 8 }}>
                        <div className="conv-avatar" style={{ background: "#22C55E" }}>W</div>
                        <div><div className="conv-name">WhatsApp · Room inquiry</div><div className="conv-msg" style={{ color: "#22C55E" }}>✓ Auto-responded in 12s</div></div>
                      </div>
                      <div className="dash-conv" style={{ marginBottom: 8 }}>
                        <div className="conv-avatar" style={{ background: "#3B82F6" }}>E</div>
                        <div><div className="conv-name">Email · Group booking</div><div className="conv-msg" style={{ color: "#22C55E" }}>✓ Lead captured</div></div>
                      </div>
                      <div className="dash-conv">
                        <div className="conv-avatar" style={{ background: "#8B5CF6" }}>C</div>
                        <div><div className="conv-name">Web Chat · Rate inquiry</div><div className="conv-msg" style={{ color: "#F59E0B" }}>⟳ Handed off to staff</div></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="solution-content">
              <span className="eyebrow">THE SOLUTION</span>
              <h2 style={{ marginTop: 12 }}>
                One Inbox. Every Channel. Every Inquiry Captured — Even at 3AM.
              </h2>
              <p className="text-gray-600" style={{ marginBottom: 24 }}>
                Nocturn AI connects your WhatsApp Business, reservation email, and website into one unified inbox — then responds to guests instantly with AI, follows up automatically, and tracks every conversion.
              </p>
              <div className="feature-list" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "24px 16px" }}>
                <div className="feature-item">
                  <span className="feature-icon">⚡</span>
                  <div>
                    <strong>Respond in Seconds</strong>
                    <p>Replies to guest inquiries in under 30 seconds — even at 2am.</p>
                  </div>
                </div>
                <div className="feature-item">
                  <span className="feature-icon">📧</span>
                  <div>
                    <strong>Email Auto-Capture</strong>
                    <p>Parses incoming emails, responds intelligently, captures the lead.</p>
                  </div>
                </div>
                <div className="feature-item">
                  <span className="feature-icon">💻</span>
                  <div>
                    <strong>Web Chat Widget</strong>
                    <p>One line of code. Captures visitors before they bounce to OTA.</p>
                  </div>
                </div>
                <div className="feature-item">
                  <span className="feature-icon">🔄</span>
                  <div>
                    <strong>Automated Follow-Up</strong>
                    <p>Sends branded follow-ups at 24h, 72h, and 7 days. No lead left behind.</p>
                  </div>
                </div>
                <div className="feature-item">
                  <span className="feature-icon">📊</span>
                  <div>
                    <strong>Conversion Dashboard</strong>
                    <p>See exactly how many inquiries came in and how many converted.</p>
                  </div>
                </div>
                <div className="feature-item">
                  <span className="feature-icon">🤝</span>
                  <div>
                    <strong>Smart Human Handoff</strong>
                    <p>AI transfers complex requests to staff with full context instantly.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 5: The Midnight Test */}
      <section className="section section-white" style={{ borderBottom: "1px solid var(--color-gray-200)" }}>
        <div className="container">
          <div style={{ textAlign: "center", marginBottom: 40 }}>
            <span className="eyebrow">SEE IT IN ACTION</span>
            <h2 style={{ marginTop: 12 }}>The Midnight Test</h2>
            <p className="text-gray-600" style={{ maxWidth: 600, margin: "16px auto 0" }}>
              It&apos;s 11:47 PM. Your front desk closed 90 minutes ago. A family wants to book for the weekend. Here&apos;s what happens with Nocturn AI.
            </p>
          </div>
          <div style={{ maxWidth: 480, margin: "0 auto", background: "var(--color-gray-50)", borderRadius: 24, padding: 24, boxShadow: "var(--shadow-card)" }}>
            <div style={{ background: "#075E54", padding: "16px 20px", borderRadius: "16px 16px 0 0", color: "white", fontWeight: 600, display: "flex", alignItems: "center", gap: 12 }}>
              <div style={{ width: 32, height: 32, background: "rgba(255,255,255,0.2)", borderRadius: "50%", display: "flex", alignItems: "center", justifyContent: "center" }}>🏨</div>
              <div>
                <div style={{ fontSize: 16 }}>Hotel Front Desk</div>
                <div style={{ fontSize: 12, opacity: 0.8 }}>Online 24/7</div>
              </div>
            </div>
            <div style={{ background: "#ECE5DD", padding: 20, borderRadius: "0 0 16px 16px", display: "flex", flexDirection: "column", gap: 12, minHeight: 300 }}>
              <div style={{ alignSelf: "flex-start", background: "white", padding: "10px 14px", borderRadius: "0 12px 12px 12px", fontSize: 14, maxWidth: "80%", boxShadow: "0 1px 2px rgba(0,0,0,0.1)" }}>
                Hi, do you have rooms for this Friday? And is the family pool open?
                <div style={{ fontSize: 11, color: "#999", marginTop: 4, textAlign: "right" }}>11:47 PM</div>
              </div>
              <div style={{ alignSelf: "flex-end", background: "#DCF8C6", padding: "10px 14px", borderRadius: "12px 0 12px 12px", fontSize: 14, maxWidth: "85%", boxShadow: "0 1px 2px rgba(0,0,0,0.1)" }}>
                Hello! 😊 Yes, we have a Deluxe Room available this Friday for RM 280/night including breakfast for 2. Our family pool is open 7am - 9pm daily! 🏊‍♂️ Would you like me to hold the room for you?
                <div style={{ fontSize: 11, color: "#777", marginTop: 4, textAlign: "right" }}>11:47 PM</div>
              </div>
              <div style={{ alignSelf: "flex-start", background: "white", padding: "10px 14px", borderRadius: "0 12px 12px 12px", fontSize: 14, maxWidth: "80%", boxShadow: "0 1px 2px rgba(0,0,0,0.1)" }}>
                Great, I&apos;d like to book. My name is Ahmad.
                <div style={{ fontSize: 11, color: "#999", marginTop: 4, textAlign: "right" }}>11:48 PM</div>
              </div>
              <div style={{ alignSelf: "flex-end", background: "#DCF8C6", padding: "10px 14px", borderRadius: "12px 0 12px 12px", fontSize: 14, maxWidth: "85%", boxShadow: "0 1px 2px rgba(0,0,0,0.1)" }}>
                Wonderful, Ahmad! I&apos;ve noted your interest. Could you share your email so I can send the details? 📧 Our reservations team will confirm everything first thing tomorrow morning.
                <div style={{ fontSize: 11, color: "#777", marginTop: 4, textAlign: "right" }}>11:48 PM</div>
              </div>
              <div style={{ background: "var(--color-gray-100)", padding: "8px 12px", borderRadius: 8, fontSize: 12, color: "var(--color-gray-500)", marginTop: 8, borderLeft: "3px solid var(--color-green)" }}>
                Lead captured · Name: Ahmad · Intent: Room booking · Channel: WhatsApp · Time: 11:48 PM · Status: Queued for morning team
              </div>
            </div>
          </div>
          <div style={{ textAlign: "center", marginTop: 24, fontSize: 18, fontWeight: 600, color: "var(--color-navy)", maxWidth: 700, marginInline: "auto" }}>
            That lead was captured, logged, and prioritized for your morning team. Without Nocturn AI, Ahmad would have booked on Agoda at midnight. You would have paid 18% commission — RM 50 — on a guest who tried to book direct.
          </div>
        </div>
      </section>

      {/* SECTION 6: Problem Testimony */}
      <section className="section section-gray" style={{ background: "var(--color-gray-50)" }}>
        <div className="container">
          <span className="eyebrow">WHAT OPERATORS TOLD US</span>
          <h2 style={{ marginTop: 12 }}>We Didn&apos;t Build This In a Vacuum. We Built It From the Words of People Who Live This Every Day.</h2>
          <p className="text-gray-600" style={{ marginBottom: 40 }}>Before writing a single line of code, we sat with Revenue Managers, Reservation Managers, GMs, and industry consultants across Malaysia. Here&apos;s what they told us.</p>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: 24 }}>
            <div className="testimony-card" style={{ background: "white", padding: 32, borderRadius: 12, border: "1px solid var(--color-gray-200)", borderLeft: "3px solid var(--color-green)" }}>
              <p style={{ fontSize: 16, fontStyle: "italic", color: "var(--color-navy)", lineHeight: 1.6, marginBottom: 16 }}>
                &quot;Our primary operational weakness is systematic follow-up on inquiries. The CRM is there, but the process is heavily dependent on human intervention.&quot;
              </p>
              <div style={{ height: 1, background: "var(--color-gray-100)", marginBottom: 16 }}></div>
              <div style={{ fontWeight: 600, fontSize: 14, color: "var(--color-gray-500)" }}>Revenue Manager</div>
              <div style={{ fontSize: 14, color: "var(--color-gray-400)" }}>International 4-Star Chain Hotel, Kuala Lumpur</div>
            </div>

            <div className="testimony-card" style={{ background: "white", padding: 32, borderRadius: 12, border: "1px solid var(--color-gray-200)", borderLeft: "3px solid var(--color-green)" }}>
              <p style={{ fontSize: 16, fontStyle: "italic", color: "var(--color-navy)", lineHeight: 1.6, marginBottom: 16 }}>
                &quot;90% of our bookings come from walk-ins, phone, WhatsApp, and email. Once office hours end, reservations and sales are closed. Inquiries are effectively dropped.&quot;
              </p>
              <div style={{ height: 1, background: "var(--color-gray-100)", marginBottom: 16 }}></div>
              <div style={{ fontWeight: 600, fontSize: 14, color: "var(--color-gray-500)" }}>Reservation Manager</div>
              <div style={{ fontSize: 14, color: "var(--color-gray-400)" }}>City Hotel, Kuala Lumpur</div>
            </div>

            <div className="testimony-card" style={{ background: "white", padding: 32, borderRadius: 12, border: "1px solid var(--color-gray-200)", borderLeft: "3px solid var(--color-green)" }}>
              <p style={{ fontSize: 16, fontStyle: "italic", color: "var(--color-navy)", lineHeight: 1.6, marginBottom: 16 }}>
                &quot;99% of hotels — the main pain is paying the OTA. If you could switch acquisition from OTA to direct, even 1%, that&apos;s 3,000 savings per month.&quot;
              </p>
              <div style={{ height: 1, background: "var(--color-gray-100)", marginBottom: 16 }}></div>
              <div style={{ fontWeight: 600, fontSize: 14, color: "var(--color-gray-500)" }}>Pre-Sales Specialist</div>
              <div style={{ fontSize: 14, color: "var(--color-gray-400)" }}>Global Hospitality Technology Company</div>
            </div>

            <div className="testimony-card" style={{ background: "white", padding: 32, borderRadius: 12, border: "1px solid var(--color-gray-200)", borderLeft: "3px solid var(--color-green)" }}>
              <p style={{ fontSize: 16, fontStyle: "italic", color: "var(--color-navy)", lineHeight: 1.6, marginBottom: 16 }}>
                &quot;Hotels nowadays lose business due to low manpower. People don&apos;t complain anymore — they just don&apos;t come back.&quot;
              </p>
              <div style={{ height: 1, background: "var(--color-gray-100)", marginBottom: 16 }}></div>
              <div style={{ fontWeight: 600, fontSize: 14, color: "var(--color-gray-500)" }}>Independent Hospitality Consultant</div>
              <div style={{ fontSize: 14, color: "var(--color-gray-400)" }}>30+ Years Experience</div>
            </div>
          </div>

          <p style={{ textAlign: "center", marginTop: 40, fontStyle: "italic", color: "var(--color-gray-500)", fontSize: 14 }}>
            &quot;These aren&apos;t testimonials for our product. They&apos;re testimonies of the problem. <br />We built Nocturn AI to be the solution these operators described — nothing more, nothing less.&quot;
          </p>
        </div>
      </section>



      {/* SECTION 7: How It Works (Condensed) */}
      <section className="section section-white" id="how-it-works">
        <div className="container">
          <span className="eyebrow">HOW IT WORKS</span>
          <h2 style={{ marginTop: 12, textAlign: "center" }}>From "Signed" to "Revenue Recovered" in 72 Hours</h2>
          <div className="steps-grid">
            <div className="step-card">
              <div className="step-number">1</div>
              <div className="step-icon">📄</div>
              <h3>Deep-Dive Knowledge Transfer (Day 1)</h3>
              <p>
                We sit with your team for 60 minutes to extract your SOPs, rate cards, and tone of voice. We build your AI knowledge base immediately.
              </p>
            </div>
            <div className="step-connector hide-mobile" aria-hidden="true">
              <svg width="60" height="2" viewBox="0 0 60 2"><line x1="0" y1="1" x2="60" y2="1" stroke="#CBD5E1" strokeWidth="2" strokeDasharray="6 4" /></svg>
            </div>
            <div className="step-card">
              <div className="step-number">2</div>
              <div className="step-icon">🔗</div>
              <h3>Integration & Training (Day 2)</h3>
              <p>
                We connect your WhatsApp Business API and install the web widget. We brief your front desk on how to handle "AI Handoffs."
              </p>
            </div>
            <div className="step-connector hide-mobile" aria-hidden="true">
              <svg width="60" height="2" viewBox="0 0 60 2"><line x1="0" y1="1" x2="60" y2="1" stroke="#CBD5E1" strokeWidth="2" strokeDasharray="6 4" /></svg>
            </div>
            <div className="step-card">
              <div className="step-number">3</div>
              <div className="step-icon">🚀</div>
              <h3>Go Live & Revenue Recovery (Day 3)</h3>
              <p>
                We flip the switch. Nocturn AI starts handling inquiries immediately. You get your first "Revenue Recovered" report the next morning.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 8: Founding Cohort Offer */}
      <section className="section section-dark" id="founding-cohort" style={{ overflow: "hidden" }}>
        <div className="hero-gradient-orb" style={{ background: "radial-gradient(circle at 50% 50%, rgba(34, 197, 94, 0.15), transparent 70%)", top: "50%", left: "50%", transform: "translate(-50%,-50%)" }}></div>
        <div className="container">
          <div style={{ textAlign: "center", marginBottom: 40, position: "relative", zIndex: 1 }}>
            <span className="badge badge-green-solid" style={{ marginBottom: 16 }}>LIMITED AVAILABILITY</span>
            <h2 style={{ color: "white" }}>The Nocturn AI Founding Cohort</h2>
            <p className="text-large" style={{ color: "rgba(255,255,255,0.8)", maxWidth: 600, margin: "16px auto 0" }}>
              We are accepting 5 partners to build the future of hospitality AI with us. This is not a sales purchase; it&apos;s a partnership.
            </p>
          </div>

          <div className="cohort-card" style={{ maxWidth: 800, margin: "0 auto", background: "rgba(255,255,255,0.05)", border: "1px solid rgba(255,255,255,0.1)", borderRadius: 24, padding: "40px", backdropFilter: "blur(10px)", position: "relative" }}>
            <div style={{ position: "absolute", top: 0, left: 0, width: "100%", height: 4, background: "linear-gradient(90deg, #22C55E, #15803d)" }}></div>

            <div className="cohort-grid" style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: 32 }}>
              <div>
                <h3 style={{ color: "white", fontSize: 20, marginBottom: 24 }}>What You Get As A Founding Partner</h3>
                <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: 16 }}>
                  <li style={{ display: "flex", gap: 12, color: "rgba(255,255,255,0.9)" }}>
                    <span style={{ color: "#22C55E" }}>✓</span>
                    <span><strong>30 Days Free Pilot</strong> — Full access, no limitations. Prove the value before you pay a cent.</span>
                  </li>
                  <li style={{ display: "flex", gap: 12, color: "rgba(255,255,255,0.9)" }}>
                    <span style={{ color: "#22C55E" }}>✓</span>
                    <span><strong>White-Glove Onboarding</strong> — We do 100% of the setup, scraping, and training. You just hand us the keys.</span>
                  </li>
                  <li style={{ display: "flex", gap: 12, color: "rgba(255,255,255,0.9)" }}>
                    <span style={{ color: "#22C55E" }}>✓</span>
                    <span><strong>Direct Founder Access</strong> — You have my personal WhatsApp. Your feedback shapes the product roadmap.</span>
                  </li>
                  <li style={{ display: "flex", gap: 12, color: "rgba(255,255,255,0.9)" }}>
                    <span style={{ color: "#22C55E" }}>✓</span>
                    <span><strong>Locked-in Legacy Pricing</strong> — Secure our lowest early-adopter rate for 2 years.</span>
                  </li>
                </ul>
              </div>
              <div style={{ background: "rgba(255,255,255,0.03)", padding: 24, borderRadius: 16, border: "1px solid rgba(255,255,255,0.05)", display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center", textAlign: "center" }}>
                <div style={{ fontSize: 48, fontWeight: 700, color: "white", lineHeight: 1 }}>3 <span style={{ fontSize: 24, color: "rgba(255,255,255,0.5)", fontWeight: 400 }}>/ 5</span></div>
                <div style={{ color: "#22C55E", fontWeight: 600, marginTop: 8, marginBottom: 24 }}>SPOTS CLAIMED</div>
                <a href="/apply" className="btn btn-primary btn-lg btn-glow" style={{ width: "100%" }}>Apply for Cohort →</a>
                <p style={{ fontSize: 12, color: "rgba(255,255,255,0.4)", marginTop: 12 }}>Application takes 3 minutes. Qualifying hotels only.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 9: Founder's Note */}
      <section className="section section-light">
        <div className="container container-narrow">
          <div style={{ background: "white", padding: "40px", borderRadius: 12, border: "1px solid var(--color-gray-200)", maxWidth: 700, margin: "0 auto", boxShadow: "var(--shadow-card)" }}>
            <h3 style={{ fontSize: 20, marginBottom: 24 }}>A Note from the Founder</h3>
            <p className="text-gray-600" style={{ marginBottom: 16 }}>
              &quot;I didn&apos;t build this app to sell software. I built it because I saw great independent hotels losing against big chains and OTAs simply because they didn&apos;t have the manpower to answer the phone at 11 PM.
            </p>
            <p className="text-gray-600" style={{ marginBottom: 16 }}>
              Technology shouldn&apos;t remove the human touch from hospitality. It should protect it. By letting AI handle the repetitive &apos;do you have a room?&apos; questions, your staff can finally focus on the guest standing in front of them.
            </p>
            <p className="text-gray-600" style={{ marginBottom: 24 }}>
              My promise to the Founding Cohort is simple: We will treat your revenue as if it were our own. If we don&apos;t recover 10x our cost in the first 30 days, you shouldn&apos;t hire us.&quot;
            </p>
            <div style={{ display: "flex", alignItems: "center", gap: 16 }}>
              <div style={{ width: 48, height: 48, background: "var(--color-navy)", borderRadius: "50%", display: "flex", alignItems: "center", justifyContent: "center", color: "white", fontWeight: 700 }}>B</div>
              <div>
                <div style={{ fontWeight: 700, color: "var(--color-navy)" }}>Basyir</div>
                <div style={{ fontSize: 14, color: "var(--color-gray-500)" }}>Founder, Nocturn AI</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 6: ROI Calculator */}
      <section className="section section-white" id="roi-calculator">
        <div className="container container-narrow" style={{ textAlign: "center" }}>
          <span className="eyebrow">ROI CALCULATOR</span>
          <h2 style={{ marginTop: 12 }}>Calculate How Much Revenue You&apos;re Leaving on the Table</h2>
          <ROICalculator />
        </div>
      </section>

      {/* SECTION 7: FAQ */}
      <section className="section section-white" id="faq">
        <div className="container container-narrow">
          <h2 style={{ textAlign: "center", marginBottom: 40 }}>Questions Hotels Ask Us</h2>
          <FAQSection />
        </div>
      </section>

      {/* SECTION 10: Final CTA */}
      <section className="section-dark final-cta">
        <div className="final-cta-pattern" aria-hidden="true"></div>
        <div className="container" style={{ textAlign: "center", position: "relative", zIndex: 1 }}>
          <h2 style={{ color: "white", fontSize: "clamp(1.75rem, 4vw, 2.75rem)" }}>
            Your Competitors Are Already Capturing
            <br />
            the Bookings You&apos;re Missing
          </h2>
          <p style={{ color: "rgba(255,255,255,0.6)", fontSize: "var(--fs-large)", maxWidth: 600, margin: "16px auto 32px" }}>
            78% of hotel chains have integrated AI in 2025 to lower costs. Independent hotels that act now gain the advantage.
          </p>
          <a href="/apply" className="btn btn-primary btn-lg btn-glow">
            Apply for Founding Cohort →
          </a>
          <p style={{ color: "rgba(255,255,255,0.4)", fontSize: "var(--fs-small)", marginTop: 16 }}>
            XX spots remaining · Live in 48 hours
          </p>
        </div>
      </section>

      {/* Scroll animation + counter script */}
      <CounterScript />
    </>
  );
}

/* ---- ROI Calculator (client-side interactive) ---- */
function ROICalculator() {
  return (
    <div className="roi-calc" id="roi-calculator-widget">
      <div className="roi-inputs">
        <div className="roi-input-group">
          <label htmlFor="daily-inquiries">Daily inquiries your hotel receives:</label>
          <input type="range" id="daily-inquiries" min="10" max="100" defaultValue="30" className="roi-slider" />
          <span className="roi-value" id="daily-inquiries-val">30</span>
        </div>
        <div className="roi-input-group">
          <label htmlFor="adr">Your Average Daily Rate (ADR):</label>
          <div className="roi-input-wrap">
            <span>RM</span>
            <input type="number" id="adr" defaultValue="230" min="50" max="2000" className="roi-number-input" />
          </div>
        </div>
        <div className="roi-input-group">
          <label htmlFor="after-hours">% of inquiries after office hours:</label>
          <input type="range" id="after-hours" min="10" max="50" defaultValue="30" className="roi-slider" />
          <span className="roi-value" id="after-hours-val">30%</span>
        </div>
      </div>
      <div className="roi-result">
        <div className="roi-result-card">
          <div className="roi-result-label">Estimated Monthly Revenue Recovered</div>
          <div className="roi-result-number" id="roi-revenue">RM 9,315</div>
        </div>
        <div className="roi-result-card" style={{ borderColor: "var(--color-amber)" }}>
          <div className="roi-result-label">OTA Commission Avoided</div>
          <div className="roi-result-number" id="roi-commission">RM 1,863</div>
        </div>
      </div>
      <p className="roi-note">
        Hotels like yours typically recover RM 3,000-8,000/month from inquiries that would have been lost.
        <br /><br />
        <span style={{ fontSize: "0.85em", opacity: 0.8 }}>
          * Estimation based on [Daily Inquiries] × [30 days] × [% After-hours] × [15% Conversion Rate] × [ADR]. Actual results vary by property and season.
        </span>
      </p>
      <a href="/apply" className="btn btn-primary" style={{ marginTop: 16 }}>
        Apply for Cohort to Verify This Number →
      </a>
    </div>
  );
}

/* ---- FAQ Accordion ---- */
function FAQSection() {
  const faqs = [
    {
      q: "Will I need to change my PMS or Booking Engine?",
      a: "No. Nocturn AI operates independently as a layer on top of your existing systems. We simply capture the inquiry and hand off the booking details to your team (or input it deeply if you choose our Enterprise integration later). No expensive migration required.",
    },
    {
      q: "Does it sound like a robot?",
      a: "Your guests won't know. We train the AI on your specific tone of voice and historical chats. It uses emojis, Malaysian hospitality warmth ('Selamat Datang!'), and understands Manglish/Singlish context.",
    },
    {
      q: "What if I don't get results?",
      a: "You don't pay. That's the Founding Cohort promise. The 30-day pilot is completely free. If we don't prove we recovered at least 10x our cost in revenue, you walk away.",
    },
    {
      q: "My staff is not technical. Will this be hard to use?",
      a: "Zero technical skills required. Your team just keeps using WhatsApp Business and Email exactly as they do now. The only difference is they'll see answers drafting themselves, and leads appearing in a simple list every morning.",
    },
    {
      q: "Is there a long-term contract?",
      a: "No. After the pilot, we operate on a month-to-month basis. We believe we should earn your business every single month.",
    },
  ];

  return (
    <>
      <div className="faq-list">
        {faqs.map((faq, i) => (
          <div className="faq-item" key={i}>
            <button
              className="faq-question"
              aria-expanded="false"
              aria-controls={`faq-answer-${i}`}
            >
              <span>{faq.q}</span>
              <svg className="faq-chevron" width="20" height="20" viewBox="0 0 20 20" fill="none" aria-hidden="true">
                <path d="M5 7.5L10 12.5L15 7.5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </button>
            <div className="faq-answer" id={`faq-answer-${i}`}>
              <p>{faq.a}</p>
            </div>
          </div>
        ))}
      </div>
      {/* FAQPage Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            mainEntity: faqs.map((faq) => ({
              "@type": "Question",
              name: faq.q,
              acceptedAnswer: {
                "@type": "Answer",
                text: faq.a,
              },
            })),
          }),
        }}
      />
    </>
  );
}

/* ---- Counter + ROI + FAQ scripts (client-side) ---- */
function CounterScript() {
  return (
    <script
      dangerouslySetInnerHTML={{
        __html: `
(function(){
  // ---- Counter animation ----
  function animateCounter(el) {
    var target = parseInt(el.getAttribute('data-target'));
    var suffix = el.getAttribute('data-suffix') || '';
    if (!target) return;
    var start = 0;
    var duration = 1500;
    var startTime = null;
    function step(ts) {
      if (!startTime) startTime = ts;
      var progress = Math.min((ts - startTime) / duration, 1);
      var eased = 1 - Math.pow(1 - progress, 3);
      el.textContent = Math.round(start + (target - start) * eased) + suffix;
      if (progress < 1) requestAnimationFrame(step);
    }
    requestAnimationFrame(step);
  }

  var counters = document.querySelectorAll('.stat-number[data-target]');
  var observer = new IntersectionObserver(function(entries) {
    entries.forEach(function(entry) {
      if (entry.isIntersecting) {
        animateCounter(entry.target);
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.5 });
  counters.forEach(function(c) { observer.observe(c); });

  // ---- Scroll reveal ----
  var reveals = document.querySelectorAll('.animate-fade-up');
  var revealObs = new IntersectionObserver(function(entries) {
    entries.forEach(function(entry) {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        revealObs.unobserve(entry.target);
      }
    });
  }, { threshold: 0.1, rootMargin: '0px 0px -40px 0px' });
  reveals.forEach(function(r) { revealObs.observe(r); });

  // ---- ROI Calculator ----
  var dailySlider = document.getElementById('daily-inquiries');
  var adrInput = document.getElementById('adr');
  var afterSlider = document.getElementById('after-hours');
  var dailyVal = document.getElementById('daily-inquiries-val');
  var afterVal = document.getElementById('after-hours-val');
  var revenueEl = document.getElementById('roi-revenue');
  var commissionEl = document.getElementById('roi-commission');

  function calcROI() {
    if (!dailySlider || !adrInput || !afterSlider) return;
    var d = parseInt(dailySlider.value);
    var a = parseInt(adrInput.value) || 230;
    var h = parseInt(afterSlider.value) / 100;
    var monthly = d * h * 0.15 * a * 30;
    var commission = monthly * 0.20;
    if (dailyVal) dailyVal.textContent = d;
    if (afterVal) afterVal.textContent = afterSlider.value + '%';
    if (revenueEl) revenueEl.textContent = 'RM ' + Math.round(monthly).toLocaleString();
    if (commissionEl) commissionEl.textContent = 'RM ' + Math.round(commission).toLocaleString();
  }

  if (dailySlider) dailySlider.addEventListener('input', calcROI);
  if (adrInput) adrInput.addEventListener('input', calcROI);
  if (afterSlider) afterSlider.addEventListener('input', calcROI);
  calcROI();

  // ---- FAQ Accordion ----
  document.querySelectorAll('.faq-question').forEach(function(btn) {
    btn.addEventListener('click', function() {
      var item = btn.parentElement;
      var isOpen = item.classList.contains('open');
      // Close all
      document.querySelectorAll('.faq-item').forEach(function(fi) { fi.classList.remove('open'); });
      document.querySelectorAll('.faq-question').forEach(function(fq) { fq.setAttribute('aria-expanded', 'false'); });
      if (!isOpen) {
        item.classList.add('open');
        btn.setAttribute('aria-expanded', 'true');
      }
    });
  });
})();
        `,
      }}
    />
  );
}
