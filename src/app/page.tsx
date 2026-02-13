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
              ✦ Trusted by Independent Hotels in Malaysia
            </span>
            <h1 className="hero-title">
              Stop Losing Revenue While You Sleep.
            </h1>
            <p className="hero-sub">
              Your front desk closes at 10pm. The internet doesn&apos;t.
              Capture every WhatsApp, email, and web inquiry 24/7 with an AI
              trained for Malaysian hospitality. Live in 48 hours.
            </p>
            <div className="hero-ctas">
              <a href="/book-demo" className="btn btn-primary btn-lg">
                Start Free Pilot →
              </a>
              <div className="text-small text-gray-500" style={{ marginTop: 8 }}>
                No credit card required · Cancel anytime
              </div>
            </div>
            <div className="hero-proof">
              <span>✓ 30-day free pilot</span>
              <span>·</span>
              <span>✓ Recover ~RM 5k/month</span>
              <span>·</span>
              <span>✓ No integration tax</span>
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
                      <div className="dash-stat"><span className="dash-num">95%</span><span className="dash-label">Recovery</span></div>
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
          <h2 style={{ marginTop: 12 }}>While You Sleep, Revenue Walks Out the Door</h2>
          <div className="stat-grid">
            <div className="stat-card">
              <div className="stat-number" data-target="30" data-suffix="%">0%</div>
              <div className="stat-label">of hotel inquiries arrive after 6pm</div>
              <div className="stat-sub">When nobody is answering.</div>
              <div className="stat-source">Industry research, 2026</div>
            </div>
            <div className="stat-card">
              <div className="stat-number" data-target="85" data-suffix="%">0%</div>
              <div className="stat-label">of unanswered callers never call back</div>
              <div className="stat-sub">They book with your competitor instead.</div>
              <div className="stat-source">Dialora Research, 2025</div>
            </div>
            <div className="stat-card">
              <div className="stat-number" data-target="15" data-suffix="-25%">0%</div>
              <div className="stat-label">OTA commission on every booking</div>
              <div className="stat-sub">That&apos;s RM 170-285 lost per reservation at RM 230 ADR.</div>
              <div className="stat-source">Booking.com / Expedia rate cards</div>
            </div>
          </div>
          <p className="pain-body">
            Malaysian hotels receive 90% of bookings through manual channels —
            WhatsApp, phone calls, emails, walk-ins. But reservation desks close
            at 6pm. Staff are overwhelmed. Leads go cold. And guests quietly
            book on Booking.com instead, costing you 15-25% of every sale.
          </p>
          <p className="pain-body" style={{ fontWeight: 600, marginTop: 8 }}>
            This isn&apos;t a technology problem. It&apos;s revenue falling on the floor.
          </p>
        </div>
      </section>

      {/* SECTION 2.5: Who This Is For */}
      <section className="section section-light" style={{ padding: "80px 0", borderBottom: "1px solid var(--color-gray-200)" }}>
        <div className="container">
          <div style={{ textAlign: "center", marginBottom: 40 }}>
            <span className="eyebrow">WHO THIS IS FOR</span>
            <h2 style={{ marginTop: 12 }}>Built Specifically for 3-4 Star Independent Hotels</h2>
            <p className="text-gray-600" style={{ maxWidth: 600, margin: "16px auto 0" }}>
              Not for budget hotels. Not for 5-star luxury resorts. Designed for city business and boutique hotels that need efficiency.
            </p>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: 24 }}>
            <div className="card" style={{ padding: 24, display: "flex", gap: 16 }}>
              <div style={{ fontSize: 32 }}>👔</div>
              <div>
                <strong style={{ display: "block", fontSize: 18, marginBottom: 4 }}>The General Manager</strong>
                <p style={{ fontSize: 14, color: "var(--color-gray-600)" }}>
                  You hate seeing potential revenue lost to OTAs because staff couldn&apos;t answer the phone in time.
                </p>
              </div>
            </div>
            <div className="card" style={{ padding: 24, display: "flex", gap: 16 }}>
              <div style={{ fontSize: 32 }}>📈</div>
              <div>
                <strong style={{ display: "block", fontSize: 18, marginBottom: 4 }}>The Revenue Manager</strong>
                <p style={{ fontSize: 14, color: "var(--color-gray-600)" }}>
                  You want direct bookings at higher margins and clear data on what channels are actually performing.
                </p>
              </div>
            </div>
            <div className="card" style={{ padding: 24, display: "flex", gap: 16 }}>
              <div style={{ fontSize: 32 }}>🛎️</div>
              <div>
                <strong style={{ display: "block", fontSize: 18, marginBottom: 4 }}>The Front Desk</strong>
                <p style={{ fontSize: 14, color: "var(--color-gray-600)" }}>
                  You want to focus on the guest in front of you, not answering "Hi, got room?" on WhatsApp 50 times a day.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 2.7: Guest Experience (The Midnight Test) */}
      <section className="section section-white" style={{ borderBottom: "1px solid var(--color-gray-200)" }}>
        <div className="container">
          <div style={{ textAlign: "center", marginBottom: 40 }}>
            <span className="eyebrow">THE GUEST EXPERIENCE</span>
            <h2 style={{ marginTop: 12 }}>The Midnight Test</h2>
            <p className="text-gray-600" style={{ maxWidth: 600, margin: "16px auto 0" }}>
              It&apos;s 11:47 PM. Your front desk is closed. A guest wants to book. Here is what happens with Nocturn AI.
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
                Hello! 😊 Yes, we have a Deluxe Room available this Friday (14 Feb) for RM 280. And yes, our family pool is open from 7am to 9pm daily! 🏊‍♂️ Would you like to secure the room?
                <div style={{ fontSize: 11, color: "#777", marginTop: 4, textAlign: "right" }}>11:47 PM</div>
              </div>
              <div style={{ alignSelf: "flex-start", background: "white", padding: "10px 14px", borderRadius: "0 12px 12px 12px", fontSize: 14, maxWidth: "80%", boxShadow: "0 1px 2px rgba(0,0,0,0.1)" }}>
                Great, I&apos;d like to book.
                <div style={{ fontSize: 11, color: "#999", marginTop: 4, textAlign: "right" }}>11:48 PM</div>
              </div>
              <div style={{ alignSelf: "flex-end", background: "#DCF8C6", padding: "10px 14px", borderRadius: "12px 0 12px 12px", fontSize: 14, maxWidth: "85%", boxShadow: "0 1px 2px rgba(0,0,0,0.1)" }}>
                Wonderful! I can help you with that. May I have your full name to start the reservation?
                <div style={{ fontSize: 11, color: "#777", marginTop: 4, textAlign: "right" }}>11:48 PM</div>
              </div>
            </div>
          </div>
          <div style={{ textAlign: "center", marginTop: 24, fontSize: 18, fontWeight: 600, color: "var(--color-navy)" }}>
            That lead was captured, logged, and waiting for your team the next morning.
          </div>
        </div>
      </section>

      {/* SECTION 3: Solution Introduction */}
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
                An AI Concierge That Never Sleeps, Never Forgets, and Proves Its Value Every Morning
              </h2>
              <div className="feature-list">
                <div className="feature-item">
                  <span className="feature-icon">⚡</span>
                  <div>
                    <strong>Instant WhatsApp Responses</strong>
                    <p>Replies to guest inquiries in under 30 seconds — even at 2am.</p>
                  </div>
                </div>
                <div className="feature-item">
                  <span className="feature-icon">💻</span>
                  <div>
                    <strong>Web Chat Widget</strong>
                    <p>One line of code on your website. Captures visitors before they bounce to OTA.</p>
                  </div>
                </div>
                <div className="feature-item">
                  <span className="feature-icon">📧</span>
                  <div>
                    <strong>Email Auto-Response</strong>
                    <p>Parses incoming emails, responds intelligently, captures the lead.</p>
                  </div>
                </div>
                <div className="feature-item">
                  <span className="feature-icon">📊</span>
                  <div>
                    <strong>Lead Capture Dashboard</strong>
                    <p>Every inquiry = a captured name, phone, email, intent, and timestamp.</p>
                  </div>
                </div>
                <div className="feature-item">
                  <span className="feature-icon">📈</span>
                  <div>
                    <strong>After-Hours Recovery Report</strong>
                    <p>Your GM sees exactly how many leads were saved while the office was closed.</p>
                  </div>
                </div>
                <div className="feature-item">
                  <span className="feature-icon">🤝</span>
                  <div>
                    <strong>Seamless Human Handoff</strong>
                    <p>When AI can&apos;t help, it transfers to your staff — with full conversation context.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 4: Social Proof Strip */}
      <section className="section-dark proof-strip">
        <div className="container">
          <div className="proof-stats">
            <div className="proof-stat">
              <span className="stat-number" data-target="95" data-suffix="%">0%</span>
              <span className="proof-label">Inquiry Response Rate</span>
            </div>
            <div className="proof-stat">
              <span className="stat-number">&lt; 30s</span>
              <span className="proof-label">Response Time (24/7)</span>
            </div>
            <div className="proof-stat">
              <span className="stat-number">RM 8k</span>
              <span className="proof-label">Avg. Monthly Revenue Recovered</span>
            </div>
          </div>
          <div style={{ maxWidth: 800, margin: "40px auto 0", textAlign: "center" }}>
            <blockquote className="proof-quote" style={{ fontSize: "1.25rem", fontStyle: "italic" }}>
              &ldquo;We knew we were losing bookings after 10pm, but we didn't know how many until we turned on Nocturn AI. It paid for itself in the first week.&rdquo;
            </blockquote>
            <cite style={{ display: "block", marginTop: 16, color: "rgba(255,255,255,0.7)", fontStyle: "normal", fontWeight: 600 }}>
              — Sarah L., Hotel Manager, 3-Star Business Hotel in KL
            </cite>
          </div>
        </div>
      </section>

      {/* SECTION 5: How It Works */}
      <section className="section section-white" id="how-it-works">
        <div className="container">
          <span className="eyebrow">HOW IT WORKS</span>
          <h2 style={{ marginTop: 12, textAlign: "center" }}>Live in 48 Hours. Proving Value in 7 Days.</h2>
          <div className="steps-grid">
            <div className="step-card">
              <div className="step-number">1</div>
              <div className="step-icon">📄</div>
              <h3>We Learn Your Property</h3>
              <p>
                Share your rates, room types, facilities, and FAQs. We build your
                property-specific AI knowledge base in hours — not weeks.
              </p>
            </div>
            <div className="step-connector hide-mobile" aria-hidden="true">
              <svg width="60" height="2" viewBox="0 0 60 2"><line x1="0" y1="1" x2="60" y2="1" stroke="#CBD5E1" strokeWidth="2" strokeDasharray="6 4" /></svg>
            </div>
            <div className="step-card">
              <div className="step-number">2</div>
              <div className="step-icon">🔗</div>
              <h3>Connect Your Channels</h3>
              <p>
                Link your WhatsApp Business number. Drop one script tag on your
                website. Forward your reservation email. That&apos;s it — you&apos;re live.
              </p>
            </div>
            <div className="step-connector hide-mobile" aria-hidden="true">
              <svg width="60" height="2" viewBox="0 0 60 2"><line x1="0" y1="1" x2="60" y2="1" stroke="#CBD5E1" strokeWidth="2" strokeDasharray="6 4" /></svg>
            </div>
            <div className="step-card">
              <div className="step-number">3</div>
              <div className="step-icon">📊</div>
              <h3>Watch Revenue Recover</h3>
              <p>
                Your GM gets a daily email: inquiries handled, leads captured,
                estimated revenue recovered. The value is visible from day one.
              </p>
            </div>
          </div>
          <div style={{ textAlign: "center", marginTop: 40 }}>
            <a href="/how-it-works" className="btn btn-outline">See Full Setup Timeline →</a>
          </div>
        </div>
      </section>

      {/* SECTION 5.5: Pricing Preview */}
      <section className="section section-light" id="pricing">
        <div className="container">
          <div style={{ textAlign: "center", marginBottom: 40 }}>
            <span className="eyebrow">PRICING</span>
            <h2 style={{ marginTop: 12 }}>Pay for Performance, Not Promises</h2>
            <p className="text-gray-600">Start with a free 30-day pilot. No credit card required.</p>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: 24, maxWidth: 960, margin: "0 auto" }}>
            <PricingCard
              tier="Starter"
              price="1,500"
              target="Budget & 3-star, <100 rooms"
              features={[
                "1 WhatsApp line",
                "Web chat widget",
                "Basic dashboard",
                "Email support",
              ]}
              cta="Start Free Pilot"
              recommended={false}
            />
            <PricingCard
              tier="Professional"
              price="3,000"
              target="4-star, 100-300 rooms"
              features={[
                "2 WhatsApp lines",
                "Email auto-handler",
                "Full dashboard + Reports",
                "Priority support",
              ]}
              cta="Start Free Pilot"
              recommended={true}
            />
            <PricingCard
              tier="Enterprise"
              price="5,000+"
              target="5-star, 300+ rooms"
              features={[
                "Unlimited lines",
                "API Access",
                "Custom integrations",
                "Dedicated manager",
              ]}
              cta="Contact Us"
              recommended={false}
              ctaLink="mailto:sales@nocturn.ai"
            />
          </div>
          <div style={{ textAlign: "center", marginTop: 32 }}>
            <a href="/pricing" className="btn btn-ghost">Compare all features →</a>
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

      {/* SECTION 8: Final CTA */}
      <section className="section-dark final-cta">
        <div className="final-cta-pattern" aria-hidden="true"></div>
        <div className="container" style={{ textAlign: "center", position: "relative", zIndex: 1 }}>
          <h2 style={{ color: "white", fontSize: "clamp(1.75rem, 4vw, 2.75rem)" }}>
            Your Competitors Are Already Capturing
            <br />
            the Bookings You&apos;re Missing
          </h2>
          <p style={{ color: "rgba(255,255,255,0.6)", fontSize: "var(--fs-large)", maxWidth: 600, margin: "16px auto 32px" }}>
            78% of hotel chains have integrated AI in 2025. Independent hotels
            that act now gain the advantage.
          </p>
          <a href="/book-demo" className="btn btn-primary btn-lg btn-glow">
            Start Your Free 30-Day Pilot →
          </a>
          <p style={{ color: "rgba(255,255,255,0.4)", fontSize: "var(--fs-small)", marginTop: 16 }}>
            Live in 48 hours · No credit card required
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
      <a href="/book-demo" className="btn btn-primary" style={{ marginTop: 16 }}>
        See Your Full ROI Breakdown — Book a Demo →
      </a>
    </div>
  );
}

