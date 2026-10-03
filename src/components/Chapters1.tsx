import React, { useState } from 'react';
import { motion, useScroll, useTransform, AnimatePresence } from 'framer-motion';

// Shared Chapter Wrapper
export const Chapter = ({ children, className = "" }: { children: React.ReactNode, className?: string }) => {
  return (
    <section className={`min-h-screen w-full flex items-center justify-center relative px-6 py-20 ${className}`}>
      {children}
    </section>
  );
};

import photo2 from '../assets/image copy.webp';
import photo4 from '../assets/image copy 3.webp';
import siblingPhoto from '../assets/image copy 4.webp';
import childhoodPhoto from '../assets/AdobeExpressPhotos_169e1b8f3268409898f8e3e94cd29135_CopyEdited.webp';
import schoolPhoto from '../assets/image copy 5.webp';

export const IntroScreen = ({ onStart }: { onStart: () => void }) => {
  const [step, setStep] = useState(0);

  React.useEffect(() => {
    const timer = setInterval(() => {
      setStep((prev) => (prev < 4 ? prev + 1 : prev));
    }, 3000);
    return () => clearInterval(timer);
  }, []);

  const bgImages = [
    { src: childhoodPhoto, style: { top: '10%', left: '5%', transform: 'rotate(-6deg)' } },
    { src: schoolPhoto, style: { bottom: '10%', right: '5%', transform: 'rotate(4deg)' } },
    { src: siblingPhoto, style: { top: '15%', right: '10%', transform: 'rotate(2deg)' } },
    { src: photo2, style: { bottom: '15%', left: '10%', transform: 'rotate(-3deg)' } },
  ];

  return (
    <Chapter className="bg-[#050914] flex-col text-center overflow-hidden">
      <div className="absolute inset-0 z-0 pointer-events-none">
        {bgImages.map((img, i) => (
          <AnimatePresence key={i}>
            {step >= i && (
              <motion.img
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 0.15, scale: 1 }}
                transition={{ duration: 2 }}
                src={img.src}
                className="absolute w-40 md:w-64 object-contain rounded-sm shadow-2xl"
                style={img.style}
              />
            )}
          </AnimatePresence>
        ))}
      </div>
      
      <AnimatePresence mode="wait">
        {step === 0 && (
          <motion.p key="1" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 1.5 }} className="text-xl md:text-2xl text-ivory/80 font-light tracking-wide">
            20 years ago...
          </motion.p>
        )}
        {step === 1 && (
          <motion.p key="2" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 1.5 }} className="text-xl md:text-2xl text-ivory/80 font-light tracking-wide">
            I got someone very special.
          </motion.p>
        )}
        {step === 2 && (
          <motion.p key="3" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 1.5 }} className="text-xl md:text-2xl text-ivory/80 font-light tracking-wide max-w-lg leading-relaxed">
            I just didn't know how special you would become.
          </motion.p>
        )}
        {step >= 3 && (
          <motion.div key="4" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 2 }} className="flex flex-col items-center relative z-10">
            <h1 className="text-4xl sm:text-5xl md:text-7xl font-cinematic text-ivory mb-6 tracking-wider md:tracking-widest uppercase break-words w-full px-2" style={{ textShadow: '0 0 40px rgba(212, 175, 55, 0.3)' }}>
              Manikandan
            </h1>
            <p className="text-lg md:text-xl text-ivory/60 font-light mb-16 italic">
              My little brother. My favourite person.
            </p>
            <motion.button
              initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1, duration: 1 }}
              onClick={onStart}
              className="px-8 py-4 rounded-full border border-gold/30 text-gold hover:bg-gold/10 hover:border-gold/60 transition-all duration-500 tracking-widest text-sm uppercase flex flex-col items-center gap-2 group"
            >
              Tap to Begin <span className="text-red-500 group-hover:scale-110 transition-transform">❤️</span>
            </motion.button>
          </motion.div>
        )}
      </AnimatePresence>
    </Chapter>
  );
};

