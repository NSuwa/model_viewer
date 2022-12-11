import React, { Suspense } from 'react';
import * as THREE from 'three';
import { Environment, OrbitControls ,Plane} from '@react-three/drei';
import { Canvas } from '@react-three/fiber';
import { Room } from './Room';

export const AddRoom = () => {
    return (
        <Canvas style={{ width: "50vw", height: "50vh"}} camera={{
            position: [0, 3, 8],
            fov: 50,
            aspect: window.innerWidth / window.innerHeight,
            near: 0.1,
            far: 2000
        }}
        shadows>
            <OrbitControls enablePan={true} />
            <color attach="background" args={['#0E1E5E']} />
            
            <directionalLight
                position={[5, 15, 15]}
                intensity={5}
                shadow-mapSize-width={2048}
                shadow-mapSize-height={2048}
                castShadow
            />
            <Suspense fallback={null}>
                <Room />
            </Suspense>
            <Plane rotation={[-Math.PI / 2, 0, 0]} args={[10, 10]} receiveShadow>
                <meshStandardMaterial color="#aaa" side={THREE.DoubleSide} />
            </Plane>
        </Canvas>
    )
}