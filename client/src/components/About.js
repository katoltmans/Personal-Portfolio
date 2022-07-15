import React from "react";
import {
    Card,
    CardContent,
    CardMedia,
    Grid,
    Paper,
    Typography,
} from "@mui/material";
import { Box } from "@mui/system";

const About = () => {
    return (
        <>
            <a id="about" />
            <Box sx={{ p: 5, pt: 10 }}>
                <Typography
                    variant="h3"
                    sx={{
                        color: "#5ce2e2",
                        mt: 3,
                        fontWeight: "bold",
                        textShadow:
                            "1px 1px 1px #919191, 1px 2px 1px #919191,1px 3px 1px #919191",
                    }}
                >
                    About Kat Oltmans
                </Typography>
                <Typography
                    variant="h6"
                    sx={{
                        mb: 3,
                        color: "#5ce2e2",
                        fontWeight: "bold",
                        textShadow: "1px 1px 1px #777",
                    }}
                >
                    (She/Her)
                </Typography>
                <Card sx={{ display: "flex", mx: 10 }}>
                    <CardMedia
                        component="img"
                        sx={{ width: "200px" }}
                        image="/imgs/ProfilePic.jpg"
                        alt="Kat Oltmans profile picture"
                    />
                    <CardContent sx={{ py: 3, px: 10 }}>
                        <Grid container direction="column" spacing={2}>
                            <Grid item>
                                <Typography
                                    variant="h6"
                                    sx={{ mb: 2, fontWeight: "normal" }}
                                >
                                    I am a coding boot camp graduate who joined
                                    the world of coding after retiring from
                                    teaching and fitness. I have experience in
                                    motivating teams of students, organizing and
                                    tracking the progress of 125+ students
                                    simultaneously, and ensuring deadlines are
                                    regularly met within given timelines.
                                </Typography>
                            </Grid>
                            <Grid item>
                                <Typography
                                    variant="h6"
                                    sx={{ mb: 2, fontWeight: "normal" }}
                                    style={{
                                        whiteSpace: "pre-wrap",
                                    }}
                                >
                                    After teaching remotely for a year, I came
                                    to appreciate the doors tech opens to the
                                    world and love the infinite possibilities it
                                    can provide to aid in the advancement of
                                    society. In 2020, I was tasked with the
                                    challenge of creating an online classroom
                                    environment with very little technical
                                    experience or guidance while managing my
                                    online students throughout the year. This
                                    experience opened my eyes to my ability to
                                    quickly acquire computer skills and the role
                                    tech can play in shaping the next
                                    generation.
                                </Typography>
                            </Grid>
                            <Grid item>
                                <Typography
                                    variant="h6"
                                    sx={{ fontWeight: "normal" }}
                                    style={{ whiteSpace: "pre-wrap" }}
                                >
                                    Upon retiring from teaching, I began to
                                    learn C# in conjunction with the Unity
                                    engine, but found myself wanting to know
                                    more. I took a C# class through Coursera and
                                    was hooked. I recently completed the a boot
                                    camp with Coding Dojo to learn full stack
                                    web development using Python and MERN.
                                </Typography>
                            </Grid>
                        </Grid>
                    </CardContent>
                </Card>
                {/* <Grid container>
                    <Grid item xs={6} sx={{ p: 5 }}>
                        <Paper elevation={2} sx={{ mx: 38, p: 1 }}>
                            <img
                                src="/imgs/ProfilePic.jpg"
                                alt="profile picture"
                            />
                        </Paper>
                    </Grid>
                    <Grid item xs={6} sx={{ p: 5 }}></Grid>
                </Grid> */}
            </Box>
        </>
    );
};

export default About;
