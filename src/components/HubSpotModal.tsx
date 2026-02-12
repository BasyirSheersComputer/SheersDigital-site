"use client";

import { useEffect, useRef } from "react";
import { HubSpotMeeting } from "./HubSpotMeeting";
import Link from "next/link";

interface HubSpotModalProps {
    isOpen: boolean;
    onClose: () => void;
}

export function HubSpotModal({ isOpen, onClose }: HubSpotModalProps) {
    const modalRef = useRef<HTMLDivElement>(null);

    // Close on Escape key
    useEffect(() => {
        const handleEsc = (e: KeyboardEvent) => {
            if (e.key === "Escape") onClose();
        };
        if (isOpen) {
            document.addEventListener("keydown", handleEsc);
            document.body.style.overflow = "hidden"; // Prevent background scrolling
        }
        return () => {
            document.removeEventListener("keydown", handleEsc);
            document.body.style.overflow = "unset";
        };
    }, [isOpen, onClose]);

    // Close on click outside
    const handleBackdropClick = (e: React.MouseEvent) => {
        if (modalRef.current && !modalRef.current.contains(e.target as Node)) {
            onClose();
        }
    };

    if (!isOpen) return null;

    return (
        <div
            className="modal-backdrop"
            onClick={handleBackdropClick}
            style={{
                position: "fixed",
                top: 0,
                left: 0,
                right: 0,
                bottom: 0,
                backgroundColor: "rgba(0, 0, 0, 0.5)",
                backdropFilter: "blur(4px)",
                zIndex: 1000,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                padding: "1rem",
                opacity: 1,
                transition: "opacity 0.2s ease-in-out",
            }}
        >
            <div
                ref={modalRef}
                className="modal-content card"
                style={{
                    width: "100%",
                    maxWidth: "800px",
                    maxHeight: "90vh",
                    overflowY: "auto",
                    position: "relative",
                    backgroundColor: "white",
                    borderRadius: "1rem",
                    padding: "2rem",
                    boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)",
                }}
            >
                <button
                    onClick={onClose}
                    aria-label="Close modal"
                    style={{
                        position: "absolute",
                        top: "1rem",
                        right: "1rem",
                        background: "none",
                        border: "none",
                        fontSize: "1.5rem",
                        cursor: "pointer",
                        color: "var(--color-gray-500)",
                        zIndex: 10,
                    }}
                >
                    &times;
                </button>

                <div style={{ textAlign: "center", marginBottom: "1.5rem" }}>
                    <h3 style={{ fontSize: "1.5rem", fontWeight: "600", marginBottom: "0.5rem" }}>
                        Select a Time
                    </h3>
                    <p style={{ color: "var(--color-gray-600)" }}>
                        Choose a slot that works for you.
                    </p>
                </div>

                <HubSpotMeeting />

                <div style={{ marginTop: "2rem", textAlign: "center", paddingTop: "1rem", borderTop: "1px solid var(--color-gray-200)" }}>
                    <Link
                        href="/book-demo/thank-you?skipped=true"
                        className="text-link"
                        style={{ fontSize: "0.9rem", color: "var(--color-gray-500)", textDecoration: "underline" }}
                    >
                        I'll schedule later
                    </Link>
                </div>
            </div>
        </div>
    );
}
