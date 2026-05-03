import Navbar from "./components/Navbar/Navbar";
import { Route, Routes } from "react-router-dom";
import Calculator from "./pages/ClaculatorPage";
import Clock from "./pages/ClockPage";
import Todo from "./pages/TodoPage";
import Home from "./pages/Home";
import Weather from "./pages/weatherPage";


const App = () => {
    return ( 

        <>
        <div className="min-h-screen bg-linear-to-br from-gray-800 via-gray-700 to-gray-900">

            <Navbar />
            <Routes>
                <Route path="/calculator"  Component={Calculator} /> 
                <Route path="/clock"  Component={Clock} /> 
                <Route path="/todo"  Component={Todo} /> 
                <Route path="/weather"  Component={Weather} /> 
                <Route path="/" Component={Home} /> 
            </Routes>
        </div>

        </>
     );
}
 
export default App;