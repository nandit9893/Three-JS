import React from "react";
import { Html, useProgress } from "@react-three/drei";

const CanvasLoader = () => {
  const { progress } = useProgress();
  return (
    <Html as="div" style={{ display: "flex", justifyContent: "center", alignItems: "center", flexDirection: "column"}}>
      <span className="canvas-load"></span>
      <p style={{ fontSize: 14, color: "#f1f1f1", fontWeight: 800, marginTop: 40}}>{progress.toFixed(2)}%</p>
    </Html>
  );
};

export default CanvasLoader;
