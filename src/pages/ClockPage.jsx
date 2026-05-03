import AnalogClock from "../components/Clock/analogClock";
import DigitalClock from "../components/Clock/digitalClock";
import Stopwatch from "../components/Clock/stopwatch";

const Clock = () => {
    return ( <>
    <AnalogClock/>
    <DigitalClock />
    <Stopwatch />
    </> );
}
 
export default Clock;