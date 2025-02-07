import PropTypes from 'prop-types';

const Button = ({ text, border, color }) => {
  return (
    <div>
      {text && (
        <div className={`border border-${border} py-[4px] px-[8px] flex gap-x-1 items-center w-fit`}>
          <p className={`text-${color} text-[10px]`}>{text}</p>
        </div>
      )}
    </div>
  );
};

Button.propTypes = { 
  text: PropTypes.string, 
  border: PropTypes.string, 
  color: PropTypes.string, 
};

Button.defaultProps = { 
  text: null, 
  border: null, 
  color: null, 
};

export default Button;
