import { Box, Button, Input, useTheme } from "@mui/material";
import { useState } from "react";
import { Reorder } from "framer-motion";

const ReorderItem = () => {
  const theme = useTheme();

  const [text, setText] = useState<string>("");
  const [list, setList] = useState<string[]>([]);

  const insertItem = () => {
    if (text) {
      setList((prev) => [text, ...prev]);
      setText("");
    }
  };

  return (
    <Box
      width="100%"
      height="100vh"
      display="flex"
      justifyContent="center"
      alignItems="center"
    >
      <Box
        width={400}
        height={600}
        p={4}
        bgcolor={theme.palette.primary.dark}
        sx={{
          overflowY: "scroll",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          borderRadius: "10px",
          boxShadow:
            "'0 1px 1px hsl(0deg 0% 0% / 0.075)','0 2px 2px hsl(0deg 0% 0% / 0.075), 0 4px 4px hsl(0deg 0% 0% / 0.075)','0 8px 8px hsl(0deg 0% 0% / 0.075), 0 16px 16px hsl(0deg 0% 0% / 0.075)'",
        }}
      >
        <Box
          display="flex"
          justifyContent="space-around"
          alignItems="center"
          width="100%"
          height={46}
          sx={{
            backgroundColor: "#fff",
            borderRadius: "4px",
          }}
        >
          <Input
            autoFocus
            disableUnderline
            fullWidth
            sx={{
              marginLeft: "10px",
            }}
            value={text}
            onChange={(e) => setText(e.target.value)}
            onKeyDown={(e) => {
              if (e.code === "Enter") {
                insertItem();
              }
            }}
          />
          <Button
            size="small"
            sx={{
              marginRight: "8px",
            }}
            variant="contained"
            onClick={insertItem}
          >
            Add
          </Button>
        </Box>

        <Reorder.Group
          style={{
            width: "100%",
            padding: "0px",
          }}
          as="ol"
          axis="y"
          values={list}
          onReorder={setList}
        >
          {list.map((item) => (
            <Reorder.Item
              key={item}
              value={item}
              style={{
                width: "100%",
                height: "40px",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                backgroundColor: "white",
                borderRadius: "4px",
                margin: "12px 0",
                boxShadow:
                  "'0 1px 1px hsl(0deg 0% 0% / 0.075)','0 2px 2px hsl(0deg 0% 0% / 0.075), 0 4px 4px hsl(0deg 0% 0% / 0.075)','0 8px 8px hsl(0deg 0% 0% / 0.075), 0 16px 16px hsl(0deg 0% 0% / 0.075)'",
              }}
            >
              {item}
            </Reorder.Item>
          ))}
        </Reorder.Group>
      </Box>
    </Box>
  );
};

export default ReorderItem;
