import React, { useState, useEffect, useMemo, Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, Stars } from '@react-three/drei';
import { EffectComposer, Bloom } from '@react-three/postprocessing'
import { Map } from './components/Map';
import { Penguin } from './components/Penguin';
import { List, Bird, Navigation, Activity } from 'lucide-react';

// Configuration
const MAP_WIDTH = 100;
const MAP_HEIGHT = 100;
const LONG_CENTER = -55.04;
const LAT_CENTER = -65.95;
const LONG_SPAN = 21.6;
const LAT_SPAN = 9.6;

interface TelemetryPoint {
  BirdId: string;
  Latitude: string;
  Longitude: string;
  DateGMT: string;
  TimeGMT: string;
}

interface BirdStats {
  BirdId: string;
  records: number;
  sex: string;
  age: string;
  stage: string;
}

const App: React.FC = () => {
  const [birds, setBirds] = useState<BirdStats[]>([]);
  const [selectedBird, setSelectedBird] = useState<string | null>(null);
  const [telemetry, setTelemetry] = useState<TelemetryPoint[]>([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);
  const [loading, setLoading] = useState(true);

  // Initial Fetch
  useEffect(() => {
    const fetchBirds = async () => {
      try {
        const response = await fetch('http://localhost:3001/api/stats');
        const data = await response.json();
        setBirds(data.birds);
        if (data.birds.length > 0 && !selectedBird) {
          setSelectedBird(data.birds[0].BirdId);
        }
      } catch (error) {
        console.error("Failed to fetch statistics:", error);
      } finally {
        setLoading(false);
      }
    };
    fetchBirds();
  }, []);

  // Fetch Telemetry for selected bird
  useEffect(() => {
    if (!selectedBird) return;

    const fetchTelemetry = async () => {
      try {
        setLoading(true); // Show loader while fetching new bird telemetry
        const response = await fetch(`http://localhost:3001/api/penguins/${selectedBird}`);
        const data = await response.json();
        setTelemetry(data);
        setCurrentIndex(0); // Reset animation for new specimen
        setLoading(false);
      } catch (error) {
        console.error("Failed to fetch telemetry:", error);
        setLoading(false);
      }
    };
    fetchTelemetry();
  }, [selectedBird]);

  // Animation Loop
  useEffect(() => {
    if (!isPlaying || telemetry.length === 0) return;

    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % telemetry.length);
    }, 150);

    return () => clearInterval(interval);
  }, [isPlaying, telemetry]);

  // Convert Lat/Long to X/Z
  const currentPoint = useMemo(() => {
    if (telemetry.length === 0 || !telemetry[currentIndex]) return [0, 0, 0] as [number, number, number];
    const point = telemetry[currentIndex];

    const lon = parseFloat(point.Longitude);
    const lat = parseFloat(point.Latitude);

    // Map to normalized 3D space
    const x = (lon - LONG_CENTER) * (MAP_WIDTH / LONG_SPAN);
    const z = -(lat - LAT_CENTER) * (MAP_HEIGHT / LAT_SPAN);

    return [x, 0, z] as [number, number, number];
  }, [telemetry, currentIndex]);

  const handleBirdSelection = (birdId: string) => {
    console.log("Switching specimen to:", birdId);
    setSelectedBird(birdId);
  };

  return (
    <div style={{ width: '100vw', height: '100vh', position: 'relative', background: '#02040a' }}>
      {/* 3D Viewport */}
      <Canvas shadows camera={{ position: [0, 60, 110], fov: 45 }} style={{ background: '#02040a' }}>
        <Suspense fallback={null}>
          <OrbitControls
            enableDamping
            dampingFactor={0.05}
            maxPolarAngle={Math.PI / 2.1}
            minDistance={10}
            maxDistance={300}
          />

          <Stars radius={200} depth={50} count={3000} factor={4} saturation={1} fade speed={1} />

          <ambientLight intensity={1.2} color="#eef2ff" />
          <pointLight position={[60, 90, 60]} intensity={4} color="#00e5ff" castShadow />
          <pointLight position={[-60, 40, -60]} intensity={2} color="#ffffff" />
          <fog attach="fog" args={['#02040a', 100, 250]} />

          <Map />

          {selectedBird && (
            <Penguin position={currentPoint} />
          )}

          {/* Trail visualization */}
          <group>
            {telemetry.slice(0, currentIndex).map((p, i) => {
              if (i % 8 !== 0) return null;
              const x = (parseFloat(p.Longitude) - LONG_CENTER) * (MAP_WIDTH / LONG_SPAN);
              const z = -(parseFloat(p.Latitude) - LAT_CENTER) * (MAP_HEIGHT / LAT_SPAN);
              return (
                <mesh key={i} position={[x, -0.3, z]} rotation={[-Math.PI / 2, 0, 0]}>
                  <ringGeometry args={[0.25, 0.45, 16]} />
                  <meshBasicMaterial color="#00e5ff" transparent opacity={0.4} />
                </mesh>
              );
            })}
          </group>

          <EffectComposer>
            <Bloom luminanceThreshold={1.2} intensity={1.5} radius={0.4} />
          </EffectComposer>
        </Suspense>
      </Canvas>

      {/* Dashboard UI */}
      <div className="dashboard">
        <header className="panel header" style={{ background: 'linear-gradient(to right, rgba(20,20,35,0.9), rgba(10,10,20,0.7))' }}>
          <div className="title">
            <Navigation size={32} color="#00e5ff" />
            MISSION CONTROL: PENGUIN TRACKER
          </div>
          <div style={{ pointerEvents: 'auto', display: 'flex', gap: '20px' }}>
            <div style={{ display: 'flex', gap: '8px', color: 'var(--primary)', alignItems: 'center' }}>
              <Activity size={18} className="animate-pulse" />
              <span style={{ fontSize: '12px', fontWeight: 700, letterSpacing: '2px' }}>LIVE TELEMETRY STREAM</span>
            </div>
          </div>
        </header>

        <aside className="panel stats-panel" style={{ borderRight: '1px solid var(--primary)' }}>
          <h3 style={{ marginBottom: '16px', color: '#00e5ff', display: 'flex', alignItems: 'center', gap: '8px', fontSize: '14px', letterSpacing: '1px' }}>
            <List size={18} />SPECIMEN REGISTRY
          </h3>
          <div className="bird-list" style={{ pointerEvents: 'auto' }}>
            {birds.map(bird => (
              <div
                key={bird.BirdId}
                className={`bird-item ${selectedBird === bird.BirdId ? 'active' : ''}`}
                onClick={() => handleBirdSelection(bird.BirdId)}
                style={{
                  cursor: 'pointer',
                  borderLeft: selectedBird === bird.BirdId ? '4px solid #00e5ff' : '4px solid transparent',
                  background: selectedBird === bird.BirdId ? 'rgba(0, 229, 255, 0.1)' : 'rgba(255,255,255,0.02)'
                }}
              >
                <div style={{ fontWeight: 600, color: selectedBird === bird.BirdId ? '#00e5ff' : '#fff' }}>{bird.BirdId}</div>
                <div style={{ fontSize: '11px', color: 'var(--text-dim)', marginTop: '4px' }}>
                  {bird.records} points • {bird.sex} • {bird.age}
                </div>
              </div>
            ))}
          </div>

          <div style={{ marginTop: 'auto', borderTop: '1px solid rgba(255,255,255,0.1)', paddingTop: '20px' }}>
            <div className="stat-card">
              <div className="stat-label">Acquired Coordinates</div>
              <div className="stat-value" style={{ fontSize: '15px', color: '#00e5ff', fontFamily: 'monospace' }}>
                {telemetry[currentIndex] ? (
                  `${telemetry[currentIndex].Latitude}, ${telemetry[currentIndex].Longitude}`
                ) : 'DATA PENDING...'}
              </div>
            </div>
            <div className="stat-card" style={{ marginTop: '12px' }}>
              <div className="stat-label">Relative Timestamp</div>
              <div className="stat-value" style={{ fontSize: '15px', color: '#7000ff', fontFamily: 'monospace' }}>
                {telemetry[currentIndex] ? (
                  `${telemetry[currentIndex].DateGMT} | ${telemetry[currentIndex].TimeGMT}`
                ) : '--:--:--'}
              </div>
            </div>
          </div>
        </aside>

        <div className="controls" style={{ pointerEvents: 'auto', background: 'rgba(10,10,20,0.5)', padding: '10px', borderRadius: '40px', backdropFilter: 'blur(5px)' }}>
          <button className="btn" onClick={() => setIsPlaying(!isPlaying)}>
            {isPlaying ? 'PAUSE ACQUISITION' : 'RESUME ACQUISITION'}
          </button>
          <button className="btn btn-secondary" onClick={() => setCurrentIndex(0)}>
            RESTART SEQUENCE
          </button>
        </div>
      </div>

      {(loading || telemetry.length === 0) && (
        <div style={{ position: 'absolute', inset: 0, background: 'rgba(5, 5, 10, 0.95)', backdropFilter: 'blur(20px)', display: 'flex', justifyContent: 'center', alignItems: 'center', zIndex: 100 }}>
          <div style={{ textAlign: 'center' }}>
            <Bird size={48} className="animate-spin" color="#00e5ff" style={{ marginBottom: '20px' }} />
            <div style={{ width: '200px', height: '2px', background: 'rgba(255,255,255,0.1)', overflow: 'hidden', margin: '0 auto' }}>
              <div className="animate-pulse" style={{ width: '100%', height: '100%', background: '#00e5ff' }}></div>
            </div>
            <p style={{ marginTop: '20px', letterSpacing: '4px', fontWeight: 600, fontSize: '10px', color: '#00e5ff' }}>ESTABLISHING SATELLITE UPLINK...</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default App;
