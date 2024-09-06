 // Experience.js
import { OrbitControls, ScrollControls } from "@react-three/drei";
import { Office } from "./Office";
import { Overlay } from "./Overlay";

export const Experience = () => {
  return (
    <>
      <ambientLight intensity={1} />
      <OrbitControls enableZoom={false} />
      <ScrollControls
        pages={3}
        damping={0.25}
        horizontal={false} // Ensure scroll is vertical
      >
        <Overlay />
        <Office />
      </ScrollControls>
    </>
  );
};
