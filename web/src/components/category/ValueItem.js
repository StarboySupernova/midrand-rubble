import React from 'react';
import MyPortableText from '../MyPortableText';
import { PremiumCardStyles } from '../../styles/category/PremiumCardStyles'; // NEW IMPORT
import { Title } from '../typography/Title';
import { FaGem } from 'react-icons/fa'; // Icon for values

function ValueItem({ title, description, index }) {
  // Rotate through 5 color themes based on the index
  const themes =['theme-ruby', 'theme-ocean', 'theme-amber', 'theme-emerald', 'theme-amethyst'];
  const currentTheme = themes[index % themes.length];

  return (
    <PremiumCardStyles className={currentTheme}> 
      <div className="main-card">
        <span className="card-tag">Core Value</span>
        
        <div className="icon-badge">
          <FaGem />
        </div>

        <Title className="title">{title}</Title>
        <div className="text-wrap-container">
          <MyPortableText value={description} />
        </div>
      </div>
    </PremiumCardStyles>
  );
}

export default ValueItem;