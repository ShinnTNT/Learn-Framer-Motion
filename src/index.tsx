import { Suspense } from "react";

import { Route, Routes } from "react-router-dom";
import Sidebar from "./tests/sidebar";
import MenuBar from "./tests/menu-bar";
import CountTimer from "./tests/count-timer";
import CategorySelect from "./tests/category-selector";

const Index = () => {
  return (
    <Suspense fallback={"Loading"}>
      <Routes>
        <Route path="/sidebar" element={<Sidebar />} />
        <Route path="/menu-bar" element={<MenuBar />} />
        <Route path="/count-timer" element={<CountTimer />} />
        <Route path="/category-select" element={<CategorySelect />} />
      </Routes>
    </Suspense>
  );
};

export default Index;
