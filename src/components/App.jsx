import React, {useState} from "react";
import Lodash from "lodash";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import CreateArea from "./CreateArea";

function App() {
  const [notes, setNotes] = useState([]);

  function addNote(newNote){
    setNotes(previousNotes => {
      return [...previousNotes, newNote];
    });
  }

  function deleteNote(noteToDelete){
    setNotes(previousNotes => {
      return previousNotes.filter(note => !Lodash.isEqual(note, noteToDelete));
    });
  }

  return (
    <div>
      <Header />
      <CreateArea addNote={addNote}/>
      {notes.map(note => (<Note key={note.title} title={note.title} content={note.content} deleteNote={deleteNote} />))}
      <Footer />
    </div>
  );
}

export default App;
