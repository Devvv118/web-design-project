import { PresentationControls, Stage } from "@react-three/drei";
import { useLoader } from "@react-three/fiber";
import { Suspense } from "react";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
import { DRACOLoader } from "three/examples/jsm/loaders/DRACOLoader";

const Experience = ({ modelPath }) => {
  // 🔹 Load the GLB model dynamically based on `modelPath`
  const gltf = useLoader(GLTFLoader, modelPath, (loader) => {
    const dracoLoader = new DRACOLoader();
    dracoLoader.setDecoderPath("https://www.gstatic.com/draco/v1/decoders/");
    loader.setDRACOLoader(dracoLoader);
  });

  return (
    <PresentationControls speed={1.5} global zoom={1} polar={[-0.1, Math.PI / 24]}>
      <Stage
        environment="city"
        intensity={0.6}
        contactShadow={false}
        adjustCamera={false}
        shadows={false}
      >
        <primitive
          object={gltf.scene}
          scale={0.3}
          position={[0, 0.4, 0]}
          rotation={[Math.PI, 0, Math.PI]}
        />
      </Stage>
    </PresentationControls>
    
  );
};

export default Experience;
