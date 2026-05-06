import { Link } from 'gatsby';
import { GatsbyImage } from 'gatsby-plugin-image';
import { format } from 'date-fns';
import React from 'react';
import { BlogItemStyles } from '../../styles/blog/BlogItemStyles';
import ParagraphText from '../typography/ParagraphText';
import { Title } from '../typography/Title';

function BlogItem({ path, title, image, categories = [], publishedAt, prefix }) {
  return (
    <BlogItemStyles>
      <Link to={`/${prefix}/${path}`}>
        {image?.imageData && (
          <GatsbyImage
            image={image.imageData}
            alt={image.altText || title}
            className="img"
          />
        )}
      </Link>
      <Link to={`/${prefix}/${path}`}>
        <Title className="title">{title}</Title>
      </Link>
      {publishedAt && (
        <ParagraphText className="publishedAt">
          {format(new Date(publishedAt), 'p, MMMM dd, yyyy')}
        </ParagraphText>
      )}
      {categories.length > 0 && (
        <ParagraphText className="categoriesText">
          {categories.map((item, index) => (
            <span key={item.slug.current}>
              <Link to={`/categories/${item.slug.current}`}>{item.title}</Link>
              {index < categories.length - 1 ? ', ' : ''}
            </span>
          ))}
        </ParagraphText>
      )}
    </BlogItemStyles>
  );
}

export default BlogItem;