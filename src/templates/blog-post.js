import React from 'react'
import Helmet from 'react-helmet'
import Link from 'gatsby-link'
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

import {WhatsappShareButton, WhatsappIcon} from 'react-share';


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
    const {next, prev, tags, slug, categories} = this.props.pathContext

    const disqusShortname = 'drop-1';
    const disqusConfig = {
        identifier: post.id,
        title: post.frontmatter.title,
    };


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
            {categories.map(categoryName =>{
              return(
                <ListItem key={`/categories/${categoryName}`} button component="a" href={`/categories/${categoryName}`}>
                  <ListItemText primary={categoryName} />
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

              {prev && (
                <Button color="inherit">
                  <Link to={prev.fields.slug}>
                    Previous: {prev.frontmatter.title}
                  </Link>
                </Button>
              )}
              {next && (
                <Button color="inherit" >
                  <Link to={next.fields.slug}>
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
                style={{height: '0px',
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

                <Typography dangerouslySetInnerHTML={{ __html: post.html }}>

                </Typography>



              </CardContent>
              <CardActions>
                <Button size="small" variant="contained" color="secondary">
                  <WhatsappShareButton
                    url={`https://drop-your-shield.com${slug}`}
                    title={post.frontmatter.title}
                    separator=":: "
                    className="">
                    <WhatsappIcon size={32} round />
                  </WhatsappShareButton>
                </Button>

                <Button size="small" variant="contained" color="primary">
                  Comment
                </Button>
              </CardActions>
              <div className='comments-wrapper'>
                <Disqus.DiscussionEmbed shortname={disqusShortname} config={disqusConfig} />
              </div>
            </Card>
          </Grid>
        </Grid>
      </div>
    )
  }
}

export default BlogPostTemplate

export const pageQuery = graphql`
  query BlogPostByPath($slug: String!) {
    site {
      siteMetadata {
        title
        author
      }
    }
    markdownRemark(fields: { slug: { eq: $slug } }) {
      id
      html
      frontmatter {
        title
        date(formatString: "MMMM DD, YYYY")
        postCardImage
        category
      }
    }
  }
`
