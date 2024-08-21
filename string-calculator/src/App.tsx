import React, { useState } from 'react';  
import { add } from './utils/calculator';  

const App: React.FC = () => {  
  const [input, setInput] = useState<string>('');  
  const [result, setResult] = useState<number | null>(null);  
  const [error, setError] = useState<string>('');  

  const handleAdd = () => {  
    try {  
      setError('');  
      const sum = add(input);  
      setResult(sum);  
    } catch (e: any) {  
      setError(e.message);  
      setResult(null);  
    }  
  };  

  return (  
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">  
      <div className="bg-white p-8 rounded-lg shadow-md w-96">  
        <h1 className="text-2xl font-bold mb-4">String Calculator</h1>  
        <textarea  
          className="border-gray-300 border p-2 mb-4 w-full h-24 rounded"  
          placeholder="Enter numbers..."  
          value={input}  
          onChange={(e) => setInput(e.target.value)}  
        />  
        <button  
          className="bg-blue-500 text-white p-2 rounded"  
          onClick={handleAdd}  
        >  
          Calculate  
        </button>  
        {result !== null && <div className="mt-4 text-green-600">Result: {result}</div>}  
        {error && <div className="mt-4 text-red-600">{error}</div>}  
      </div>  
    </div>  
  );  
}  

export default App;