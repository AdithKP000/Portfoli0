import { Suspense,useEffect,useState }  from 'react';
import { Canvas, events } from '@react-three/fiber';
import{OrbitControls,Preload,useGLTF,} from'@react-three/drei';
import CanvasLoader from "../Loader";

const ComputersCanvas = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(max-width: 500px)");

    setIsMobile(mediaQuery.matches);

    const handleMediaQueryChange = (event) => {
      setIsMobile(event.matches);
    };

    mediaQuery.addEventListener("change", handleMediaQueryChange);

    return () => {
      mediaQuery.removeEventListener("change", handleMediaQueryChange);
    };
  }, []);

const Computers = () => {

 

  const { scene, error, isLoading } = useGLTF("/desktop_pc/scene.gltf");
  if (isLoading) {
    return <CanvasLoader />; // Show a loader while the model is loading
  }

  if (error) {
    console.error("GLTF Load Failed:", error);
    return <CanvasLoader />; // Optionally show an error message or fallback UI
  }

  return (
    <mesh>
    <hemisphereLight intensity={2.5} groundColor='black' />
    
  <pointLight intensity={1}/>
    <primitive
    object={scene}
    scale={isMobile ? 0.5 : 0.7}
    position={isMobile ?[0, -1.5, -1]:[0, -3, -2.2] }
    rotation={[-0.01, -0.2, -0.1]}
    />
    <spotLight 
    position={[-20,50,10]}
    angle={0.12}
    penumbra={1}
    intensity={1}
    castShadow
    shadow-mapSize={1024}
    />
  </mesh>
    )
}



  
  return (
<Canvas 
frameloop='demand'
shadows
camera={{position:[20 , 3 , 5 ], fov: 25}}
gl={{ preserveDrawingBuffer: true }}
>

<Suspense fallback={<CanvasLoader />}>
        <OrbitControls
          enableZoom={false}
          maxPolarAngle={Math.PI / 2}
          minPolarAngle={Math.PI / 2}
        />
        <Computers />
      </Suspense>

      <Preload all />
    </Canvas>

  )
}


export default ComputersCanvas ; 