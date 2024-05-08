import { OrbitControls } from "@react-three/drei"
import { Canvas, useFrame, } from "@react-three/fiber"
import { useMotionValue, useSpring } from "framer-motion"
import { useEffect, useRef } from "react"
import { motion } from 'framer-motion-3d'


function Index({ sizeValue, zoomIn, mosueMove }) {
    return (
        <div className="h-[100vh] mt-16">
            <Canvas className="bg-black">
                <OrbitControls enableZoom={zoomIn} enablePan={false} />
                <ambientLight intensity={2} />
                <directionalLight position={[2, 1, 1]} />
                <Cube sizeValue={sizeValue} mosueMove={mosueMove} />
            </Canvas>
        </div>
    )
}

export default Index


function Cube({ sizeValue, mosueMove }) {
    const mesh = useRef(null);
    const option = {
        damping: 20
    };
    const mouse = {
        x: useSpring(useMotionValue(0), option),
        y: useSpring(useMotionValue(0), option)
    };

    const manageMoveFunction = (event) => {
        const { innerWidth, innerHeight } = window;
        const { clientX, clientY } = event;
        const x = -0.5 + (clientX / innerWidth);
        const y = -0.5 + (clientY / innerHeight);
        mouse.x.set(x);
        mouse.y.set(y);
    };

    useEffect(() => {
        if (mosueMove) {
            window.addEventListener("mousemove", manageMoveFunction);
        } else {
            window.removeEventListener("mousemove", manageMoveFunction);
        }

        return () => {
            window.removeEventListener("mousemove", manageMoveFunction);
        };
    }, [mosueMove]);

    return (
        <motion.mesh ref={mesh} rotation-x={mouse.y} rotation-y={mouse.x}>
            <boxGeometry args={[sizeValue, sizeValue, sizeValue]} />
            <meshStandardMaterial color={"orange"} />
        </motion.mesh>
    );
}
