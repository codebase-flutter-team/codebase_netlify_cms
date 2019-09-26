const _ = require('lodash')
const path = require('path')
const { createFilePath } = require('gatsby-source-filesystem')
const { fmImagesToRelative } = require('gatsby-remark-relative-images')

exports.createPages = ({ actions, graphql }) => {
  const { createPage } = actions

  return graphql(`
    {
      posts: allMarkdownRemark(limit: 1000 filter: {frontmatter: {templateKey: {ne: "blog-page"}}}) {
        edges {
          node {
            id
            fields {
              slug
            }
            frontmatter {
              templateKey
            }
          }
        }
      }

      blog: allMarkdownRemark(limit: 1000 filter: {frontmatter: {templateKey: {eq: "blog-post"}}}) {
        edges {
          node {
            id
            fields {
              slug
            }
            frontmatter {
              topic
              templateKey
            }
          }
        }
      }
    }
  `).then(result => {
    if (result.errors) {
      result.errors.forEach(e => console.error(e.toString()))
      return Promise.reject(result.errors)
    }

    const posts = result.data.posts.edges;
    const blogPages = result.data.blog.edges;
    const postsPerPage = 4;
    const numPages = Math.ceil(blogPages.length / postsPerPage);

    // const blogTopic = result.data.blog.edges.node.frontmatter.topic;

    posts.forEach(edge => {
      const id = edge.node.id
      createPage({
        path: edge.node.fields.slug,
        tags: edge.node.frontmatter.tags,
        component: path.resolve(
          `src/templates/${String(edge.node.frontmatter.templateKey)}.js`
        ),
        // additional data can be passed via context
        context: {
          id,
        },
      })
    })

    Array.from({ length: numPages }).forEach((_, i) => {
      createPage({
        path: i === 0 ? `/blog` : `/blog/${i + 1}`,
        component: path.resolve("./src/templates/blog-page.js"),
        context: {
          limit: postsPerPage,
          skip: i * postsPerPage,
          numPages,
          currentPage: i + 1,
        },
      })
    })
    
    let topics = [];
    blogPages.forEach(edge => {
      topics = topics.concat(edge.node.frontmatter.topic);
    })
    topics = _.uniq(topics)
    console.log(topics)

    topics.forEach(topic => {
        const topicPath = `/topics/${_.kebabCase(topic)}`;
        Array.from({ length: numPages }).forEach((_, i) => {
          createPage({
            path: i === 0 ? `${topicPath}` : `${topicPath}/${i + 1}`,
            component: path.resolve(`src/templates/topic-page.js`),
            context: {
              limit: postsPerPage,
              skip: i * postsPerPage,
              numPages,
              currentPage: i + 1,
              topic,
              topicPath,
              postsPerPage
            },
          })
        })
      })
  })
}

exports.onCreateNode = ({ node, actions, getNode }) => {
  const { createNodeField } = actions
  fmImagesToRelative(node) // convert image paths for gatsby images

  if (node.internal.type === `MarkdownRemark`) {
    const value = createFilePath({ node, getNode })
    createNodeField({
      name: `slug`,
      node,
      value,
    })
  }
}
