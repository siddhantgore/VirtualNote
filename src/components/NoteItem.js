import React, { useContext } from"react";
import NoteContext from "../context/notes/noteContext";


function NoteItem(props) {
  const context=useContext(NoteContext);
  const { deleteNote } = context;
  const { note ,updateNote } = props;
  return (
    <div className="noteCard">
      <div className="card">
        <div className="card-body">
          <h5 className="card-title"> {note.title}</h5>
          <p className="card-text">
            {note.description}
            Cards are built with as little markup and styles as possible, but
            still manage to deliver a ton of control and customization.This is
            easily customized with our various
          </p>
          <i className="far fa-trash-alt mx-2" onClick={()=>{deleteNote(note._id)}}></i>
          <i className="far fa-edit mx-2" onClick={()=>{updateNote(note)}}></i>
          <i className="fas fa-ellipsis-h mx-2"></i>
        </div>
      </div>
    </div>
  );
}

export default NoteItem;
