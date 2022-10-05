import React from "react";
import { Grid, Paper, Stack, Typography } from "@mui/material";
import { Box } from "@mui/system";

const About = () => {
    const paragraphText = {
        fontWeight: "normal",
        margin: {
            xs: "0 0 30px",
            sm: "0 40px 20px",
        },
        fontSize: {
            xs: "16px",
            sm: "22px",
        },
        textAlign: "justify",
    };

    const aboutBox = {
        display: "flex",
        mx: {
            xs: 2,
            sm: 8,
        },
    };

    return (
        <a id="about">
            <Box sx={{ p: 1, pt: 10 }}>
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
                <Box sx={aboutBox}>
                    <Stack direction={{ xs: "column", sm: "row" }} spacing={10}>
                        <Box sx={{ maxWidth: "200px", py: 1, m: "auto" }}>
                            <img
                                src="/imgs/unaskedPic.jpg"
                                alt="Kat Oltmans profile picture"
                            />
                        </Box>

                        <Stack direction="column" spacing={3}>
                            <Box>
                                <Typography variant="h6" sx={paragraphText}>
                                    I am a Coding Dojo graduate who joined the
                                    world of coding after transitioning from a
                                    career in education and fitness. While
                                    adapting to teaching remotely, I came to
                                    appreciate the doors tech opens to the world
                                    and the infinite possibilities it can
                                    provide to aid in the advancement of
                                    society.
                                </Typography>
                                <Typography
                                    variant="h6"
                                    sx={paragraphText}
                                    style={{
                                        whiteSpace: "pre-wrap",
                                    }}
                                >
                                    In 2020, I was tasked with the challenge of
                                    creating an online classroom environment
                                    with very little technical experience or
                                    guidance while also managing my online
                                    students throughout the year. This
                                    experience opened my eyes to my ability to
                                    quickly acquire computer skills and the role
                                    tech can play in shaping the next
                                    generation.
                                </Typography>
                                <Typography
                                    variant="h6"
                                    sx={paragraphText}
                                    style={{ whiteSpace: "pre-wrap" }}
                                >
                                    Along with my technical skills, I also have
                                    12 years of experience collaborating with
                                    teams of coworkers and adhering to given
                                    deadlines while monitoring progress towards
                                    meeting benchmarks. I maintained regular
                                    communication with and provided consistent
                                    progress updates to clients and
                                    stakeholders, and have excellent time
                                    management and organizational skills.
                                    Continuous learning and grit not only form
                                    the foundation of education and fitness, but
                                    are keys to success in the tech industry. I
                                    would like the opportunity to bring my
                                    encouraging, “can-do” attitude to your team.
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
