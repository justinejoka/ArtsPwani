'use client';

import PageHeader from '../components/PageHeader';
import { motion } from 'framer-motion';

export default function ProjectsPage() {
    const projects = [
        {
            title: 'Clean Water Initiative',
            category: 'Infrastructure',
            image: 'https://images.unsplash.com/photo-1594398901394-4e34939a4fd0?w=800&h=500&fit=crop',
            description: 'Providing clean and safe drinking water to rural communities through sustainable water systems.',
            impact: '100,000+ people served',
            location: 'Rural Communities',
        },
        {
            title: 'Education for All',
            category: 'Education',
            image: 'https://images.unsplash.com/photo-1497633762265-9d179a990aa6?w=800&h=500&fit=crop',
            description: 'Supporting underprivileged children with quality education and necessary school supplies.',
            impact: '50,000+ students supported',
            location: 'Urban & Rural Schools',
        },
        {
            title: 'Healthcare Access',
            category: 'Healthcare',
            image: 'https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=800&h=500&fit=crop',
            description: 'Mobile medical clinics bringing healthcare services to remote areas.',
            impact: '75,000+ patients treated',
            location: 'Remote Areas',
        },
        {
            title: 'Sustainable Farming',
            category: 'Agriculture',
            image: 'https://images.unsplash.com/photo-1500937386664-56d1dfef3854?w=800&h=500&fit=crop',
            description: 'Training farmers in sustainable agricultural practices and providing resources.',
            impact: '10,000+ farmers trained',
            location: 'Agricultural Regions',
        },
    ];

    return (
        <main>
            <PageHeader
                title="Our Projects"
                subtitle="Making a lasting impact through community-driven initiatives."
                backgroundImage="https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?w=1600&h=900&fit=crop"
            />

            <section className="py-16">
                <div className="container mx-auto px-4">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
                        {projects.map((project, index) => (
                            <motion.div
                                key={project.title}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.8, delay: index * 0.2 }}
                                className="bg-white rounded-lg shadow-lg overflow-hidden"
                            >
                                <div className="relative h-64">
                                    <img
                                        src={project.image}
                                        alt={project.title}
                                        className="w-full h-full object-cover"
                                    />
                                    <div className="absolute top-4 left-4">
                                        <span className="bg-blue-600 text-white px-4 py-1 rounded-full text-sm">
                                            {project.category}
                                        </span>
                                    </div>
                                </div>
                                <div className="p-6">
                                    <h3 className="text-2xl font-bold mb-3">{project.title}</h3>
                                    <p className="text-gray-600 mb-4">{project.description}</p>
                                    <div className="border-t pt-4">
                                        <div className="flex justify-between text-sm">
                                            <div>
                                                <span className="text-gray-500">Impact:</span>
                                                <span className="ml-2 font-semibold">{project.impact}</span>
                                            </div>
                                            <div>
                                                <span className="text-gray-500">Location:</span>
                                                <span className="ml-2 font-semibold">{project.location}</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
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
                        <h2 className="text-3xl font-bold mb-6">Get Involved</h2>
                        <p className="text-lg text-gray-600 mb-8">
                            Join us in making a difference. Whether through volunteering, donations, or spreading awareness, every contribution counts.
                        </p>
                        <button className="bg-red-600 text-white px-8 py-3 rounded-full text-lg font-semibold hover:bg-blue-700 transition-colors">
                            Volunteer With Us
                        </button>
                    </motion.div>
                </div>
            </section>
        </main>
    );
}
