import React,{useContext} from "react";
import NoteContext from "../context/notes/noteContext";
import Notes from "./Notes";

function Home(props) {
  const {showAlert}=props

  return (
    <div>
      <Notes showAlert={props.showAlert} />
    </div>
  );
}

export default Home;
