import React from 'react';
import { StaticImage } from 'gatsby-plugin-image';
import LogoStyles from '../styles/LogoStyles';

function Logo() {
  return (
    <LogoStyles to="/">
      <StaticImage 
        /* Ensure extension is .jpg as seen in your folder */
        src="../images/moorosi-logo.jpg" 
        alt="Moorosi Holdings Logo"
        placeholder="blurred"
        /* These two props together force the distortion */
        objectFit="fill" 
        imgStyle={{ objectFit: 'fill' }}
      />
    </LogoStyles>
  );
}

export default Logo;