export const Chapter01 = () => (
  <Chapter>
    <motion.div 
      initial={{ opacity: 0, y: 50 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 1.5 }} viewport={{ once: true, margin: "-100px" }}
      className="max-w-2xl mx-auto text-center"
    >
      <h2 className="text-sm uppercase tracking-[0.3em] text-gold/60 mb-6 font-semibold">Chapter 01</h2>
      <h3 className="text-4xl md:text-5xl font-cinematic text-ivory mb-12">The Little Boy</h3>
      <div className="space-y-8 text-lg md:text-xl text-ivory/80 font-light leading-relaxed">
        <p>Once upon a time, I held a tiny hand.</p>
        <p>I never knew that little hand would one day become the shoulder I lean on.</p>
      </div>
      
      <div className="mt-20 flex justify-center">
        <div className="w-72 md:w-80 h-96 md:h-[28rem] rounded-sm border border-white/20 p-2 bg-white/5 backdrop-blur-sm shadow-2xl -rotate-2 overflow-hidden">
          <img src={childhoodPhoto} alt="Childhood photo" className="w-full h-full object-cover rounded-sm" />
        </div>
      </div>
    </motion.div>
  </Chapter>
);

export const Chapter02 = () => (
  <Chapter>
    <motion.div 
      initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ duration: 2 }} viewport={{ once: true, margin: "-100px" }}
      className="max-w-2xl mx-auto text-center"
    >
      <h2 className="text-sm uppercase tracking-[0.3em] text-gold/60 mb-6 font-semibold">Chapter 02</h2>
      <h3 className="text-4xl md:text-5xl font-cinematic text-ivory mb-12">I Didn't Know Yet...</h3>
      <div className="space-y-8 text-lg md:text-xl text-ivory/80 font-light leading-relaxed">
        <p>When I first saw you as a little kid, I didn't really understand how much you would mean to me.</p>
        <p>You got all the love... and maybe that's why, for a while, I didn't really like you.</p>
        <p className="pt-8">But slowly...</p>
        <p>you started showing me your love.</p>
        <p className="pt-8">And slowly...</p>
        <p>I started realizing how lucky I was to have you.</p>
      </div>
    </motion.div>
  </Chapter>
);

export const Chapter03 = () => (
  <Chapter>
    <motion.div 
      initial={{ opacity: 0, y: 50 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 1.5 }} viewport={{ once: true, margin: "-100px" }}
      className="max-w-3xl mx-auto text-center"
    >
      <h2 className="text-sm uppercase tracking-[0.3em] text-gold/60 mb-6 font-semibold">Chapter 03</h2>
      <div className="mb-16 opacity-30 flex justify-center">
        {/* Simple silhouette representation */}
        <svg width="100" height="120" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" className="text-gold">
          <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
          <circle cx="9" cy="7" r="4" />
          <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
          <path d="M16 3.13a4 4 0 0 1 0 7.75" />
        </svg>
      </div>
      <div className="space-y-8 text-xl md:text-2xl text-ivory/90 font-light leading-relaxed">
        <p>Everyone went to school on their first day holding their Amma or Appa's hand.</p>
        <p className="text-2xl md:text-3xl text-gold font-cinematic py-6">But you... You went with me.</p>
        <p>I still remember holding your hand and walking you to school.</p>
      </div>
      <div className="mt-16 max-w-md mx-auto h-64 md:h-80 rounded-sm border border-white/5 p-2 bg-white/5 shadow-2xl overflow-hidden">
        <img src={schoolPhoto} alt="School day" className="w-full h-full object-cover rounded-sm" />
      </div>
    </motion.div>
  </Chapter>
);

export const Chapter04 = () => {
  const [revealed, setRevealed] = useState(false);
  return (
    <Chapter>
      <motion.div 
        initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ duration: 1.5 }} viewport={{ once: true }}
        className="max-w-2xl mx-auto text-center"
      >
        <h2 className="text-sm uppercase tracking-[0.3em] text-gold/60 mb-6 font-semibold">Chapter 04</h2>
        <h3 className="text-3xl md:text-4xl font-cinematic text-ivory mb-12">And Whenever You Got Into Trouble...</h3>
        <div className="space-y-6 text-lg md:text-xl text-ivory/80 font-light leading-relaxed">
          <p>Whenever you got punished...</p>
          <p>somehow, I was there.</p>
          <p>Standing outside your classroom.</p>
          <p>Waiting for you.</p>
          <p>Taking your side.</p>
          <p className="text-gold pt-4">Because that's what Akka's do. ❤️</p>
        </div>
        
        <div className="mt-16 h-20">
          {!revealed ? (
            <button 
              onClick={() => setRevealed(true)}
              className="px-6 py-3 rounded-full border border-white/20 text-white/60 hover:bg-white/10 hover:text-white transition-all"
            >
              Remember this? 😂
            </button>
          ) : (
            <motion.p 
              initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }}
              className="text-2xl font-cinematic text-ivory italic"
            >
              Yes. I remember EVERYTHING.
            </motion.p>
          )}
        </div>
      </motion.div>
    </Chapter>
  );
};
