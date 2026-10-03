import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Chapter } from './Chapters1';

import photo4 from '../assets/image copy 3.webp';

export const FinalReveal = () => (
  <Chapter className="relative p-0 overflow-hidden bg-black flex-col justify-center items-center min-h-screen">
    <div className="absolute inset-0 overflow-hidden pointer-events-none z-20">
      {/* Simulate tiny cinematic particles/confetti */}
      {[...Array(30)].map((_, i) => (
        <motion.div
          key={i}
          initial={{ y: "100vh", x: Math.random() * window.innerWidth, opacity: 0 }}
          whileInView={{ y: "-10vh", opacity: [0, 1, 0] }}
          transition={{ duration: 5 + Math.random() * 5, repeat: Infinity, delay: Math.random() * 5 }}
          className="absolute w-1 h-1 rounded-full bg-gold shadow-[0_0_10px_rgba(212,175,55,0.8)]"
        />
      ))}
    </div>

    <motion.div
      initial={{ opacity: 0, scale: 1.05 }}
      whileInView={{ opacity: 0.7, scale: 1 }}
      transition={{ duration: 4, ease: "easeOut" }}
      viewport={{ once: true, margin: "100px" }}
      className="absolute inset-0 z-0"
    >
      <img src={photo4} alt="20th Birthday Reveal" className="w-full h-full object-cover md:object-contain object-center" />
      <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-black/80"></div>
      <div className="absolute inset-0 bg-black/30"></div>
    </motion.div>

    <div className="relative z-10 max-w-4xl mx-auto text-center flex flex-col items-center justify-center min-h-[80vh] px-4">
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.5, delay: 1 }}
        viewport={{ once: true }}
        className="text-2xl md:text-4xl text-ivory/80 font-light tracking-[0.2em] uppercase mb-8"
      >
        And now...
      </motion.p>

      <motion.div initial={{ opacity: 0, scale: 0.8 }} whileInView={{ opacity: 1, scale: 1 }} transition={{ duration: 2, delay: 2.5 }} viewport={{ once: true }} className="w-full">
        <h1 className="text-[7rem] sm:text-[10rem] md:text-[16rem] font-cinematic font-bold text-transparent bg-clip-text bg-gradient-to-b from-white to-gold/50 leading-none mb-8 drop-shadow-[0_0_30px_rgba(212,175,55,0.3)]">
          20.
        </h1>
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1.5, delay: 4 }}
        viewport={{ once: true }}
        className="space-y-2 mb-16"
      >
        <p className="text-xl md:text-3xl font-cinematic text-ivory">Still my little brother.</p>
        <p className="text-xl md:text-3xl font-cinematic text-gold">Always my favourite.</p>
      </motion.div>

      <motion.h1
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 2, delay: 6 }}
        viewport={{ once: true }}
        className="text-2xl sm:text-3xl md:text-6xl font-cinematic text-gold tracking-wider md:tracking-widest uppercase font-bold w-full break-words px-2"
        style={{ textShadow: '0 0 40px rgba(212, 175, 55, 0.4)' }}
      >
        Happy 20th Birthday, <br className="md:hidden" /> Manikandan <span className="text-red-500 inline-block">❤️</span>
      </motion.h1>
    </div>
  </Chapter>
);

export const FinalLetter = () => (
  <Chapter className="bg-black py-40">
    <motion.div
      initial={{ opacity: 0, y: 50 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 2 }} viewport={{ once: true }}
      className="max-w-3xl mx-auto text-center"
    >
      <h2 className="text-xl md:text-2xl italic font-cinematic text-gold/80 mb-16">"From Your Akka..."</h2>

      <div className="space-y-6 text-lg md:text-xl text-ivory/80 font-light leading-relaxed mb-20 text-left md:text-center px-4">
        <p>You may be growing bigger.</p>
        <p>You may change in so many ways.</p>
        <p>Life may take us in different directions.</p>
        <p className="py-4">But you'll always be that little boy whose hand I held on his first day of school.</p>
        <p className="text-gold">You'll always be my favourite.</p>

        <p className="pt-8">I want you to live a very, very happy life.</p>
        <p>I want everything you wish for to come to you.</p>
        <p>I want you to achieve everything you dream about.</p>

        <p className="pt-8">And no matter how difficult life becomes...</p>
        <p className="text-2xl font-semibold text-ivory tracking-wide">please don't give up.</p>

        <p className="pt-8">Your Akka is always here for you.</p>
        <p>No matter who stays.<br />No matter who leaves.</p>
        <p className="text-2xl font-semibold text-ivory tracking-wide">I'll be here.</p>
        <p>Always.</p>
        <p className="text-3xl text-red-500 pt-4">❤️</p>
      </div>

      <motion.div
        initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ duration: 2, delay: 1 }} viewport={{ once: true }}
        className="border-t border-white/10 pt-16 mt-16"
      >
        <h1 className="text-4xl md:text-5xl font-cinematic text-ivory mb-6">Happy 20th Birthday, Thangamehhh.</h1>
        <p className="text-xl text-gold italic font-cinematic">Lots of Love...., Your Akka ❤️</p>
      </motion.div>
    </motion.div>
  </Chapter>
);

