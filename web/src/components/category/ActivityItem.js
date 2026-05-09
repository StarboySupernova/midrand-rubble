import React from 'react';
import Button from '../buttons/Button';
import { buttonTypes } from '../../constants/buttonTypes';
import { CategoryItemStyles } from '../../styles/category/CategoryItemStyles';
import { Title } from '../typography/Title';
import ConstrainedPortableText from '../ConstrainedPortableText';

function ActivityItem({ title, description, slug }) {
  return (
    <CategoryItemStyles className="activity-card">
      <Title className="title">{title}</Title>
      
      {/* Wrapped the text so it behaves consistently */}
      <div className="text-wrap-container">
        <ConstrainedPortableText value={description} />
      </div>
      
      {/* Wrapped the button so it gets pushed to the bottom and doesn't stretch */}
      <div className="button-container">
        <Button to={`/activities/${slug.current}`} variant={buttonTypes.outline}>
          View Details
        </Button>
      </div>
    </CategoryItemStyles>
  );
}

export default ActivityItem;