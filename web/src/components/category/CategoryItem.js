import React from 'react';
import { GatsbyImage } from 'gatsby-plugin-image';
import MyPortableText from '../MyPortableText';
import Button from '../buttons/Button';
import { buttonTypes } from '../../constants/buttonTypes';
import { CategoryItemStyles } from '../../styles/category/CategoryItemStyles';
import { Title } from '../typography/Title';

function CategoryItem({ title, description, slug, coverImage }) {
  return (
    <CategoryItemStyles className="category-card">
      <Title className="title">{title}</Title>
      
      <div className="text-wrap-container">
        {/* GRACEFUL HANDLING: Only renders if coverImage exists */}
        {coverImage?.asset && (
          <div className="card-image-wrapper">
            <GatsbyImage
              image={coverImage.asset.gatsbyImageData}
              alt={coverImage.alt || title}
              className="wrapped-img"
              imgStyle={{ objectFit: 'fill' }} /* Forces the aspect ratio distortion */
            />
          </div>
        )}
        <MyPortableText value={description} />
      </div>

      <div className="button-container">
        <Button to={`/categories/${slug.current}`} variant={buttonTypes.outline}>
          Explore Services
        </Button>
      </div>
    </CategoryItemStyles>
  );
}

export default CategoryItem;