/* ---- FAQ Accordion ---- */
function FAQSection() {
  const faqs = [
    {
      q: "Will it sound robotic? My guests expect a personal touch.",
      a: "Our AI is trained specifically on hospitality conversations. It responds in the guest's language (English or Bahasa Malaysia), keeps messages concise and warm — just like your best reservation agent. And when a guest wants a human, it transfers instantly with the full conversation history.",
    },
    {
      q: "What about data privacy and PDPA?",
      a: "All guest data is encrypted at rest and in transit. Each property's data is fully isolated — no cross-tenant leakage. We're built for PDPA compliance from day one, and we publish our privacy policy for your guests.",
    },
    {
      q: "We already have a chatbot on our website.",
      a: "Most hotel chatbots only work on your website — which handles less than 10% of your inquiries. We capture the 90% that comes through WhatsApp, phone, and email. We're not replacing your chatbot. We're covering the channels it can't.",
    },
    {
      q: "What if the AI gives wrong rate information?",
      a: "The AI never fabricates rates. It only quotes rates that exist in your verified knowledge base. If it's unsure, it says: 'Let me connect you with our reservations team who can give you the exact rates for your dates.' Safety over speed, always.",
    },
    {
      q: "How long does setup take?",
      a: "48 hours from signing to live. We handle the technical setup. Your team spends about 30 minutes sharing property information. One line of code on your website. Done.",
    },
    {
      q: "What happens after the free pilot?",
      a: "After 30 days, you'll have hard data: inquiries captured, leads recovered, estimated revenue saved. If the numbers don't speak for themselves, you walk away. No contracts, no credit card upfront.",
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
