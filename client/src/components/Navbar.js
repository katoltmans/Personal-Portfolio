import React from "react";
import { AppBar, Toolbar, Link, Typography } from "@mui/material";
import { HashLink } from "react-router-hash-link";

const sections = [
    { title: "About", link: "#about" },
    { title: "Skills", link: "#skills" },
    { title: "Projects", link: "#projects" },
    { title: "Education", link: "#education" },
    { title: "Work Experience", link: "#experience" },
    { title: "Contact", link: "#contact" },
];

const Navbar = () => {
    const styles = {
        color: "#fff",
        "&:hover": {
            color: "#5ce2e2",
        },
    };

    // const [anchorElNav, setAnchorElNav] =
    //     (React.useState < null) | (HTMLElement > null);

    // const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
    //     setAnchorElNav(event.currentTarget);
    // };

    // const handleCloseNavMenu = () => {
    //     setAnchorElNav(null);
    // };

    return (
        <AppBar pposition="static" sx={{ backgroundColor: "#191917" }}>
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
                        sx={styles}
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
                        sx={styles}
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
                        sx={styles}
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
                        sx={styles}
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
                        sx={styles}
                    >
                        Work Experience
                    </Link>
                </Typography>
                <Typography variant="h6" color="#fff">
                    <Link
                        component={HashLink}
                        to="#contact"
                        color="#fff"
                        underline="none"
                        sx={styles}
                    >
                        Contact
                    </Link>
                </Typography>
            </Toolbar>
        </AppBar>
    );
};

export default Navbar;
