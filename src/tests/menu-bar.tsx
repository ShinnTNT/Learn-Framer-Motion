import { Variants, motion } from "framer-motion";
import { Box, Button, Typography, useTheme } from "@mui/material";
import { useState } from "react";

const MotionButton = motion(Button);

const MenuListVariant: Variants = {
  open: {
    clipPath: "inset(0% 0% 0% 0% round 10px)",
    transition: {
      type: "spring",
      bounce: 0,
      duration: 0.3,
      staggerChildren: 0.05,
      delayChildren: 0.3,
    },
  },
  close: {
    clipPath: "inset(10% 50% 90% 50% round 10px)",
    transition: {
      type: "spring",
      bounce: 0,
      duration: 0.3,
    },
  },
};

const MenuItemVariant: Variants = {
  open: {
    opacity: 1,
    y: 0,
    transition: {
      type: "spring",
      stiffness: 300,
      damping: 24,
    },
  },
  close: {
    opacity: 0,
    y: 20,
    transition: {
      duration: 0.2,
    },
  },
};

const MenuBar = () => {
  const theme = useTheme();
  const [isOpen, setIsOpen] = useState(false);
  return (
    <motion.div
      style={{
        width: "200px",
        height: "auto",
        margin: "auto",
        padding: "20px",
      }}
      animate={isOpen ? "open" : "close"}
    >
      <MotionButton
        onClick={() => setIsOpen(!isOpen)}
        variant="contained"
        color="primary"
        fullWidth
      >
        <Box
          width="100%"
          display="flex"
          justifyContent="space-between"
          alignItems="center"
          color="white"
        >
          <Typography>Menu</Typography>
          <motion.div
            variants={{
              open: {
                rotate: 180,
              },
              close: {
                rotate: 0,
              },
            }}
            transition={{
              duration: 0.2,
            }}
          >
            <svg width="15" height="15" viewBox="0 0 20 20">
              <path d="M0 7 L 20 7 L 10 16" />
            </svg>
          </motion.div>
        </Box>
      </MotionButton>

      <motion.ul
        style={{
          width: "92%",
          padding: "8px",
          backgroundColor: theme.palette.primary.main,
          color: "#fff",
        }}
        variants={MenuListVariant}
      >
        <MotionButton
          variants={MenuItemVariant}
          size="small"
          variant="contained"
          color="inherit"
          fullWidth
        >
          List 1
        </MotionButton>
        <MotionButton
          variants={MenuItemVariant}
          sx={{
            margin: "8px 0px",
          }}
          size="small"
          variant="contained"
          color="inherit"
          fullWidth
        >
          List 2
        </MotionButton>
        <MotionButton
          variants={MenuItemVariant}
          size="small"
          variant="contained"
          color="inherit"
          fullWidth
        >
          List 3
        </MotionButton>
      </motion.ul>
    </motion.div>
  );
};

export default MenuBar;
