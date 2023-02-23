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
              <td className="table-data">
                <button type="button">AC</button>
              </td>
              <td className="table-data">
                <button type="button">+/-</button>
              </td>
              <td className="table-data">
                <button type="button">%</button>
              </td>
              <td className="table-data sign">
                <button type="button">÷</button>
              </td>
            </tr>
            <tr className="numbers">
              <td className="table-data">
                <button type="button">7</button>
              </td>
              <td className="table-data">
                <button type="button">8</button>
              </td>
              <td className="table-data">
                <button type="button">9</button>
              </td>
              <td className="table-data sign">
                <button type="button">x</button>
              </td>
            </tr>
            <tr className="numbers">
              <td className="table-data">
                <button type="button">4</button>
              </td>
              <td className="table-data">
                <button type="button">5</button>
              </td>
              <td className="table-data">
                <button type="button">6</button>
              </td>
              <td className="table-data sign">
                <button type="button">-</button>
              </td>
            </tr>
            <tr className="numbers">
              <td className="table-data">
                <button type="button">1</button>
              </td>
              <td className="table-data">
                <button type="button">2</button>
              </td>
              <td className="table-data">
                <button type="button">3</button>
              </td>
              <td className="table-data sign">
                <button type="button">+</button>
              </td>
            </tr>
            <tr className="numbers">
              <td colSpan={2} className="table-data">
                <button type="button">0</button>
              </td>
              <td className="table-data">
                <button type="button">.</button>
              </td>
              <td className="table-data sign">
                <button type="button">=</button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Calculator;
