import React from "react";
import { Button, Fade, Link, Paper, Typography } from "@mui/material";
import { Link as RouterLink } from "react-router-dom";
import { Box } from "@mui/system";

const Welcome = () => {
    return (
        <Fade in timeout={3000}>
            <Box
                sx={{
                    height: "100vh",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    backgroundImage: "url('/imgs/codePic.jpg')",
                }}
            >
                <Box
                    sx={{
                        m: "auto",
                    }}
                >
                    <Typography
                        sx={{
                            fontSize: "90px",
                            mb: 2,
                            textShadow: "0 0 15px #5ce2e2",
                            color: "#fff",
                        }}
                    >
                        Kathryn Oltmans
                    </Typography>
                    <Button
                        variant="contained"
                        sx={{ backgroundColor: "#5ce2e2" }}
                    >
                        <Link
                            component={RouterLink}
                            to="/portfolio"
                            color="inherit"
                            underline="none"
                            sx={{ color: "#000" }}
                        >
                            Please Enter My Portfolio
                        </Link>
                    </Button>
                </Box>
            </Box>
        </Fade>
    );
};

export default Welcome;