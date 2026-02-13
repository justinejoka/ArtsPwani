'use client';

import { motion } from 'framer-motion';

interface PageHeaderProps {
    title: string;
    subtitle: string;
    backgroundImage: string;
}

export default function PageHeader({ title, subtitle, backgroundImage }: PageHeaderProps) {
    return (
        <section className="relative h-[40vh] min-h-[400px] flex items-center justify-center">
            <div
                className="absolute inset-0 bg-cover bg-center bg-no-repeat"
                style={{ backgroundImage: `url(${backgroundImage})` }}
            />
            <div className="absolute inset-0 bg-black/50" />
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="relative z-10 text-center text-white px-4 max-w-4xl mx-auto"
            >
                <h1 className="text-4xl md:text-5xl font-bold mb-4">{title}</h1>
                <p className="text-xl md:text-2xl">{subtitle}</p>
            </motion.div>
        </section>
    );
} 