import { Suspense } from "react";

import { Route, Routes } from "react-router-dom";
import Sidebar from "./tests/sidebar";
import MenuBar from "./tests/menu-bar";
import CountTimer from "./tests/count-timer";
import CategorySelect from "./tests/category-selector";
import Reorder from "./tests/Reorder";
import Scroll from "./tests/Scroll";
import ScrollTriggerAnimation from "./tests/ScrollTriggerAnimation";
import AnimatedText from "./tests/AnimatedText";

const Index = () => {
  return (
    <Suspense fallback={"Loading"}>
      <Routes>
        <Route path="/sidebar" element={<Sidebar />} />
        <Route path="/menu-bar" element={<MenuBar />} />
        <Route path="/count-timer" element={<CountTimer />} />
        <Route path="/category-select" element={<CategorySelect />} />
        <Route path="/reorder-item" element={<Reorder />} />
        <Route path="/scroll" element={<Scroll />} />
        <Route
          path="/scroll-trigger-animation"
          element={<ScrollTriggerAnimation />}
        />
        <Route path="/animated-text" element={<AnimatedText />} />
      </Routes>
    </Suspense>
  );
};

export default Index;
