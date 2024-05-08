'use client'
import Index from "@/components/cub";
import { useEffect, useState } from "react";

export default function Home() {
  const [sizeValue, setSizeValue] = useState(2)
  const [zoomIn, setZoomIn] = useState(false)
  const [mosueMove, setMosueMove] = useState(false)

  if (sizeValue > 4) {
    setSizeValue(1)
  }


  return (
    <section className="fixed top-0 w-full">
      <div className="w-full h-1 pt-9 flex items-center  justify-around">
        <div>
          <label htmlFor="sizeWdith" >Size_Width_Box(SCALE) =</label>
          <input className="ml-3" type="number" onChange={(e) => setSizeValue(e.target.value)} value={sizeValue} /></div>
        <div>
          <label htmlFor="zoomin">ZoomIn = </label>
          <input id="zoomin" className="ch_s" type="checkbox" checked={zoomIn} onChange={(e) => setZoomIn(!zoomIn)} />
        </div>
        <div>
          <label htmlFor="zoomin">Box_Move_mouse = </label>
          <input id="zoomin" className="ch_s" type="checkbox" checked={mosueMove} onChange={(e) => setMosueMove(!mosueMove)} />
        </div>
      </div>
      <Index sizeValue={sizeValue} zoomIn={zoomIn} mosueMove={mosueMove} />
    </section>
  );
}
