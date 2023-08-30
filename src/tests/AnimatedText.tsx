import { Box, Button, styled } from "@mui/material";
import React from "react";

const Main = styled(Box)(() => ({
  height: "100vh",
  backgroundColor: "#1e293b",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
}));

const TabListContainer = styled(Box)(() => ({
  width: "30rem",
  maxWidth: "90vw",
  position: "relative",
  display: "flex",
  flexDirection: "column",
  gap: "1rem 0",
  flexShrink: 0,
  overflow: "hidden",
}));

const SliderContainter = styled(Button)(
  ({
    direction = "normal",
    duration,
  }: {
    direction: "normal" | "reverse";
    duration: number;
  }) => ({
    width: "fit-content",
    display: "flex",
    alignItems: "center",
    animationName: "loop",
    animationDirection: direction,
    animationDuration: `${duration}ms`,
    animationTimingFunction: "linear",
    animationIterationCount: "infinite",
    "@keyframes loop": {
      "0%": {
        transform: `translateX(0)`,
      },
      "100%": {
        transform: `translateX(-50%)`,
      },
    },
  })
);

const StyledTone = styled(Box)(() => ({
  display: "flex",
  alignItems: "center",
  gap: "0 0.2rem",
  color: "#e2e8f0",
  fontSize: " 0.9rem",
  backgroundColor: "#334155",
  borderRadius: "0.4rem",
  padding: "0.7rem 1rem",
  marginRight: "2rem", //
  boxShadow: ` 0 0.1rem 0.2rem rgb(0 0 0 / 20%),
    0 0.1rem 0.5rem rgb(0 0 0 / 30%),
    0 0.2rem 1.5rem rgb(0 0 0 / 40%`,
}));

const random = (min: number, max: number) =>
  Math.floor(Math.random() * (max - min)) + min;
const shuffle = (arr: string[]) => [...arr].sort(() => 0.5 - Math.random());

const AnimatedText = () => {
  return (
    <Main>
      <TabListContainer>
        {[...new Array(5)].map((_, index) => {
          return (
            <Slider
              duration={random(10000, 15000)}
              reverse={index % 2 === 0}
              key={index}
            >
              {shuffle(TAGS)
                .slice(0, 10)
                .map((text, key) => (
                  <Ton key={key} text={text} />
                ))}
            </Slider>
          );
        })}
      </TabListContainer>
    </Main>
  );
};

const Slider = ({
  children,
  reverse,
  duration,
}: {
  children: React.ReactNode;
  reverse: boolean;
  duration: number;
}) => {
  return (
    <SliderContainter
      duration={duration}
      direction={reverse ? "reverse" : "normal"}
    >
      {children}
    </SliderContainter>
  );
};

const Ton = ({ text }: { text: string }) => {
  return <StyledTone>{text}</StyledTone>;
};

const TAGS = [
  "HTML",
  "CSS",
  "JavaScript",
  "Typescript",
  "Tailwind",
  "React",
  "Next.js",
  "Gatsby",
  "UI/UX",
];

export default AnimatedText;
