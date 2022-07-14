import React from "react";
import { Grid, Typography } from "@mui/material";
import { Box } from "@mui/system";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import EmailIcon from "@mui/icons-material/Email";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";
import { Link } from "react-router-dom";

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
                sx={{ p: 20, pt: 10 }}
            >
                <Grid item xs={3}>
                    <LocationOnIcon
                        sx={{ color: "#5ce2e2", fontSize: "50px" }}
                    />
                    <Typography
                        variant="caption text"
                        sx={{ color: "#5ce2e2", mt: 5, fontWeight: "bold" }}
                    >
                        Ocoee, FL
                    </Typography>
                </Grid>
                <Grid item xs={3}>
                    <Link
                        to="javascript:void(0)"
                        onClick={() =>
                            (window.location = "mailto:katoltmans@gmail.com")
                        }
                    >
                        <EmailIcon
                            sx={{ color: "#5ce2e2", fontSize: "50px" }}
                        />
                    </Link>
                    <a href=""></a>
                </Grid>
                <Grid item xs={3}>
                    <a href="https://www.linkedin.com/in/katoltmans/">
                        <LinkedInIcon
                            sx={{ color: "#5ce2e2", fontSize: "50px" }}
                        />
                    </a>
                </Grid>
                <Grid item xs={3}>
                    <a href="https://github.com/katoltmans">
                        <GitHubIcon
                            sx={{ color: "#5ce2e2", fontSize: "50px" }}
                        />
                    </a>
                </Grid>
            </Grid>
        </Box>
    );
};

export default Contact;
