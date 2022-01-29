import React,{useContext} from "react";
import NoteContext from "../context/notes/noteContext";
import NoteItem from "./NoteItem";

function Notes() {
    const context=useContext(NoteContext);
    const {notes,setNotes}=context;
  return (
  <div class="noteItem">
      {notes.map((note)=>{
        return <NoteItem note={note}/>;
      })}
  </div>
  );
}

export default Notes;
