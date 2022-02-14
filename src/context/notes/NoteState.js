import React, { useState } from "react";
import NoteContext from "./noteContext";

const NoteState = (props) => {
  const hots = "http://localhost:5000/api/notes/";
  const initialNotes = [];

  const [notes, setNotes] = useState(initialNotes);

    //Get Notes
    const getNotes = async () => {
      console.log("Adding new note");
  
      const response = await fetch(`${hots}fetchallnotes`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          "auth-token":"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjFlMmVmZjE0MTVkZmIwNWExZDUzNzZkIn0sImlhdCI6MTY0MjQyNDg1Nn0.x8vOzMmP4Ri26qOLEdIbTzHlKP1u4VV-t8QLWoo9QEQ",
        },
      });
      const json= await response.json()
      setNotes(json)
  
    };
  //Add notes
  const addNote = async (title, description, tag) => {
    console.log("Adding new note");

    const response = await fetch(`${hots}addnote`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "auth-token":"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjFlMmVmZjE0MTVkZmIwNWExZDUzNzZkIn0sImlhdCI6MTY0MjQyNDg1Nn0.x8vOzMmP4Ri26qOLEdIbTzHlKP1u4VV-t8QLWoo9QEQ",
      },
      body: JSON.stringify({title,description,tag}),
    });
    const json=await response.json();

    let note = json
    setNotes(notes.concat(note));
  };
  //Delete Note
  const deleteNote = async (id) => {
    console.log("deleting id " + id);
    const response = await fetch(`${hots}deletenote/${id}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
        "auth-token":"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjFlMmVmZjE0MTVkZmIwNWExZDUzNzZkIn0sImlhdCI6MTY0MjQyNDg1Nn0.x8vOzMmP4Ri26qOLEdIbTzHlKP1u4VV-t8QLWoo9QEQ",
      },
    });
    // const json=await response.json();
    const newNotes = notes.filter((note) => {
      return note._id !== id;
    });
    setNotes(newNotes);
  };
  //Edit Note
  const editNote = async (id, title, description, tag) => {
    console.log("Editing id " + id);

    const response = await fetch(`${hots}updatenote/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        "auth-token":"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjFlMmVmZjE0MTVkZmIwNWExZDUzNzZkIn0sImlhdCI6MTY0MjQyNDg1Nn0.x8vOzMmP4Ri26qOLEdIbTzHlKP1u4VV-t8QLWoo9QEQ",
      },
      body: JSON.stringify({title,description,tag}),
    });
    // const json=response.json();

    let newNotes=JSON.parse(JSON.stringify(notes))
    for (let index = 0; index < newNotes.length; index++) {
      const ele = newNotes[index];
      if (ele._id === id) {
        newNotes[index].title = title;
        newNotes[index].description = description;
        newNotes[index].tag = tag;
        break;
      }
    }
    setNotes(newNotes)
  };

  return (
    <NoteContext.Provider value={{ notes, addNote, deleteNote, editNote,getNotes }}>
      {props.children}
    </NoteContext.Provider>
  );
};

export default NoteState;
