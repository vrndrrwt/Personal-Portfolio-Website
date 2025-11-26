import React from "react";
import { Box, Button, Typography } from "@mui/material";
import { motion } from "framer-motion";
import PictureAsPdfIcon from "@mui/icons-material/PictureAsPdf";
import DownloadIcon from "@mui/icons-material/Download";
import resumePDF from "../../assets/resume.pdf";

export default function Resume() {
  return (
    <Box
      component={motion.div}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      sx={{
        minHeight: "calc(100vh - 80px)",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        padding: "2rem",
      }}
    >
      <Typography
        variant="h3"
        sx={{
          mb: 3,
          fontWeight: "bold",
          background: "linear-gradient(90deg,#00A8FF,#9B59FF)",
          WebkitBackgroundClip: "text",
          WebkitTextFillColor: "transparent",
        }}
      >
        My Resume
      </Typography>

      {/* PDF Viewer Box */}
      <Box
        sx={{
          width: { xs: "100%", md: "70%" },
          height: "80vh",
          borderRadius: "15px",
          overflow: "hidden",
          background: "rgba(255,255,255,0.05)",
          border: "1px solid rgba(255,255,255,0.1)",
          backdropFilter: "blur(10px)",
          boxShadow: "0 0 20px rgba(0,0,0,0.3)",
          mb: 3,
        }}
      >
        {/* PDF embed */}
        <embed
          src={resumePDF}
          type="application/pdf"
          width="100%"
          height="100%"
        />
      </Box>

      {/* Download Button */}
      <Button
        variant="contained"
        startIcon={<DownloadIcon />}
        sx={{
          padding: "10px 25px",
          borderRadius: "50px",
          fontSize: "1.1rem",
          background: "linear-gradient(90deg,#00A8FF,#9B59FF)",
          textTransform: "none",
        }}
        href={resumePDF}
        download="Virendra_Singh_Rawat_Resume.pdf"
      >
        Download Resume
      </Button>
    </Box>
  );
}
