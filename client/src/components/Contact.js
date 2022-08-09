import React from "react";
import { Grid, Typography } from "@mui/material";
import { Box } from "@mui/system";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import EmailIcon from "@mui/icons-material/Email";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";

const Contact = () => {
    return (
        <Box sx={{ backgroundColor: "#000" }}>
            <a id="contact" />
            <Typography
                variant="h3"
                sx={{ color: "#5ce2e2", mt: 5, fontWeight: "bold" }}
            >
                Contact
            </Typography>
            <Grid
                container
                direction="row"
                justifyContent="center"
                alignItems="center"
                spacing={2}
                sx={{ px: 20, py: 7 }}
            >
                <Grid item xs={12} sm={6} lg={3}>
                    <a
                        href="mailto:katoltmans@gmail.com?subject=Let's Start Talking"
                        target="_blank"
                    >
                        <EmailIcon
                            sx={{ color: "#5ce2e2", fontSize: "50px" }}
                        />
                    </a>
                </Grid>
                <Grid item xs={12} sm={6} lg={3}>
                    <a
                        href="https://www.linkedin.com/in/katoltmans/"
                        target="_blank"
                    >
                        <LinkedInIcon
                            sx={{ color: "#5ce2e2", fontSize: "50px" }}
                        />
                    </a>
                </Grid>
                <Grid item xs={12} sm={6} lg={3}>
                    <a href="https://github.com/katoltmans" target="_blank">
                        <GitHubIcon
                            sx={{ color: "#5ce2e2", fontSize: "50px" }}
                        />
                    </a>
                </Grid>
                <Grid item xs={12} sm={6} lg={3}>
                    <a
                        href="https://goo.gl/maps/nePUeeFUT4yxQaap9"
                        target="_blank"
                        style={{ textDecoration: "none" }}
                    >
                        <LocationOnIcon
                            sx={{ color: "#5ce2e2", fontSize: "50px" }}
                        />
                        <Typography
                            variant="caption text"
                            sx={{
                                color: "#5ce2e2",
                                mt: 5,
                                fontWeight: "bold",
                            }}
                        >
                            Ocoee, FL
                        </Typography>
                    </a>
                </Grid>
            </Grid>
            <Typography sx={{ color: "#5ce2e2", fontSize: "14px", mb: 5 }}>
                Designed and developed by Kat Oltmans using React and Material
                UI
            </Typography>
        </Box>
    );
};

export default Contact;
