/* creating pages programmatically instead of creating them in files isnde the Pages folder */
exports.createPages = async ({ graphql, actions }) => {
  const postsPerPage = parseInt(process.env.GATSBY_POST_PER_PAGE) || 3;
  // resolving templates paths
  const singlePublicationTemplate = require.resolve('./src/templates/single-publication.js');
  const publicationListTemplate = require.resolve('./src/templates/publication-list.js');
  const singleBlogTemplate = require.resolve('./src/templates/single-blog.js');
  const singleCategoryTemplate = require.resolve(
    './src/templates/single-category.js'
  );
  const singleActivityTemplate = require.resolve(
    './src/templates/single-activity.js'
  );
  const blogListTemplate = require.resolve('./src/templates/blog-list.js');
  const categoryListTemplate = require.resolve(
    './src/templates/category-list.js'
  );
  const activityListTemplate = require.resolve(
    './src/templates/activity-list.js'
  );
  const singleAuthorTemplate = require.resolve(
    './src/templates/single-author.js'
  );
  const authorListTemplate = require.resolve('./src/templates/author-list.js');

  const { createPage } = actions;

  const result = await graphql(`
    {
      allSanityBlog {
        nodes {
          id
          slug {
            current
          }
        }
      }
      allSanityCategory {
        nodes {
          id
          slug {
            current
          }
        }
      }
      allSanityAuthor {
        nodes {
          id
          slug {
            current
          }
        }
      }
      allSanityActivity {
        nodes {
          id
          slug {
            current
          }
        }
      }
      allSanityPublication { nodes { id, slug { current } } }
    }
  `);

  if (result.errors) throw result.errors;

  // Added filters to ensure we only process nodes that actually have a slug
  const blogs = (result.data.allSanityBlog.nodes || []).filter(n => n.slug?.current);
  const categories = (result.data.allSanityCategory.nodes || []).filter(n => n.slug?.current);
  const authors = (result.data.allSanityAuthor.nodes || []).filter(n => n.slug?.current);
  const activities = (result.data.allSanityActivity.nodes || []).filter(n => n.slug?.current);
  const publications = (result.data.allSanityPublication.nodes || []).filter(n => n.slug?.current);
  
  // creating single blog pages
  blogs.forEach((blog) => {
    console.log("Creating page for:", blog.id, blog.slug?.current); 

    if (!blog.slug?.current) {
      console.warn(`SKIPPING blog with no slug: ${blog.id}`);
      return;
    }

    if (blog.slug.current.length > 75) {
      console.warn(
        `WARNING: Slug may be too long (${blog.slug.current.length} chars): ${blog.slug.current}`,
      );
    }

    createPage({
      path: `/spotlight/${blog.slug.current}`,
      component: singleBlogTemplate,
      context: { id: blog.id },
    });
  });

  // creating single category pages
  categories.forEach((category) => {
    createPage({
      path: `/categories/${category.slug.current}`,
      component: singleCategoryTemplate,
      context: { id: category.id },
    });
  });

  categories.forEach((category) => {
    console.log(
      "Creating category page for:",
      category.id,
      category.slug?.current,
    ); 

    if (!category.slug?.current) return;

    createPage({
      path: `/categories/${category.slug.current}`,
      component: singleCategoryTemplate,
      context: { id: category.id }, 
    });
  });

  // single Author pages
  authors.forEach((author) => {
    createPage({
      path: `/team/${author.slug.current}`,
      component: singleAuthorTemplate,
      context: { id: author.id },
    });
  });

  //  creating single activity pages
  activities.forEach((activity) => {
    createPage({
      path: `/activities/${activity.slug.current}`,
      component: singleActivityTemplate,
      context: { id: activity.id },
    });
  });

  // Creating single publication pages
  publications.forEach((pub) => {
    actions.createPage({
      path: `/publications/${pub.slug.current}`,
      component: singlePublicationTemplate,
      context: { id: pub.id },
    });
  });

  // blogs paginated pages
  const totalBlogListPages = Math.ceil(blogs.length / postsPerPage);
  Array.from({ length: totalBlogListPages }).forEach((_, index) => {
    createPage({
      path: index === 0 ? `/spotlight` : `/spotlight/${index + 1}`,
      component: blogListTemplate,
      context: {
        limit: postsPerPage,
        offset: index * postsPerPage,
        numberOfPages: totalBlogListPages,
        currentPage: index + 1,
      },
    });
  });

  // category paginated pages
  const totalCategoryListPages = Math.ceil(categories.length / postsPerPage);
  Array.from({ length: totalCategoryListPages }).forEach((_, index) => {
    createPage({
      path: index === 0 ? `/categories` : `/categories/${index + 1}`,
      component: categoryListTemplate,
      context: {
        limit: postsPerPage,
        offset: index * postsPerPage,
        numberOfPages: totalCategoryListPages,
        currentPage: index + 1,
      },
    });
  });

  // Author paginated pages
  const totalAuthorListPages = Math.ceil(authors.length / postsPerPage);
  Array.from({ length: totalAuthorListPages }).forEach((_, index) => {
    createPage({
      path: index === 0 ? `/team` : `/team/${index + 1}`,
      component: authorListTemplate,
      context: {
        limit: postsPerPage,
        offset: index * postsPerPage,
        numberOfPages: totalAuthorListPages,
        currentPage: index + 1,
      },
    });
  });

  // activity paginated pages
  const totalActivityListPages = Math.ceil(activities.length / 7);
  Array.from({ length: totalActivityListPages }).forEach((_, index) => {
    createPage({
      path: index === 0 ? `/activities` : `/activities/${index + 1}`,
      component: activityListTemplate,
      context: {
        limit: 7,
        offset: index * 7,
        numberOfPages: totalActivityListPages,
        currentPage: index + 1,
      },
    });
  });

  // publication paginated pages
  const totalPubPages = Math.ceil(publications.length / postsPerPage) || 1;
  Array.from({ length: totalPubPages }).forEach((_, i) => {
    actions.createPage({
      path: i === 0 ? `/publications` : `/publications/${i + 1}`,
      component: publicationListTemplate,
      context: { limit: postsPerPage, offset: i * postsPerPage, numberOfPages: totalPubPages, currentPage: i + 1 },
    });
  });
};
