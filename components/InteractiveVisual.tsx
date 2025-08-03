import React, { useRef, useState } from 'react';
import { motion } from 'framer-motion';

const InteractiveVisual: React.FC = () => {
    const divRef = useRef<HTMLDivElement>(null);
    const [position, setPosition] = useState({ x: -100, y: -100 });

    const handleMouse = (e: React.MouseEvent<HTMLDivElement>) => {
        if (!divRef.current) return;
        const div = divRef.current;
        const rect = div.getBoundingClientRect();
        setPosition({ x: e.clientX - rect.left, y: e.clientY - rect.top });
    };
    
    const handleMouseLeave = () => {
      setPosition({ x: -100, y: -100 });
    }

    return (
        <motion.div
            ref={divRef}
            onMouseMove={handleMouse}
            onMouseLeave={handleMouseLeave}
            className="group relative aspect-video bg-slate-100 dark:bg-slate-900/50 rounded-2xl shadow-2xl shadow-primary-500/10 border border-slate-200 dark:border-slate-800 p-2 overflow-hidden"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.6, ease: [0.16, 1, 0.3, 1] }}
        >
            {/* Grid background */}
            <div className="absolute inset-0 z-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:36px_36px]"></div>
            
            {/* Spotlight effect */}
            <motion.div
                className="pointer-events-none absolute -inset-px rounded-xl opacity-0 transition-opacity duration-300 group-hover:opacity-100"
                style={{
                    background: `radial-gradient(400px circle at ${position.x}px ${position.y}px, rgba(249, 115, 22, 0.15), transparent 80%)`,
                }}
            />
            
            {/* Placeholder Content */}
            <div className="relative z-10 flex h-full w-full items-center justify-center">
                 <img 
                    src="https://picsum.photos/seed/saasier-aurora/1200/675" 
                    alt="SaaS Dashboard Illustration"
                    className="w-full h-full object-cover rounded-lg opacity-70 group-hover:opacity-90 transition-opacity duration-300"
                 />
            </div>
        </motion.div>
    );
};

export default InteractiveVisual;