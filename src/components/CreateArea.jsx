import React, { useState } from "react";

function CreateArea(props) {
  const [note, noteChange] = useState({
    title: "",
    content: ""
  });

  function handleChange(event) {
    const newValue = event.target.value;
    const name = event.target.name;
    noteChange((prev) => {
      if (name === "title") {
        return {
          title: newValue,
          content: prev.content
        };
      } else {
        return {
          title: prev.title,
          content: newValue
        };
      }
    });
  }

  return (
    <div>
      <form>
        <input
          value={note.title}
          onChange={handleChange}
          name="title"
          placeholder="Title"
        />
        <textarea
          value={note.content}
          onChange={handleChange}
          name="content"
          placeholder="Take a note..."
          rows="3"
        />
        <button
          onClick={(event) => {
            props.onClick(note);
            noteChange({
              title: "",
              content: ""
            });
            event.preventDefault();
          }}
        >
          Add
        </button>
      </form>
    </div>
  );
}

export default CreateArea;
