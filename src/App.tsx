import React, { useState } from 'react';
import { Particles } from './components/Particles';
import { MusicToggle } from './components/MusicToggle';
import { IntroScreen, Chapter01, Chapter02, Chapter03, Chapter04 } from './components/Chapters1';
import { Chapter05, Chapter06, Chapter07 } from './components/Chapters2';
import { Chapter08, Chapter09, Chapter10_Photo, Chapter10 } from './components/Chapters3';
import { FinalReveal, FinalLetter, HiddenMessage } from './components/Chapters4';
import { ProgressIndicator } from './components/ProgressIndicator';

function App() {
  const [started, setStarted] = useState(false);

  return (
    <div className="bg-midnight min-h-screen text-ivory font-sans overflow-x-hidden selection:bg-gold/30 selection:text-white">
      <Particles />
      <MusicToggle play={started} />
      
      {!started ? (
        <IntroScreen onStart={() => setStarted(true)} />
      ) : (
        <main className="relative z-10">
          <ProgressIndicator />
          <Chapter01 />
          <Chapter02 />
          <Chapter03 />
          <Chapter04 />
          <Chapter05 />
          <Chapter06 />
          <Chapter07 />
          <Chapter08 />
          <Chapter09 />
          <Chapter10_Photo />
          <Chapter10 />
          <FinalReveal />
          <FinalLetter />
          <HiddenMessage />
        </main>
      )}
    </div>
  );
}

export default App;
