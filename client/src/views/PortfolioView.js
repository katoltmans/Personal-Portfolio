import { Stack } from "@mui/material";
import React from "react";
import About from "../components/About";
import Education from "../components/Education";
import Navbar from "../components/Navbar";
import Projects from "../components/Projects";
import Skills from "../components/Skills";

const PortfolioView = () => {
    return (
        <Stack spacing={2}>
            <Navbar />
            <About />
            <Skills />
            <Projects />
            <Education />
        </Stack>
    );
};

export default PortfolioView;
