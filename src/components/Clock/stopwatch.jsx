import { useState, useRef } from 'react';

function Stopwatch() {
  const [time, setTime] = useState(0); // زمان برحسب میلی‌ثانیه
  const [isRunning, setIsRunning] = useState(false);
  const timerRef = useRef(null);

  const start = () => {
    if (!isRunning) {
      setIsRunning(true);
      const startTime = Date.now() - time;
      timerRef.current = setInterval(() => {
        setTime(Date.now() - startTime);
      }, 10);
    }
  };

  const stop = () => {
    if (isRunning) {
      setIsRunning(false);
      clearInterval(timerRef.current);
    }
  };

  const reset = () => {
    setIsRunning(false);
    clearInterval(timerRef.current);
    setTime(0);
  };

  const formatTime = (time) => {
    const minutes = Math.floor(time / 60000);
    const seconds = Math.floor((time % 60000) / 1000);
    const milliseconds = Math.floor(((time % 60000) % 1000) / 10);

    return `${minutes.toString().padStart(2, '0')}:${seconds
      .toString()
      .padStart(2, '0')}:${milliseconds.toString().padStart(2, '0')}`;
  };

  return (
    <div className="p-4 bg-gray-800 rounded-md shadow-md text-gray-200 w-64 mx-auto mt-5">
      <p className="text-3xl font-digital text-center mb-4">{formatTime(time)}</p>
      <div className="flex justify-between">
        <button
          onClick={start}
          className="backdrop-blur-2xl bg-white/30 hover:bg-green-700 px-4 py-2 rounded"
          disabled={isRunning}
        >
          Start
        </button>
        <button
          onClick={stop}
          className="backdrop-blur-2xl bg-white/30 hover:bg-red-700 px-4 py-2 rounded"
          disabled={!isRunning}
        >
          Stop
        </button>
        <button onClick={reset} className="backdrop-blur-2xl bg-white/30 hover:bg-gray-700 px-4 py-2 rounded">
          Reset
        </button>
      </div>
    </div>
  );
}

export default Stopwatch;
