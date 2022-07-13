import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import AppBar from "@mui/material/AppBar";
import Welcome from "./components/Welcome";
import Navbar from "./components/Navbar";

function App() {
    return (
        <BrowserRouter>
            <div className="App">
                <Fade>
                    <Navbar />
                </Fade>
                <Routes>
                    <Route path="/" element={<Welcome />} />
                </Routes>
            </div>
        </BrowserRouter>
    );
}

export default App;
