import { CalculatorIcon, ChevronRightIcon, ClockIcon, MapPinIcon, NumberedListIcon } from "@heroicons/react/16/solid";
import { useState } from "react";


const Home = () => {

    const [clockOpen , setclock] = useState(false)
    const [todoOpen , settodo] = useState(false)
    const [weatheOpen , setweahter] = useState(false)
    const [calcOpen , setcalc] = useState(false)

    const calcText = 'claclca adjscvnal nacsodn'
    return ( <>
        <div className="container mx-auto mt-20 shadow-[0_0_15px_rgba(0,0,0,0.3)] rounded-lg pb-2 backdrop-blur-lg bg-white/10 border border-white/20 rounded-2xl shadow-xl p-6">
            <h2 className="py-4 pl-4 font-bold text-2xl border-b-2">about sections</h2>
            <div className="">
                <ul className=" m-4 rounded-lg backdrop-blur-2xl bg-white/30 border border-gray-400">
                    <li onClick={()=> setcalc(!calcOpen)} className="w-full cursor-pointer">
                        <div className={`flex items-center w-full  rounded-t-lg ${calcOpen ? 'border-b border-gray-400' : ''}`}>
                            <ChevronRightIcon
                                className={`w-10 transform transition-all duration-300 ease-in-out
                                ${calcOpen ? "rotate-90 translate-y-1" : "rotate-0 translate-y-0"}`}/>
                            <CalculatorIcon className="h-6 w-6 text-gray-900 pr-1"/>
                            <h2 className="">Calculator</h2>
                        </div>
                        <div className={`transition-all duration-500 ease-in-out overflow-hidden ${
                            calcOpen ? "max-h-40 p-4" : "max-h-0 p-0"}`}>  
                        {calcOpen && (
                            <p className="">{calcText}</p>
                        )}
                        </div>
                    </li>
                    <li onClick={()=> setweahter(!weatheOpen )} className="w-full cursor-pointer border-t border-gray-400">
                        <div className={`flex items-center w-full ${weatheOpen ? 'border-b border-gray-400' : ''}`}>
                            <ChevronRightIcon
                                className={`w-10 transform transition-all duration-300 ease-in-out
                                ${weatheOpen ? "rotate-90 translate-y-1" : "rotate-0 translate-y-0"}`}/>
                            <MapPinIcon className="h-6 w-6 text-gray-900 pr-1"/>
                            <h2 className="">Weather App</h2>
                        </div>
                        <div className={`transition-all duration-500 ease-in-out overflow-hidden ${
                            weatheOpen ? "max-h-40 p-4" : "max-h-0 p-0"}`}>  
                        {weatheOpen && (
                            <p>{calcText}</p>
                        )}
                        </div>
                    </li>
                    <li onClick={()=> settodo(!todoOpen)} className="w-full cursor-pointer border-t border-gray-400">
                        <div className={`flex items-center w-full  ${todoOpen ? 'border-b border-gray-400' : ''}`}>
                             <ChevronRightIcon
                                className={`w-10 transform transition-all duration-300 ease-in-out
                                ${todoOpen ? "rotate-90 translate-y-1" : "rotate-0 translate-y-0"}`}/>
                            <NumberedListIcon className="h-6 w-6 text-gray-900 pr-1"/>
                            <h2 className="" >Todo App</h2>
                        </div>
                        <div className={`transition-all duration-500 ease-in-out overflow-hidden ${
                            todoOpen ? "max-h-40 p-4" : "max-h-0 p-0"}`}>  
                        {todoOpen && (
                            <p>{calcText}</p>
                        )}
                        </div>
                    </li>
                    <li onClick={()=> setclock(!clockOpen)} className="w-full cursor-pointer border-t border-gray-400">
                        <div className={`flex items-center w-full rounded-b-lg ${clockOpen ? 'border-b border-gray-400' : ''}`}>
                            <ChevronRightIcon
                                className={`w-10 transform transition-all duration-300 ease-in-out
                                ${clockOpen ? "rotate-90 translate-y-1" : "rotate-0 translate-y-0"}`}/>                            
                            <ClockIcon className="h-6 w-6 text-gray-900 pr-1"/>
                            <h2 className="" >Clock</h2>
                        </div>
                        <div className={`transition-all duration-500 ease-in-out overflow-hidden ${
                            clockOpen ? "max-h-40 p-4" : "max-h-0 p-0"}`}>  
                        {clockOpen && (
                            <p>{calcText}</p>
                        )}
                        </div>
                    </li>
                </ul>
            </div>
        </div>
    </> );
}
 
export default Home;