export const HiddenMessage = () => {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    if (isOpen) {
      window.dispatchEvent(new CustomEvent('lower-music-volume'));
    }
  }, [isOpen]);

  const letterLines = [
    "Manikandan,",
    "If you ever feel like you're alone…\ncome back to this page.",
    "This little date — 04/10/2006 —\nis the day you came into my life.",
    "And I didn't know it then…\nbut you were going to become one of the most important people in it.",
    "You may grow older.\nYou may go far.\nLife may change us in ways we can't imagine.",
    "But one thing will never change —",
    "You will always have your Akka. ❤️",
    "Whenever life gets difficult,\nwhenever you feel like giving up,\nwhenever you think nobody understands you…",
    "come back here.",
    "And remember:",
    "Your Akka believes in you.",
    "Your Akka is proud of you.",
    "Your Akka will always be there for you.",
    "No matter what.",
    "04/10/2006 → Forever ❤️"
  ];

  return (
    <Chapter className={`transition-colors duration-[3000ms] ${isOpen ? 'bg-[#030303]' : 'bg-black'} flex-col justify-center items-center relative overflow-hidden py-32`}>

      {isOpen && (
        <div className="absolute inset-0 overflow-hidden pointer-events-none z-0 opacity-40 fixed">
          {[...Array(25)].map((_, i) => (
            <motion.div
              key={i}
              initial={{ y: "100vh", x: Math.random() * window.innerWidth, opacity: 0 }}
              animate={{ y: "-10vh", opacity: [0, 0.4, 0] }}
              transition={{ duration: 15 + Math.random() * 10, repeat: Infinity, delay: Math.random() * 10 }}
              className="absolute w-1 h-1 rounded-full bg-orange-100/50 blur-[1px]"
            />
          ))}
        </div>
      )}

      <AnimatePresence mode="wait">
        {!isOpen ? (
          <motion.div
            key="closed"
            exit={{ opacity: 0, scale: 0.95, filter: "blur(10px)" }}
            transition={{ duration: 1.5 }}
            className="flex flex-col items-center justify-center text-center z-10 space-y-12 min-h-screen"
          >
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 2 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="absolute inset-0 bg-gold/10 blur-[40px] rounded-full"></div>
              <h2 className="text-3xl md:text-5xl font-light tracking-[0.4em] text-ivory/90 font-serif relative z-10" style={{ textShadow: '0 0 20px rgba(255,255,255,0.2)' }}>
                04 <span className="text-gold/50 mx-1">•</span> 10 <span className="text-gold/50 mx-1">•</span> 2006
              </h2>
            </motion.div>

            <motion.p
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 2, delay: 1 }}
              viewport={{ once: true }}
              className="text-lg md:text-xl text-ivory/60 font-light italic"
            >
              There's something I want you to know…
            </motion.p>

            <motion.button
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 2, delay: 2 }}
              viewport={{ once: true }}
              onClick={() => setIsOpen(true)}
              className="px-10 py-5 rounded-full border border-gold/30 text-gold hover:bg-gold/10 hover:border-gold transition-all duration-500 tracking-widest text-sm uppercase flex items-center gap-3 shadow-[0_0_30px_rgba(212,175,55,0.15)] group mt-12 bg-black/50 backdrop-blur-md"
            >
              Open This <span className="group-hover:scale-125 transition-transform text-red-500">❤️</span>
            </motion.button>
          </motion.div>
        ) : (
          <motion.div
            key="open"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 3 }}
            className="max-w-2xl mx-auto w-full z-10 px-6 py-20 flex flex-col items-center text-center"
          >
            <div className="space-y-24 w-full pt-10">
              {letterLines.map((line, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 2, delay: 0.3 }}
                  viewport={{ once: true, margin: "-100px" }}
                  className={`text-xl md:text-3xl font-serif leading-relaxed ${i === 0 ? 'text-3xl md:text-5xl text-gold mb-12 font-cinematic tracking-wide' :
                    i === letterLines.length - 1 ? 'text-3xl md:text-5xl text-gold mt-20 tracking-wider font-cinematic' :
                      'text-ivory/90 font-light'
                    }`}
                >
                  {line.split('\n').map((part, j) => (
                    <span key={j} className="block py-1">{part}</span>
                  ))}
                </motion.div>
              ))}
            </div>

            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 3, delay: 0.5 }}
              viewport={{ once: true, margin: "-100px" }}
              className="pt-40 pb-20 w-full flex flex-col items-center border-t border-white/5 mt-40 space-y-16"
            >
              <h1 className="text-4xl sm:text-5xl md:text-7xl font-cinematic text-ivory tracking-wider md:tracking-widest uppercase break-words w-full px-2" style={{ textShadow: '0 0 40px rgba(255,255,255,0.1)' }}>
                Happy 20th Birthday,<br /> Thambi.
              </h1>
              <p className="text-2xl md:text-4xl text-ivory/80 font-serif italic">
                Love you more than I know how to say.
              </p>
              <p className="text-4xl md:text-6xl font-cinematic text-gold pt-12" style={{ textShadow: '0 0 30px rgba(212,175,55,0.3)' }}>
                — Your Akka ❤️
              </p>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </Chapter>
  );
};
