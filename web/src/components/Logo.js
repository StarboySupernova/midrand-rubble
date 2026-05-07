import React from 'react';
import { StaticImage } from 'gatsby-plugin-image';
import LogoStyles from '../styles/LogoStyles';

function Logo() {
  return (
    <LogoStyles to="/">
      <StaticImage 
        src="../images/midrandrubblelogo.jpeg" 
        alt="Midrand Rubble Logo"
        placeholder="blurred"
        width={60}
        height={60}
        className="logo-img"
      />
    </LogoStyles>
  );
}

export default Logo;