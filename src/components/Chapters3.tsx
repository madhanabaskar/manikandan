import React from 'react';
import { motion, useInView } from 'framer-motion';
import { Chapter } from './Chapters1';
import siblingPhoto from '../assets/image copy 4.webp';

export const Chapter08 = () => (
  <Chapter>
    <div className="max-w-3xl mx-auto text-center">
      <h2 className="text-sm uppercase tracking-[0.3em] text-gold/60 mb-12 font-semibold">Chapter 08</h2>
      <h3 className="text-3xl md:text-5xl font-cinematic text-ivory mb-16">Promise Me One Thing.</h3>
      
      <div className="space-y-4 text-xl md:text-2xl text-ivory/70 font-light mb-20">
        <p>People may come.</p>
        <p>People may leave.</p>
        <p>Life may change.</p>
        <p>We may fight.</p>
        <p>We may become busy.</p>
        <p>We may grow older.</p>
      </div>

      <motion.div 
        initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 1.5, delay: 0.5 }} viewport={{ once: true }}
        className="space-y-8"
      >
        <h1 className="text-4xl md:text-6xl font-cinematic text-ivory">"But don't ever forget..."</h1>
        <h1 className="text-4xl md:text-6xl font-cinematic text-gold">"Your Akka will always be here."</h1>
      </motion.div>

      <motion.div 
        initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ duration: 1.5, delay: 2 }} viewport={{ once: true }}
        className="mt-16 space-y-4 text-lg md:text-xl text-ivory/60 font-light"
      >
        <p>Even if everyone leaves...</p>
        <p>I'll still be here.</p>
      </motion.div>
      
      <motion.div 
        initial={{ opacity: 0, scale: 0.9 }} whileInView={{ opacity: 1, scale: 1 }} transition={{ duration: 2, delay: 3 }} viewport={{ once: true }}
        className="mt-20 mx-auto max-w-md md:max-w-lg rounded-sm border-2 border-white/10 p-2 shadow-2xl bg-white/5 overflow-hidden"
      >
        <img src={siblingPhoto} alt="Siblings together" className="w-full h-auto max-h-[70vh] object-contain rounded-sm" />
      </motion.div>
    </div>
  </Chapter>
);

export const Chapter09 = () => (
  <Chapter className="bg-gradient-to-b from-midnight to-[#1a140a]">
    <motion.div 
      initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ duration: 2 }} viewport={{ once: true }}
      className="max-w-3xl mx-auto text-center"
    >
      <h2 className="text-sm uppercase tracking-[0.3em] text-gold/60 mb-12 font-semibold">Chapter 09</h2>
      <h3 className="text-4xl md:text-6xl font-cinematic text-ivory mb-16" style={{ textShadow: '0 0 40px rgba(212, 175, 55, 0.2)' }}>One Day...</h3>
      
      <div className="space-y-8 text-xl md:text-2xl text-ivory/90 font-light leading-relaxed">
        <p>One day, we'll achieve our dreams.</p>
        <p>We'll build our own home.</p>
        <p>We'll take care of Amma and Appa.</p>
        <p>We'll look back at everything we've been through...</p>
        <p>and smile.</p>
        <p className="pt-8">We'll say:</p>
        <p className="text-3xl md:text-4xl font-cinematic text-gold py-6">"We actually made it."</p>
      </div>
      
      <div className="mt-20 space-y-6 text-lg md:text-xl text-ivory/70 font-light">
        <p>I want you to live a very, very happy life.</p>
        <p>I want everything you wish for to find its way to you.</p>
      </div>
    </motion.div>
  </Chapter>
);

import photo3 from '../assets/image copy 2.webp';

export const Chapter10_Photo = () => (
  <Chapter className="relative p-0 overflow-hidden bg-black flex-col justify-center items-center h-screen">
    <motion.div 
      initial={{ scale: 1.1, y: 50, opacity: 0 }}
      whileInView={{ scale: 1.05, y: 0, opacity: 0.5 }}
      transition={{ duration: 3, ease: "easeOut" }}
      viewport={{ once: true, margin: "100px" }}
      className="absolute inset-0 z-0"
    >
      <img src={photo3} alt="Temple memory" className="w-full h-full object-cover md:object-contain object-top" />
      <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-black/80"></div>
    </motion.div>
    
    <div className="relative z-10 text-center px-4 max-w-4xl mx-auto flex flex-col justify-center h-full">
      <motion.p 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 2, delay: 1 }}
        viewport={{ once: true }}
        className="text-2xl md:text-4xl font-cinematic text-ivory/90 mb-12"
      >
        20 years of growing up...
      </motion.p>
      
      <motion.p 
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 2, delay: 3.5 }}
        viewport={{ once: true }}
        className="text-4xl md:text-6xl font-cinematic text-gold tracking-wider"
      >
        20 years of memories.
      </motion.p>
    </div>
  </Chapter>
);

export const Chapter10 = () => {
  const memories = [
    "Tiny hands", "First steps", "Childhood", "School", "First day", 
    "Fights", "Laughs", "Punishments", "Memories", "Teenage years", 
    "Growing up", "Supporting each other", "Difficult days", '"Don\'t give up"', 
    "Dreams", "Family", "Becoming stronger", "Becoming independent", "Almost 20", "Today ❤️"
  ];

  return (
    <Chapter className="py-32">
      <div className="w-full max-w-5xl mx-auto text-center">
        <h2 className="text-sm uppercase tracking-[0.3em] text-gold/60 mb-6 font-semibold">Chapter 10</h2>
        <motion.h1 
          initial={{ opacity: 0, scale: 0.5 }} whileInView={{ opacity: 1, scale: 1 }} transition={{ duration: 1.5 }} viewport={{ once: true }}
          className="text-7xl md:text-9xl font-cinematic text-ivory font-bold tracking-tighter"
          style={{ textShadow: '0 0 50px rgba(255, 255, 240, 0.3)' }}
        >
          20
        </motion.h1>
        <p className="text-xl md:text-2xl text-ivory/60 font-light mt-4 mb-24 tracking-widest uppercase">Years of memories.</p>
        
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-4">
          {memories.map((memory, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
              viewport={{ once: true }}
              className="aspect-square rounded-sm border border-white/5 bg-white/5 backdrop-blur-sm flex items-center justify-center p-4 text-center hover:bg-white/10 hover:border-gold/30 transition-all cursor-default group"
            >
              <span className="text-sm md:text-base text-ivory/70 group-hover:text-gold transition-colors font-light">
                {memory}
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </Chapter>
  );
};
