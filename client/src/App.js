import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Welcome from "./components/Welcome";
import PortfolioView from "./views/PortfolioView";

function App() {
    return (
        <BrowserRouter>
            <div className="App">
                <Routes>
                    <Route path="/" element={<Welcome />} default />
                    <Route path="/portfolio" element={<PortfolioView />} />
                </Routes>
            </div>
        </BrowserRouter>
    );
}

export default App;
