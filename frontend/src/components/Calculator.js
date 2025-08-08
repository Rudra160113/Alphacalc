jsx
import React, { useState } from 'react';
function Calculator({ onCalculate }) {
  const [expression, setExpression] = useState('');
  const handleButtonClick = (value) => {
    setExpression(expression + value);
  };
  const handleCalculate = () => {
    onCalculate(expression);
    setExpression('');
  };
  return (
    <div className="calculator">
      <input
        type="text"
        value={expression}
        onChange={(e) => setExpression(e.target.value)}
      />
      <div className="buttons">
        <button onClick={() => handleButtonClick('1')}>1</button>
        <button onClick={() => handleButtonClick('2')}>2</button>
        <button onClick={() => handleButtonClick('3')}>3</button>
        <button onClick={() => handleButtonClick('+')}>+</button>
        <button onClick={() => handleButtonClick('4')}>4</button>
        <button onClick={() => handleButtonClick('5')}>5</button>
        <button onClick={() => handleButtonClick('6')}>6</button>
        <button onClick={() => handleButtonClick('-')}>-</button>
        <button onClick={() => handleButtonClick('7')}>7</button>
        <button onClick={() => handleButtonClick('8')}>8</button>
        <button onClick={() => handleButtonClick('9')}>9</button>
        <button onClick={() => handleButtonClick('*')}>*</button>
        <button onClick={() => handleButtonClick('0')}>0</button>
        <button onClick={() => handleButtonClick('/')}>/</button>
        <button onClick={() => handleButtonClick('(')}>(</button>
        <button onClick={() => handleButtonClick(')')}>)/</button>
        <button onClick={handleCalculate}>=</button>
      </div>
    </div>
  );
}
export default Calculator;
