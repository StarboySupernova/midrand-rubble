import React from 'react';
import { CategoryGridStyles } from '../../styles/category/CategoryGridStyles';
import ActivityItem from './ActivityItem';

function ActivityGrid({ activities }) {
  return (
    <CategoryGridStyles>
      {activities.map((item) => (
        <ActivityItem
          key={item.id}
          title={item.title}
          description={item._rawDescription}
          slug={item.slug}
        />
      ))}
    </CategoryGridStyles>
  );
}

export default ActivityGrid;
