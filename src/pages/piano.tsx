import React, { useState } from 'react';
import { Responsive, WidthProvider } from 'react-grid-layout';
import * as Tone from 'tone';

const ResponsiveGridLayout = WidthProvider(Responsive);

const PianoRoll: React.FC = () => {
  const [notes, setNotes] = useState<any[]>([]); // 音符データを保持する

  const addNote = (x: number, y: number) => {
    setNotes((prevNotes) => [...prevNotes, { x, y, w: 1, h: 1 }]);
  };

  const playNotes = () => {
    const synth = new Tone.Synth().toDestination();

    notes.forEach(note => {
      const time = note.x * 0.5; // グリッド上の位置から時間を計算
      const midiNote = 60 - note.y; // 縦位置からMIDIノートを計算
      synth.triggerAttackRelease(Tone.Midi(midiNote).toFrequency(), '8n', time);
    });

    Tone.Transport.start();
  };

  return (
    <div>
      <button onClick={playNotes}>Play</button>
      <ResponsiveGridLayout
        className="layout"
        layouts={{ lg: notes }}
        cols={{ lg: 16 }}
        rowHeight={20}
        width={1200}
        onLayoutChange={(layout) => setNotes(layout)}
        onDoubleClick={(layout, event) => {
          const rect = event.currentTarget.getBoundingClientRect();
          const x = Math.floor((event.clientX - rect.left) / (rect.width / 16));
          const y = Math.floor((event.clientY - rect.top) / 20);
          addNote(x, y);
        }}
      >
        {notes.map((note, i) => (
          <div key={i} data-grid={note} style={{ background: 'lightblue' }}>
            {/* 音符の表示 */}
          </div>
        ))}
      </ResponsiveGridLayout>
    </div>
  );
};

export default PianoRoll;
