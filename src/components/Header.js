import PropTypes from 'prop-types';
import Button from './Button';


function Header({title}) {
    function onclick(){
        console.log("This is clicked")
    }
  return <header className='header'>
      <h1>
        {title}
      </h1>
      <Button text='Add' color='green' onclick={onclick}/>

    {/* <button className='btn'>Add</button> */}
  </header>;
}

Header.defaultProps = {
    title : "Task Tracker"
}

Header.propTypes = {
    title:PropTypes.string,
}
export default Header;
