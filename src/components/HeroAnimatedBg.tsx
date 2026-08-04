'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { ShieldCheck, Shield, Home, Sparkles, CheckCircle } from 'lucide-react';

export const HeroAnimatedBg: React.FC = () => {
  return (
    <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none select-none">
      {/* Pest Control Grid Pattern Overlay */}
      <div className="absolute inset-0 opacity-15 bg-[linear-gradient(to_right,#1F6B3A30_1px,transparent_1px),linear-gradient(to_bottom,#1F6B3A30_1px,transparent_1px)] [background-size:32px_32px]" />

      {/* Radial Scanning Glow Beam */}
      <motion.div
        animate={{
          scale: [1, 1.25, 1],
          opacity: [0.15, 0.35, 0.15],
        }}
        transition={{
          duration: 6,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
        className="absolute -top-32 -left-32 w-96 h-96 bg-brand-green-500/20 rounded-full blur-3xl"
      />

      <motion.div
        animate={{
          scale: [1.2, 1, 1.2],
          opacity: [0.2, 0.4, 0.2],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
        className="absolute -bottom-32 -right-32 w-96 h-96 bg-brand-amber-500/20 rounded-full blur-3xl"
      />

      {/* Animated Floating Protection Shield 1 */}
      <motion.div
        animate={{
          y: [-10, 10, -10],
          rotate: [-3, 3, -3],
        }}
        transition={{
          duration: 7,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
        className="absolute top-12 left-10 text-brand-green-400/25 hidden md:block"
      >
        <ShieldCheck className="w-24 h-24 stroke-[1.5]" />
      </motion.div>

      {/* Animated Floating Home Protection Outline 2 */}
      <motion.div
        animate={{
          y: [10, -10, 10],
          x: [-5, 5, -5],
        }}
        transition={{
          duration: 9,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
        className="absolute bottom-16 left-1/4 text-brand-amber-400/20 hidden lg:block"
      >
        <Home className="w-20 h-20 stroke-[1.5]" />
      </motion.div>

      {/* Animated Shield 3 */}
      <motion.div
        animate={{
          y: [-12, 8, -12],
          rotate: [2, -2, 2],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
        className="absolute top-20 right-16 text-brand-green-300/20 hidden md:block"
      >
        <Shield className="w-28 h-28 stroke-[1.5]" />
      </motion.div>

      {/* Protection Scan Ring */}
      <motion.div
        animate={{
          scale: [0.9, 1.1, 0.9],
          opacity: [0.1, 0.3, 0.1],
        }}
        transition={{
          duration: 5,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full border border-brand-green-500/20 pointer-events-none"
      />
    </div>
  );
};
