import Button from '../button/Button';
import './calculator.css';

function Calculator() {
  return (
    <div className="calculator">
      <div className="calculator-container">
        <table className="table">
          <tbody>
            <tr className="result">
              <td colSpan={4} className="table-data">
                Result
              </td>
            </tr>
            <tr className="numbers">
              <Button sign="AC" />
              <Button sign="+/-" />
              <Button sign="%" />
              <Button sign="÷" className="table-data sign" />
            </tr>
            <tr className="numbers">
              <Button sign="7" />
              <Button sign="8" />
              <Button sign="9" />
              <Button sign="x" className="table-data sign" />
            </tr>
            <tr className="numbers">
              <Button sign="4" />
              <Button sign="5" />
              <Button sign="6" />
              <Button sign="-" className="table-data sign" />
            </tr>
            <tr className="numbers">
              <Button sign="1" />
              <Button sign="2" />
              <Button sign="3" />
              <Button sign="+" className="table-data sign" />
            </tr>
            <tr className="numbers">
              <Button sign="0" colSpan={2} />
              <Button sign="." />
              <Button sign="=" className="table-data sign" />
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Calculator;
