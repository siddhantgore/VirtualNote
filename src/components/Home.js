import React,{useContext} from "react";
import NoteContext from "../context/notes/noteContext";
import Notes from "./Notes";

function Home() {

  return (

    <div>
      <Notes/>
    </div>
  );
}

export default Home;
