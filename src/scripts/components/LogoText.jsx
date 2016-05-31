import React from 'react';
import logoImg from '../../assets/offcourse.png';

class Logo extends React.Component {
  render(){
    return (
      <img src={logoImg} className="logo"/>
    )
  }
}

export default Logo;