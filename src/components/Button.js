import PropTypes from 'prop-types';



function Button({text, color, onclick}) {
  return <div onClick={onclick} style={{backgroundColor: color}} className='btn'>
      {text}
  </div>;
}


Button.defaultProps = {
    text : "BTN",
    color : "black"
}

Button.propTypes = {
    text:PropTypes.string,
    color:PropTypes.string,
    onclick:PropTypes.func,
}
export default Button;
