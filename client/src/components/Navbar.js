import React, { useState } from "react";
import {
    AppBar,
    Toolbar,
    Link,
    Typography,
    Menu,
    MenuItem,
    Box,
    IconButton,
} from "@mui/material";
import { HashLink } from "react-router-hash-link";
import MenuIcon from "@mui/icons-material/Menu";

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

    const menuStyles = {
        color: "#000",
        "&:hover": {
            color: "#5ce2e2",
        },
    };

    const [anchorElNav, setAnchorElNav] = useState(null);

    const handleOpenNavMenu = (event) => {
        setAnchorElNav(event.currentTarget);
    };

    const handleCloseNavMenu = () => {
        setAnchorElNav(null);
    };

    return (
        <AppBar position="static" sx={{ backgroundColor: "#191917" }}>
            <Toolbar disableGutters sx={{ mx: 7 }}>
                <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
                    <IconButton
                        size="large"
                        aria-label="account of current user"
                        aria-controls="menu-appbar"
                        aria-haspopup="true"
                        onClick={handleOpenNavMenu}
                        color="inherit"
                    >
                        <MenuIcon />
                    </IconButton>
                    <Menu
                        id="menu-appbar"
                        anchorEl={anchorElNav}
                        anchorOrigin={{
                            vertical: "bottom",
                            horizontal: "left",
                        }}
                        keepMounted
                        transformOrigin={{
                            vertical: "top",
                            horizontal: "left",
                        }}
                        open={Boolean(anchorElNav)}
                        onClose={handleCloseNavMenu}
                        sx={{
                            display: { xs: "block", md: "none" },
                        }}
                    >
                        {sections.map((section, index) => (
                            <MenuItem key={index} onClick={handleCloseNavMenu}>
                                <Typography variant="h6" key={index}>
                                    <Link
                                        component={HashLink}
                                        to={section.link}
                                        underline="none"
                                        sx={menuStyles}
                                    >
                                        {section.title}
                                    </Link>
                                </Typography>
                            </MenuItem>
                        ))}
                    </Menu>
                </Box>
                <Box
                    sx={{
                        flexGrow: 1,
                        display: {
                            xs: "none",
                            md: "flex",
                            justifyContent: "space-between",
                        },
                    }}
                >
                    {sections.map((section, index) => {
                        return (
                            <Typography variant="h6" color="#fff" key={index}>
                                <Link
                                    component={HashLink}
                                    to={section.link}
                                    color="#fff"
                                    underline="none"
                                    sx={styles}
                                >
                                    {section.title}
                                </Link>
                            </Typography>
                        );
                    })}
                </Box>
            </Toolbar>
        </AppBar>
    );
};

export default Navbar;
