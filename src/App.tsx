import { useState } from "react";
import { UpdatePWA } from "./components/UpdatePWA";

const myWorker = new Worker(new URL("./myWorker.ts", import.meta.url));

const Input = () => {
  const [inputData, setInputData] = useState("");

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    myWorker.postMessage(inputData);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        onChange={(event) => setInputData(event.target.value)}
      />
      <button className="bg-slate-200 w-11">oi</button>
    </form>
  );
};

export const App = () => {
  const [a, setA] = useState("vazio");
  const isOnline = navigator.onLine;

  myWorker.onmessage = (e) => {
    setA(e.data);
  };

  return (
    <div>
      <UpdatePWA />
      <h1 className="text-3xl font-bold">Olá</h1>
      <pre className="bg-white text-gray-700">{JSON.stringify(a, null, 2)}</pre>

      {isOnline ? (
        <p className="text-green-500">Online</p>
      ) : (
        <p className="text-red-500">Offline</p>
      )}

      <Input />
    </div>
  );
};
