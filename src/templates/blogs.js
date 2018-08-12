import React from 'react'
import Link from 'gatsby-link'
import Helmet from 'react-helmet'
import PostCard from './post_components/PostCard'

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
import ShareIcon from '@material-ui/icons/Share';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import MenuIcon from '@material-ui/icons/Menu';
import Drawer from '@material-ui/core/Drawer';
import Hidden from '@material-ui/core/Hidden';

import DrawerList from './post_components/DrawerList'

const styles = {
  root: {
    display: 'flex',
    flexGrow: '1',
    justifyContent: 'center',
    flexDirection: 'row',
  },
  toolbar:{
    flexGrow: '1',
    flexDirection: 'row',
    justifyContent: 'space-between',
    background: 'linear-gradient(135deg, #b4ddb4 0%,#83c783 6%,#83c783 6%,#52b152 20%,#008a00 37%,#005700 58%,#005700 58%,#002400 96%)',
    opacity: '0.55'
  },
  container:{
    marginTop: '40px'
  },
  card:{
    marginLeft: 'auto',
    marginRight: 'auto',
    position: 'absolute',
    left: '10px',
    right: '10px',
    background: 'rgba(64, 91, 83, 0.87)',
    marginTop: '50px',
  },
  bottomCenter:{
    background: 'rgba(44, 67, 61, 1)',
    position: 'fixed',
    bottom: '0',
    left:'0',
    width: '100%'
  },

  appbarButtonPrev: {
    background: 'green',
    color: 'red'

  },
  appbarButtonNext: {

    background: 'black'

  },
  menuBurger:{
    background: 'green'
  },
  drawer:{
    width:'200px'
  }

}

class Blogs extends React.Component {

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
    const {categories} = this.props.pathContext ? this.props.pathContext : {}

    const havePosts = () => {

      return posts.length > 0 && posts !== undefined
    }

    return(
      <div>
      <Drawer open={this.state.isOpenDrawer} onClose={(e) => this.toggleDrawer(false)}>
        <div
          tabIndex={0}
          role="button"
          onClick={(e) => this.toggleDrawer(false)}
          onKeyDown={(e) => this.toggleDrawer(false)}
          className={classes.drawer}
        >
          {<DrawerList categories={categories} />}
        </div>
      </Drawer>
      <AppBar position="fixed" className={classes.root}>
        <Toolbar className={classes.toolbar}>
          <IconButton className={classes.menuBurger} color="inherit" aria-label="Menu" onClick={(e) => this.toggleDrawer(true)}>
            <MenuIcon />
          </IconButton>
        </Toolbar>
      </AppBar>

      {havePosts() ?

        <Grid container spacing={24} className={classes.container}>
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

export default withStyles(styles)(Blogs)

export const pageQuery = graphql`
  query BlogsIndexQuery {
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
