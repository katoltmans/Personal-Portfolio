import React from "react";
import { AppBar, Toolbar, Link, Typography } from "@mui/material";
import { Link as RouterLink } from "react-router-dom";

const Navbar = () => {
    return (
        <AppBar sx={{ backgroundColor: "#000" }}>
            <Toolbar
                disableGutters
                sx={{ justifyContent: "space-between", mx: 7 }}
            >
                <Typography variant="h6" color="#fff">
                    <Link
                        component={RouterLink}
                        to="#about"
                        color="#fff"
                        underline="none"
                    >
                        About
                    </Link>
                </Typography>
                <Typography variant="h6" color="#fff">
                    <Link
                        component={RouterLink}
                        to="#about"
                        color="#fff"
                        underline="none"
                    >
                        Skills
                    </Link>
                </Typography>
                <Typography variant="h6" color="#fff">
                    <Link
                        component={RouterLink}
                        to="#education"
                        color="#fff"
                        underline="none"
                    >
                        Projects
                    </Link>
                </Typography>
                <Typography variant="h6" color="#fff">
                    <Link
                        component={RouterLink}
                        to="#education"
                        color="#fff"
                        underline="none"
                    >
                        Education
                    </Link>
                </Typography>
                <Typography variant="h6" color="inherit">
                    Experience
                </Typography>
                <Typography variant="h6" color="inherit">
                    Contact
                </Typography>
            </Toolbar>
        </AppBar>
    );
};

export default Navbar;
