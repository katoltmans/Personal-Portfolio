import React from "react";
import { AppBar, Toolbar, Link, Typography } from "@mui/material";
import { Link as RouterLink } from "react-router-dom";
import { HashLink } from "react-router-hash-link";

const Navbar = () => {
    const styles = {
        Typography: {
            color: "#fff",
            "&:hover": {
                color: "#5ce2e2",
            },
        },
    };

    return (
        <AppBar sx={{ backgroundColor: "#191917" }}>
            <Toolbar
                disableGutters
                sx={{ justifyContent: "space-between", mx: 7 }}
            >
                <Typography variant="h6" color="#fff">
                    <Link
                        component={HashLink}
                        to="#about"
                        color="#fff"
                        underline="none"
                    >
                        About
                    </Link>
                </Typography>
                <Typography variant="h6" color="#fff">
                    <Link
                        component={HashLink}
                        to="#skills"
                        color="#fff"
                        underline="none"
                    >
                        Skills
                    </Link>
                </Typography>
                <Typography variant="h6" color="#fff">
                    <Link
                        component={HashLink}
                        to="#projects"
                        color="#fff"
                        underline="none"
                    >
                        Projects
                    </Link>
                </Typography>
                <Typography variant="h6" color="#fff">
                    <Link
                        component={HashLink}
                        to="#education"
                        color="#fff"
                        underline="none"
                    >
                        Education
                    </Link>
                </Typography>
                <Typography variant="h6" color="#fff">
                    <Link
                        component={HashLink}
                        to="#experience"
                        color="#fff"
                        underline="none"
                    >
                        Experience
                    </Link>
                </Typography>
                <Typography variant="h6" color="#fff">
                    <Link
                        component={HashLink}
                        to="#contact"
                        color="#fff"
                        underline="none"
                    >
                        Contact
                    </Link>
                </Typography>
            </Toolbar>
        </AppBar>
    );
};

export default Navbar;
