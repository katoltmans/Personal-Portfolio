import { Grid, Paper, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";

const Education = () => {
    const leftColStyle = {
        textAlign: "right",
    };

    const rightColStyle = {
        textAlign: "left",
        verticalAlign: "center",
        fontSize: "25px",
    };

    return (
        <a id="education">
            <Box
                sx={{
                    p: 5,
                    pt: 10,
                    backgroundImage: "url('/imgs/keyboardPic.jpg')",
                    backgroundAttachment: "fixed",
                    backgroundRepeat: "no=repeat",
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                    // Image Source: Photo by Marcellino Andrian: https://www.pexels.com/photo/mechanical-computer-keyboard-671629/
                }}
            >
                <Typography
                    variant="h3"
                    sx={{
                        color: "#5ce2e2",
                        fontWeight: "bold",
                        textShadow:
                            "1px 1px 1px #919191, 1px 2px 1px #919191,1px 3px 1px #919191",
                    }}
                >
                    Education
                </Typography>
                <Box sx={{ color: "#fff", my: 7 }}>
                    <Grid container spacing={10} sx={{ p: 2 }}>
                        <Grid item xs={5} sx={leftColStyle}>
                            <img
                                src="/imgs/codingDojoLogo200.jpg"
                                alt="Coding Dojo logo"
                            />
                            {/* Source: https://www.mooclab.club/showcase/coding-dojo.108/gallery  */}
                        </Grid>
                        <Grid item xs={4} sx={rightColStyle}>
                            <Paper
                                sx={{
                                    backgroundColor: "rgba(0, 0, 0, 0.7)",
                                    color: "#fff",
                                    p: 2,
                                }}
                            >
                                <Typography
                                    variant="h4"
                                    sx={{
                                        mb: 3,
                                        color: "#07A9E4",
                                        fontWeight: "bold",
                                        WebkitTextStroke: "1px #000",
                                        textShadow:
                                            "1px 1px 1px #000, 1px 2px 1px #000, 1px 3px 1px #000",
                                    }}
                                >
                                    Coding Dojo
                                </Typography>
                                Intensive Full Stack Coding Boot Camp <br />
                                Top Scores in Mern and Python Stacks <br />
                                2002
                            </Paper>
                        </Grid>
                    </Grid>
                    <Grid container spacing={10} sx={{ p: 2 }}>
                        <Grid item xs={5} sx={leftColStyle}>
                            <img
                                src="/imgs/pngeggCU200.png"
                                alt="University of Colorado logo"
                            />
                            {/* Source: https://www.pngegg.com/en/png-nwzme  */}
                        </Grid>
                        <Grid item xs={4} sx={rightColStyle}>
                            <Paper
                                sx={{
                                    backgroundColor: "rgba(0, 0, 0, 0.7)",
                                    color: "#fff",
                                    p: 2,
                                }}
                            >
                                <Typography
                                    variant="h4"
                                    sx={{
                                        mb: 3,
                                        color: "#CFB87C",
                                        fontWeight: "bold",
                                        WebkitTextStroke: "0.7px #fff",
                                        textShadow:
                                            "1px 1px 1px #000, 1px 2px 1px #000, 1px 3px 1px #000",
                                    }}
                                >
                                    University of Colorado
                                </Typography>
                                BA in Theater (Graduated with distinction){" "}
                                <br />
                                Diploma in Education <br />
                                Certificate of Applied Business <br />
                                GPA: 3.785 <br />
                                1996 - 2001 | Boulder, CO
                            </Paper>
                        </Grid>
                    </Grid>
                </Box>
            </Box>
        </a>
    );
};

export default Education;
