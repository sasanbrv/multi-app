import { useEffect, useState } from "react";

const DigitalClock = () => {
    const [time , setTime] = useState(new Date())
    useEffect(()=>{
        const timer =setInterval(() => {
            setTime(new Date())
        }, 1000);
    return () => clearInterval(timer);   
     } , [])
    return ( <>
        <div className="text-gray-200 rounded-xl p-6 max-w-xs w-full mx-auto mt-5 text-center text-3xl tracking-widest
        bg-gray-900 bg-opacity-60 shadow-md border border-gray-700 backdrop-blur-lg select-none" style={{fontFamily: 'Orbitron'}}>
        {time.toLocaleTimeString()}
        </div>

    </> );
}
 
export default DigitalClock;