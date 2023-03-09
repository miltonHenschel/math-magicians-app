import PropTypes from 'prop-types';

import '../../styles/button.css';

const Button = ({
  sign, className, colSpan, handleOnClick,
}) => (
  <td className={className} colSpan={colSpan}>
    <button type="button" onClick={handleOnClick}>
      {sign}
    </button>
  </td>
);

Button.propTypes = {
  sign: PropTypes.string.isRequired,
  className: PropTypes.string,
  colSpan: PropTypes.number,
  handleOnClick: PropTypes.func.isRequired,
};

Button.defaultProps = {
  className: 'table-data',
  colSpan: '',
};

export default Button;
