import React from "react";
import { IconButton } from "@mui/material";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import EmailIcon from "@mui/icons-material/Email";

export default function SocialIcon({ link, icon, label }) {
  const Icon = icon === "github" ? <GitHubIcon /> : icon === "linkedin" ? <LinkedInIcon /> : <EmailIcon />;
  return (
    <IconButton aria-label={label} href={link} target="_blank" rel="noopener noreferrer">
      {Icon}
    </IconButton>
  );
}
