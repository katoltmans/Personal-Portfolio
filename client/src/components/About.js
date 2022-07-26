import React from "react";
import { Grid, Paper, Stack, Typography } from "@mui/material";
import { Box } from "@mui/system";

const About = () => {
    return (
        <a id="about">
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
                <Box sx={{ display: "flex", mx: 10 }}>
                    <Stack direction={{ xs: "column", sm: "row" }} spacing={5}>
                        <Box sx={{ maxWidth: "200px" }}>
                            <img
                                src="/imgs/ProfilePic.jpg"
                                alt="Kat Oltmans profile picture"
                            />
                        </Box>

                        <Stack direction="column" spacing={2}>
                            <Box sx={{ px: 10, py: 1 }}>
                                <Typography
                                    variant="h6"
                                    sx={{ mb: 2, fontWeight: "normal" }}
                                >
                                    I am a Coding Dojo graduate who joined the
                                    world of coding after retiring from teaching
                                    and fitness. After teaching remotely for a
                                    year, I came to appreciate the doors tech
                                    opens to the world and love the infinite
                                    possibilities it can provide to aid in the
                                    advancement of society.
                                </Typography>
                                <Typography
                                    variant="h6"
                                    sx={{ mb: 2, fontWeight: "normal" }}
                                    style={{
                                        whiteSpace: "pre-wrap",
                                    }}
                                >
                                    In 2020, I was tasked with the challenge of
                                    creating an online classroom environment
                                    with very little technical experience or
                                    guidance while managing my online students
                                    throughout the year. This experience opened
                                    my eyes to my ability to quickly acquire
                                    computer skills and the role tech can play
                                    in shaping the next generation.
                                </Typography>
                                <Typography
                                    variant="h6"
                                    sx={{ fontWeight: "normal" }}
                                    style={{ whiteSpace: "pre-wrap" }}
                                >
                                    Along with my technical skills I also have
                                    12 years of experience collaborating with
                                    teams of coworkers, adhering to given
                                    deadlines while monitoring progress towards
                                    meeting benchmarks. I maintained regular
                                    communication with and provided consistent
                                    progress updates to clients and
                                    stakeholders, and have excellent time
                                    management and organizational skills. Within
                                    the fitness industry we push ourselves to
                                    build our grit and keep pressing forward to
                                    achieve our goals even when the going gets
                                    tough. I would like the opportunity to bring
                                    my encouraging, “can-do” attitude to your
                                    team.
                                </Typography>
                            </Box>
                        </Stack>
                    </Stack>
                </Box>
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
        </a>
    );
};

export default About;
