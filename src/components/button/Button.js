import PropTypes from 'prop-types';
import './button.css';

const Button = ({ sign, className, colSpan }) => (
  <td className={className} colSpan={colSpan}>
    <button type="button">{sign}</button>
  </td>
);

Button.propTypes = {
  sign: PropTypes.string.isRequired,
  className: PropTypes.string,
  colSpan: PropTypes.number,
};

Button.defaultProps = { className: 'table-data', colSpan: '' };

export default Button;
