import PropTypes from 'prop-types';
import Button from './Button';
import { useLocation } from 'react-router-dom'


function Header({title, onAdd, showAdd}) {
  const location = useLocation()
  console.log(location)
   
  return <header className='header'>
      <h1>
        {title}
      </h1>
      { location.pathname === '/' &&
        <Button text={showAdd ? 'Close' : 'Add' } 
        color={showAdd ? 'grey' : 'green'} 
        onclick={onAdd}/>
      }

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
