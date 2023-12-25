import PropTypes from "prop-types";

const Alert = ({color, texto}) => {
  return (
    <div>
        <div className={"alert-" + color} role="alert">
          {texto}
        </div>
    </div>
  )
}

Alert.propTypes = {
  color: PropTypes.string.isRequired,
  texto: PropTypes.string.isRequired
}

export default Alert