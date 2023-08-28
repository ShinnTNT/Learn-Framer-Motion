import { Suspense } from "react";

import { Route, Routes } from "react-router-dom";
import Sidebar from "./tests/sidebar";
import MenuBar from "./tests/menu-bar";

const Index = () => {
  return (
    <Suspense fallback={"Loading"}>
      <Routes>
        <Route path="/sidebar" element={<Sidebar />} />
        <Route path="menu-bar" element={<MenuBar />} />
      </Routes>
    </Suspense>
  );
};

export default Index;
