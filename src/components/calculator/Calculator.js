import { useState } from 'react';
import Button from './button/Button';
import './calculator.css';
import calculate from '../../logic/calculate';

function Calculator() {
  const [result, setResult] = useState('');

  const handleClick = (event) => {
    setResult((prevState) => calculate(prevState, event.target.innerText));
  };

  return (
    <div className="calculator">
      <div className="calculator-container">
        <table className="table">
          <tbody>
            <tr className="result">
              <td colSpan={4} className="table-data">
                {result.next || result.total || 0}
              </td>
            </tr>
            <tr className="numbers">
              <Button sign="AC" handleOnClick={handleClick} />
              <Button sign="+/-" handleOnClick={handleClick} />
              <Button sign="%" handleOnClick={handleClick} />
              <Button
                sign="÷"
                handleOnClick={handleClick}
                className="table-data sign"
              />
            </tr>
            <tr className="numbers">
              <Button sign="7" handleOnClick={handleClick} />
              <Button sign="8" handleOnClick={handleClick} />
              <Button sign="9" handleOnClick={handleClick} />
              <Button
                sign="x"
                handleOnClick={handleClick}
                className="table-data sign"
              />
            </tr>
            <tr className="numbers">
              <Button sign="4" handleOnClick={handleClick} />
              <Button sign="5" handleOnClick={handleClick} />
              <Button sign="6" handleOnClick={handleClick} />
              <Button
                sign="-"
                handleOnClick={handleClick}
                className="table-data sign"
              />
            </tr>
            <tr className="numbers">
              <Button sign="1" handleOnClick={handleClick} />
              <Button sign="2" handleOnClick={handleClick} />
              <Button sign="3" handleOnClick={handleClick} />
              <Button
                sign="+"
                handleOnClick={handleClick}
                className="table-data sign"
              />
            </tr>
            <tr className="numbers">
              <Button sign="0" handleOnClick={handleClick} colSpan={2} />
              <Button sign="." handleOnClick={handleClick} />
              <Button
                sign="="
                handleOnClick={handleClick}
                className="table-data sign"
              />
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Calculator;
