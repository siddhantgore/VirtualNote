import React, {useContext, useState} from 'react';
import NoteContext from "../context/notes/noteContext";

function Addnote() {

    const context=useContext(NoteContext);
    const {addNote}=context;
    const [note, setNote] = useState({title:"",description:"", tag:"default"});
    const handleClick=(e)=>{
        e.preventDefault();
        addNote(note.title,note.description,note.tag)
        setNote({title:"",description:"", tag:""})
    }

    const onChange=(e)=>{
        setNote({...note,[e.target.name]:e.target.value})
    }
  return (<div>
      <br></br>
      <h2>Add a Note</h2>
      <div className="form">
      <form>
        <div className="form-group">
          <label htmlFor="title">Title</label>
          <input type="text" className="form-control" id="title" name="title" aria-describedby="emailHelp" placeholder="title" value={note.title} onChange={onChange} minLength={5} required/>
        </div>
        <div className="form-group">
          <label htmlFor="description">Description</label>
          <input type="text" className="form-control" id="description" name="description" placeholder="description" value={note.description} onChange={onChange} minLength={5} required/>
        </div>
        <div className="form-group">
          <label htmlFor="tag">Tag</label>
          <input type="text" className="form-control" id="tag" name="tag" placeholder="tag" value={note.tag} onChange={onChange}/>
        </div>
        <button disabled={note.title.length<3||note.description.length<5} type="submit" className="btn btn-primary" onClick={handleClick}>Add Note</button>
      </form>
      </div><br></br>
      <h2>Your Notes</h2><br></br>
  </div>);
}

export default Addnote;
