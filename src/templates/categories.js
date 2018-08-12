import React from 'react'
import PostCardTwo from './post_components/PostCard2'
import DrawerList from './post_components/DrawerList'

import Grid from '@material-ui/core/Grid';
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import MenuIcon from '@material-ui/icons/Menu';
import Drawer from '@material-ui/core/Drawer';
import IconButton from '@material-ui/core/IconButton';



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

class Categories extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      isOpenDrawer: false
    }
  }
  toggleDrawer = (bool) =>{
    this.setState({isOpenDrawer: bool})
  }
  render(){

    const {posts, categoryName,categories} = this.props.pathContext
    const {classes} = this.props
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
              <h1>Category: {categoryName}</h1>
            </Grid>
              {posts.map(post=>(

                <Grid item xs={12} md={4} sm={6} key={post.id}>
                  <PostCardTwo
                    key={post.id}
                    title={post.frontmatter.title}
                    author={post.frontmatter.author}
                    date={post.frontmatter.date}
                    postCardImage={post.frontmatter.postCardImage}
                    excerpt={post.excerpt}
                    slug={post.fields.slug}
                  />
                </Grid>
              ))}
          </Grid>
          :
          <Grid container spacing={24} className={classes.container}>
            <Grid item xs={12}>
              <h1>No posts for: {categoryName}</h1>
            </Grid>
          </Grid>
        }

      </div>

  )
}

}

export default withStyles(styles)(Categories)
