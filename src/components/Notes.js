import React, { useContext, useEffect, useRef, useState } from "react";
import NoteContext from "../context/notes/noteContext";
import Addnote from "./Addnote";
import NoteItem from "./NoteItem";
import { useNavigate } from 'react-router-dom';


function Notes(props) {
  const navigate = useNavigate();
  const context = useContext(NoteContext);
  const { notes, getNotes,editNote } = context;
  useEffect(() => {
    if(localStorage.getItem('token')){
      getNotes();
    }
    else{
      navigate('/login');
    }
    //eslint-disable-next-line
  }, []);

  const ref = useRef(null)
  const refClose = useRef(null)

  const updateNote = (currentNote) => {
    ref.current.click();
    setNote({id:currentNote._id ,etitle:currentNote.title,edescription:currentNote.description,etag:currentNote.tag})

  };
  const [note, setNote] = useState({id:"", etitle: "", edescription: "", etag: "" });
  const handleClick = (e) => {
    console.log("Upading Note")
    editNote(note.id,note.etitle,note.edescription,note.etag)
    refClose.current.click();
    props.showAlert("Updated","success")
  }

  const onChange = (e) => {
    setNote({ ...note, [e.target.name]: e.target.value })
  }

  return (
    <>
      <Addnote showAlert={props.showAlert}/>

      <button ref={ref} type="button" className="btn btn-primary d-none" data-bs-toggle="modal" data-bs-target="#exampleModal">
      </button>
      <div className="modal fade" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="exampleModalLabel">Edit Note</h5>
              <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div className="modal-body">
              <div className="newform">
                <form>
                  <div className="form-group">
                    <label htmlFor="title">Title</label>
                    <input type="text" className="form-control" id="etitle" name="etitle" value={note.etitle} aria-describedby="emailHelp" placeholder="title" onChange={onChange} minLength={5} required/>
                  </div>
                  <div className="form-group">
                    <label htmlFor="description">Description</label>
                    <input type="text" className="form-control" id="edescription" name="edescription" value={note.edescription} placeholder="description" onChange={onChange} minLength={5} required/>
                  </div>
                  <div className="form-group">
                    <label htmlFor="tag">Tag</label>
                    <input type="text" className="form-control" id="etag" name="etag" value={note.etag} placeholder="tag" onChange={onChange} />
                  </div>
                  {/* <button type="submit" className="btn btn-primary" onClick={handleClick}>Add Note</button> */}
                </form>
              </div>
            </div>
            <div className="modal-footer">
              <button ref={refClose} type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
              <button disabled={note.etitle.length<3||note.edescription.length<5} type="button" className="btn btn-primary" onClick={handleClick}>Save Changes</button>
            </div>
          </div>
        </div>
      </div>
      <div className="noteItem">
        {notes.length===0 && "Notes are Not Available!"}
        {notes.map((note) => {
          return (
            <NoteItem key={note._id} updateNote={updateNote} note={note} />
          );
        })}
      </div>
    </>
  );
}

export default Notes;
