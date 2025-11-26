import React, { useState } from "react";
import {
  Box,
  Avatar,
  Typography,
  IconButton,
  Drawer,
  Divider,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import me from "../../assets/self.png";
import { info } from "../../info/Info";

export default function Sidebar() {
  const [mobileOpen, setMobileOpen] = useState(false);

  const toggleDrawer = () => setMobileOpen(!mobileOpen);

  // Sidebar content (used for both desktop + mobile)
  const SidebarContent = (
    <Box
      sx={{
        width: 240,
        padding: "1rem",
        textAlign: "center",
      }}
    >
      <Avatar
        src={me}
        sx={{
          width: 100,
          height: 100,
          margin: "0 auto",
          border: "4px solid transparent",
          background: info.gradient,
        }}
      />

      <Typography sx={{ mt: 2, fontWeight: "bold", fontSize: "1.2rem" }}>
        {info.firstName} {info.lastName}
      </Typography>

      <Typography sx={{ fontSize: 14, opacity: 0.7 }}>
        {info.position}
      </Typography>

      <Divider sx={{ mt: 2, mb: 2 }} />

      {/* Add any other info like links, buttons, social icons */}
      <Typography sx={{ fontSize: 14, opacity: 0.6 }}>
        Sidebar Menu Items Coming Soon…
      </Typography>
    </Box>
  );

  return (
    <>
      {/* Desktop Sidebar */}
      <Box
        sx={{
          position: "fixed",
          left: 10,
          top: 90,
          display: { xs: "none", md: "block" },
        }}
      >
        <Box
          sx={{
            width: 240,
            padding: "1rem",
            borderRadius: "15px",
            background: "rgba(255,255,255,0.06)",
            border: "1px solid rgba(255,255,255,0.1)",
            backdropFilter: "blur(10px)",
          }}
        >
          {SidebarContent}
        </Box>
      </Box>

      {/* Mobile Menu Button */}
      <IconButton
        onClick={toggleDrawer}
        sx={{
          position: "fixed",
          top: 15,
          left: 15,
          display: { xs: "block", md: "none" },
          zIndex: 2000,
          color: "white",
          background: "rgba(255,255,255,0.1)",
          backdropFilter: "blur(8px)",
          borderRadius: "10px",
        }}
      >
        {mobileOpen ? <CloseIcon /> : <MenuIcon />}
      </IconButton>

      {/* Mobile Slide Drawer */}
      <Drawer
        anchor="left"
        open={mobileOpen}
        onClose={toggleDrawer}
        PaperProps={{
          sx: {
            background: "rgba(0,0,0,0.6)",
            backdropFilter: "blur(10px)",
            color: "white",
          },
        }}
      >
        {SidebarContent}
      </Drawer>
    </>
  );
}
