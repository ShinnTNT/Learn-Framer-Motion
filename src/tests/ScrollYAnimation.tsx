import { Box, styled } from "@mui/material";
import ImageOne from "../../public/image1.jpg";
import ImageTwo from "../../public/image2.jpg";
import ImageThree from "../../public/image3.png";
import ImageFour from "../../public/image4.jpeg";
import { motion, useScroll, useSpring, useTransform } from "framer-motion";
import { useRef } from "react";

const ScrollYAnimation = () => {
  const { scrollYProgress } = useScroll();

  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  return (
    <Body>
      {images.map(({ image, text }) => (
        <Item key={text} image={image} text={text} />
      ))}
      <motion.div
        style={{
          position: "fixed",
          left: 0,
          right: 0,
          height: "5px",
          background: "#fff",
          bottom: "100px",
          borderRadius: "10px",
          scaleX,
        }}
      />
    </Body>
  );
};

const Body = styled(Box)(() => ({
  width: "100%",
  height: "auto",
  backgroundColor: "#8855ff",
}));

const ParentContainer = styled(Box)(() => ({
  width: "100%",
  height: "100vh",
  position: "relative",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  scrollSnapAlign: "center",
  perspective: "500px",
  overflow: "hidden",
}));

const ImageContainer = styled(Box)(() => ({
  width: "300px",
  height: "400px",
  position: "relative",
}));

const Image = styled("img")(() => ({
  width: "100%",
  height: "100%",
  position: "absolute",
  top: 0,
  left: 0,
  right: 0,
  bottom: 0,
}));

const Item = ({ image, text }: { image: string; text: string }) => {
  const targetRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: targetRef,
  });

  console.log(scrollYProgress);

  const y = useTransform(scrollYProgress, [0, 1], [-300, 300]);

  return (
    <ParentContainer>
      <ImageContainer ref={targetRef}>
        <Image src={image} />
      </ImageContainer>
      <motion.div
        style={{
          color: "#fff",
          fontSize: "56px",
          position: "absolute",
          left: `calc(50% + 130px)`,
          letterSpacing: "-3px",
          lineHeight: "1.2",
          fontWeight: 700,
          margin: 0,
          bottom: "calc(50%)",
          y,
        }}
      >
        {text}
      </motion.div>
    </ParentContainer>
  );
};

const images = [
  {
    image: ImageOne,
    text: "#001",
  },
  {
    image: ImageTwo,
    text: "#002",
  },
  {
    image: ImageThree,
    text: "#003",
  },
  {
    image: ImageFour,
    text: "#004",
  },
];

export default ScrollYAnimation;
