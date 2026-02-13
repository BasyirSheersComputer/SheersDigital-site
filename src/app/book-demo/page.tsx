"use client";

import { useState } from "react";
import { HubSpotLeadForm } from "@/components/HubSpotLeadForm";
import { HubSpotModal } from "@/components/HubSpotModal";

export default function BookDemoPage() {
    const [isModalOpen, setIsModalOpen] = useState(false);

    return (
        <section style={{ paddingTop: 100, paddingBottom: 80, minHeight: "100vh", background: "var(--color-gray-50)" }}>
            <div className="container">
                <div className="grid-2-cols stack-on-mobile" style={{ maxWidth: 1000, margin: "0 auto" }}>
                    {/* Left - Value */}
                    <div style={{ paddingTop: 40 }}>
                        <h1 style={{ fontSize: "2.5rem", lineHeight: 1.2, marginBottom: "1rem" }}>
                            Start Your Free <br />
                            <span style={{ color: "var(--color-green)" }}>30-Day Pilot</span>
                        </h1>
                        <p className="text-large text-gray-600" style={{ marginBottom: 32, fontSize: "1.125rem" }}>
                            See the revenue recovery in action. No credit card required. Live in 48 hours.
                        </p>

                        <ul className="check-list" style={{ marginBottom: 40, listStyle: "none", padding: 0 }}>
                            <li style={{ display: "flex", gap: 12, alignItems: "flex-start", marginBottom: 20 }}>
                                <span style={{ color: "var(--color-green)", fontWeight: 700, fontSize: 20, marginTop: -2 }}>✓</span>
                                <div>
                                    <strong style={{ display: "block", color: "var(--color-navy)" }}>Zero Missed Opportunities</strong>
                                    <span style={{ color: "var(--color-gray-600)" }}>Every WhatsApp message gets an instant, intelligent reply—even at 3 AM.</span>
                                </div>
                            </li>
                            <li style={{ display: "flex", gap: 12, alignItems: "flex-start", marginBottom: 20 }}>
                                <span style={{ color: "var(--color-green)", fontWeight: 700, fontSize: 20, marginTop: -2 }}>✓</span>
                                <div>
                                    <strong style={{ display: "block", color: "var(--color-navy)" }}>Higher ADR, Lower Commission</strong>
                                    <span style={{ color: "var(--color-gray-600)" }}>Capture direct leads before they bounce to an OTA.</span>
                                </div>
                            </li>
                            <li style={{ display: "flex", gap: 12, alignItems: "flex-start", marginBottom: 20 }}>
                                <span style={{ color: "var(--color-green)", fontWeight: 700, fontSize: 20, marginTop: -2 }}>✓</span>
                                <div>
                                    <strong style={{ display: "block", color: "var(--color-navy)" }}>Full Visibility for GMs</strong>
                                    <span style={{ color: "var(--color-gray-600)" }}>Get a daily report of every single dollar of revenue saved.</span>
                                </div>
                            </li>
                        </ul>

                        <div className="trust-badges" style={{ borderTop: "1px solid var(--color-gray-200)", paddingTop: 24 }}>
                            <p className="text-small text-gray-500" style={{ marginBottom: 12, fontWeight: 600, letterSpacing: "0.05em", textTransform: "uppercase", fontSize: "0.75rem" }}>
                                Powering Revenue Teams At
                            </p>
                            <div style={{ display: "flex", gap: 24, opacity: 0.6, filter: "grayscale(100%)" }}>
                                {/* Placeholders for logos - concise text for now */}
                                <span style={{ fontWeight: 700, fontSize: "1.2rem", fontFamily: "serif" }}>CITY HOTELS</span>
                                <span style={{ fontWeight: 700, fontSize: "1.2rem", fontFamily: "sans-serif" }}>RESORT STAY</span>
                            </div>
                        </div>
                    </div>

                    {/* Right - Form */}
                    <div>
                        <HubSpotLeadForm onFormSubmit={() => setIsModalOpen(true)} />
                    </div>
                </div>
            </div>

            <HubSpotModal
                isOpen={isModalOpen}
                onClose={() => setIsModalOpen(false)}
            />
        </section>
    );
}
