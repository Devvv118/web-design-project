import { useState } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import Experience from "../Experience";

function Model() {
  const [currentModel, setCurrentModel] = useState("myhomeOne.glb");

  const floorModels = {
    "floor1.jpg": "myhomeFinalthisOne.glb",
    "floor2.jpeg": "myhomeFinalthisTwo.glb",
    "floor4.jpeg": "myhomeFinalthisThree.glb",
    "floor5.jpeg": "myhomeFinalFour.glb",
  };

  return (
    <div className="app-container">
      
      <div className="floor-selection-bar">
      <h2>Floor Textures:</h2>&nbsp;&nbsp;&nbsp;&nbsp;
        {Object.keys(floorModels).map((floorImage) => (
          <img
            key={floorImage}
            src={`/${floorImage}`}
            alt="Floor"
            className="floor-image"
            onClick={() => setCurrentModel(floorModels[floorImage])}
          />
        ))}&nbsp;&nbsp;
      </div>

      <Canvas className="canvas-container" camera={{ position: [4, 2, 5], fov: 50 }} >
        <color attach="background" args={["#F5F5F5"]} />
        <ambientLight intensity={0.1} />
        <directionalLight position={[0, 0, 0]} intensity={1} />
        <Experience modelPath={`/models/${currentModel}`} />
        <OrbitControls enableZoom={true} />
      </Canvas>
    </div>
  );
}

export default Model;
