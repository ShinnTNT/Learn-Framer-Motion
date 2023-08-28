import { useTheme } from "@mui/material";
import { animate, motion, useMotionValue, useTransform } from "framer-motion";
import { useEffect } from "react";

const CountTimer = () => {
  const theme = useTheme();

  const count = useMotionValue(0);
  const rounded = useTransform(count, (latest) => Math.round(latest));

  useEffect(() => {
    const controls = animate(count, 100);
    return controls.stop;
  }, []);

  console.log(rounded);

  return (
    <div
      style={{
        width: "100%",
        height: "100vh",
        backgroundColor: theme.palette.primary.dark,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <motion.div
        style={{
          fontSize: 30,
          fontWeight: 600,
          color: "#fff",
        }}
      >
        {rounded}
      </motion.div>
    </div>
  );
};

export default CountTimer;
