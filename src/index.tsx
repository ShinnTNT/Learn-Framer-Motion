import { Suspense } from "react";

import { Route, Routes } from "react-router-dom";
import Sidebar from "./tests/sidebar";
import MenuBar from "./tests/menu-bar";
import CountTimer from "./tests/count-timer";

const Index = () => {
  return (
    <Suspense fallback={"Loading"}>
      <Routes>
        <Route path="/sidebar" element={<Sidebar />} />
        <Route path="/menu-bar" element={<MenuBar />} />
        <Route path="/count-timer" element={<CountTimer />} />
      </Routes>
    </Suspense>
  );
};

export default Index;
