import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Book a Demo — See Revenue Recovery In Action",
    description:
        "15-minute personalized demo for your property. See how much revenue you can recover. No commitment, no credit card.",
};

export default function BookDemoPage() {
    return (
        <section style={{ paddingTop: 100, paddingBottom: 80, minHeight: "100vh", background: "var(--color-gray-50)" }}>
            <div className="container">
                <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 60, alignItems: "flex-start", maxWidth: 1000, margin: "0 auto" }}>
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
                        <h3 style={{ marginBottom: 24 }}>Book Your Free Demo</h3>
                        <form action="/book-demo/thank-you" method="get" style={{ display: "flex", flexDirection: "column", gap: 16 }}>
                            <div>
                                <label htmlFor="name" style={{ display: "block", fontWeight: 600, fontSize: 14, marginBottom: 6 }}>
                                    Full Name
                                </label>
                                <input
                                    type="text" id="name" name="name" required
                                    placeholder="Ahmad Razak"
                                    style={{ width: "100%", padding: "12px 14px", borderRadius: 8, border: "2px solid var(--color-gray-200)", fontSize: 14, transition: "border-color 0.2s" }}
                                />
                            </div>
                            <div>
                                <label htmlFor="email" style={{ display: "block", fontWeight: 600, fontSize: 14, marginBottom: 6 }}>
                                    Work Email
                                </label>
                                <input
                                    type="email" id="email" name="email" required
                                    placeholder="ahmad@hotelgrand.com"
                                    style={{ width: "100%", padding: "12px 14px", borderRadius: 8, border: "2px solid var(--color-gray-200)", fontSize: 14 }}
                                />
                            </div>
                            <div>
                                <label htmlFor="property" style={{ display: "block", fontWeight: 600, fontSize: 14, marginBottom: 6 }}>
                                    Property Name
                                </label>
                                <input
                                    type="text" id="property" name="property" required
                                    placeholder="Hotel Grand Kuala Lumpur"
                                    style={{ width: "100%", padding: "12px 14px", borderRadius: 8, border: "2px solid var(--color-gray-200)", fontSize: 14 }}
                                />
                            </div>
                            <div>
                                <label htmlFor="rooms" style={{ display: "block", fontWeight: 600, fontSize: 14, marginBottom: 6 }}>
                                    Number of Rooms
                                </label>
                                <select
                                    id="rooms" name="rooms"
                                    style={{ width: "100%", padding: "12px 14px", borderRadius: 8, border: "2px solid var(--color-gray-200)", fontSize: 14, background: "white" }}
                                >
                                    <option value="">Select range</option>
                                    <option value="<50">&lt; 50 rooms</option>
                                    <option value="50-100">50 - 100 rooms</option>
                                    <option value="100-200">100 - 200 rooms</option>
                                    <option value="200-300">200 - 300 rooms</option>
                                    <option value="300+">300+ rooms</option>
                                </select>
                            </div>
                            <div>
                                <label htmlFor="phone" style={{ display: "block", fontWeight: 600, fontSize: 14, marginBottom: 6 }}>
                                    Phone / WhatsApp
                                </label>
                                <input
                                    type="tel" id="phone" name="phone"
                                    placeholder="+60 12 345 6789"
                                    style={{ width: "100%", padding: "12px 14px", borderRadius: 8, border: "2px solid var(--color-gray-200)", fontSize: 14 }}
                                />
                            </div>
                            <button type="submit" className="btn btn-primary btn-lg" style={{ width: "100%", marginTop: 8 }}>
                                Book My Free Demo →
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
}
