"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

export default function ApplyPage() {
    const router = useRouter();
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [errorMsg, setErrorMsg] = useState("");

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setIsSubmitting(true);
        setErrorMsg("");

        const formData = new FormData(e.currentTarget);
        const data = {
            name: formData.get("name"),
            role: formData.get("role"),
            propertyName: formData.get("propertyName"),
            city: formData.get("city"),
            roomCount: formData.get("roomCount"),
            inquiryChannels: formData.getAll("channels"),
            email: formData.get("email"),
            whatsapp: formData.get("whatsapp"),
            frustration: formData.get("frustration"),
        };

        try {
            const res = await fetch("/api/send-email", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(data),
            });

            if (!res.ok) {
                const json = await res.json();
                throw new Error(json.error || "Failed to submit application");
            }

            // Redirect to thank you
            router.push("/thank-you");
        } catch (err: any) {
            console.error(err);
            setErrorMsg(err.message || "Something went wrong. Please try again.");
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <>
            <section className="section section-white" style={{ minHeight: "100vh", paddingTop: 100 }}>
                <div className="container">
                    <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 64 }}>
                        {/* Left Column: Value */}
                        <div className="hide-mobile">
                            <h1 style={{ marginBottom: 24 }}>Apply for the Founding Cohort</h1>
                            <p style={{ fontSize: "var(--fs-large)", color: "var(--color-gray-600)", marginBottom: 40 }}>
                                5 spots. 30 days free. Direct founder access. Your feedback shapes the product.
                            </p>

                            <div style={{ display: "flex", flexDirection: "column", gap: 24 }}>
                                <CheckItem title="FULL PRODUCT ACCESS" desc="WhatsApp AI + Email + Web Chat + Dashboard. Not a limited trial." />
                                <CheckItem title="48-HOUR SETUP" desc="We handle everything. Your team spends 30 minutes total." />
                                <CheckItem title="DIRECT FOUNDER LINE" desc="WhatsApp group with Basyir. Bugs fixed in hours." />
                                <CheckItem title="ZERO RISK" desc="No credit card. No contracts. If it doesn't work, you walk away." />
                            </div>

                            <div style={{ marginTop: 40, paddingTop: 40, borderTop: "1px solid var(--color-gray-200)", display: "flex", gap: 24, flexWrap: "wrap" }}>
                                <TrustItem icon="🏢" text="SSM Registered" />
                                <TrustItem icon="🔒" text="PDPA Compliant" />
                                <TrustItem icon="🇲🇾" text="Built in Malaysia" />
                            </div>
                        </div>

                        {/* Right Column: Form */}
                        <div style={{ background: "var(--color-gray-50)", padding: 40, borderRadius: 24 }}>
                            <h2 style={{ marginBottom: 24, fontSize: 24 }}>Tell Us About Your Property</h2>
                            {errorMsg && (
                                <div style={{ color: "red", background: "#fee2e2", padding: "12px", borderRadius: "8px", marginBottom: "16px", fontSize: "14px" }}>
                                    {errorMsg}
                                </div>
                            )}
                            <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: 20 }}>
                                <InputGroup name="name" label="Your Full Name" type="text" required />
                                <InputGroup name="role" label="Your Role" type="select" options={["General Manager", "Revenue Manager", "Reservation Manager", "Owner", "Other"]} required />
                                <InputGroup name="propertyName" label="Hotel/Property Name" type="text" required />
                                <InputGroup name="city" label="City/Location" type="text" required />
                                <InputGroup name="roomCount" label="Number of Rooms" type="select" options={["Under 50", "50-100", "100-200", "200-300", "300+"]} required />

                                <div className="form-group">
                                    <label style={{ display: "block", marginBottom: 8, fontWeight: 600, fontSize: 14 }}>Primary Inquiry Channels</label>
                                    <div style={{ display: "flex", flexWrap: "wrap", gap: 12 }}>
                                        {["WhatsApp", "Phone", "Email", "Website", "Walk-ins"].map(c => (
                                            <label key={c} style={{ display: "flex", alignItems: "center", gap: 8, fontSize: 14 }}>
                                                <input type="checkbox" name="channels" value={c} /> {c}
                                            </label>
                                        ))}
                                    </div>
                                </div>

                                <InputGroup name="email" label="Email Address" type="email" required />
                                <InputGroup name="whatsapp" label="WhatsApp Number" type="tel" required placeholder="+60..." />

                                <div className="form-group">
                                    <label style={{ display: "block", marginBottom: 8, fontWeight: 600, fontSize: 14 }}>Biggest Frustration (Optional)</label>
                                    <textarea name="frustration" className="input-field" rows={3} style={{ width: "100%", padding: 12, borderRadius: 8, border: "1px solid var(--color-gray-300)" }}></textarea>
                                </div>

                                <button
                                    type="submit"
                                    className="btn btn-primary btn-lg"
                                    style={{ width: "100%", justifyContent: "center" }}
                                    disabled={isSubmitting}
                                >
                                    {isSubmitting ? "Submitting..." : "Submit Application →"}
                                </button>
                                <p style={{ fontSize: 12, textAlign: "center", color: "var(--color-gray-500)" }}>
                                    We review every application personally and respond within 24 hours.
                                </p>
                            </form>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}

function CheckItem({ title, desc }: { title: string; desc: string }) {
    return (
        <div>
            <div style={{ fontWeight: 700, fontSize: 14, color: "var(--color-navy)", display: "flex", alignItems: "center", gap: 8 }}>
                <span style={{ color: "var(--color-green)" }}>✓</span> {title}
            </div>
            <div style={{ fontSize: 14, color: "var(--color-gray-600)", paddingLeft: 20 }}>{desc}</div>
        </div>
    );
}

function TrustItem({ icon, text }: { icon: string; text: string }) {
    return (
        <div style={{ display: "flex", alignItems: "center", gap: 8, fontSize: 14, fontWeight: 600, color: "var(--color-gray-600)" }}>
            <span>{icon}</span> {text}
        </div>
    );
}

function InputGroup({ name, label, type, required = false, options, placeholder }: { name: string; label: string; type: string; required?: boolean; options?: string[]; placeholder?: string }) {
    return (
        <div className="form-group">
            <label style={{ display: "block", marginBottom: 8, fontWeight: 600, fontSize: 14 }}>
                {label} {required && <span style={{ color: "red" }}>*</span>}
            </label>
            {type === "select" ? (
                <select name={name} className="input-field" required={required} style={{ width: "100%", padding: 12, borderRadius: 8, border: "1px solid var(--color-gray-300)" }}>
                    <option value="">Select...</option>
                    {options?.map(o => <option key={o} value={o}>{o}</option>)}
                </select>
            ) : (
                <input
                    name={name}
                    type={type}
                    required={required}
                    placeholder={placeholder}
                    className="input-field"
                    style={{ width: "100%", padding: 12, borderRadius: 8, border: "1px solid var(--color-gray-300)" }}
                />
            )}
        </div>
    );
}
