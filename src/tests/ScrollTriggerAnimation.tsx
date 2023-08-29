import { Variants, motion } from "framer-motion";

const food: [string, number, number][] = [
  ["🍅", 340, 10],
  ["🍊", 20, 40],
  ["🍋", 60, 90],
  ["🍐", 80, 120],
  ["🍏", 100, 140],
  ["🫐", 205, 245],
  ["🍆", 260, 290],
  ["🍇", 290, 320],
];

const ScrollTriggerAnimation = () => {
  return (
    <div
      style={{
        maxWidth: "400px",
        margin: "100px auto",
      }}
    >
      {food.map(([emoji, hueA, hueB]) => (
        <Card emoji={emoji} hueA={hueA} hueB={hueB} />
      ))}
    </div>
  );
};

export default ScrollTriggerAnimation;

interface Props {
  emoji: string;
  hueA: number;
  hueB: number;
}

const hue = (h: number) => `hsl(${h}, 100%, 50%)`;

const cardVaraints: Variants = {
  offScreen: {
    y: 300,
  },
  onScreen: {
    y: 50,
    rotate: -10,
    transition: {
      type: "spring",
      bounce: 0.4,
    },
  },
};

const Card = ({ emoji, hueA, hueB }: Props) => {
  const background = `linear-gradient(306deg, ${hue(hueA)}, ${hue(hueB)})`;
  return (
    <motion.div
      style={{
        position: "relative",
        overflow: "hidden",
        paddingTop: "20px",
        marginBottom: "-120px",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
      initial="offScreen"
      whileInView="onScreen"
      viewport={{ once: true }}
    >
      <div
        style={{
          background,
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          clipPath: ` path(
            "M 0 303.5 C 0 292.454 8.995 285.101 20 283.5 L 460 219.5 C 470.085 218.033 480 228.454 480 239.5 L 500 430 C 500 441.046 491.046 450 480 450 L 20 450 C 8.954 450 0 441.046 0 430 Z"
          )`,
        }}
      />
      <motion.div
        variants={cardVaraints}
        style={{
          fontSize: "164px",
          width: "300px",
          height: "430px",
          backgroundColor: "white",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          borderRadius: "20px",
          boxShadow: ` 0 0 1px hsl(0deg 0% 0% / 0.075), 0 0 2px hsl(0deg 0% 0% / 0.075),
          0 0 4px hsl(0deg 0% 0% / 0.075), 0 0 8px hsl(0deg 0% 0% / 0.075),
          0 0 16px hsl(0deg 0% 0% / 0.075)`,
          transformOrigin: "40% 60%",
        }}
      >
        {emoji}
      </motion.div>
    </motion.div>
  );
};
