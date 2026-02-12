"use client";

import { useState } from "react";

interface LeadFormProps {
    onSuccess: () => void;
}

export function LeadForm({ onSuccess }: LeadFormProps) {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        company: "",
        role: "",
    });
    const [errors, setErrors] = useState<Record<string, string>>({});
    const [isSubmitting, setIsSubmitting] = useState(false);

    const validate = () => {
        const newErrors: Record<string, string> = {};
        if (!formData.name.trim()) newErrors.name = "Name is required";
        if (!formData.email.trim()) {
            newErrors.email = "Email is required";
        } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
            newErrors.email = "Invalid email format";
        }
        if (!formData.company.trim()) newErrors.company = "Company name is required";
        if (!formData.role.trim()) newErrors.role = "Job title is required";

        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        if (!validate()) return;

        setIsSubmitting(true);

        // Simulate API call or data processing
        // In a real scenario, we would send this data to an API endpoint (e.g. /api/submit-lead)
        await new Promise((resolve) => setTimeout(resolve, 800));

        setIsSubmitting(false);
        onSuccess();
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setFormData((prev) => ({ ...prev, [name]: value }));
        // Clear error when user types
        if (errors[name]) {
            setErrors((prev) => {
                const newErrors = { ...prev };
                delete newErrors[name];
                return newErrors;
            });
        }
    };

    return (
        <form onSubmit={handleSubmit} className="lead-form card" style={{ padding: "2rem" }}>
            <h2 style={{ marginBottom: "1.5rem", fontSize: "1.5rem", fontWeight: "600" }}>
                Tell us about yourself
            </h2>
            <p style={{ marginBottom: "1.5rem", color: "var(--color-gray-600)" }}>
                Complete this step to unlock our live calendar and schedule your personalized demo.
            </p>

            <div className="form-group" style={{ marginBottom: "1rem" }}>
                <label htmlFor="name" style={{ display: "block", marginBottom: "0.5rem", fontWeight: "500" }}>
                    Full Name
                </label>
                <input
                    id="name"
                    name="name"
                    type="text"
                    value={formData.name}
                    onChange={handleChange}
                    className={`input ${errors.name ? "input-error" : ""}`}
                    style={{ width: "100%", padding: "0.75rem", borderRadius: "0.5rem", border: "1px solid var(--color-gray-300)" }}
                    placeholder="John Doe"
                />
                {errors.name && <span style={{ color: "#ef4444", fontSize: "0.875rem" }}>{errors.name}</span>}
            </div>

            <div className="form-group" style={{ marginBottom: "1rem" }}>
                <label htmlFor="email" style={{ display: "block", marginBottom: "0.5rem", fontWeight: "500" }}>
                    Work Email
                </label>
                <input
                    id="email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    className={`input ${errors.email ? "input-error" : ""}`}
                    style={{ width: "100%", padding: "0.75rem", borderRadius: "0.5rem", border: "1px solid var(--color-gray-300)" }}
                    placeholder="john@company.com"
                />
                {errors.email && <span style={{ color: "#ef4444", fontSize: "0.875rem" }}>{errors.email}</span>}
            </div>

            <div className="form-group" style={{ marginBottom: "1rem" }}>
                <label htmlFor="company" style={{ display: "block", marginBottom: "0.5rem", fontWeight: "500" }}>
                    Company Name
                </label>
                <input
                    id="company"
                    name="company"
                    type="text"
                    value={formData.company}
                    onChange={handleChange}
                    className={`input ${errors.company ? "input-error" : ""}`}
                    style={{ width: "100%", padding: "0.75rem", borderRadius: "0.5rem", border: "1px solid var(--color-gray-300)" }}
                    placeholder="Hotel Brand / Management Co."
                />
                {errors.company && <span style={{ color: "#ef4444", fontSize: "0.875rem" }}>{errors.company}</span>}
            </div>

            <div className="form-group" style={{ marginBottom: "1.5rem" }}>
                <label htmlFor="role" style={{ display: "block", marginBottom: "0.5rem", fontWeight: "500" }}>
                    Job Title
                </label>
                <input
                    id="role"
                    name="role"
                    type="text"
                    value={formData.role}
                    onChange={handleChange}
                    className={`input ${errors.role ? "input-error" : ""}`}
                    style={{ width: "100%", padding: "0.75rem", borderRadius: "0.5rem", border: "1px solid var(--color-gray-300)" }}
                    placeholder="GM, Revenue Manager, Owner"
                />
                {errors.role && <span style={{ color: "#ef4444", fontSize: "0.875rem" }}>{errors.role}</span>}
            </div>

            <button
                type="submit"
                className="btn btn-primary"
                disabled={isSubmitting}
                style={{ width: "100%", padding: "1rem", fontSize: "1rem" }}
            >
                {isSubmitting ? "Processing..." : "See Available Times →"}
            </button>

            <p style={{ marginTop: "1rem", fontSize: "0.875rem", color: "var(--color-gray-500)", textAlign: "center" }}>
                🔒 Your information is secure. We hate spam too.
            </p>
        </form>
    );
}
