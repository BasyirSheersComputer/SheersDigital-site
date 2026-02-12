import type { Metadata } from "next";
import { HubSpotMeeting } from "@/components/HubSpotMeeting";

export const metadata: Metadata = {
    title: "Book a Demo — See Revenue Recovery In Action",
    description:
        "15-minute personalized demo for your property. See how much revenue you can recover. No commitment, no credit card.",
};

export default function BookDemoPage() {
    return (
        <BookDemoContent />
    );
}

function BookDemoContent() {
    return (
        <section style={{ paddingTop: 100, paddingBottom: 80, minHeight: "100vh", background: "var(--color-gray-50)" }}>
            <div className="container">
                <div className="grid-2-cols stack-on-mobile" style={{ maxWidth: 1000, margin: "0 auto" }}>
                    {/* Left - Value */}
                    <div style={{ paddingTop: 40 }}>
                        <h1>See Your Revenue Recovery in Action</h1>
                        <ul style={{ marginTop: 24, display: "flex", flexDirection: "column", gap: 16 }}>
                            <li style={{ display: "flex", gap: 10, alignItems: "flex-start" }}>
                                <span style={{ color: "var(--color-green)", fontWeight: 700, fontSize: 18 }}>✓</span>
                                <span>15-minute personalized demo for your property</span>
                            </li>
                            <li style={{ display: "flex", gap: 10, alignItems: "flex-start" }}>
                                <span style={{ color: "var(--color-green)", fontWeight: 700, fontSize: 18 }}>✓</span>
                                <span>We&apos;ll estimate your monthly revenue recovery</span>
                            </li>
                            <li style={{ display: "flex", gap: 10, alignItems: "flex-start" }}>
                                <span style={{ color: "var(--color-green)", fontWeight: 700, fontSize: 18 }}>✓</span>
                                <span>Learn how you can be live in 48 hours</span>
                            </li>
                            <li style={{ display: "flex", gap: 10, alignItems: "flex-start" }}>
                                <span style={{ color: "var(--color-green)", fontWeight: 700, fontSize: 18 }}>✓</span>
                                <span>No commitment. No credit card.</span>
                            </li>
                        </ul>
                        <div style={{ marginTop: 40, padding: "16px 20px", background: "var(--color-navy)", borderRadius: 12, color: "white" }}>
                            <div style={{ display: "flex", alignItems: "center", gap: 12, flexWrap: "wrap" }}>
                                <span>🔒 PDPA Compliant</span>
                                <span style={{ opacity: 0.3 }}>·</span>
                                <span>🔐 Encrypted</span>
                                <span style={{ opacity: 0.3 }}>·</span>
                                <span>🇲🇾 Malaysian-Founded</span>
                            </div>
                        </div>
                    </div>

                    {/* Right - Form */}
                    <div className="card" style={{ padding: 32 }}>
                        {/* <h3 style={{ marginBottom: 24 }}>Book Your Free Demo</h3> */}
                        {/* HubSpot Meeting Embed */}
                        <HubSpotMeeting />
                    </div>
                </div>
            </div>
        </section>
    );
}
