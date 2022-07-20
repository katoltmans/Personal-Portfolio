import {
    Card,
    CardContent,
    CardMedia,
    Grid,
    Paper,
    Typography,
} from "@mui/material";
import { Box } from "@mui/system";
import React from "react";

const Projects = () => {
    const projectTitleStyle = {
        fontWeight: "bold",
        color: "#000",
    };
    const projectSubtitleStyle = {
        color: "#919191",
        fontSize: "12px",
    };
    const projectLinkStyle = {
        color: "#5ce2e2",
        "&:hover": {
            color: "#00b0ba",
        },
        textDecoration: "none",
        fontWeight: "bold",
    };

    return (
        <>
            <a id="projects"> </a>
            <Box sx={{ p: 5, pt: 5 }}>
                <Typography
                    variant="h3"
                    sx={{
                        color: "#5ce2e2",
                        my: 5,
                        fontWeight: "bold",
                        textShadow:
                            "1px 1px 1px #919191, 1px 2px 1px #919191,1px 3px 1px #919191",
                    }}
                >
                    Projects
                </Typography>
                <Grid container spacing={5}>
                    <Grid item xs={12} sm={6}>
                        <Card sx={{ p: 2, maxwidth: 345, height: "90%" }}>
                            <CardMedia
                                component="img"
                                height="400"
                                image="/imgs/HomemadeHacks.png"
                                alt="join In Project"
                            />
                            <CardContent>
                                <Typography variant="H6" sx={projectTitleStyle}>
                                    Homemade Hacks
                                </Typography>
                                <Typography
                                    variant="subtitle1"
                                    sx={projectSubtitleStyle}
                                >
                                    Personal Project
                                </Typography>
                                <Typography>
                                    A website to create and view household tips
                                    and tricks using: Python, Flask, React.js,
                                    and Material UI
                                </Typography>

                                <Grid container alignItems="bottom">
                                    <Grid item xs={12} sm={6}>
                                        {/* <a href="" style={projectLinkStyle}>
                                            Homemade Hacks Site
                                        </a> */}
                                    </Grid>
                                    <Grid item xs={12} sm={6}>
                                        <a
                                            href="https://github.com/katoltmans/Homemade-Hacks"
                                            style={projectLinkStyle}
                                        >
                                            GitHub
                                        </a>
                                    </Grid>
                                </Grid>
                            </CardContent>
                        </Card>
                    </Grid>
                    <Grid item xs={12} sm={6}>
                        <Card sx={{ p: 2, maxwidth: 345, height: "90%" }}>
                            <CardMedia
                                component="img"
                                height="400"
                                image="/imgs/JoinIn.png"
                                alt="join In Project"
                            />
                            <CardContent>
                                <Typography variant="H6" sx={projectTitleStyle}>
                                    Join In
                                </Typography>
                                <Typography
                                    variant="subtitle1"
                                    sx={projectSubtitleStyle}
                                >
                                    Group Project
                                </Typography>
                                <Typography>
                                    A MERN-based app to create/find events to
                                    attend, indicate attendance intention,
                                    comment, and map distance to event.
                                </Typography>
                                <Grid container>
                                    <Grid item xs={12} sm={6}>
                                        <a
                                            href="http://3.86.87.174/"
                                            style={projectLinkStyle}
                                        >
                                            Join In Site
                                        </a>
                                    </Grid>
                                    <Grid item xs={12} sm={6}>
                                        <a
                                            href="https://github.com/katoltmans/Find-Me-in-Events"
                                            style={projectLinkStyle}
                                        >
                                            GitHub
                                        </a>
                                    </Grid>
                                </Grid>
                            </CardContent>
                        </Card>
                    </Grid>
                </Grid>
            </Box>
        </>
    );
};

export default Projects;
