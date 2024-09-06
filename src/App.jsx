 // App.js
 import { Canvas } from "@react-three/fiber";
 import { Experience } from "./components/Experience";
 
 function App() {
   return (
     <Canvas
       camera={{
         fov: 64,
         position: [2.3, 1.5, 2.3],
         near: 0.1,  // Adjust near clipping plane
         far: 1000,  // Adjust far clipping plane
       }}
     >
       <Experience />
     </Canvas>
   );
 }
 
 export default App;
 