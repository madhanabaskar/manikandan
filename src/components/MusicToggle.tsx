import { useState, useEffect, useRef } from 'react';
import { Music, VolumeX } from 'lucide-react';
import { motion } from 'framer-motion';

interface MusicToggleProps {
  play: boolean;
}

export const MusicToggle = ({ play }: MusicToggleProps) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  useEffect(() => {
    if (!audioRef.current) {
      audioRef.current = new Audio('/music/Unkoodave Porakkanum (Sisters Version) (Tamil) - MassTamilan.mp3');
      audioRef.current.loop = true;
      audioRef.current.volume = 0.5;
    }
  }, []);

  useEffect(() => {
    if (play && !isPlaying && audioRef.current) {
      audioRef.current.play().catch(e => console.log('Audio autoplay blocked', e));
      setIsPlaying(true);
    }
  }, [play, isPlaying]);

  useEffect(() => {
    const handleLowerVolume = () => {
      if (audioRef.current) {
        audioRef.current.volume = 0.15;
      }
    };
    
    window.addEventListener('lower-music-volume', handleLowerVolume);
    return () => {
      window.removeEventListener('lower-music-volume', handleLowerVolume);
    };
  }, []);

  const toggleMusic = () => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.pause();
      } else {
        audioRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  return (
    <motion.button
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 1, duration: 1 }}
      onClick={toggleMusic}
      className="fixed bottom-6 right-6 z-50 p-4 rounded-full bg-white/5 backdrop-blur-md border border-white/10 text-ivory hover:bg-white/10 transition-colors shadow-lg flex items-center justify-center gap-2"
    >
      {isPlaying ? <Music size={20} /> : <VolumeX size={20} />}
      <span className="text-sm font-medium pr-1">Music {isPlaying ? 'On' : 'Off'}</span>
    </motion.button>
  );
};
