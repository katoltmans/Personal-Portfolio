import { Grid, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";

const Skills = () => {
    const leftColStyle = {
        fontWeight: "bold",
        fontSize: "25px",
        textAlign: "right",
        justifyContent: "center",
    };

    const rightColStyle = {
        textAlign: "left",
        verticalAlign: "center",
        fontSize: "25px",
    };

    return (
        <React.Fragment>
            <a id="skills" />
            <Box
                sx={{
                    p: 5,
                    pt: 10,
                    backgroundImage: "url('/imgs/nightSkySection.jpg')",
                    backgroundAttachment: "fixed",
                    backgroundRepeat: "no-repeat",
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                    // Image Source: Photo by eberhard grossgasteiger: https://www.pexels.com/photo/canion-mountains-on-night-sky-2098428/</React.Fragment>
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
                    Skills
                </Typography>
                <Box sx={{ color: "#fff", my: 7 }}>
                    <Grid container spacing={10} sx={{ p: 2 }}>
                        <Grid item xs={5} sx={leftColStyle}>
                            Languages
                        </Grid>
                        <Grid item xs={7} sx={rightColStyle}>
                            JavaScript (ES5 and ES6), Python, HTML, HTML5, CSS
                        </Grid>
                    </Grid>
                    <Grid container spacing={10} sx={{ p: 2 }}>
                        <Grid item xs={5} sx={leftColStyle}>
                            Frameworks / Libraries
                        </Grid>
                        <Grid item xs={7} sx={rightColStyle}>
                            React, Express, Node.js, Flask, AJAX, RESTful APIs,
                            Material UI, Bootstrap
                        </Grid>
                    </Grid>
                    <Grid container spacing={10} sx={{ p: 2 }}>
                        <Grid item xs={5} sx={leftColStyle}>
                            Databases
                        </Grid>
                        <Grid item xs={7} sx={rightColStyle}>
                            MongoDB, MySQL
                        </Grid>
                    </Grid>
                    <Grid container spacing={10} sx={{ p: 2 }}>
                        <Grid item xs={5} sx={leftColStyle}>
                            Version Control Systems
                        </Grid>
                        <Grid item xs={7} sx={rightColStyle}>
                            Git, GitHub
                        </Grid>
                    </Grid>
                    <Grid container spacing={10} sx={{ p: 2 }}>
                        <Grid item xs={5} sx={leftColStyle}>
                            Tools
                        </Grid>
                        <Grid item xs={7} sx={rightColStyle}>
                            AWS, Firebase, Slack, Bcrypt
                        </Grid>
                    </Grid>
                </Box>
            </Box>
        </React.Fragment>
    );
};

export default Skills;
