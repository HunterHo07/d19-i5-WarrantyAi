import { Suspense, useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls, PerspectiveCamera, useTexture, Environment } from '@react-three/drei';
import * as THREE from 'three';

// Receipt Model
const Receipt = ({ position = [0, 0, 0], rotation = [0, 0, 0], scale = 1, hover = false }) => {
  const meshRef = useRef();
  
  // Animate on hover
  useFrame((state) => {
    if (hover && meshRef.current) {
      meshRef.current.rotation.y = Math.sin(state.clock.getElapsedTime() * 0.5) * 0.2;
      meshRef.current.position.y = Math.sin(state.clock.getElapsedTime()) * 0.1;
    }
  });
  
  // Load texture
  const texture = useTexture('/assets/images/receipt-1.svg');
  
  return (
    <group position={position} rotation={rotation} scale={scale}>
      <mesh ref={meshRef}>
        <planeGeometry args={[1, 1.5, 1]} />
        <meshStandardMaterial map={texture} transparent side={THREE.DoubleSide} />
      </mesh>
    </group>
  );
};

// Document Model
const Document = ({ position = [0, 0, 0], rotation = [0, 0, 0], scale = 1, hover = false }) => {
  const groupRef = useRef();
  const pageRef = useRef();
  
  // Animate on hover
  useFrame((state) => {
    if (hover && groupRef.current) {
      groupRef.current.rotation.y = Math.sin(state.clock.getElapsedTime() * 0.5) * 0.3;
      
      if (pageRef.current) {
        pageRef.current.position.z = Math.sin(state.clock.getElapsedTime() * 2) * 0.02 + 0.02;
      }
    }
  });
  
  return (
    <group ref={groupRef} position={position} rotation={rotation} scale={scale}>
      {/* Document base */}
      <mesh>
        <boxGeometry args={[1, 1.4, 0.05]} />
        <meshStandardMaterial color="#ffffff" />
      </mesh>
      
      {/* Document page */}
      <mesh ref={pageRef} position={[0, 0, 0.03]}>
        <planeGeometry args={[0.9, 1.3, 1]} />
        <meshStandardMaterial color="#f5f5f5" />
      </mesh>
      
      {/* Text lines */}
      {[...Array(6)].map((_, i) => (
        <mesh key={i} position={[0, 0.5 - i * 0.2, 0.031]}>
          <planeGeometry args={[0.7, 0.05, 1]} />
          <meshStandardMaterial color="#e0e0e0" />
        </mesh>
      ))}
    </group>
  );
};

// Shield Model
const Shield = ({ position = [0, 0, 0], rotation = [0, 0, 0], scale = 1, hover = false }) => {
  const meshRef = useRef();
  
  // Animate on hover
  useFrame((state) => {
    if (hover && meshRef.current) {
      meshRef.current.rotation.y = state.clock.getElapsedTime() * 0.5;
      meshRef.current.position.y = Math.sin(state.clock.getElapsedTime()) * 0.1;
    }
  });
  
  return (
    <group position={position} rotation={rotation} scale={scale}>
      <mesh ref={meshRef}>
        <cylinderGeometry args={[0.7, 0.7, 0.2, 32, 1, false, 0, Math.PI]} />
        <meshStandardMaterial color="#0EA5E9" metalness={0.5} roughness={0.2} />
      </mesh>
      <mesh position={[0, 0, 0.1]}>
        <cylinderGeometry args={[0.6, 0.6, 0.01, 32, 1, false, 0, Math.PI]} />
        <meshStandardMaterial color="#8B5CF6" metalness={0.5} roughness={0.2} />
      </mesh>
      <mesh position={[0, 0, 0.15]}>
        <boxGeometry args={[0.3, 0.5, 0.05]} />
        <meshStandardMaterial color="#FFFFFF" />
      </mesh>
    </group>
  );
};

// Main Scene Component
const Scene3D = ({
  className = '',
  cameraPosition = [0, 0, 5],
  modelType = 'receipt',
  autoRotate = false,
  enableZoom = false,
  enableControls = true,
  background = 'transparent',
  height = '400px',
  hover = true,
}) => {
  const renderModel = () => {
    switch (modelType) {
      case 'receipt':
        return <Receipt hover={hover} />;
      case 'document':
        return <Document hover={hover} />;
      case 'shield':
        return <Shield hover={hover} />;
      default:
        return <Receipt hover={hover} />;
    }
  };
  
  return (
    <div className={`${className}`} style={{ height }}>
      <Canvas>
        <PerspectiveCamera makeDefault position={cameraPosition} />
        <ambientLight intensity={0.5} />
        <pointLight position={[10, 10, 10]} intensity={1} />
        <Suspense fallback={null}>
          {renderModel()}
          <Environment preset="city" />
        </Suspense>
        {enableControls && (
          <OrbitControls
            enablePan={false}
            enableZoom={enableZoom}
            autoRotate={autoRotate}
            autoRotateSpeed={1}
          />
        )}
      </Canvas>
    </div>
  );
};

export default Scene3D;
