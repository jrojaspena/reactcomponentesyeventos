import PropTypes from "prop-types";
import './SocialButton.css'

const SocialButton = ({icono}) => {
  return (
    <div>
        <button type="button" className="btn btn-outline-dark btn-lg rounded-circle m-1">
            <i className={icono}></i>
        </button>
    </div>
  )
}
SocialButton.propTypes = {
    icono: PropTypes.string.isRequired
}
export default SocialButton