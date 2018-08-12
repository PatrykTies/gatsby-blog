import React from 'react'
import Link from 'gatsby-link'
import Helmet from 'react-helmet'
import PostCard from '../templates/post_components/PostCard'

import Grid from '@material-ui/core/Grid';
import get from 'lodash/get'
import Disqus from 'disqus-react';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import Button from '@material-ui/core/Button';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Collapse from '@material-ui/core/Collapse';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import red from '@material-ui/core/colors/red';



class Blog extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      isOpenDrawer: false
    }
  }
  toggleDrawer = (bool) =>{
    this.setState({isOpenDrawer: bool})
  }
  render() {
    //const siteTitle = this.props.data.site.siteMetadata.title
  //  const siteDescription = this.props.data.site.siteMetadata.description

    const [...posts] = this.props.data.allMarkdownRemark.edges

    const {classes} = this.props


    const havePosts = () => {

      return posts.length > 0 && posts !== undefined
    }

    return(
      <div>


      {havePosts() ?

        <Grid container spacing={24}>
          <Grid item xs={12}>
            <h1>Latest posts</h1>
          </Grid>
            {posts.map(post=>(
              <Grid item xs={12} md={4} sm={6} key={post.node.id}>
                <PostCard key={post.node.id} postdata={post} />
              </Grid>
            ))}
        </Grid>
        :
        <div />
      }
    </div>
  )}
}

export default Blog

export const pageQuery = graphql`
  query BlogIndexQuery {
    allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }){
      edges{
        node{
          id
          excerpt
          frontmatter{
            title
            author
            date(formatString: "DD MMMM, YYYY")
            postCardImage
            category
          }
          fields {
            slug
          }
        }
      }
    }
  }
`
