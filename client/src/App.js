import { ThemeProvider, useTheme } from "@emotion/react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Welcome from "./components/Welcome";
import PortfolioView from "./views/PortfolioView";

function App() {
    const theme = useTheme();

    return (
        <BrowserRouter>
            <ThemeProvider theme={theme}>
                <div className="App">
                    <Routes>
                        <Route path="/" element={<Welcome />} default />
                        <Route path="/portfolio" element={<PortfolioView />} />
                    </Routes>
                </div>
            </ThemeProvider>
        </BrowserRouter>
    );
}

export default App;
