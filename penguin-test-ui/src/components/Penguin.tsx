import React, { useRef, useMemo } from 'react';
import * as THREE from 'three';
import { useFrame } from '@react-three/fiber';
import { Float } from '@react-three/drei';

interface PenguinProps {
    position: [number, number, number];
    id?: string;
}

export const Penguin: React.FC<PenguinProps> = ({ position }) => {
    const groupRef = useRef<THREE.Group>(null);
    const bodyRef = useRef<THREE.Mesh>(null);

    // Simple procedural penguin body
    const matBody = useMemo(() => new THREE.MeshStandardMaterial({
        color: "#1a1a2e",
        roughness: 0.1,
        metalness: 0.8
    }), []);

    const matBelly = useMemo(() => new THREE.MeshStandardMaterial({
        color: "#ffffff",
        roughness: 0.2
    }), []);

    const matEyes = useMemo(() => new THREE.MeshStandardMaterial({
        color: "#00e5ff",
        emissive: "#00e5ff",
        emissiveIntensity: 2
    }), []);

    useFrame((state) => {
        if (!groupRef.current) return;

        // Gentle breathing/bobbing
        const t = state.clock.getElapsedTime();
        groupRef.current.position.y = position[1] + Math.sin(t * 2) * 0.1 + 0.5;

        // Slightly tilt body as if walking
        if (bodyRef.current) {
            bodyRef.current.rotation.z = Math.sin(t * 4) * 0.05;
            bodyRef.current.rotation.x = Math.sin(t * 2) * 0.03;
        }
    });

    return (
        <group ref={groupRef} position={[position[0], position[1], position[2]]}>
            <Float speed={2} rotationIntensity={0.2} floatIntensity={0.5}>
                {/* Main Body (Tear drop shape) */}
                <mesh ref={bodyRef}>
                    <sphereGeometry args={[1, 32, 32]} />
                    <primitive object={matBody} />

                    {/* White Belly */}
                    <mesh position={[0, -0.2, 0.5]} scale={[0.8, 1, 0.4]}>
                        <sphereGeometry args={[1, 32, 32]} />
                        <primitive object={matBelly} />
                    </mesh>

                    {/* Eyes */}
                    <mesh position={[0.3, 0.4, 0.8]}>
                        <sphereGeometry args={[0.1, 16, 16]} />
                        <primitive object={matEyes} />
                    </mesh>
                    <mesh position={[-0.3, 0.4, 0.8]}>
                        <sphereGeometry args={[0.1, 16, 16]} />
                        <primitive object={matEyes} />
                    </mesh>

                    {/* Beak */}
                    <mesh position={[0, 0, 1]} rotation={[Math.PI / 2, 0, 0]}>
                        <coneGeometry args={[0.15, 0.4, 16]} />
                        <meshStandardMaterial color="#ffbd00" roughness={0.2} />
                    </mesh>
                </mesh>
            </Float>

            {/* Projected Shadow/Indicator */}
            <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, -0.5, 0]}>
                <ringGeometry args={[1, 1.2, 32]} />
                <meshBasicMaterial color="#00e5ff" transparent opacity={0.3} />
            </mesh>
        </group>
    );
};
