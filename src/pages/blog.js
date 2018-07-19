import React from 'react'
import Link from 'gatsby-link'
import Helmet from 'react-helmet'

class Blog extends React.Component {

  constructor(props) {
    super(props)
    this.state = {}
  }
  render() {
    //const siteTitle = this.props.data.site.siteMetadata.title
  //  const siteDescription = this.props.data.site.siteMetadata.description

    const [...posts] = this.props.data.allMarkdownRemark.edges;
    return (
      <div>
        <Helmet>
            <title>blog</title>
            <meta name="description" content='blog' />
        </Helmet>

        <h1>Latest posts</h1>
        {posts.map(post=>(
        //{this.props.data.allMarkdownRemark.edges.map(post=>(
          <div key={post.node.id}>
            <h3>{post.node.frontmatter.title}</h3>
            <small>Posted by {post.node.frontmatter.author} on {post.node.frontmatter.date}</small>
            <br />
            <br />
            <Link to={post.node.frontmatter.path}>Read more...</Link>
            <br />
            <br />
            <hr />
          </div>
        ))}

      </div>
    )
  }
}

export default Blog

export const pageQuery = graphql`
  query BlogIndexQuery {
    allMarkdownRemark{
      edges{
        node{
          id
          frontmatter{
            path
            title
            author
            date
          }
        }
      }
    }
  }
`
