import {
    TableBody,
    TableCell,
    TableContainer,
    TableRow,
    Typography,
} from "@mui/material";
import { Box } from "@mui/system";
import React from "react";

const Skills = () => {
    return (
        <React.Fragment>
            <a id="skills" />
            <Box
                sx={{
                    p: 5,
                    backgroundImage: "url('/imgs/nightSkySection.jpg')",
                    // Source: Photo by eberhard grossgasteiger: https://www.pexels.com/photo/canion-mountains-on-night-sky-2098428/</React.Fragment>
                }}
            >
                <Typography
                    variant="h3"
                    sx={{
                        color: "#5ce2e2",
                        my: 3,
                        fontWeight: "bold",
                        textShadow:
                            "1px 1px 1px #919191, 1px 2px 1px #919191,1px 3px 1px #919191",
                    }}
                >
                    Skills
                </Typography>
                <TableContainer>
                    <TableBody>
                        <TableRow style={{ width: "100%" }}>
                            <TableCell
                                sx={{
                                    color: "#5ce2e2",
                                    fontWeight: "bold",
                                    fontSize: "25px",
                                    borderBottom: "none",
                                }}
                            >
                                Languages
                            </TableCell>
                            <TableCell
                                sx={{ color: "#5ce2e2", borderBottom: "none" }}
                            >
                                JavaScript (ES5 and ES6), Python, HTML, HTML5,
                                CSS
                            </TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell
                                sx={{
                                    color: "#5ce2e2",
                                    fontWeight: "bold",
                                    fontSize: "25px",
                                    borderBottom: "none",
                                }}
                            >
                                Frameworks/Libraries
                            </TableCell>
                            <TableCell
                                sx={{ color: "#5ce2e2", borderBottom: "none" }}
                            >
                                React, Express, Node.js, Flask, AJAX, RESTful
                                APIs, Material UI, Bootstrap
                            </TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell
                                sx={{
                                    color: "#5ce2e2",
                                    fontWeight: "bold",
                                    fontSize: "25px",
                                    borderBottom: "none",
                                }}
                            >
                                Databases
                            </TableCell>
                            <TableCell
                                sx={{ color: "#5ce2e2", borderBottom: "none" }}
                            >
                                MongoDB, MySQL
                            </TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell
                                sx={{
                                    color: "#5ce2e2",
                                    fontWeight: "bold",
                                    fontSize: "25px",
                                    borderBottom: "none",
                                }}
                            >
                                Version Control Systems
                            </TableCell>
                            <TableCell
                                sx={{ color: "#5ce2e2", borderBottom: "none" }}
                            >
                                Git, GitHub
                            </TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell
                                sx={{
                                    color: "#5ce2e2",
                                    fontWeight: "bold",
                                    fontSize: "25px",
                                    borderBottom: "none",
                                }}
                            >
                                Tools
                            </TableCell>
                            <TableCell
                                sx={{ color: "#5ce2e2", borderBottom: "none" }}
                            >
                                AWS, Firebase, Slack, Bcrypt
                            </TableCell>
                        </TableRow>
                    </TableBody>
                </TableContainer>
            </Box>
        </React.Fragment>
    );
};

export default Skills;
