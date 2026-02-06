import React, { useRef } from 'react';
import { useFrame } from '@react-three/fiber';

export function PaperPlane(props) {
    const meshRef = useRef();

    useFrame((state, delta) => {
        if (meshRef.current) {
            meshRef.current.rotation.z += delta * 0.2;
            meshRef.current.rotation.x = Math.sin(state.clock.elapsedTime * 0.5) * 0.2;
            meshRef.current.position.y = Math.sin(state.clock.elapsedTime) * 0.5;
        }
    });

    return (
        <group {...props} ref={meshRef}>
            <mesh position={[0, 0, 0]} rotation={[0, Math.PI / 2, 0]}>
                <coneGeometry args={[1, 3, 4]} />
                <meshStandardMaterial color="white" roughness={0.5} />
                <lineSegments>
                    <edgesGeometry args={[new THREE.ConeGeometry(1, 3, 4)]} />
                    <lineBasicMaterial color="black" linewidth={2} />
                </lineSegments>
            </mesh>
        </group>
    );
}
import * as THREE from 'three';
