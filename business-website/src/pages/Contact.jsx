import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Send, MessageCircle, Clock, CheckCircle, Award, Zap, Users, Calendar, Loader2 } from 'lucide-react';
import PageLayout from '../components/layout/PageLayout';
import GlassCard from '../components/ui/GlassCard';
import NeonButton from '../components/ui/NeonButton';
import NotificationModal from '../components/ui/NotificationModal';
import './Pages.css';

const Contact = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        company: '',
        message: ''
    });

    const [errors, setErrors] = useState({});
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [notification, setNotification] = useState({
        show: false,
        type: 'success',
        message: ''
    });

    // Email validation regex
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    // Validate form fields
    const validateForm = () => {
        const newErrors = {};

        if (!formData.name.trim()) {
            newErrors.name = 'Name is required';
        }

        if (!formData.email.trim()) {
            newErrors.email = 'Email is required';
        } else if (!emailRegex.test(formData.email)) {
            newErrors.email = 'Please enter a valid email address';
        }

        if (!formData.message.trim()) {
            newErrors.message = 'Message is required';
        }

        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    // Handle form submission
    const handleSubmit = async (e) => {
        e.preventDefault();

        // Validate form
        if (!validateForm()) {
            setNotification({
                show: true,
                type: 'error',
                message: 'Please fill in all required fields correctly.'
            });
            return;
        }

        setIsSubmitting(true);

        try {
            const accessKey = import.meta.env.VITE_WEB3FORMS_ACCESS_KEY;

            const response = await fetch("https://api.web3forms.com/submit", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    Accept: "application/json",
                },
                body: JSON.stringify({
                    access_key: accessKey,
                    name: formData.name,
                    email: formData.email,
                    phone: formData.phone || 'Not provided',
                    company: formData.company || 'Not provided',
                    message: formData.message,
                    subject: `New Contact from ${formData.name} - SheersSoft Website`,
                    from_name: "SheersSoft Contact Form"
                }),
            });

            const result = await response.json();

            if (result.success) {
                // Show success notification
                setNotification({
                    show: true,
                    type: 'success',
                    message: 'Your message has been sent successfully! We\'ll get back to you within 2 hours.'
                });

                // Reset form after successful submission
                setTimeout(() => {
                    setFormData({
                        name: '',
                        email: '',
                        phone: '',
                        company: '',
                        message: ''
                    });
                }, 2000);
            } else {
                throw new Error(result.message || 'Submission failed');
            }

        } catch (error) {
            console.error('Email sending failed:', error);
            setNotification({
                show: true,
                type: 'error',
                message: 'Failed to send your message. Please try again or contact us directly via email.'
            });
        } finally {
            setIsSubmitting(false);
        }
    };

    // Clear error when user starts typing
    const handleInputChange = (field, value) => {
        setFormData({ ...formData, [field]: value });
        if (errors[field]) {
            setErrors({ ...errors, [field]: '' });
        }
    };

    const contactMethods = [
        {
            icon: Phone,
            title: "WhatsApp Only",
            details: ["+60 11-6326 3808", "+60 14-330 6131"],
            note: "Call via WhatsApp Only",
            variant: "cyan",
            badge: "Instant Response"
        },
        {
            icon: Mail,
            title: "Email",
            details: ["a.basyir@sheerssoft.com", "m.hafiz@sheerssoft.com"],
            note: "24/7 Support",
            variant: "magenta",
            badge: "Professional"
        },
        {
            icon: MapPin,
            title: "Office",
            details: ["Kuala Lumpur, Malaysia"],
            note: "Remote-First Company",
            variant: "green",
            badge: "HQ Location"
        }
    ];

    const benefits = [
        { icon: CheckCircle, text: "Free initial consultation", color: "cyan" },
        { icon: Zap, text: "Customized solution proposal", color: "magenta" },
        { icon: Award, text: "No obligation quote", color: "green" },
        { icon: Users, text: "Dedicated support team", color: "cyan" }
    ];

    const stats = [
        { number: "<2hrs", label: "Response Time", icon: Clock },
        { number: "100%", label: "Client Satisfaction", icon: Award },
        { number: "24/7", label: "Support Available", icon: MessageCircle }
    ];

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: { staggerChildren: 0.1 }
        }
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.5 }
        }
    };

    return (
        <PageLayout>
            {/* Hero Section */}
            <section className="section">
                <div className="container">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="page-hero text-center"
                        style={{ marginBottom: 'var(--space-3xl)' }}
                    >
                        <div className="hero-badge" style={{ margin: '0 auto var(--space-md)' }}>
                            <MessageCircle size={14} /> <span>Get In Touch</span>
                        </div>
                        <h1 className="page-title" style={{ fontSize: 'clamp(2.5rem, 5vw, 4rem)' }}>
                            Let's Build Something <span className="text-gradient">Amazing</span>
                        </h1>
                        <p className="page-subtitle" style={{ maxWidth: '700px', margin: '0 auto' }}>
                            Have questions? We'd love to hear from you. <br />
                            <span className="text-neon-cyan">Our team typically responds within 2 hours.</span>
                        </p>
                    </motion.div>

                    {/* Stats Cards */}
                    <motion.div
                        variants={containerVariants}
                        initial="hidden"
                        animate="visible"
                        style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: 'var(--space-xl)', maxWidth: '900px', margin: '0 auto var(--space-3xl)' }}
                    >
                        {stats.map((stat, idx) => (
                            <motion.div key={idx} variants={itemVariants}>
                                <GlassCard variant={idx === 0 ? 'cyan' : idx === 1 ? 'green' : 'magenta'} style={{ padding: 'var(--space-lg)', textAlign: 'center' }}>
                                    <stat.icon size={28} style={{ color: `var(--neon-${idx === 0 ? 'cyan' : idx === 1 ? 'green' : 'magenta'})`, marginBottom: 'var(--space-sm)' }} />
                                    <div style={{ fontSize: 'clamp(1.5rem, 3vw, 2rem)', fontWeight: '900', color: `var(--neon-${idx === 0 ? 'cyan' : idx === 1 ? 'green' : 'magenta'})`, marginBottom: 'var(--space-xs)' }}>
                                        {stat.number}
                                    </div>
                                    <div style={{ fontSize: 'var(--font-size-sm)', color: 'var(--text-secondary)', fontWeight: '600' }}>
                                        {stat.label}
                                    </div>
                                </GlassCard>
                            </motion.div>
                        ))}
                    </motion.div>
                </div>
            </section>

            {/* Contact Methods & Form */}
            <section className="section">
                <div className="container">
                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: 'var(--space-3xl)' }}>

                        {/* Contact Methods */}
                        <motion.div
                            initial={{ opacity: 0, x: -30 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.6 }}
                        >
                            <h2 style={{ fontSize: 'var(--font-size-2xl)', marginBottom: 'var(--space-xl)', fontWeight: 'bold' }}>
                                Contact <span className="text-neon-cyan">Methods</span>
                            </h2>

                            <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-lg)', marginBottom: 'var(--space-2xl)' }}>
                                {contactMethods.map((method, idx) => (
                                    <motion.div
                                        key={idx}
                                        initial={{ opacity: 0, y: 20 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        transition={{ delay: 0.2 + idx * 0.1 }}
                                    >
                                        <GlassCard variant={method.variant} hover style={{ padding: 'var(--space-xl)', position: 'relative' }}>
                                            <div style={{ position: 'absolute', top: '10px', right: '10px', background: `rgba(${method.variant === 'cyan' ? '0,255,255' : method.variant === 'magenta' ? '255,0,255' : '124,252,0'},0.1)`, padding: '4px 12px', borderRadius: '20px', fontSize: 'var(--font-size-xs)', color: `var(--neon-${method.variant})`, border: `1px solid rgba(${method.variant === 'cyan' ? '0,255,255' : method.variant === 'magenta' ? '255,0,255' : '124,252,0'},0.3)` }}>
                                                {method.badge}
                                            </div>

                                            <div style={{ display: 'flex', gap: 'var(--space-lg)', alignItems: 'start' }}>
                                                <div style={{
                                                    width: '60px',
                                                    height: '60px',
                                                    borderRadius: '50%',
                                                    background: `rgba(${method.variant === 'cyan' ? '0,255,255' : method.variant === 'magenta' ? '255,0,255' : '124,252,0'},0.1)`,
                                                    display: 'flex',
                                                    alignItems: 'center',
                                                    justifyContent: 'center',
                                                    border: `2px solid var(--neon-${method.variant})`,
                                                    flexShrink: 0
                                                }}>
                                                    <method.icon size={28} style={{ color: `var(--neon-${method.variant})` }} />
                                                </div>

                                                <div style={{ flex: 1 }}>
                                                    <h3 style={{ fontSize: 'var(--font-size-lg)', fontWeight: 'bold', marginBottom: 'var(--space-sm)' }}>
                                                        {method.title}
                                                    </h3>
                                                    {method.details.map((detail, i) => (
                                                        <p key={i} style={{ color: 'var(--text-secondary)', marginBottom: '4px', fontSize: 'var(--font-size-md)' }}>
                                                            {detail}
                                                        </p>
                                                    ))}
                                                    <p style={{ fontSize: 'var(--font-size-sm)', color: `var(--neon-${method.variant})`, marginTop: 'var(--space-sm)', fontWeight: '600' }}>
                                                        💬 {method.note}
                                                    </p>
                                                </div>
                                            </div>
                                        </GlassCard>
                                    </motion.div>
                                ))}
                            </div>

                            {/* Why Contact Us */}
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.6 }}
                            >
                                <GlassCard variant="gradient" style={{ padding: 'var(--space-xl)' }}>
                                    <h3 style={{ fontSize: 'var(--font-size-lg)', marginBottom: 'var(--space-lg)', fontWeight: 'bold', textAlign: 'center' }}>
                                        🎯 Why Contact Us?
                                    </h3>
                                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: 'var(--space-md)' }}>
                                        {benefits.map((benefit, idx) => (
                                            <div key={idx} style={{ display: 'flex', alignItems: 'center', gap: 'var(--space-sm)', padding: 'var(--space-md)', background: `rgba(${benefit.color === 'cyan' ? '0,255,255' : benefit.color === 'magenta' ? '255,0,255' : '124,252,0'},0.05)`, borderRadius: 'var(--radius-md)', border: `1px solid rgba(${benefit.color === 'cyan' ? '0,255,255' : benefit.color === 'magenta' ? '255,0,255' : '124,252,0'},0.2)` }}>
                                                <benefit.icon size={20} style={{ color: `var(--neon-${benefit.color})`, flexShrink: 0 }} />
                                                <span style={{ color: 'var(--text-secondary)', fontSize: 'var(--font-size-sm)' }}>{benefit.text}</span>
                                            </div>
                                        ))}
                                    </div>
                                </GlassCard>
                            </motion.div>
                        </motion.div>

                        {/* Contact Form */}
                        <motion.div
                            initial={{ opacity: 0, x: 30 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.6, delay: 0.3 }}
                        >
                            <GlassCard variant="gradient" style={{ padding: 'var(--space-2xl)', position: 'relative', overflow: 'hidden' }}>
                                <div style={{ position: 'absolute', top: -50, right: -50, width: '200px', height: '200px', background: 'radial-gradient(circle, rgba(0,255,255,0.15) 0%, transparent 70%)', pointerEvents: 'none' }} />

                                <div style={{ textAlign: 'center', marginBottom: 'var(--space-xl)' }}>
                                    <div style={{
                                        width: '70px',
                                        height: '70px',
                                        borderRadius: '50%',
                                        background: 'rgba(255,0,255,0.1)',
                                        display: 'inline-flex',
                                        alignItems: 'center',
                                        justifyContent: 'center',
                                        border: '2px solid var(--neon-magenta)',
                                        marginBottom: 'var(--space-md)'
                                    }}>
                                        <Send size={32} style={{ color: 'var(--neon-magenta)' }} />
                                    </div>
                                    <h2 style={{ fontSize: 'var(--font-size-2xl)', fontWeight: 'bold' }}>
                                        Send Us a <span className="text-neon-magenta">Message</span>
                                    </h2>
                                    <p style={{ color: 'var(--text-secondary)', marginTop: 'var(--space-sm)' }}>
                                        We'll get back to you within 2 hours
                                    </p>
                                </div>

                                <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-lg)' }}>
                                    <div className="form-group">
                                        <label style={{
                                            display: 'block',
                                            marginBottom: 'var(--space-sm)',
                                            color: 'var(--text-primary)',
                                            fontWeight: '600',
                                            fontSize: 'var(--font-size-md)'
                                        }}>
                                            👤 Your Name <span style={{ color: 'var(--neon-cyan)' }}>*</span>
                                        </label>
                                        <input
                                            type="text"
                                            placeholder="John Doe"
                                            value={formData.name}
                                            onChange={(e) => handleInputChange('name', e.target.value)}
                                            disabled={isSubmitting}
                                            style={{
                                                width: '100%',
                                                padding: '14px 16px',
                                                background: 'rgba(255,255,255,0.03)',
                                                border: `1px solid ${errors.name ? 'rgba(255,0,0,0.5)' : 'rgba(0,255,255,0.2)'}`,
                                                borderRadius: 'var(--radius-md)',
                                                color: 'white',
                                                outline: 'none',
                                                fontSize: 'var(--font-size-md)',
                                                transition: 'all 0.3s ease',
                                                opacity: isSubmitting ? 0.5 : 1
                                            }}
                                            onFocus={(e) => e.target.style.border = '1px solid var(--neon-cyan)'}
                                            onBlur={(e) => e.target.style.border = `1px solid ${errors.name ? 'rgba(255,0,0,0.5)' : 'rgba(0,255,255,0.2)'}`}
                                        />
                                        {errors.name && (
                                            <p style={{ color: '#ff4444', fontSize: 'var(--font-size-sm)', marginTop: 'var(--space-xs)' }}>
                                                ⚠️ {errors.name}
                                            </p>
                                        )}
                                    </div>

                                    <div className="form-group">
                                        <label style={{
                                            display: 'block',
                                            marginBottom: 'var(--space-sm)',
                                            color: 'var(--text-primary)',
                                            fontWeight: '600',
                                            fontSize: 'var(--font-size-md)'
                                        }}>
                                            📧 Email Address <span style={{ color: 'var(--neon-magenta)' }}>*</span>
                                        </label>
                                        <input
                                            type="email"
                                            placeholder="john@example.com"
                                            value={formData.email}
                                            onChange={(e) => handleInputChange('email', e.target.value)}
                                            disabled={isSubmitting}
                                            style={{
                                                width: '100%',
                                                padding: '14px 16px',
                                                background: 'rgba(255,255,255,0.03)',
                                                border: `1px solid ${errors.email ? 'rgba(255,0,0,0.5)' : 'rgba(255,0,255,0.2)'}`,
                                                borderRadius: 'var(--radius-md)',
                                                color: 'white',
                                                outline: 'none',
                                                fontSize: 'var(--font-size-md)',
                                                transition: 'all 0.3s ease',
                                                opacity: isSubmitting ? 0.5 : 1
                                            }}
                                            onFocus={(e) => e.target.style.border = '1px solid var(--neon-magenta)'}
                                            onBlur={(e) => e.target.style.border = `1px solid ${errors.email ? 'rgba(255,0,0,0.5)' : 'rgba(255,0,255,0.2)'}`}
                                        />
                                        {errors.email && (
                                            <p style={{ color: '#ff4444', fontSize: 'var(--font-size-sm)', marginTop: 'var(--space-xs)' }}>
                                                ⚠️ {errors.email}
                                            </p>
                                        )}
                                    </div>

                                    <div className="form-group">
                                        <label style={{
                                            display: 'block',
                                            marginBottom: 'var(--space-sm)',
                                            color: 'var(--text-primary)',
                                            fontWeight: '600',
                                            fontSize: 'var(--font-size-md)'
                                        }}>
                                            📱 Phone / WhatsApp Number
                                        </label>
                                        <input
                                            type="tel"
                                            placeholder="+60 11-1234 5678"
                                            value={formData.phone}
                                            onChange={(e) => handleInputChange('phone', e.target.value)}
                                            disabled={isSubmitting}
                                            style={{
                                                width: '100%',
                                                padding: '14px 16px',
                                                background: 'rgba(255,255,255,0.03)',
                                                border: '1px solid rgba(124,252,0,0.2)',
                                                borderRadius: 'var(--radius-md)',
                                                color: 'white',
                                                outline: 'none',
                                                fontSize: 'var(--font-size-md)',
                                                transition: 'all 0.3s ease',
                                                opacity: isSubmitting ? 0.5 : 1
                                            }}
                                            onFocus={(e) => e.target.style.border = '1px solid var(--neon-green)'}
                                            onBlur={(e) => e.target.style.border = '1px solid rgba(124,252,0,0.2)'}
                                        />
                                    </div>

                                    <div className="form-group">
                                        <label style={{
                                            display: 'block',
                                            marginBottom: 'var(--space-sm)',
                                            color: 'var(--text-primary)',
                                            fontWeight: '600',
                                            fontSize: 'var(--font-size-md)'
                                        }}>
                                            🏢 Company Name
                                        </label>
                                        <input
                                            type="text"
                                            placeholder="Your Company Sdn Bhd"
                                            value={formData.company}
                                            onChange={(e) => handleInputChange('company', e.target.value)}
                                            disabled={isSubmitting}
                                            style={{
                                                width: '100%',
                                                padding: '14px 16px',
                                                background: 'rgba(255,255,255,0.03)',
                                                border: '1px solid rgba(0,255,255,0.2)',
                                                borderRadius: 'var(--radius-md)',
                                                color: 'white',
                                                outline: 'none',
                                                fontSize: 'var(--font-size-md)',
                                                transition: 'all 0.3s ease',
                                                opacity: isSubmitting ? 0.5 : 1
                                            }}
                                            onFocus={(e) => e.target.style.border = '1px solid var(--neon-cyan)'}
                                            onBlur={(e) => e.target.style.border = '1px solid rgba(0,255,255,0.2)'}
                                        />
                                    </div>

                                    <div className="form-group">
                                        <label style={{
                                            display: 'block',
                                            marginBottom: 'var(--space-sm)',
                                            color: 'var(--text-primary)',
                                            fontWeight: '600',
                                            fontSize: 'var(--font-size-md)'
                                        }}>
                                            💬 Your Message <span style={{ color: 'var(--neon-green)' }}>*</span>
                                        </label>
                                        <textarea
                                            rows="6"
                                            placeholder="Tell us about your project or inquiry..."
                                            value={formData.message}
                                            onChange={(e) => handleInputChange('message', e.target.value)}
                                            disabled={isSubmitting}
                                            style={{
                                                width: '100%',
                                                padding: '14px 16px',
                                                background: 'rgba(255,255,255,0.03)',
                                                border: `1px solid ${errors.message ? 'rgba(255,0,0,0.5)' : 'rgba(255,0,255,0.2)'}`,
                                                borderRadius: 'var(--radius-md)',
                                                color: 'white',
                                                outline: 'none',
                                                resize: 'vertical',
                                                fontSize: 'var(--font-size-md)',
                                                lineHeight: 1.6,
                                                transition: 'all 0.3s ease',
                                                opacity: isSubmitting ? 0.5 : 1
                                            }}
                                            onFocus={(e) => e.target.style.border = '1px solid var(--neon-magenta)'}
                                            onBlur={(e) => e.target.style.border = `1px solid ${errors.message ? 'rgba(255,0,0,0.5)' : 'rgba(255,0,255,0.2)'}`}
                                        ></textarea>
                                        {errors.message && (
                                            <p style={{ color: '#ff4444', fontSize: 'var(--font-size-sm)', marginTop: 'var(--space-xs)' }}>
                                                ⚠️ {errors.message}
                                            </p>
                                        )}
                                    </div>

                                    <NeonButton
                                        type="submit"
                                        variant="primary"
                                        size="lg"
                                        disabled={isSubmitting}
                                        style={{
                                            width: '100%',
                                            justifyContent: 'center',
                                            marginTop: 'var(--space-md)',
                                            fontSize: 'var(--font-size-lg)',
                                            padding: '16px',
                                            opacity: isSubmitting ? 0.7 : 1,
                                            cursor: isSubmitting ? 'not-allowed' : 'pointer'
                                        }}
                                    >
                                        {isSubmitting ? (
                                            <>
                                                <Loader2 size={20} style={{ animation: 'spin 1s linear infinite' }} />
                                                Sending...
                                            </>
                                        ) : (
                                            <>
                                                Send Message <Send size={20} />
                                            </>
                                        )}
                                    </NeonButton>

                                    <p style={{ textAlign: 'center', fontSize: 'var(--font-size-sm)', color: 'var(--text-secondary)', marginTop: 'var(--space-sm)' }}>
                                        🔒 Your information is secure and will never be shared
                                    </p>
                                </form>
                            </GlassCard>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Notification Modal */}
            <NotificationModal
                show={notification.show}
                type={notification.type}
                message={notification.message}
                onClose={() => setNotification({ ...notification, show: false })}
            />
        </PageLayout>
    );
};

export default Contact;
