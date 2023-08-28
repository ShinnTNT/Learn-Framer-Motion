import { Box, Button, Typography, useTheme } from "@mui/material";
import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

const allIngredients = [
  { icon: "🍅", label: "Tomato" },
  { icon: "🥬", label: "Lettuce" },
  { icon: "🧀", label: "Cheese" },
];

const CategorySelect = () => {
  const theme = useTheme();

  const [selectedTab, setSelectedTab] = useState<{
    icon: string;
    label: string;
  }>({ icon: "🍅", label: "Tomato" });

  return (
    <div
      style={{
        width: "100%",
        height: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#8855ff",
      }}
    >
      <div
        style={{
          width: "600px",
          height: "500px",
          background: "white",
          borderRadius: "10px",
          display: "flex",
          flexDirection: "column",
          boxShadow:
            "'0 1px 1px hsl(0deg 0% 0% / 0.075)','0 2px 2px hsl(0deg 0% 0% / 0.075), 0 4px 4px hsl(0deg 0% 0% / 0.075)','0 8px 8px hsl(0deg 0% 0% / 0.075), 0 16px 16px hsl(0deg 0% 0% / 0.075)'",
        }}
      >
        {/* Navbar */}
        <Box
          display="flex"
          alignItems="center"
          justifyContent="space-around"
          sx={{
            borderBottom: `1px solid  ${theme.palette.grey[200]}`,
          }}
        >
          {allIngredients.map((item) => (
            <Button
              onClick={() => setSelectedTab(item)}
              sx={{
                position: "relative",
                borderBottomLeftRadius: "0px",
                borderBottomRightRadius: "0px",
                padding: "12px",
              }}
              fullWidth
            >
              {item.icon}
              <Typography
                color="black"
                fontSize={16}
                textTransform="initial"
                ml={2}
              >
                {item.label}
              </Typography>
              {item.label == selectedTab.label ? (
                <motion.div
                  style={{
                    position: "absolute",
                    bottom: "-1px",
                    left: 0,
                    right: 0,
                    height: "1px",
                    background: "#8855ff",
                  }}
                  layoutId="underline"
                />
              ) : null}
            </Button>
          ))}
        </Box>
        {/* Navbar End */}
        <div
          style={{
            width: "100%",
            height: "100%",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <AnimatePresence mode="wait">
            <motion.div
              key={selectedTab.label || "empty"}
              initial={{ y: 10, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: -10, opacity: 0 }}
              style={{
                width: "300px",
                height: "300px",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
              transition={{ duration: 0.2 }}
            >
              {selectedTab.icon || "HEHE"}
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
};

export default CategorySelect;
