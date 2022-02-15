import React, { useState } from 'react';
import './App.css';
import { Note } from './models/note.model';

function App() {
  const [notes, setNotes] = useState<Note[]>([
    {
      id: new Date().toString(),
      title: 'Note Title',
      text: 'Body text',
      color: '#666666',
      date: new Date().toString(),
    },
  ]);
  return <div className="App">App</div>;
}

export default App;
