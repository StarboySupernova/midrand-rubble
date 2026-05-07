import { Link } from 'gatsby';
import React from 'react';
import { menu } from '../constants/menu';
import { socialLinks } from '../constants/socialLinks';
import { FooterStyles } from '../styles/FooterStyles';
import Logo from './Logo';
import ParagraphText from './typography/ParagraphText';

function Footer() {
  return (
    <FooterStyles>
      <div className="container">
        <Logo />
        <ParagraphText className="footer__text">
          Midrand Rubble Removal & Site Clearing is your trusted local partner for fast, efficient, and affordable debris management.
        </ParagraphText>
        <ul className="footer__menuList">
          {menu.map((item) => (
            <li key={item.path}>
              <Link to={item.path}>{item.title}</Link>
            </li>
          ))}
        </ul>
        <ul className="footer__socialList">
          {socialLinks.map((item) => (
            <li key={item.name}>
              <a href={item.url} target="_blank" rel="noreferrer">
                {item.icon}
              </a>
            </li>
          ))}
        </ul>
        <ParagraphText className="copyright">
          <strong>Location:</strong> 355 Nancy Ndamase Street, Klipfontein View, Lethabong, Midrand, 1685<br/>
          <strong>Operating Hours:</strong> Monday to Sunday (6 AM to 6 PM)<br/>
          <strong>Contacts:</strong> Sbusiso: 081 078 6434 | Tshiamo: 083 651 2596
        </ParagraphText>
        <ParagraphText className="copyright">
          © Midrand Rubble Removal & Site Clearing | {new Date().getFullYear()} | All rights reserved
        </ParagraphText>
      </div>
    </FooterStyles>
  );
}

export default Footer;
