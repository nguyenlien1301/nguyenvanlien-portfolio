"use client";

import { skills } from "@/shared/data/skills";
import {
  Float,
  OrbitControls,
  PointMaterial,
  Points,
  Text,
} from "@react-three/drei";
import { Canvas, useFrame } from "@react-three/fiber";
import { useTheme } from "next-themes";
import { ReactNode, useEffect, useRef, useState } from "react";
import { Group, Mesh, Vector3 } from "three";

/* ================= Color + Size Scheme ================= */

const DARK = {
  globe: "#ffffff",
  small: "#8888ff",
  large: "#ffcc00",
  orbit: "#ffffff",
  sun: "#FFD700",
  size: {
    globe: 0.02,
    small: 0.02,
    large: 0.05,
  },
};

const LIGHT = {
  globe: "#000000",
  small: "#0D47A1",
  large: "#F57C00",
  orbit: "#333333",
  sun: "#FFB300",
  size: {
    globe: 0.035,
    small: 0.035,
    large: 0.07,
  },
};

/* ================= Utils ================= */

const createSpherePoints = (count: number, radius: number): Float32Array => {
  const points = new Float32Array(count * 3);
  for (let i = 0; i < count; i++) {
    const phi = Math.acos(-1 + (2 * i) / count);
    const theta = Math.sqrt(count * Math.PI) * phi;

    points[i * 3] = radius * Math.cos(theta) * Math.sin(phi);
    points[i * 3 + 1] = radius * Math.sin(theta) * Math.sin(phi);
    points[i * 3 + 2] = radius * Math.cos(phi);
  }
  return points;
};

const createParticleField = (count: number, area: number): Float32Array => {
  const positions = new Float32Array(count * 3);
  for (let i = 0; i < count; i++) {
    positions[i * 3] = (Math.random() - 0.5) * area;
    positions[i * 3 + 1] = (Math.random() - 0.5) * area;
    positions[i * 3 + 2] = (Math.random() - 0.5) * area;
  }
  return positions;
};

/* ================= Data ================= */
// const globeParticles = createSpherePoints(2500, 3.5);
const smallParticles = createParticleField(5000, 15);
const largeParticles = createParticleField(1000, 20);

/* ================= Components ================= */

type OrbitingPlanetProps = {
  radius: number;
  speed: number;
  size: number;
  color: string;
};

const OrbitingPlanet = ({
  radius,
  speed,
  size,
  color,
}: OrbitingPlanetProps) => {
  const planetRef = useRef<Mesh | null>(null);

  useFrame(({ clock }) => {
    if (!planetRef.current) return;
    const time = clock.getElapsedTime() * speed;
    planetRef.current.position.x = Math.cos(time) * radius;
    planetRef.current.position.z = Math.sin(time) * radius;
  });

  return (
    <mesh ref={planetRef}>
      <sphereGeometry args={[size, 16, 16]} />
      <meshStandardMaterial
        color={color}
        emissive={color}
        emissiveIntensity={0.5}
      />
    </mesh>
  );
};

const Sun = ({ color }: { color: string }) => {
  return (
    <mesh>
      <sphereGeometry args={[0.5, 32, 32]} />
      <meshStandardMaterial emissive={color} emissiveIntensity={2} />
      <pointLight color={color} intensity={3} distance={10} />
    </mesh>
  );
};

const createOrbitPath = (radius: number, segments: number): Vector3[] => {
  const points: Vector3[] = [];
  for (let i = 0; i <= segments; i++) {
    const angle = (i / segments) * Math.PI * 2;
    points.push(
      new Vector3(Math.cos(angle) * radius, 0, Math.sin(angle) * radius),
    );
  }
  return points;
};

/* ================= SkillText ================= */

type SkillTextProps = {
  position: [number, number, number];
  children: ReactNode;
  fontSize?: number;
  color?: string;
};

const SkillText = ({
  position,
  children,
  fontSize = 0.4,
  color = "white",
}: SkillTextProps) => {
  return (
    <Float speed={2.5} rotationIntensity={0.3} floatIntensity={1.5}>
      <Text
        position={position}
        fontSize={fontSize}
        color={color}
        anchorX="center"
        anchorY="middle"
      >
        {children}
      </Text>
    </Float>
  );
};

