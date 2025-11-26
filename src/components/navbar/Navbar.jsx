import React, { useContext, useState } from "react";
import {
  AppBar,
  Toolbar,
  IconButton,
  Button,
  Drawer,
  List,
  ListItemButton,
  Box,
  Typography,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import { Link, useLocation } from "react-router-dom";
import { AppThemeContext } from "../../context/ThemeContext";
import DarkModeIcon from "@mui/icons-material/DarkMode";
import LightModeIcon from "@mui/icons-material/LightMode";

export default function Navbar() {
  const location = useLocation();
  const { mode, setMode } = useContext(AppThemeContext);
  const [openDrawer, setOpenDrawer] = useState(false);

  const toggleDrawer = () => setOpenDrawer(!openDrawer);

  const navItems = [
    { label: "Home", path: "/" },
    { label: "Projects", path: "/projects" },
    { label: "Resume", path: "/resume" },
    { label: "Blog", path: "/blog" },
  ];

  return (
    <>
      {/* DESKTOP NAVBAR */}
      <AppBar
        position="sticky"
        sx={{
          background: "rgba(255,255,255,0.06)",
          borderBottom: "1px solid rgba(255,255,255,0.1)",
          backdropFilter: "blur(10px)",
          boxShadow: "0px 4px 30px rgba(0,0,0,0.1)",
        }}
      >
        <Toolbar sx={{ display: "flex", justifyContent: "space-between" }}>
          {/* Logo */}
          <Typography
            variant="h5"
            sx={{
              fontWeight: "bold",
              background: "linear-gradient(90deg,#00A8FF,#9B59FF)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
            }}
          >
            VIRENDRA
          </Typography>

          {/* Desktop Menu */}
          <Box sx={{ display: { xs: "none", md: "flex" }, gap: "1.5rem" }}>
            {navItems.map((item) => (
              <Box key={item.path} sx={{ position: "relative" }}>
                <Button
                  component={Link}
                  to={item.path}
                  sx={{
                    color: "white",
                    textTransform: "none",
                    fontSize: "1.1rem",
                  }}
                >
                  {item.label}
                </Button>

                {/* Animated Underline */}
                <Box
                  sx={{
                    position: "absolute",
                    bottom: 0,
                    height: "3px",
                    width: location.pathname === item.path ? "100%" : "0%",
                    background: "linear-gradient(90deg,#00A8FF,#9B59FF)",
                    transition: "0.3s",
                  }}
                />
              </Box>
            ))}

            {/* Dark Mode Toggle */}
            <IconButton onClick={() => setMode(mode === "dark" ? "light" : "dark")}>
              {mode === "dark" ? (
                <LightModeIcon sx={{ color: "white" }} />
              ) : (
                <DarkModeIcon />
              )}
            </IconButton>
          </Box>

          {/* Mobile Menu Button */}
          <IconButton
            sx={{ display: { xs: "block", md: "none" }, color: "white" }}
            onClick={toggleDrawer}
          >
            {openDrawer ? <CloseIcon /> : <MenuIcon />}
          </IconButton>
        </Toolbar>
      </AppBar>

      {/* MOBILE DRAWER */}
      <Drawer
        anchor="right"
        open={openDrawer}
        onClose={toggleDrawer}
        PaperProps={{
          sx: {
            width: 250,
            background: "rgba(0,0,0,0.6)",
            backdropFilter: "blur(12px)",
            color: "white",
          },
        }}
      >
        <List sx={{ mt: 2 }}>
          {navItems.map((item) => (
            <ListItemButton
              key={item.path}
              component={Link}
              to={item.path}
              onClick={toggleDrawer}
              sx={{
                fontSize: "1.2rem",
                py: 2,
                background:
                  location.pathname === item.path
                    ? "rgba(255,255,255,0.1)"
                    : "transparent",
              }}
            >
              {item.label}
            </ListItemButton>
          ))}

          {/* Dark Mode inside Drawer */}
          <ListItemButton onClick={() => setMode(mode === "dark" ? "light" : "dark")}>
            {mode === "dark" ? (
              <>
                <LightModeIcon sx={{ mr: 1 }} /> Light Mode
              </>
            ) : (
              <>
                <DarkModeIcon sx={{ mr: 1 }} /> Dark Mode
              </>
            )}
          </ListItemButton>
        </List>
      </Drawer>
    </>
  );
}
