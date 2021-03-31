import React from 'react';



const Navbar = (props) => {
  console.log(props)
  return (
    <nav>
      <ul>
        {
          props.sections.map((section) => <li>{section}</li>)
        }
      </ul>
    </nav>
  )
}


export default Navbar;
