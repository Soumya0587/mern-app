import "./App.css";
import { Routes, Route } from "react-router-dom";
import Register from "./components/Register";
import Login from "./components/Login";
import CreateNote from "./components/CreateNote";
import AllNote from "./components/Notes";
import Navbar from "./components/Navbar";
function App() {
  return (
    <div className="App">
      <Navbar/>
      <h1>notes app</h1>
      <Routes>
        <Route path="/register" element={<Register />}></Route>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/createnote" element={<CreateNote />}></Route>
        <Route path="/allnote" element={<AllNote />}></Route>
      </Routes>
    </div>
  );
}

export default App;
