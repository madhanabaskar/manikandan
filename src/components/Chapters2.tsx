import React from 'react';
import { motion } from 'framer-motion';
import { Chapter } from './Chapters1';

import photo1 from '../assets/image.webp';
import photo2 from '../assets/image copy.webp';

export const Chapter05 = () => {
  return (
    <>
      <Chapter className="relative p-0 overflow-hidden bg-black flex-col justify-center items-center h-screen">
        <motion.div
          initial={{ scale: 1.1, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 0.6 }}
          transition={{ duration: 4, ease: "easeOut" }}
          viewport={{ once: true, margin: "100px" }}
          className="absolute inset-0 z-0"
        >
          <img src={photo1} alt="Motorcycle side profile" className="w-full h-full object-contain" />
          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-black/80"></div>
        </motion.div>

        <div className="relative z-10 text-center px-4 max-w-4xl mx-auto flex flex-col justify-center h-full">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 2, delay: 1 }}
            viewport={{ once: true }}
            className="text-2xl md:text-4xl font-cinematic text-ivory/90 mb-12"
          >
            The little boy whose hand I used to hold...
          </motion.p>

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 2, delay: 3.5 }}
            viewport={{ once: true }}
            className="text-4xl md:text-6xl font-cinematic text-gold tracking-wider"
          >
            ...grew up.
          </motion.p>
        </div>
      </Chapter>

      <Chapter className="relative p-0 overflow-hidden bg-black flex-col justify-center items-center h-screen">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 2 }}
          viewport={{ once: true, margin: "100px" }}
          className="absolute inset-0 z-0 flex items-center justify-center p-4 md:p-12"
        >
          <div className="relative w-full h-full max-w-3xl mx-auto shadow-[0_0_80px_rgba(212,175,55,0.15)]">
            <img src={photo2} alt="Motorcycle front view" className="w-full h-full object-contain rounded-sm" />
            <div className="absolute inset-0 bg-black/40"></div>
          </div>
        </motion.div>

        <div className="relative z-10 text-center px-4 max-w-4xl mx-auto flex flex-col justify-center h-full mt-auto mb-16 md:mb-24">
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 2, delay: 1 }}
            viewport={{ once: true }}
            className="text-xl md:text-3xl text-ivory/80 font-light tracking-wide mb-6"
          >
            And somehow...
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 2, delay: 3 }}
            viewport={{ once: true }}
            className="text-3xl md:text-5xl font-cinematic text-gold"
          >
            You're still my little brother.
          </motion.p>
        </div>
      </Chapter>
    </>
  );
};

export const Chapter06 = () => (
  <Chapter className="bg-[#02040a]">
    <motion.div
      initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 2 }} viewport={{ once: true }}
      className="max-w-3xl mx-auto text-center"
    >
      <h2 className="text-sm uppercase tracking-[0.3em] text-gold/60 mb-6 font-semibold">Chapter 06</h2>
      <h3 className="text-3xl md:text-5xl font-cinematic text-ivory mb-16">You Gave Me More Than You Know.</h3>

      <div className="space-y-10 text-lg md:text-xl text-ivory/70 font-light leading-relaxed">
        <motion.p initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ duration: 1, delay: 0.2 }} viewport={{ once: true }}>
          Maybe I had an Appa...
        </motion.p>
        <motion.p initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ duration: 1, delay: 0.4 }} viewport={{ once: true }}>
          but I didn't know what that kind of love felt like.
        </motion.p>
        <motion.p initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ duration: 1, delay: 0.6 }} viewport={{ once: true }}>
          Somehow, you gave me a kind of love that filled a space in my life.
        </motion.p>
        <motion.p initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ duration: 1, delay: 0.8 }} viewport={{ once: true }}>
          You have been supportive of me since you were little.
        </motion.p>
        <motion.p initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ duration: 1, delay: 1.0 }} viewport={{ once: true }}>
          And even today... you are someone I can always lean on.
        </motion.p>

        <div className="pt-12 space-y-6">
          <motion.p initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ duration: 1, delay: 1.5 }} viewport={{ once: true }}>
            Amma will always be the most favourite person in this world to me.
          </motion.p>
          <motion.p initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ duration: 1, delay: 2.0 }} viewport={{ once: true }}>
            But you...
          </motion.p>
          <motion.p initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ duration: 1, delay: 2.5 }} viewport={{ once: true }} className="text-2xl md:text-3xl font-cinematic text-gold">
            you are the one who stands right beside her in my heart. ❤️
          </motion.p>
        </div>
      </div>
    </motion.div>
  </Chapter>
);

export const Chapter07 = () => (
  <Chapter className="bg-black">
    <div className="max-w-4xl mx-auto text-center">
      <motion.p
        initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ duration: 2 }} viewport={{ once: true, margin: "-100px" }}
        className="text-xl md:text-2xl text-ivory/60 font-light mb-20"
      >
        There is one thing you always tell me when life gets difficult...
      </motion.p>

      <motion.div
        initial={{ opacity: 0, scale: 0.9 }} whileInView={{ opacity: 1, scale: 1 }} transition={{ duration: 2, delay: 1 }} viewport={{ once: true, margin: "-100px" }}
        className="relative py-20"
      >
        <div className="absolute inset-0 bg-gold/5 blur-[100px] rounded-full"></div>
        <h1 className="text-4xl md:text-7xl lg:text-9xl font-cinematic font-bold text-ivory uppercase tracking-wider md:tracking-widest relative z-10 break-words px-4" style={{ textShadow: '0 0 50px rgba(212, 175, 55, 0.4)' }}>
          "Give up <br /> pannadha."
        </h1>
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ duration: 2, delay: 2.5 }} viewport={{ once: true, margin: "-100px" }}
        className="mt-20 space-y-4 text-lg md:text-xl text-ivory/60 font-light"
      >
        <p>You probably don't know how big those words are for me.</p>
        <p>But they mean more than you can imagine.</p>
      </motion.div>
    </div>
  </Chapter>
);
