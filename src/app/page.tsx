"use client";
import { SheetProvider } from '@theatre/r3f'
import { CameraControls, Environment, MeshTransmissionMaterial, OrbitControls, PerspectiveCamera, Scroll, ScrollControls } from "@react-three/drei";
import { Canvas, useFrame, useThree } from "@react-three/fiber";
import { getProject } from "@theatre/core";
import Image from "next/image";
import { lazy, Suspense, useEffect, useRef, useState } from "react";
import studio from '@theatre/studio'
import extension from '@theatre/r3f/dist/extension'
import { Easing } from 'three/examples/jsm/libs/tween.module.js';
import Overlay from './Overlay';
import Underlay from './Underlay';

//const Scene = lazy(() => import("../../public/police/Scene"));
import Scene from '@public/police/Scene'
interface RotateDrone {
  moveX: number,
  moveY: number,
  moveZ: number,
  lookX: number,
  lookY: number,
  lookZ: number,
  min: number,
  max: number
}

export default function Home() {
  const cameraControlsRef = useRef<CameraControls>(null);
  const orbitRef = useRef(null);
  const [state, setState] = useState<RotateDrone>(
    {
      moveX: -180,
      moveY: 90,
      moveZ: 0,
      lookX: 0,
      lookY: 0,
      lookZ: 0,
      min: 1.5,
      max: 2
    }
  )

  /**
   *     moveX: -180,
      moveY: 45,
      moveZ: 0,
      lookX: 0,
      lookY: 0,
      lookZ: 0,
      min: 1.5,
      max: 2
   */
  useEffect(() => {
    //cameraControlsRef.current?.rotate(10, 100, true)
    cameraControlsRef.current?.moveTo(state.moveX, state.moveY, state.moveZ, true)
    // cameraControlsRef.current?.lookInDirectionOf(state.lookX, state.lookY, state.lookZ, true)
    console.log(cameraControlsRef.current)

  })

  const changeAngle = (type: string) => {
    if (type == 'home') {
      setState({
        moveX: -90,
        moveY: 90,
        moveZ: 0,
        lookX: 0,
        lookY: 0,
        lookZ: 0,
        min: 1.5,
        max: 1.5
      })
    }
    if (type == 'roadmap') {
      setState({
        moveX: -135,
        moveY: 280,
        moveZ: 300,
        lookX: 0,
        lookY: 0,
        lookZ: 0,
        min: 1.2,
        max: 1
      })
    }
    if (type == 'contact') {
      setState({
        moveX: -135,
        moveY: 280,
        moveZ: -300,
        lookX: 0,
        lookY: 0,
        lookZ: 0,
        min: 1.2,
        max: 1
      })
    }
  }
  return (

    <div style={{ height: "100vh" }}>
      <Underlay />
      <Canvas flat linear ref={orbitRef} gl={{ preserveDrawingBuffer: true, antialias: false }} dpr={[1, 1.5]} camera={{ position: [0, -3.2, 40], fov: 1 }}>
        <ambientLight intensity={2} />
        <CameraControls
          enabled={true}
          ref={cameraControlsRef}
        />
        <OrbitControls
          minDistance={state.min}
          maxDistance={state.max}
        />
        <Suspense fallback={null} >
          <ScrollControls pages={5} damping={0.1}>
            <Scene />
            <Scroll>

            </Scroll>
            <Scroll>

            </Scroll>

          </ScrollControls>
        </Suspense>
        <Environment preset="sunset" blur={1} />
      </Canvas>
    </div>
  );
}
