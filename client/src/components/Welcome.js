import React from "react";
import { Button, Fade, Link, Typography } from "@mui/material";
import { Link as RouterLink } from "react-router-dom";
import { Box } from "@mui/system";
import "./WelcomeStyles.css";

const Welcome = () => {
    return (
        <Fade in timeout={3000}>
            <Box
                sx={{
                    backgroundImage: "url('/imgs/codePic.jpg')",
                }}
            >
                <Box
                    className="blur"
                    sx={{
                        height: "100vh",
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                    }}
                >
                    <Box>
                        <Typography
                            sx={{
                                fontSize: "90px",
                                m: "auto",
                                mb: 3,
                                WebkitTextStroke: "0.502px #000",
                                textShadow:
                                    "1px 1px 2px #000, 1px 1px 2px #000, 1px -1px 0 #000, -1px -1px 0 #000, 0 0 15px #000",
                                color: "#5ce2e2",
                                // #5ce2e2 00d4d8
                            }}
                        >
                            Kathryn Oltmans
                        </Typography>
                        <Button
                            variant="contained"
                            sx={{
                                m: "auto",
                                backgroundColor: "#5ce2e2",
                                dropShadow: "0 0 10px #000",
                                "&:hover": {
                                    backgroundColor: "#E589EC",
                                },
                            }}
                        >
                            <Link
                                component={RouterLink}
                                to="/portfolio"
                                color="inherit"
                                underline="none"
                                sx={{ color: "#000" }}
                            >
                                Welcome To My Portfolio
                            </Link>
                        </Button>
                    </Box>
                </Box>
            </Box>
        </Fade>
    );
};

export default Welcome;
