import { Suspense } from "react";

import { Route, Routes } from "react-router-dom";
import Sidebar from "./tests/sidebar";

const Index = () => {
  return (
    <Suspense fallback={"Loading"}>
      <Routes>
        <Route path="/sidebar" element={<Sidebar />} />
      </Routes>
    </Suspense>
  );
};

export default Index;
