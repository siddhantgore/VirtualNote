import React,{useContext} from "react";
import NoteContext from "../context/notes/noteContext";
import Notes from "./Notes";

function Home() {

  return (

    <div>
      <br></br>
      <h2>Add a Note</h2>
      <div className="form">
      <form>
        <div className="form-group">
          <label for="exampleInputEmail1">Title</label>
          <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="title"/>
        </div>
        <div className="form-group">
          <label for="exampleInputPassword1">Description</label>
          <input type="password" className="form-control" id="exampleInputPassword1" placeholder="description"/>
        </div>
        <button type="submit" className="btn btn-primary">Submit</button>
      </form>
      </div><br></br>
      <h2>Your Notes</h2><br></br>
      <Notes/>
    </div>
  );
}

export default Home;
