import { Canvas, useFrame } from "@react-three/fiber"
import { useRef } from "react"

function Index() {
    return (
        <div className="h-screen">
            <Canvas>
                <ambientLight intensity={2} />
                <Cube />
            </Canvas>
        </div>
    )
}

export default Index




function Cube() {

    const mesh = useRef(null)
    useFrame((state,delta)=>{
        mesh.current.rotation.x += delta * 0.25;
        mesh.current.rotation.y += delta * 0.25;
        mesh.current.rotation.z += delta * 0.25;
    })

    return (
        <mesh ref={mesh}>
            <boxGeometry  args={[2.5,2.5,2.5]}/>
            <meshStandardMaterial color={"orange"} />
        </mesh>
    )
} 