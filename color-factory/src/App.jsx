import React, { useState } from "react";

import { Navigate, Route, Routes } from "react-router-dom";

import ColorsList from "./ColorsList";
import NewColorForm from "./NewColorForm";
import Color from "./Color";

export default function App() {
  const [colors, setColors] = useState(["red", "blue", "green"]);
  return (
    <Routes>
      <Route path="/colors" element={<ColorsList colors={colors} />} />
      <Route
        path="/colors/new"
        element={<NewColorForm setColors={setColors} />}
      />
      <Route path="/colors/:color" element={<Color colors={colors} />} />
      <Route path="*" element={<Navigate to="/colors" />} />
    </Routes>
  );
}
