"use client"

import { useRef, useState } from "react"
import { Canvas, useFrame } from "@react-three/fiber"
import { OrbitControls, PerspectiveCamera, Environment, useGLTF } from "@react-three/drei"
import { Button } from "@/components/ui/button"
import { Slider } from "@/components/ui/slider"
import { RefreshCw, ZoomIn, ZoomOut } from "lucide-react"

function Model({ scale, color, position = [0, 0, 0], rotation = [0, 0, 0] }) {
  const meshRef = useRef()
  const { scene } = useGLTF("/assets/3d/duck.glb")

  useFrame(() => {
    if (meshRef.current) {
      meshRef.current.rotation.y += 0.003
    }
  })

  return (
    <primitive ref={meshRef} object={scene} position={position} rotation={rotation} scale={[scale, scale, scale]} />
  )
}

export default function ThreeDViewer() {
  const [modelScale, setModelScale] = useState(2)
  const [autoRotate, setAutoRotate] = useState(true)
  const controlsRef = useRef()

  const resetCamera = () => {
    if (controlsRef.current) {
      controlsRef.current.reset()
    }
  }

  const handleZoomIn = () => {
    if (controlsRef.current) {
      controlsRef.current.zoomIn()
    }
  }

  const handleZoomOut = () => {
    if (controlsRef.current) {
      controlsRef.current.zoomOut()
    }
  }

  return (
    <div className="relative h-full w-full">
      <Canvas shadows className="bg-gradient-to-b from-blue-50 to-blue-100">
        <PerspectiveCamera makeDefault position={[0, 1, 5]} />
        <ambientLight intensity={0.5} />
        <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} intensity={1} castShadow />
        <pointLight position={[-10, -10, -10]} intensity={0.5} />

        <Model scale={modelScale} color="#1e88e5" />

        <OrbitControls
          ref={controlsRef}
          autoRotate={autoRotate}
          autoRotateSpeed={1}
          enablePan={true}
          enableZoom={true}
          enableRotate={true}
          minDistance={3}
          maxDistance={20}
        />
        <Environment preset="city" />
      </Canvas>

      <div className="absolute bottom-4 left-4 right-4 flex flex-col gap-4 bg-white/80 backdrop-blur-sm p-4 rounded-lg shadow-lg">
        <div className="flex items-center gap-2">
          <span className="text-sm font-medium w-24">Kích thước:</span>
          <Slider
            value={[modelScale]}
            min={0.5}
            max={5}
            step={0.1}
            onValueChange={(value) => setModelScale(value[0])}
            className="flex-1"
          />
        </div>

        <div className="flex flex-wrap gap-2">
          <Button
            variant="outline"
            size="sm"
            onClick={() => setAutoRotate(!autoRotate)}
            className={autoRotate ? "bg-emerald-100" : ""}
          >
            <RefreshCw className="mr-2 h-4 w-4" />
            {autoRotate ? "Tắt xoay" : "Bật xoay"}
          </Button>

          <Button variant="outline" size="sm" onClick={resetCamera}>
            Đặt lại camera
          </Button>

          <Button variant="outline" size="sm" onClick={handleZoomIn}>
            <ZoomIn className="mr-2 h-4 w-4" />
            Phóng to
          </Button>

          <Button variant="outline" size="sm" onClick={handleZoomOut}>
            <ZoomOut className="mr-2 h-4 w-4" />
            Thu nhỏ
          </Button>
        </div>
      </div>
    </div>
  )
}
