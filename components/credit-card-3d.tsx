"use client"

import { useRef, useState } from "react"
import { Canvas, useFrame } from "@react-three/fiber"
import { OrbitControls, PerspectiveCamera, Environment, Html } from "@react-three/drei"
import { Button } from "@/components/ui/button"
import { RotateCw, Pause, Play } from "lucide-react"

function CreditCardModel({ flipped, ...props }) {
  const meshRef = useRef()

  // Subtle animation
  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.y = Math.sin(state.clock.getElapsedTime() * 0.3) * 0.1
      meshRef.current.rotation.x = Math.sin(state.clock.getElapsedTime() * 0.2) * 0.05
    }
  })

  // Light blue color #C5E3FD
  const cardColor = "#C5E3FD"

  return (
    <group {...props} rotation={[0, flipped ? Math.PI : 0, 0]}>
      <mesh ref={meshRef} castShadow receiveShadow>
        {/* Card body */}
        <boxGeometry args={[3.37, 2.13, 0.06]} />
        <meshStandardMaterial color="white" metalness={0.3} roughness={0.2} envMapIntensity={1} />

        {/* Card front */}
        <mesh position={[0, 0, 0.031]}>
          <planeGeometry args={[3.37, 2.13]} />
          <meshStandardMaterial color={cardColor} metalness={0.4} roughness={0.2} />
        </mesh>

        {/* Card back */}
        <mesh position={[0, 0, -0.031]} rotation={[0, Math.PI, 0]}>
          <planeGeometry args={[3.37, 2.13]} />
          <meshStandardMaterial color={cardColor} metalness={0.4} roughness={0.2} />
        </mesh>

        {/* Front Card Content */}
        {!flipped && (
          <>
            {/* Bank Logo */}
            <mesh position={[-1, 0.8, 0.032]}>
              <Html transform scale={0.4}>
                <div className="text-gray-800 text-base font-bold font-roboto">PREMIUM</div>
              </Html>
            </mesh>

            {/* Card Type */}
            <mesh position={[1.2, 0.8, 0.032]}>
              <Html transform scale={0.3}>
                <div className="text-gray-800 text-xs font-bold font-roboto">WORLD ELITE</div>
              </Html>
            </mesh>

            {/* Chip */}
            <mesh position={[-1.2, 0.3, 0.032]}>
              <boxGeometry args={[0.5, 0.4, 0.03]} />
              <meshStandardMaterial color="gold" metalness={0.8} roughness={0.3} />
            </mesh>

            {/* Card Number */}
            <mesh position={[0.2, 0, 0.032]}>
              <Html transform scale={0.5}>
                <div
                  className="text-gray-800 text-base tracking-wider font-roboto"
                  style={{ fontFamily: "'Roboto Mono', monospace", whiteSpace: "nowrap" }}
                >
                  4929 1234 5678 9012
                </div>
              </Html>
            </mesh>

            {/* Cardholder Name */}
            <mesh position={[-1, -0.5, 0.032]}>
              <Html transform scale={0.3}>
                <div className="font-roboto">
                  <div className="text-gray-600 text-xs">CHỦ THẺ</div>
                  <div className="text-gray-800 text-sm font-medium">NGUYỄN VĂN A</div>
                </div>
              </Html>
            </mesh>

            {/* Expiry Date */}
            <mesh position={[1, -0.5, 0.032]}>
              <Html transform scale={0.3}>
                <div className="font-roboto text-right">
                  <div className="text-gray-600 text-xs">HẠN SỬ DỤNG</div>
                  <div className="text-gray-800 text-sm font-medium">12/28</div>
                </div>
              </Html>
            </mesh>

            {/* Card Brand */}
            <mesh position={[1, -0.8, 0.032]}>
              <Html transform scale={0.3}>
                <div className="text-gray-800 text-xs font-bold font-roboto">PREMIUM CARD</div>
              </Html>
            </mesh>
          </>
        )}

        {/* Back Card Content */}
        {flipped && (
          <>
            {/* Magnetic Strip */}
            <mesh position={[0, 0.7, -0.032]}>
              <boxGeometry args={[3.37, 0.5, 0.01]} />
              <meshStandardMaterial color="#333333" />
            </mesh>

            {/* Signature Strip */}
            <mesh position={[0.5, 0, -0.032]}>
              <Html transform scale={0.3}>
                <div className="bg-white px-3 py-1 rounded">
                  <div className="text-black text-sm font-mono">123</div>
                </div>
              </Html>
            </mesh>

            {/* Info Text */}
            <mesh position={[0, -0.5, -0.032]}>
              <Html transform scale={0.3}>
                <div className="text-gray-700 text-xs max-w-[200px] text-center font-roboto">
                  Thẻ này là tài sản của PremiumCard. Việc sử dụng thẻ tuân theo các điều khoản đã thỏa thuận.
                </div>
              </Html>
            </mesh>
          </>
        )}
      </mesh>
    </group>
  )
}

export default function CreditCard3D() {
  const [flipped, setFlipped] = useState(false)
  const [autoRotate, setAutoRotate] = useState(true)
  const controlsRef = useRef()

  const resetView = () => {
    if (controlsRef.current) {
      controlsRef.current.reset()
    }
  }

  return (
    <div className="relative h-full w-full">
      <Canvas shadows className="bg-transparent">
        <PerspectiveCamera makeDefault position={[0, 0, 5]} />
        <ambientLight intensity={0.7} />
        <spotLight position={[5, 5, 5]} angle={0.15} penumbra={1} intensity={1} castShadow />
        <pointLight position={[-5, -5, -5]} intensity={0.5} />

        <CreditCardModel flipped={flipped} position={[0, 0, 0]} />

        <OrbitControls
          ref={controlsRef}
          autoRotate={autoRotate}
          autoRotateSpeed={1}
          enablePan={false}
          enableZoom={true}
          enableRotate={true}
          minDistance={3}
          maxDistance={10}
          minPolarAngle={Math.PI / 6}
          maxPolarAngle={Math.PI / 2}
        />
        <Environment preset="city" />
      </Canvas>

      <div className="absolute bottom-4 left-4 right-4 flex justify-center gap-2">
        <Button
          variant="secondary"
          size="sm"
          className="bg-[#C5E3FD] text-gray-800 hover:bg-[#a3d0f9] shadow-md font-roboto"
          onClick={() => setFlipped(!flipped)}
        >
          {flipped ? "Xem mặt trước" : "Xem mặt sau"}
        </Button>
        <Button
          variant="secondary"
          size="sm"
          className="bg-[#C5E3FD] text-gray-800 hover:bg-[#a3d0f9] shadow-md"
          onClick={() => setAutoRotate(!autoRotate)}
        >
          {autoRotate ? <Pause className="h-4 w-4" /> : <Play className="h-4 w-4" />}
        </Button>
        <Button
          variant="secondary"
          size="sm"
          className="bg-[#C5E3FD] text-gray-800 hover:bg-[#a3d0f9] shadow-md"
          onClick={resetView}
        >
          <RotateCw className="h-4 w-4" />
        </Button>
      </div>
    </div>
  )
}
