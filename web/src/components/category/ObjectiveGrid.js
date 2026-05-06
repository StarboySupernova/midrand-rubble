import React from 'react';
import { CategoryGridStyles } from '../../styles/category/CategoryGridStyles';
import ObjectiveItem from './ObjectiveItem';

function ObjectiveGrid({ objectives }) {
  return (
    <CategoryGridStyles>
      {objectives.map((item) => (
        <ObjectiveItem
          key={item.id}
          title={item.title}
          description={item._rawDescription}
        />
      ))}
    </CategoryGridStyles>
  );
}

export default ObjectiveGrid;
