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

import Drawer from '@material-ui/core/Drawer';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';


class BlogPostTemplate extends React.Component {
  state = {
    isOpenDrawer: false
  }
  toggleDrawer = (bool) =>{
    this.setState({isOpenDrawer: bool})
  }

  render() {
    const post = this.props.data.markdownRemark
    const siteTitle = get(this.props, 'data.site.siteMetadata.title')
    const {next, prev, tags} = this.props.pathContext
    

    const sideList = (

      <div className='list'>
        <List component="nav">
          <ListItem button component="a" href="/">
            <ListItemText primary="Home" />
          </ListItem>
          <ListItem button component="a" href="/blog">
            <ListItemText primary="Blog" />
          </ListItem>
        </List>
        <Divider />
        <List component="nav">
            {tags.map(tagName =>{
              return(
                <ListItem key={`/tags/${tagName}`} button component="a" href={`/tags/${tagName}`}>
                  <ListItemText primary={tagName} />
                </ListItem>


              )
            })}
          </List>
      </div>
    );



    return (
      <div className='root'>
          <Drawer open={this.state.isOpenDrawer} onClose={(e) => this.toggleDrawer(false)}>
            <div
              tabIndex={0}
              role="button"
              onClick={(e) => this.toggleDrawer(false)}
              onKeyDown={(e) => this.toggleDrawer(false)}
            >
              {sideList}
            </div>
          </Drawer>

          <AppBar position="fixed">

            <Toolbar>
              <IconButton className='menuButton' color="inherit" aria-label="Menu" onClick={(e) => this.toggleDrawer(true)}>
                <MenuIcon />
              </IconButton>
              <Typography variant="title" color="inherit" className='flex'>
                <Link to='/'>
                  HOME
                </Link>
              </Typography>
              <Typography variant="title" color="inherit" className='flex'>
                <Link to='/blog'>
                  BLOG INDEX
                </Link>
              </Typography>
              {prev && (
                <Button color="inherit">
                  <Link to={prev.frontmatter.path}>
                    Previous: {prev.frontmatter.title}
                  </Link>
                </Button>
              )}
              {next && (
                <Button color="inherit" className='flex-right'>
                  <Link to={next.frontmatter.path}>
                    Next: {next.frontmatter.title}
                  </Link>
                </Button>
              )}
            </Toolbar>
          </AppBar>

        <Grid container spacing={8}>
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

                  <div dangerouslySetInnerHTML={{ __html: post.html }} />

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
        path
        postCardImage
        tags
      }
    }
  }
`
