import React, { useRef, useMemo } from 'react';
import { useFrame } from '@react-three/fiber';
import * as THREE from 'three';

const SnowParticles = () => {
    const count = 1500;
    const meshRef = useRef<THREE.Points>(null);

    const [positions, velocities] = useMemo(() => {
        const pos = new Float32Array(count * 3);
        const vel = new Float32Array(count);
        for (let i = 0; i < count; i++) {
            pos[i * 3] = (Math.random() - 0.5) * 200;
            pos[i * 3 + 1] = Math.random() * 60;
            pos[i * 3 + 2] = (Math.random() - 0.5) * 200;
            vel[i] = 0.03 + Math.random() * 0.05;
        }
        return [pos, vel];
    }, []);

    useFrame(() => {
        if (!meshRef.current) return;
        const posAttr = meshRef.current.geometry.attributes.position;
        for (let i = 0; i < count; i++) {
            const currentY = posAttr.getY(i);
            posAttr.setY(i, currentY - velocities[i]);
            if (currentY < -5) {
                posAttr.setY(i, 50);
            }
        }
        posAttr.needsUpdate = true;
    });

    return (
        <points ref={meshRef}>
            <bufferGeometry>
                <bufferAttribute
                    attach="attributes-position"
                    count={count}
                    array={positions}
                    itemSize={3}
                    args={[positions, 3]}
                />
            </bufferGeometry>
            <pointsMaterial size={0.15} color="#ffffff" transparent opacity={0.5} sizeAttenuation={true} />
        </points>
    );
};

const MountainRange = () => {
    // We'll create a single large, high-poly displaced terrain for the mountains
    const mountainGeometry = useMemo(() => {
        const geo = new THREE.PlaneGeometry(300, 100, 128, 64);
        const pos = geo.attributes.position;

        // Use a simple procedural noise pattern to create mountain peaks
        for (let i = 0; i < pos.count; i++) {
            const x = pos.getX(i);
            const z = pos.getY(i);

            // Generate height using multiple "peaks"
            let h = 0;
            // Main jagged peaks
            h += Math.sin(x * 0.05) * Math.cos(z * 0.05) * 15;
            h += Math.abs(Math.sin(x * 0.15)) * 10;
            h += Math.sin(x * 0.3) * 3;

            // Flatten the center area where the penguin moves
            const distFromCenter = Math.sqrt(x * x + z * z);
            const mask = Math.min(1, Math.max(0, (distFromCenter - 40) / 40));

            pos.setZ(i, h * mask);
        }

        geo.computeVertexNormals();
        return geo;
    }, []);

    return (
        <mesh
            geometry={mountainGeometry}
            rotation={[-Math.PI / 2, 0, 0]}
            position={[0, -1, 0]}
            receiveShadow
        >
            <meshStandardMaterial
                color="#f0f5ff"
                emissive="#a0c0ff"
                emissiveIntensity={0.1}
                metalness={0.2}
                roughness={0.8}
                flatShading={false}
            />
        </mesh>
    );
};

export const Map: React.FC = () => {
    return (
        <group>
            {/* Snowy Floor Base */}
            <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, -0.5, 0]} receiveShadow>
                <planeGeometry args={[500, 500]} />
                <meshStandardMaterial color="#eef2ff" metalness={0.1} roughness={0.9} />
            </mesh>

            {/* Tactical Grid */}
            <gridHelper
                args={[200, 44, "#00e5ff", "#c0d0ff"]}
                position={[0, -0.45, 0]}
            >
                <lineBasicMaterial attach="material" transparent opacity={0.15} />
            </gridHelper>

            {/* Atmosphere: Snowfall */}
            <SnowParticles />

            {/* 3D Static Mountains */}
            <MountainRange />

            {/* Horizon Glow */}
            <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, -0.49, 0]}>
                <cylinderGeometry args={[150, 150, 0.1, 64]} />
                <meshBasicMaterial color="#00e5ff" transparent opacity={0.05} />
            </mesh>
        </group>
    );
};
