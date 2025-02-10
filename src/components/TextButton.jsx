import { Link } from "react-router-dom"
import PropTypes from 'prop-types';


const TextButton = ({ url, text }) => {
  return (
    <div>
      <div className="py-1">
        {url && (
        <Link to={url}>
          <div className="text-[11px] text-blue-400 font-medium">{text}</div>
        </Link>
        )}
      </div>
    </div>
  )
}

TextButton.propTypes = { 
  url: PropTypes.string, 
  text: PropTypes.string, 
};

TextButton.defaultProps = { 
  url: null, 
  text: null, 
};

export default TextButton