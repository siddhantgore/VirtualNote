import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import About from "./components/About";
import NoteState from "./context/notes/NoteState";
import Navbar from "./components/Navbar";
import Alert from "./components/Alert";
import Signup from "./components/Signup";
import { useState } from "react";
import SignIn from "./components/SignIn";

function App() {
  const [alert, setalert] = useState(null)
  const showAlert=(message,type)=>{
    setalert({
      msg:message,
      type:type
    })
    setTimeout(()=>{
      setalert(null)
    },2000)
  }
  return (
    <div className="App">
      <NoteState>
        <BrowserRouter>
          <Navbar showAlert={showAlert}/>
          <Alert alert={alert} />
            <Routes>
              <Route exact path="/" element={<Home showAlert={showAlert} />} />
              <Route exact path="/about" element={<About />} />
              <Route exact path="/login" element={<SignIn showAlert={showAlert}/>} />
              <Route exact path="/signup" element={<Signup showAlert={showAlert} />} />
            </Routes>
        </BrowserRouter>
      </NoteState>
    </div>
  );
}

export default App;
