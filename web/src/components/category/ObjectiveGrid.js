import React from 'react';
import { CategoryGridStyles } from '../../styles/category/CategoryGridStyles';
import ObjectiveItem from './ObjectiveItem';

function ObjectiveGrid({ objectives }) {
  return (
    <CategoryGridStyles>
      {objectives.map((item, index) => ( // Note the 'index' added here
        <ObjectiveItem
          key={item.id}
          title={item.title}
          description={item._rawDescription}
          index={index} // Passing index to the child
        />
      ))}
    </CategoryGridStyles>
  );
}

export default ObjectiveGrid;