/* ================= Cloud ================= */

const Cloud = ({ setCursor }: { setCursor: (state: boolean) => void }) => {
  const cloudRef = useRef<Group | null>(null);

  /* ===== Responsive radius ===== */
  const [radiusScale, setRadiusScale] = useState(1);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 1200) {
        setRadiusScale(2 / 3.5); // từ 3.5 xuống 2
      } else {
        setRadiusScale(1);
      }
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);
  const globeParticleSeed = createSpherePoints(2500, 3.5 * radiusScale);

  /* ===== Theme ===== */
  const { theme } = useTheme();
  const isLight = theme === "light";
  const mode = isLight ? LIGHT : DARK;

  /* ===== Geometry ===== */
  const globeParticles = createSpherePoints(skills.length, 3.5 * radiusScale);

  const orbits = [
    createOrbitPath(2 * radiusScale, 100),
    createOrbitPath(3 * radiusScale, 100),
    createOrbitPath(4 * radiusScale, 100),
    createOrbitPath(5 * radiusScale, 100),
  ];

  useFrame(({ clock }) => {
    if (!cloudRef.current) return;
    cloudRef.current.rotation.y = clock.getElapsedTime() * 0.05;
  });

  return (
    <group ref={cloudRef}>
      <Sun color={mode.sun} />

      {skills.map((skill, i) => (
        <SkillText
          key={skill.name}
          position={[
            globeParticles[i * 3],
            globeParticles[i * 3 + 1],
            globeParticles[i * 3 + 2],
          ]}
          fontSize={0.35 * radiusScale}
          color={skill.color}
        >
          {skill.name}
        </SkillText>
      ))}

      <OrbitingPlanet
        radius={2 * radiusScale}
        speed={0.5}
        size={0.15}
        color="#918E85"
      />
      <OrbitingPlanet
        radius={3 * radiusScale}
        speed={0.3}
        size={0.2}
        color="#D9C29E"
      />
      <OrbitingPlanet
        radius={4 * radiusScale}
        speed={0.2}
        size={0.25}
        color="#2A6F9B"
      />
      <OrbitingPlanet
        radius={5 * radiusScale}
        speed={0.1}
        size={0.3}
        color="#C1440E"
      />

      {orbits.map((points, i) => {
        const positions = new Float32Array(
          points.flatMap((p) => [p.x, p.y, p.z]),
        );

        return (
          <line key={i}>
            <bufferGeometry>
              <bufferAttribute
                attach="attributes-position"
                args={[positions, 3]}
              />
            </bufferGeometry>
            <lineBasicMaterial color={mode.orbit} opacity={0.4} transparent />
          </line>
        );
      })}

      <Points positions={globeParticleSeed} stride={3}>
        <PointMaterial
          color={mode.globe}
          size={mode.size.globe}
          transparent
          opacity={0.8}
        />
      </Points>

      <Points positions={smallParticles} stride={3}>
        <PointMaterial
          color={mode.small}
          size={mode.size.small}
          transparent
          opacity={0.5}
        />
      </Points>

      <Points positions={largeParticles} stride={3}>
        <PointMaterial
          color={mode.large}
          size={mode.size.large}
          transparent
          opacity={0.6}
        />
      </Points>
    </group>
  );
};

/* ================= Main ================= */

const EarthRotate = () => {
  const [cursor, setCursor] = useState(false);

  return (
    <div
      className="relative w-full h-full cursor-grab md:min-h-87.5"
      onMouseEnter={() => setCursor(true)}
      onMouseLeave={() => setCursor(false)}
    >
      <Canvas camera={{ position: [0, 0, 8], fov: 60 }}>
        <ambientLight intensity={0.3} />
        <pointLight position={[5, 5, 5]} intensity={0.8} />
        <Cloud setCursor={setCursor} />
        <OrbitControls enableZoom={false} rotateSpeed={0.6} />
      </Canvas>
    </div>
  );
};

export default EarthRotate;
