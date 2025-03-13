import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send } from 'lucide-react';
import { getDatabase, ref, push } from 'firebase/database';
import { initializeApp } from 'firebase/app';

// Firebase configuration (Replace with your production credentials)
const firebaseConfig = {
  apiKey: "YOUR_API_KEY",
  authDomain: "YOUR_AUTH_DOMAIN",
  databaseURL: "YOUR_DATABASE_URL",
  projectId: "YOUR_PROJECT_ID",
  storageBucket: "YOUR_STORAGE_BUCKET",
  messagingSenderId: "YOUR_MESSAGING_SENDER_ID",
  appId: "YOUR_APP_ID"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const database = getDatabase(app);

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    message: '',
    service: '',
  });

  const [formStatus, setFormStatus] = useState({ submitted: false, error: false });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const messagesRef = ref(database, 'contactMessages');
      await push(messagesRef, formData);
      setFormStatus({ submitted: true, error: false });
      setFormData({ name: '', email: '', phone: '', company: '', message: '', service: '' });
    } catch (error) {
      console.error('Error submitting form:', error);
      setFormStatus({ submitted: false, error: true });
    }
  };

  return (
    <section id="contact" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-base font-semibold text-blue-600 tracking-wide uppercase">Contact Us</h2>
          <p className="mt-2 text-3xl font-extrabold text-gray-900 sm:text-4xl">Get in Touch</p>
        </div>
        <div className="mt-16 grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div className="bg-white rounded-lg shadow-md p-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">Send Us a Message</h3>
            {formStatus.submitted ? (
              <div className="bg-green-50 border border-green-200 rounded-md p-4 text-center">
                <h4 className="text-lg font-medium text-green-800 mb-2">Thank You!</h4>
                <p className="text-green-700">Your message has been received.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <input type="text" name="name" value={formData.name} onChange={handleChange} required placeholder="Full Name" />
                <input type="email" name="email" value={formData.email} onChange={handleChange} required placeholder="Email Address" />
                <textarea name="message" value={formData.message} onChange={handleChange} required placeholder="Message" />
                <button type="submit" className="bg-blue-600 text-white px-4 py-2 rounded">Send Message</button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;