import React from "react";
import ReactDOM from "react-dom/client";
import Experience from "./Experience.tsx";
import { Canvas } from "@react-three/fiber";
import * as THREE from "three";

import "./global.css";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <Canvas
      className="r3f"
      dpr={[1, 2]}
      gl={{
        antialias: true,
        outputColorSpace: THREE.SRGBColorSpace,
      }}
      camera={{
        fov: 45,
        near: 0.1,
        far: 30,
        position: [0, 0, 6],
      }}
    >
      <Experience />
    </Canvas>
  </React.StrictMode>
);
