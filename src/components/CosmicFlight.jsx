import React, { useRef, useState, useEffect } from 'react'
import { useSelector } from 'react-redux'
import { Canvas, useFrame } from '@react-three/fiber'
import { OrbitControls, Stars, Text } from '@react-three/drei'
import * as THREE from 'three'
import './CosmicFlight.css'

function Sun() {
  return (
    <mesh>
      <sphereGeometry args={[1, 32, 32]} />
      <meshBasicMaterial color="#FFD700" />
      <pointLight intensity={2} distance={50} />
    </mesh>
  )
}

function Planet({ position, color, size, name, speed }) {
  const meshRef = useRef()
  const [hovered, setHovered] = useState(false)

  useFrame((state) => {
    if (meshRef.current) {
      const time = state.clock.getElapsedTime()
      const distance = Math.sqrt(position[0] ** 2 + position[2] ** 2)
      const angle = time * speed
      meshRef.current.position.x = Math.cos(angle) * distance
      meshRef.current.position.z = Math.sin(angle) * distance
      meshRef.current.rotation.y += 0.01
    }
  })

  return (
    <group ref={meshRef} position={position}>
      <mesh
        onPointerOver={() => setHovered(true)}
        onPointerOut={() => setHovered(false)}
      >
        <sphereGeometry args={[size, 32, 32]} />
        <meshStandardMaterial
          color={hovered ? color : color}
          emissive={hovered ? color : '#000000'}
          emissiveIntensity={hovered ? 0.5 : 0}
        />
      </mesh>
      {hovered && (
        <Text
          position={[0, size + 0.5, 0]}
          fontSize={0.3}
          color="#ffffff"
          anchorX="center"
          anchorY="middle"
        >
          {name}
        </Text>
      )}
    </group>
  )
}

function Spaceship({ progress }) {
  const shipRef = useRef()
  const [position, setPosition] = useState([0, 0, 0])

  useEffect(() => {
    // Calculate position along the path from Earth to Mars
    const earthPos = [5, 0, 0]
    const marsPos = [8, 0, 0]
    
    const x = earthPos[0] + (marsPos[0] - earthPos[0]) * progress
    const y = earthPos[1] + (marsPos[1] - earthPos[1]) * progress + Math.sin(progress * Math.PI) * 0.5
    const z = earthPos[2] + (marsPos[2] - earthPos[2]) * progress
    
    setPosition([x, y, z])
  }, [progress])

  useFrame((state) => {
    if (shipRef.current) {
      shipRef.current.rotation.y = Math.atan2(position[2], position[0]) + Math.PI / 2
      shipRef.current.rotation.x = Math.sin(state.clock.getElapsedTime() * 2) * 0.1
    }
  })

  return (
    <mesh ref={shipRef} position={position}>
      <coneGeometry args={[0.15, 0.4, 8]} />
      <meshStandardMaterial color="#00d4ff" emissive="#00d4ff" emissiveIntensity={0.5} />
      <pointLight color="#00d4ff" intensity={1} distance={2} />
    </mesh>
  )
}

function CosmicFlightScene({ todos }) {
  const completedCount = todos.filter((t) => t.completed).length
  const totalCount = todos.length
  const progress = totalCount > 0 ? Math.min(completedCount / totalCount, 1) : 0

  return (
    <>
      <ambientLight intensity={0.3} />
      <pointLight position={[0, 0, 0]} intensity={1} />
      <Sun />
      
      {/* Planets */}
      <Planet position={[3, 0, 0]} color="#4A90E2" size={0.3} name="Mercury" speed={0.02} />
      <Planet position={[4, 0, 0]} color="#FF6B6B" size={0.35} name="Venus" speed={0.015} />
      <Planet position={[5, 0, 0]} color="#6BCF7F" size={0.4} name="Earth" speed={0.01} />
      <Planet position={[8, 0, 0]} color="#E74C3C" size={0.35} name="Mars" speed={0.008} />
      
      {/* Spaceship */}
      <Spaceship progress={progress} />
      
      {/* Stars background */}
      <Stars radius={50} depth={50} count={2000} factor={4} fade speed={0.5} />
      
      {/* Orbit paths */}
      {[3, 4, 5, 8].map((radius, i) => (
        <mesh key={i} rotation={[Math.PI / 2, 0, 0]}>
          <ringGeometry args={[radius - 0.1, radius + 0.1, 64]} />
          <meshBasicMaterial color="#ffffff" opacity={0.1} transparent side={THREE.DoubleSide} />
        </mesh>
      ))}
    </>
  )
}

function CosmicFlight() {
  const todos = useSelector((state) => state.todos.todos)
  const completedCount = todos.filter((t) => t.completed).length
  const totalCount = todos.length
  const progress = totalCount > 0 ? Math.min(completedCount / totalCount, 1) : 0

  return (
    <div className="cosmic-flight-container">
      <div className="flight-info">
        <h3>🚀 Flight Progress to Mars</h3>
        <div className="progress-bar">
          <div className="progress-fill" style={{ width: `${progress * 100}%` }}></div>
        </div>
        <p>{Math.round(progress * 100)}% Complete</p>
        <p className="info-text">
          Complete todos to advance your spaceship from Earth to Mars!
        </p>
      </div>
      <Canvas
        camera={{ position: [0, 12, 15], fov: 60 }}
        style={{ background: '#000000' }}
      >
        <CosmicFlightScene todos={todos} />
        <OrbitControls
          enablePan={true}
          enableZoom={true}
          enableRotate={true}
          minDistance={5}
          maxDistance={30}
        />
      </Canvas>
    </div>
  )
}

export default CosmicFlight

