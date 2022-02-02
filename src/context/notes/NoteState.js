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
    const json=response.json();

    let note = {
      _id: "61e58614dfd82479f61a13dd84",
      user: "61e2eff1415dfb05a1d5376d",
      title: title,
      description: description,
      tag: tag,
      date: "2022-01-17T15:07:00.935Z",
      __v: 0,
    };
    setNotes(notes.concat(note));
  };
  //Delete Note
  const deleteNote = async (id) => {
    console.log("deleting id " + id);

    const newNotes = notes.filter((note) => {
      return note._id !== id;
    });
    setNotes(newNotes);
  };
  //Edit Note
  const editNote = async (id, title, description, tag) => {
    console.log("Editing id " + id);

    const response = await fetch(`${hots}updatenote/${id}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "auth-token":"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjFlMmVmZjE0MTVkZmIwNWExZDUzNzZkIn0sImlhdCI6MTY0MjQzMTkyMn0.Yw5lD234yDm7Nb1tawWQ8sYWkSrvYD2nA6ZHrVjCpJI",
      },
      body: JSON.stringify({title,description,tag}),
    });
    const json=response.json();

    for (let index = 0; index < notes.length; index++) {
      const ele = notes[index];
      if (ele._id === id) {
        ele.title = title;
        ele.description = description;
        ele.tag = tag;
      }
    }
  };

  return (
    <NoteContext.Provider value={{ notes, addNote, deleteNote, editNote,getNotes }}>
      {props.children}
    </NoteContext.Provider>
  );
};

export default NoteState;
