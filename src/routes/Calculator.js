import { useState } from 'react';

import Button from '../components/calculator/Button';
import calculate from '../logic/calculate';

import '../styles/calculator.css';

const Calculator = () => {
  const [result, setResult] = useState('');

  const handleClick = (event) => {
    setResult((prevState) => calculate(prevState, event.target.innerText));
  };

  return (
    <>
      <section>
        <div className="div">
          <h2>Let&apos;s do some math!</h2>
        </div>
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
      </section>
    </>
  );
};

export default Calculator;
