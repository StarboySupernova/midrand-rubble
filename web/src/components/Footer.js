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
          "Moorosi Holdings and Logistics (Pty) Ltd is a 100% black-owned, Level 1 B-BBEE company based in Gauteng. We specialize in heavy machinery transport, civil engineering, and comprehensive soft and hard facility management services tailored to the public and private sectors."
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
          Centurion, Gauteng
        </ParagraphText>
        <ParagraphText className="copyright">
          © Moorosi Holdings and Logistics (Pty) Ltd | Reg: 2026/040477/07 |{' '}
          {new Date().getFullYear()} | All rights reserved
        </ParagraphText>
      </div>
    </FooterStyles>
  );
}

export default Footer;
