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
    const tableStyle = 
    return (
        <>
            <a id="skills" />
            <Box sx={{ p: 5, backgroundColor: "#191917" }}>
                <Typography
                    variant="h3"
                    sx={{
                        color: "#5ce2e2",
                        mt: 5,
                        fontWeight: "bold",
                        textShadow:
                            "1px 1px 1px #919191, 1px 2px 1px #919191,1px 3px 1px #919191",
                    }}
                >
                    Skills
                </Typography>
                <TableContainer>
                    <TableBody sx={{ color: "5ce2e2" }}>
                        <TableRow>
                            <TableCell>Languages</TableCell>
                            <TableCell>
                                JavaScript (ES5 and ES6), Python, HTML, HTML5,
                                CSS
                            </TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell>Languages</TableCell>
                            <TableCell>
                                JavaScript (ES5 and ES6), Python, HTML, HTML5,
                                CSS
                            </TableCell>
                        </TableRow>
                    </TableBody>
                </TableContainer>
            </Box>
        </>
    );
};

export default Skills;
