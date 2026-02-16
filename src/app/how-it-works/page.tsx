import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "How It Works — Live in 48 Hours",
    description:
        "3 simple steps: share your property info, connect your channels, watch revenue recover. Setup takes 48 hours. ROI visible in 7 days.",
};

export default function HowItWorksPage() {
    return (
        <>
            {/* Hero */}
            <section className="section-dark" style={{ padding: "140px 0 80px" }}>
                <div className="container" style={{ textAlign: "center" }}>
                    <span className="eyebrow">HOW IT WORKS</span>
                    <h1 style={{ color: "white", marginTop: 12, maxWidth: 600, margin: "12px auto 0" }}>
                        From Signup to Live in 48 Hours
                    </h1>
                    <p style={{ color: "rgba(255,255,255,0.6)", fontSize: "var(--fs-large)", maxWidth: 520, margin: "20px auto 0" }}>
                        No complex integrations. No IT team required. Just share your property info and we handle the rest.
                    </p>
                </div>
            </section>

            {/* Timeline */}
            <section className="section section-white">
                <div className="container" style={{ maxWidth: 800, margin: "0 auto" }}>
                    <div style={{ position: "relative", paddingLeft: 48 }}>
                        {/* Vertical line */}
                        <div style={{ position: "absolute", left: 18, top: 0, bottom: 0, width: 2, background: "var(--color-gray-200)" }} aria-hidden="true"></div>

                        <TimelineStep day="Day 0" title="Discovery Call" time="15 minutes" color="#22C55E">
                            We hop on a quick call to understand your property — room types, rates, common guest questions.
                            You share your FAQ sheet and rate card. That&apos;s all we need from you.
                        </TimelineStep>

                        <TimelineStep day="Day 1" title="We Build Your Knowledge Base" time="We handle this" color="#3B82F6">
                            Our team ingests your property information and builds a custom AI knowledge base — rates, room types,
                            facilities, directions, policies, FAQs. Tested and verified before going live.
                        </TimelineStep>

                        <TimelineStep day="Day 1" title="Connect Your Channels" time="30 minutes" color="#8B5CF6">
                            Link your WhatsApp Business number. Drop one script tag on your website. Forward your reservation email.
                            Three connections, and you&apos;re live across every channel.
                        </TimelineStep>

                        <TimelineStep day="Day 2" title="You're Live" time="Zero effort from you" color="#22C55E">
                            Nocturn AI starts handling real inquiries. Your team can monitor conversations in the dashboard
                            and take over any time. The AI learns and improves from every interaction.
                        </TimelineStep>

                        <TimelineStep day="Day 7" title="First Weekly Report" time="Delivered to your inbox" color="#F59E0B">
                            Your GM receives the first weekly report: total inquiries handled, leads captured,
                            after-hours recovery rate, estimated revenue saved. The value is visible.
                        </TimelineStep>

                        <TimelineStep day="Day 30" title="Full ROI Review" time="Your decision" color="#22C55E" isLast>
                            After 30 days, you have hard data. Inquiries captured, leads recovered, revenue estimated.
                            If the numbers speak for themselves, you continue. If not, you walk away — no contracts, no obligations.
                        </TimelineStep>
                    </div>
                </div>
            </section>

            {/* Video placeholder */}
            <section className="section section-light">
                <div className="container" style={{ textAlign: "center" }}>
                    <h2>See Nocturn AI in Action</h2>
                    <p style={{ color: "var(--color-gray-600)", marginTop: 12, marginBottom: 32 }}>
                        Watch a 2-minute walkthrough of how Nocturn AI handles real hotel inquiries.
                    </p>
                    <div style={{
                        maxWidth: 700,
                        margin: "0 auto",
                        aspectRatio: "16/9",
                        background: "var(--color-navy)",
                        borderRadius: 16,
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        color: "rgba(255,255,255,0.5)",
                        fontSize: 48,
                        boxShadow: "var(--shadow-elevated)",
                    }}>
                        ▶
                    </div>
                    <p style={{ color: "var(--color-gray-400)", fontSize: "var(--fs-small)", marginTop: 12 }}>
                        Demo video coming soon
                    </p>
                </div>
            </section>

            {/* CTA */}
            <section className="section-dark" style={{ padding: "80px 0" }}>
                <div className="container" style={{ textAlign: "center" }}>
                    <h2 style={{ color: "white" }}>Ready? Let&apos;s Get You Live in 48 Hours</h2>
                    <p style={{ color: "rgba(255,255,255,0.6)", marginTop: 12, marginBottom: 32 }}>
                        Your team spends 30 minutes. We handle the rest.
                    </p>
                    <a href="/apply" className="btn btn-primary btn-lg btn-glow">Apply for Founding Cohort →</a>
                    <p style={{ color: "rgba(255,255,255,0.4)", fontSize: "var(--fs-small)", marginTop: 16 }}>
                        Free 30-day pilot · No credit card · Live in 48 hours
                    </p>
                </div>
            </section>
        </>
    );
}

function TimelineStep({ day, title, time, color, children, isLast = false }: {
    day: string; title: string; time: string; color: string; children: React.ReactNode; isLast?: boolean;
}) {
    return (
        <div style={{ marginBottom: isLast ? 0 : 40, position: "relative" }}>
            {/* Dot */}
            <div style={{
                position: "absolute",
                left: -40,
                top: 4,
                width: 16,
                height: 16,
                borderRadius: "50%",
                background: color,
                border: "3px solid white",
                boxShadow: `0 0 0 3px ${color}33`,
            }} />
            <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 8 }}>
                <span className="badge badge-green-solid" style={{ fontSize: 12, padding: "4px 12px", background: color }}>
                    {day}
                </span>
                <span style={{ fontSize: "var(--fs-small)", color: "var(--color-gray-400)" }}>{time}</span>
            </div>
            <h3 style={{ marginBottom: 8 }}>{title}</h3>
            <p style={{ color: "var(--color-gray-600)", lineHeight: 1.7, fontSize: "var(--fs-small)" }}>
                {children}
            </p>
        </div>
    );
}
