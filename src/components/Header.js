import React from 'react';


const Header = (props) => {
  // console.log('this are the props', props)
  return (
    <>
      <h1>{props.title}</h1>
      <h3>{props.subtitle}</h3>
    </>
  )
}


export default Header;
