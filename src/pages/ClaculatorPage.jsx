import { useState } from "react";
import { evaluate } from "mathjs";

export default function Calculator() {
  const [input, setInput] = useState("");
  const operators = ["+", "-", "*", "/", "."];
  const handleClick = (value) => {
    if (input === "error") {
      setInput(value);
    } else {
      if (operators.includes(value) && operators.includes(input.slice(-1))) {
    return;
  }else{
        setInput((prev) => prev + value);
      }
    }
  };

  const calculate = () => {
    try {

      const result = evaluate(input);
      setInput(result.toString());
    } catch {
      setInput("error");
    }
  };

  const clear = () => {
    setInput("");
  };

  const buttons = [
    "7","8","9","/",
    "4","5","6","*",
    "1","2","3","-",
    "0",".","+","="
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-800 via-gray-700 to-gray-900 flex items-center justify-center p-4">
      <div className="backdrop-blur-lg bg-white/10 border border-white/20 rounded-2xl shadow-xl p-6 max-w-xs w-full">
        <div className="bg-white/20 p-3 rounded text-right font-mono text-lg text-white mb-4 min-h-[2.5rem]">
          {input || "0"}
        </div>

        <div className="grid grid-cols-4 gap-2">
          {buttons.map((btn) => (
            <button
              key={btn}
              onClick={() => btn === "=" ? calculate() : handleClick(btn)}
              className="bg-white/20 hover:bg-white/30 text-white font-bold p-2 rounded transition"
            >
              {btn}
            </button>
          ))}
        </div>

        <button
          onClick={clear}
          className="mt-4 w-full bg-red-500 hover:bg-red-600 text-white p-2 rounded"
        >
          Clear
        </button>
      </div>
    </div>
  );
}
