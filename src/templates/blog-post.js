import React from 'react'
import Helmet from 'react-helmet'
import Link from 'gatsby-link'
import get from 'lodash/get'

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
import FavoriteIcon from '@material-ui/icons/Favorite';
import ShareIcon from '@material-ui/icons/Share';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import MoreVertIcon from '@material-ui/icons/MoreVert';

import Grid from '@material-ui/core/Grid';

import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import MenuIcon from '@material-ui/icons/Menu';


class BlogPostTemplate extends React.Component {
  render() {
    const post = this.props.data.markdownRemark
    const siteTitle = get(this.props, 'data.site.siteMetadata.title')

    return (
      <div className='root'>

          <AppBar position="fixed">
            <Toolbar>
              <IconButton className='menuButton' color="inherit" aria-label="Menu">
                <MenuIcon />
              </IconButton>
              <Typography variant="title" color="inherit" className='flex'>
                News
              </Typography>
              <Button color="inherit">Login</Button>
            </Toolbar>
          </AppBar>

        <Grid container spacing={4}>
          <Grid item xs={12} sm={12}>
            <Card className='card'>
              <CardMedia
                className='media'
                image={post.frontmatter.postCardImage}
                title="paste title from cms too"
                style={{height: '0px',backgroundSize: 'contain',
                paddingTop: '56.25%', // 16:9,
                marginTop:'0px'}}
              />
              <CardContent>
                <Typography gutterBottom variant="headline" component="h2">
                  {post.frontmatter.title}
                </Typography>
                <Typography component="p">
                  {post.frontmatter.date}
                </Typography>
                <Typography component="p">
                  <div dangerouslySetInnerHTML={{ __html: post.html }} />
                </Typography>
              </CardContent>
              <CardActions>
                <Button size="small" variant="contained" color="secondary">
                  Share
                </Button>
                <Button size="small" variant="contained" color="primary">
                  Comment
                </Button>
              </CardActions>
            </Card>
          </Grid>
        </Grid>
      </div>
    )
  }
}

export default BlogPostTemplate

export const pageQuery = graphql`
  query BlogPostByPath($path: String!) {
    site {
      siteMetadata {
        title
        author
      }
    }
    markdownRemark(frontmatter: { path: { eq: $path } }) {
      id
      html
      frontmatter {
        title
        date(formatString: "MMMM DD, YYYY")
        postCardImage

      }
    }
  }
`
