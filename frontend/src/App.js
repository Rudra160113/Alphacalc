jsx
import React, { useState } from 'react';
import axios from 'axios';
function App() {
  const [expression, setExpression] = useState('');
  const [result, setResult] = useState('');
  const handleCalculate = async () => {
    const response = await axios.post('/calculate', { expression });
    setResult(response.data.result);
  };
  return (
    <div>
      <input
        type="text"
        value={expression}
        onChange={(e) => setExpression(e.target.value)}
      />
      <button onClick={handleCalculate}>Calculate</button>
      <p>Result: {result}</p>
    </div>
  );
}
export default App;
