'use client';

import PageHeader from '../components/PageHeader';
import { motion } from 'framer-motion';
import { MapPin, Phone, Mail } from 'lucide-react';

export default function ContactPage() {
    const contactInfo = [
        {
            icon: <MapPin className="w-6 h-6" />,
            title: 'Visit Us',
            details: ['123 NGO Street', 'Charity Lane', 'New Delhi, 110001'],
        },
        {
            icon: <Phone className="w-6 h-6" />,
            title: 'Call Us',
            details: ['+91 98765 43210', '+91 11 2345 6789'],
        },
        {
            icon: <Mail className="w-6 h-6" />,
            title: 'Email Us',
            details: ['info@ngodomain.org', 'support@ngodomain.org'],
        },
    ];

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        console.log('Form submitted');
    };

    return (
        <main>
            <PageHeader
                title="Contact Us"
                subtitle="We'd love to hear from you. Get in touch with us today."
                backgroundImage="https://images.unsplash.com/photo-1521737604893-d14cc237f11d?w=1600&h=900&fit=crop"
            />

            <section className="py-16">
                <div className="container mx-auto px-4">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
                        <motion.div
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.8 }}
                        >
                            <h2 className="text-3xl font-bold mb-8">Get in Touch</h2>
                            <div className="space-y-8">
                                {contactInfo.map((info) => (
                                    <div key={info.title} className="flex items-start">
                                        <div className="bg-blue-100 p-3 rounded-full mr-4">
                                            {info.icon}
                                        </div>
                                        <div>
                                            <h3 className="text-xl font-semibold mb-2">{info.title}</h3>
                                            {info.details.map((detail) => (
                                                <p key={detail} className="text-gray-600">
                                                    {detail}
                                                </p>
                                            ))}
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, x: 20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.8 }}
                            className="bg-white rounded-lg shadow-lg p-8"
                        >
                            <h2 className="text-3xl font-bold mb-8">Send Message</h2>
                            <form onSubmit={handleSubmit} className="space-y-6">
                                <div>
                                    <label htmlFor="name" className="block text-gray-700 mb-2">
                                        Name
                                    </label>
                                    <input
                                        type="text"
                                        id="name"
                                        className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                                        required
                                    />
                                </div>
                                <div>
                                    <label htmlFor="email" className="block text-gray-700 mb-2">
                                        Email
                                    </label>
                                    <input
                                        type="email"
                                        id="email"
                                        className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                                        required
                                    />
                                </div>
                                <div>
                                    <label htmlFor="message" className="block text-gray-700 mb-2">
                                        Message
                                    </label>
                                    <textarea
                                        id="message"
                                        rows={5}
                                        className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                                        required
                                    ></textarea>
                                </div>
                                <button
                                    type="submit"
                                    className="w-full bg-blue-600 text-white py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
                                >
                                    Send
                                </button>
                            </form>
                        </motion.div>
                    </div>
                </div>
            </section>

            <section className="py-16 bg-gray-50">
                <div className="container mx-auto px-4">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        className="max-w-3xl mx-auto text-center"
                    >
                        <h2 className="text-3xl font-bold mb-6">Our Global Presence</h2>
                        <p className="text-lg text-gray-600">
                            With offices and partners worldwide, we're working to create positive change
                            across the globe.
                        </p>
                    </motion.div>
                </div>
            </section>
        </main>
    );
}
