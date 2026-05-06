import React from 'react';
import { BlogGridStyles } from '../../styles/blog/BlogGridStyles';
import BlogItem from './BlogItem';

function BlogGrid({ blogs, prefix = "spotlight" }) {
  return (
    <BlogGridStyles>
      {blogs &&
        blogs.map((blog) => (
          <BlogItem
            key={blog.id}
            path={blog.slug.current}
            title={blog.title}
            categories={blog.categories}
            image={{
              imageData: blog.coverImage?.asset?.gatsbyImageData,
              altText: blog.coverImage?.alt,
            }}
            publishedAt={blog.publishedAt}
            // Use the item's own prefix if it has one, otherwise fallback to the grid default
            prefix={blog.prefix || prefix} 
          />
        ))}
    </BlogGridStyles>
  );
}

export default BlogGrid;