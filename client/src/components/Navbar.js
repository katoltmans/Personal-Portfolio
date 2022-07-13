import React from "react";
import { AppBar, Toolbar, Typography } from "@mui/material";

const Navbar = () => {
    return (
        <AppBar>
            <Toolbar
                disableGutters
                sx={{ justifyContent: "space-between", mx: 7 }}
            >
                <Typography variant="h6" color="inherit">
                    About
                </Typography>
                <Typography variant="h6" color="inherit">
                    Skills
                </Typography>
                <Typography variant="h6" color="inherit">
                    Projects
                </Typography>
                <Typography variant="h6" color="inherit">
                    Education
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
