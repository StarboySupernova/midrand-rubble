import React from 'react';
import MyPortableText from '../MyPortableText';
import { PremiumCardStyles } from '../../styles/category/PremiumCardStyles'; // NEW IMPORT
import { Title } from '../typography/Title'; 
import { FaRocket } from 'react-icons/fa'; // Icon for objectives

function ObjectiveItem({ title, description, index }) { 
  // We reverse the themes array so Objectives get different colors than Values
  const themes =['theme-amethyst', 'theme-emerald', 'theme-amber', 'theme-ocean', 'theme-ruby'];
  const currentTheme = themes[index % themes.length];

  return (
    <PremiumCardStyles className={currentTheme}> 
      <div className="main-card">
        <span className="card-tag">Strategic Objective</span>
        
        <div className="icon-badge">
          <FaRocket />
        </div>

        <Title className="title">{title}</Title> 
        <div className="text-wrap-container">
          <MyPortableText value={description} />
        </div>
      </div>
    </PremiumCardStyles>
  );
}

export default ObjectiveItem;