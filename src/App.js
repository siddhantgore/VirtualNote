import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import About from "./components/About";
import NoteState from "./context/notes/NoteState";
import Navbar from "./components/Navbar";
import Alerts from "./components/Alert";

function App() {
  return (
    <div className="App">
      <NoteState>
        <BrowserRouter>
          <Navbar />
          <Alerts message="This is alert"/>
            <Routes>
              <Route exact path="/" element={<Home />} />
              <Route exact path="/about" element={<About />} />
            </Routes>
        </BrowserRouter>
      </NoteState>
    </div>
  );
}

export default App;
