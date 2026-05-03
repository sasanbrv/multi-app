import { useEffect, useRef } from "react";

export default function AnalogClock() {
    const numbers = [1,2,3,4,5,6,7,8,9,10,11,12]
    const secondRef = useRef(null);
    const minuteRef = useRef(null);
    const hourRef = useRef(null);   
    useEffect(() => {
      const interval = setInterval(() => {
        const now = new Date();
        const seconds = now.getSeconds();
        const minutes = now.getMinutes();
        const hours = now.getHours();   
        if (secondRef.current)
          secondRef.current.style.transform = `rotate(${seconds * 6}deg)`;
        if (minuteRef.current)
          minuteRef.current.style.transform = `rotate(${minutes * 6}deg)`;
        if (hourRef.current)
          hourRef.current.style.transform = `rotate(${hours * 30 + minutes / 2}deg)`;
      }, 1000); 
      return () => clearInterval(interval);
    }, []); 
    return (
        <div className="relative w-64 h-64 rounded-full border-4 border-white mx-auto mt-10">
          {numbers.map((num) => (
          <div
            key={num}
            className="absolute text-white"
            style={{
              top: `${50 - 45 * Math.cos((num * 30 * Math.PI) / 180)}%`,
              left: `${50 + 45 * Math.sin((num * 30 * Math.PI) / 180)}%`,
              transform: "translate(-50%, -50%)",
              fontFamily: 'Orbitron'
            }}
          >
            {num}
          </div>
        ))}
          <div ref={hourRef} className="absolute w-1 h-16 bg-white rounded-md top-16 left-1/2 origin-bottom"></div>
          <div ref={minuteRef} className="absolute w-1 h-20 bg-white rounded-md top-12 left-1/2 origin-bottom"></div>
          <div ref={secondRef} className="absolute w-0.5 h-24 bg-red-500 rounded-md top-8 left-1/2 origin-bottom"></div>
        </div>  );
}
