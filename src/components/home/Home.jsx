import React from "react";
import { Box, Button, Chip } from "@mui/material";
import { motion } from "framer-motion";
import { info } from "../../info/Info";
import EmojiBullet from "../EmojiBullet";
import SocialIcon from "../SocialIcon";
import me from "../../assets/self.png";
import styles from "./Home.module.scss";
import { Typewriter } from "react-simple-typewriter";

export default function Home() {
  const techStack = ["React", "Node.js", "Express", "MongoDB", "Python", "Docker", "AWS"];

  return (
    <Box
      component={motion.div}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
      sx={{
        minHeight: "calc(100vh - 80px)",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        padding: "3rem",
      }}
    >
      <Box
        component={motion.div}
        initial={{ y: 30, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6 }}
        sx={{
          display: "flex",
          gap: "3rem",
          flexDirection: { xs: "column", md: "row" },
          padding: "2.5rem",
          borderRadius: "25px",
          background: "rgba(255,255,255,0.06)",
          border: "1px solid rgba(255,255,255,0.1)",
          backdropFilter: "blur(10px)",
          boxShadow: "0 0 30px rgba(0,0,0,0.3)",
        }}
      >
        {/* Avatar with parallax effect */}
        <motion.img
          src={me}
          alt="me"
          initial={{ scale: 0.9 }}
          animate={{ scale: 1 }}
          whileHover={{ rotate: 2, scale: 1.03 }}
          transition={{ duration: 0.3 }}
          style={{
            width: "320px",
            height: "320px",
            borderRadius: "50%",
            padding: "10px",
            background: info.gradient,
            boxShadow: "0 0 25px rgba(0,0,0,0.3)",
            cursor: "pointer",
          }}
        />

        <Box>
          {/* Main Header */}
          <h1 className={styles.title}>
            Hi, I'm{" "}
            <span className={styles.gradientText}>
              {info.firstName} {info.lastName}
            </span>{" "}
            <span className={styles.hand}>👋</span>
          </h1>

          {/* Animated Typewriter */}
          <h2 className={styles.subtitle}>
            <Typewriter
              words={[
                "Full-Stack Developer",
                "AI/ML Engineer",
                "React.js Specialist",
                "Problem Solver",
                "DSA Enthusiast",
              ]}
              loop={true}
              typeSpeed={70}
              deleteSpeed={40}
              delaySpeed={1500}
            />
          </h2>

          {/* Mini Bio */}
          <ul className={styles.bioList}>
            {info.miniBio.map((b, i) => (
              <EmojiBullet key={i} emoji={b.emoji} text={b.text} />
            ))}
          </ul>

          {/* Social Icons */}
          <div className={styles.socials}>
            {info.socials.map((s, i) => (
              <SocialIcon key={i} {...s} />
            ))}
          </div>

          {/* Action Buttons */}
          <Box sx={{ display: "flex", gap: "1rem", marginTop: "2rem" }}>
            <Button
              variant="contained"
              sx={{
                borderRadius: "50px",
                padding: "10px 25px",
                textTransform: "none",
                fontSize: "1.1rem",
                background: info.gradient,
              }}
              href="/projects"
            >
              View My Projects 🚀
            </Button>

            <Button
              variant="outlined"
              sx={{
                borderRadius: "50px",
                padding: "10px 25px",
                textTransform: "none",
                fontSize: "1.1rem",
                borderImage: "linear-gradient(90deg,#00A8FF,#9B59FF) 1",
                color: "white",
              }}
              href="/resume"
            >
              Download Resume 📄
            </Button>
          </Box>

          {/* Tech Stack Floating Chips */}
          <Box sx={{ display: "flex", flexWrap: "wrap", gap: "0.7rem", marginTop: "2rem" }}>
            {techStack.map((tech, index) => (
              <motion.div
                key={index}
                whileHover={{ scale: 1.1 }}
                transition={{ duration: 0.2 }}
              >
                <Chip
                  label={tech}
                  sx={{
                    background: "rgba(255,255,255,0.1)",
                    color: "white",
                    fontWeight: "bold",
                  }}
                />
              </motion.div>
            ))}
          </Box>
        </Box>
      </Box>
    </Box>
  );
}
