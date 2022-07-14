import { Typography } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";

const Projects = () => {
    return (
        <Box sx={{ p: 5, pt: 10 }}>
            <a id="projects" />
            <Typography>Projects</Typography>
            <p>
                I am a coding boot camp graduate who joined the world of coding
                after retiring from teaching and fitness. I have experience in
                motivating teams of students, organizing and tracking the
                progress of 125+ students simultaneously, and ensuring deadlines
                are regularly met within given timelines.{" "}
            </p>
            <p>
                After teaching remotely for a year, I came to appreciate the
                doors tech opens to the world and love the infinite
                possibilities it can provide to aid in the advancement of
                society. In 2020, I was tasked with the challenge of creating an
                online classroom environment with very little technical
                experience or guidance while managing my online students
                throughout the year. This experience opened my eyes to my
                ability to quickly acquire computer skills and the role tech can
                play in shaping the next generation.
            </p>
            <p>
                Upon retiring from teaching, I began to learn C# in conjunction
                with the Unity engine, but found myself wanting to know more. I
                took a C# class through Coursera and was hooked. I recently
                completed the a boot camp with Coding Dojo to learn full stack
                web development using Python and MERN.
            </p>
        </Box>
    );
};

export default Projects;
