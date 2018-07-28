const _ = require("lodash")
const Promise = require("bluebird")
const path = require("path")
const select = require(`unist-util-select`)
const fs = require(`fs-extra`)

const { createFilePath } = require(`gatsby-source-filesystem`);

exports.onCreateNode = ({ node, getNode, boundActionCreators }) => {
  const { createNodeField } = boundActionCreators
  if (node.internal.type === `MarkdownRemark`) {
    const slug = createFilePath({ node, getNode, basePath: `pages` })
    createNodeField({
      node,
      name: `slug`,
      value: slug,
    })
  }
};






const all_tags = (posts) =>{
  const _postsByTags = {}

  posts.forEach(({node}) => {
    if(node.frontmatter.tags){
      node.frontmatter.tags.forEach(tag=>{
        if(!_postsByTags[tag]){
          _postsByTags[tag] = []
        }

        _postsByTags[tag].push(node)
      })
    }
  })

  return Object.keys(_postsByTags)
}

const createTagPages = (createPage, posts) => {


  const tagPageTemplate = path.resolve("./src/templates/tags.js")
  const allTagsTemplate = path.resolve("./src/templates/all-tags.js")

  const postsByTags = {}

  posts.forEach(({node}) => {
    if(node.frontmatter.tags){
      node.frontmatter.tags.forEach(tag=>{
        if(!postsByTags[tag]){
          postsByTags[tag] = []
        }

        postsByTags[tag].push(node)
      })
    }
  })

  const tags = Object.keys(postsByTags)

  createPage({
    path: '/tags',
    component: allTagsTemplate,
    context:{
      tags: tags.sort()
    }
  })

  tags.forEach(tagName=>{
    const posts = postsByTags[tagName]

    createPage({
      path: `/tags/${tagName}`,
      component: tagPageTemplate,
      context:{
        posts,
        tagName
      }
    })
  })


}



exports.createPages = ({ graphql, boundActionCreators }) => {
  const { createPage } = boundActionCreators

  return new Promise((resolve, reject) => {
    const pages = []
    const blogPost = path.resolve("./src/templates/blog-post.js")
    resolve(
      graphql(
        `
      {
        allMarkdownRemark(limit: 1000) {
          edges {
            node {
              fields {
                slug
              }
              frontmatter {
                title
                path
                contentType
                tags
              }
            }
          }
        }
      }
    `
      ).then(result => {
        if (result.errors) {

          console.log('NOOOOOOO POOOOOSTS')
          reject(result.errors)

        }

        const posts = result.data.allMarkdownRemark.edges;
        const tags = all_tags(posts);
        createTagPages(createPage, posts);


        // Create blog posts pages.
        _.each(posts, (edge, index) => {
          createPage({
            path: edge.node.fields.slug,
            component: blogPost,
            context: {
              prev: index === 0 ? null : posts[index -1].node,
              next: index === (posts.length - 1) ? null : posts[index + 1].node,
              tags: tags,
              slug: edge.node.fields.slug
            }
          })
          resolve()
        })
      })
    )
  })
}
