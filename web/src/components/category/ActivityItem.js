import React from 'react';
import Button from '../buttons/Button';
import { buttonTypes } from '../../constants/buttonTypes';
import { CategoryItemStyles } from '../../styles/category/CategoryItemStyles';
import { Title } from '../typography/Title';
import ConstrainedPortableText from '../ConstrainedPortableText';

function ActivityItem({ title, description, slug }) {
  return (
    <CategoryItemStyles>
      <Title className="title">{title}</Title>
      <div className="text">
        <ConstrainedPortableText value={description} />
      </div>
      <Button to={`/activities/${slug.current}`} variant={buttonTypes.outline}>
        More
      </Button>
    </CategoryItemStyles>
  );
}

export default ActivityItem;
