import React from 'react';
import { motion, useScroll } from 'framer-motion';

export const ProgressIndicator = () => {
  const { scrollYProgress } = useScroll();

  return (
    <>
      {/* Desktop side progress */}
      <div className="fixed right-8 top-1/2 -translate-y-1/2 z-50 hidden md:flex flex-col gap-4">
        {[...Array(10)].map((_, i) => (
          <div key={i} className="flex items-center gap-2 group">
            <span className="text-[10px] text-white/30 font-light group-hover:text-gold transition-colors">
              {(i + 1).toString().padStart(2, '0')}
            </span>
            <div className="w-[1px] h-4 bg-white/20 group-hover:bg-gold transition-colors relative overflow-hidden">
              {/* Optional dynamic fill based on scroll could go here if we calculated section bounds */}
            </div>
          </div>
        ))}
      </div>

      {/* Mobile top/bottom progress bar */}
      <motion.div 
        className="fixed bottom-0 left-0 h-1 bg-gold z-50 md:hidden"
        style={{ scaleX: scrollYProgress, transformOrigin: '0%' }}
      />
    </>
  );
};
