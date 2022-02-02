import React,{useContext, useEffect} from "react";
import NoteContext from "../context/notes/noteContext";
import Addnote from "./Addnote";
import NoteItem from "./NoteItem";

function Notes() {
    const context=useContext(NoteContext);
    const {notes,getNotes}=context;
    useEffect(()=>{
      getNotes();
    },[])
  return (
    <>
    <Addnote/>
  <div className="noteItem">
      {notes.map((note)=>{
        return <NoteItem key={note._id} note={note}/>;
      })}
  </div>
  </>
  );
}

export default Notes;
