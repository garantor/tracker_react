import PropTypes from 'prop-types';
import Button from './Button';


function Header({title, onAdd, showAdd}) {
   
  return <header className='header'>
      <h1>
        {title}
      </h1>
      <Button text={showAdd ? 'Close' : 'Add' } color={showAdd ? 'grey' : 'green'} onclick={onAdd}/>

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
