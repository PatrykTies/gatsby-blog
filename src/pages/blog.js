import React from 'react'
import Link from 'gatsby-link'
import Helmet from 'react-helmet'
import PostCard from './post-card'

import Grid from '@material-ui/core/Grid';

class Blog extends React.Component {

  constructor(props) {
    super(props)
    this.state = {}
  }
  render() {
    //const siteTitle = this.props.data.site.siteMetadata.title
  //  const siteDescription = this.props.data.site.siteMetadata.description

    const [...posts] = this.props.data.allMarkdownRemark.edges;

      if(posts.length < 1 || posts == undefined){
        return null;
      }else{
        return(
          <div>
            <Helmet>
                <title>blog</title>
                <meta name="description" content='blog' />
            </Helmet>
            <Grid container spacing={24}>
              <Grid item xs={12}>
                <h1>Latest posts</h1>
              </Grid>
                  {posts.map(post=>(
                    <Grid item xs={12} md={4} sm={6} key={post.node.id}>
                      <PostCard postdata={post} />
                    </Grid>
                  ))}
              </Grid>
            </div>
          )
      }
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
            image
          }
        }
      }
    }
  }
`

//
// <div key={post.node.id}>
//   <h3>{post.node.frontmatter.title}</h3>
//   <small>Posted by {post.node.frontmatter.author} on {post.node.frontmatter.date}</small>
//   <br />
//   <br />
//   <Button variant="contained" color="primary">
//     <Link to={post.node.frontmatter.path}>Read more...</Link>
//   </Button>
//   <br />
//   <br />
//   <hr />
// </div>
