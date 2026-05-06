import React from 'react';
import MyPortableText from '../MyPortableText';
import { CategoryItemStyles } from '../../styles/category/CategoryItemStyles';
import { Title } from '../typography/Title'; 

function ObjectiveItem({ title, description }) { 
  return (
    <CategoryItemStyles className="objective-card"> 
      <Title className="title">{title}</Title> 
      <div className="text-wrap-container">
        <MyPortableText value={description} />
      </div>
    </CategoryItemStyles>
  );
}

export default ObjectiveItem;