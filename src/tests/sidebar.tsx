import { motion, Variants, useCycle } from "framer-motion";

const Body = ({ children }: { children: React.ReactNode }) => {
  return (
    <motion.div
      style={{
        width: "100%",
        height: "100vh",
        background: `linear-gradient(180deg, #0055ff 0%, rgb(0, 153, 255) 100%)`,
        overflow: `hidden`,
      }}
    >
      {children}
    </motion.div>
  );
};

const Container = ({
  children,
  isOpen,
}: {
  children: React.ReactNode;
  isOpen: boolean;
}) => {
  return (
    <motion.div
      style={{
        position: "absolute",
        width: "300px",
        top: 0,
        left: 0,
        bottom: 0,
      }}
      animate={isOpen ? "open" : "close"}
    >
      {children}
    </motion.div>
  );
};

const Background = ({ variant }: { variant: Variants }) => {
  return (
    <motion.div
      style={{
        position: "absolute",
        width: "300px",
        top: 0,
        left: 0,
        bottom: 0,
        backgroundColor: "#fff",
      }}
      variants={variant}
    />
  );
};

// Transition
const sidebar = {
  open: () => ({
    clipPath: `circle(${1000 * 2 + 200}px at 40px 40px)`,
    transition: {
      type: "spring",
      stiffness: 20,
      restDelta: 2,
    },
  }),
  close: () => ({
    clipPath: "circle(30px at 40px 40px)",
    transition: {
      type: "spring",
      delay: 0.3,
      stiffness: 480,
      damping: 40,
    },
  }),
};

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const Path = (props: { [props: string]: any }) => {
  return (
    <motion.path
      fill="transparent"
      strokeWidth="3"
      stroke="hsl(0, 0%, 18%)"
      strokeLinecap="round"
      {...props}
    ></motion.path>
  );
};

const MenuItem = ({ toggle }: { toggle: () => void }) => {
  return (
    <button
      style={{
        outline: "none",
        border: "none",
        cursor: "pointer",
        position: "absolute",
        top: "18px",
        left: "15px",
        width: " 50px",
        height: " 50px",
        borderRadius: " 50%",
        background: "transparent",
      }}
      onClick={toggle}
    >
      <svg width={23} height={23} viewBox="0 0 23 23">
        <Path
          variants={{
            close: { d: "M 2 2.5 L 20 2.5" },
            open: { d: "M 3 16.5 L 17 2.5" },
          }}
        />
        <Path
          d="M 2 9.423 L 20 9.423"
          variants={{
            close: { opacity: 1 },
            open: { opacity: 0 },
          }}
          transition={{ duration: 0.1 }}
        />
        <Path
          variants={{
            close: { d: "M 2 16.346 L 20 16.346" },
            open: { d: "M 3 2.5 L 17 16.346" },
          }}
        />
      </svg>
    </button>
  );
};

const navbarVariant = {
  open: {
    transition: {
      staggerChildren: 0.07,
      delayChildren: 0.2,
    },
  },
  close: {
    transition: {
      staggerChildren: 0.05,
      staggerDirection: -1,
    },
  },
};

const NavbarItemVariant = {
  open: {
    y: 0,
    opacity: 1,
    transition: {
      y: { stiffness: 1000, velocity: -100 },
    },
  },
  close: {
    y: 50,
    opacity: 0,
    transition: {
      y: { stiffness: 1000 },
    },
  },
};

const NavbarItem = () => {
  return (
    <motion.li variants={NavbarItemVariant}>
      <div
        style={{
          width: "40px",
          height: "40px",
          borderRadius: "50%",
          flex: "40px 0",
          marginRight: "20px",
          border: "1px solid black",
        }}
      />
      <div
        style={{
          borderRadius: "5px",
          width: " 200px",
          height: "20px",
          flex: 1,
        }}
      />
    </motion.li>
  );
};

const itemIds = [0, 1, 2, 3, 4];

const Navbar = () => {
  return (
    <motion.ul
      style={{
        position: "absolute",
        top: "90px",
      }}
      variants={navbarVariant}
    >
      {itemIds.map((_, index) => (
        <NavbarItem key={index} />
      ))}
    </motion.ul>
  );
};

const Sidebar = () => {
  const [isOpened, toggleOpen] = useCycle(false, true);

  return (
    <Body>
      <Container isOpen={isOpened}>
        <Background variant={sidebar} />
        <Navbar />

        <MenuItem toggle={toggleOpen} />
      </Container>
    </Body>
  );
};

export default Sidebar;
