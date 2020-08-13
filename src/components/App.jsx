import React, { useState } from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import CreateArea from "./CreateArea";

function App() {
  const [notes, alterNotes] = useState([]);

  function addNotes(note) {
    alterNotes((prev) => {
      return [...prev, note];
    });
  }

  function deleteNotes(id) {
    alterNotes((prev) => {
      return prev.filter((noteY, index) => {
        return index !== id;
      });
    });
  }

  return (
    <div>
      <Header />
      <CreateArea onClick={addNotes} />
      {notes.map((note, index) => {
        return (
          <Note
            key={index}
            id={index}
            title={note.title}
            content={note.content}
            onDel={deleteNotes}
          />
        );
      })}

      <Footer />
    </div>
  );
}

export default App;
