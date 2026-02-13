'use client';

import PageHeader from '../components/PageHeader';
import { motion } from 'framer-motion';
import { Target, Heart, Globe, Users } from 'lucide-react';

export default function MissionPage() {
    const goals = [
        {
            icon: <Target className="w-12 h-12 text-red-600" />,
            title: 'Clear Vision',
            description: 'Working towards a world where every community has access to basic necessities and opportunities.',
        },
        {
            icon: <Heart className="w-12 h-12 text-red-600" />,
            title: 'Compassionate Action',
            description: 'Taking meaningful steps to address immediate needs while building long-term solutions.',
        },
        {
            icon: <Globe className="w-12 h-12 text-red-600" />,
            title: 'Global Impact',
            description: 'Creating positive change that reaches communities across borders and cultures.',
        },
        {
            icon: <Users className="w-12 h-12 text-red-600" />,
            title: 'Community First',
            description: 'Empowering local communities to lead their own development and growth.',
        },
    ];

    const achievements = [
        {
            year: '2022',
            title: 'Community Development',
            description: 'Launched 15 new community centers across rural areas.',
        },
        {
            year: '2021',
            title: 'Education Initiative',
            description: 'Provided scholarships to 1000+ underprivileged students.',
        },
        {
            year: '2020',
            title: 'COVID-19 Response',
            description: 'Distributed essential supplies to 50,000+ families.',
        },
        {
            year: '2019',
            title: 'Clean Water Project',
            description: 'Installed water purification systems in 100+ villages.',
        },
    ];

    return (
        <main>
            <PageHeader
                title="Our Mission"
                subtitle="Committed to building sustainable and empowered communities."
                backgroundImage="/images/human.jpeg" 
            />

            {/* Goals Section */}
            <section className="py-16 bg-white">
                <div className="container mx-auto px-4">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        className="max-w-3xl mx-auto text-center mb-16"
                    >
                        <h2 className="text-3xl font-bold mb-6">Our Goals</h2>
                        <p className="text-lg text-gray-600">
                            We strive to create lasting positive change through sustainable development and community empowerment.
                        </p>
                    </motion.div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
                        {goals.map((goal, index) => (
                            <motion.div
                                key={goal.title}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.8, delay: index * 0.2 }}
                                className="text-center p-6"
                            >
                                <div className="mb-4 flex justify-center">{goal.icon}</div>
                                <h3 className="text-xl font-semibold mb-3">{goal.title}</h3>
                                <p className="text-gray-600">{goal.description}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Achievements Section */}
            <section className="py-16 bg-gray-50">
                <div className="container mx-auto px-4">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        className="max-w-3xl mx-auto text-center mb-16"
                    >
                        <h2 className="text-3xl font-bold mb-6">Our Achievements</h2>
                        <p className="text-lg text-gray-600">
                            Over the years, we've made significant progress in our mission to create positive change.
                        </p>
                    </motion.div>

                    <div className="max-w-4xl mx-auto">
                        {achievements.map((achievement, index) => (
                            <motion.div
                                key={achievement.year}
                                initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                transition={{ duration: 0.8 }}
                                className="flex items-start mb-12 last:mb-0"
                            >
                                <div className="w-24 flex-shrink-0">
                                    <div className="text-2xl font-bold text-blue-600">{achievement.year}</div>
                                </div>
                                <div className="flex-grow">
                                    <h3 className="text-xl font-semibold mb-2">{achievement.title}</h3>
                                    <p className="text-gray-600">{achievement.description}</p>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>
        </main>
    );
}
