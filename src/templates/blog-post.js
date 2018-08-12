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
import ShareIcon from '@material-ui/icons/Share';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import Grid from '@material-ui/core/Grid';
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import MenuIcon from '@material-ui/icons/Menu';
import Drawer from '@material-ui/core/Drawer';
import Hidden from '@material-ui/core/Hidden';

import HtmlRenderer from './post_components/HtmlRenderer'
import {PostFooter, PostFooterNull} from './post_components/PostFooter'
import DrawerList from './post_components/DrawerList'
import {WhatsappShareButton, WhatsappIcon} from 'react-share';

const styles = {
  root: {
    display: 'flex',
    flexGrow: '1',
    justifyContent: 'center',
    flexDirection: 'row'
  },
  toolbar:{
    flexGrow: '1',
    flexDirection: 'row',
    justifyContent: 'space-between',
    background: 'linear-gradient(135deg, #b4ddb4 0%,#83c783 6%,#83c783 6%,#52b152 20%,#008a00 37%,#005700 58%,#005700 58%,#002400 96%)',
    opacity: '0.55'
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


class BlogPostTemplate extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      isOpenDrawer: false
    }
  }

  toggleDrawer = (bool) =>{
    this.setState({isOpenDrawer: bool})
  }

  render() {

    const { classes } = this.props;
    const post = this.props.data.markdownRemark
    const siteTitle = get(this.props, 'data.site.siteMetadata.title')
    const {next, prev, tags, slug, categories} = this.props.pathContext ? this.props.pathContext : {}
    const { value } = this.state;

    const disqusShortname = 'drop-1';
    const disqusConfig = {
        identifier: post.id,
        title: post.frontmatter.title,
    };

    return (


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

        <Grid container >
          <Grid item xs={12} sm={12}>
            <Card className={classes.card} >
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

                <HtmlRenderer html={post.html}/>

              </CardContent>
              <CardActions>
                  <Typography gutterBottom variant="headline" component="h4">
                    SHARE
                  </Typography>

                  <WhatsappShareButton
                    url={`https://drop-your-shield.com${slug}`}
                    title={post.frontmatter.title}
                    separator=":: "
                    className="">
                    <WhatsappIcon size={32} round />
                  </WhatsappShareButton>

              </CardActions>

              <div className='comments-wrapper'>
                <Disqus.DiscussionEmbed shortname={disqusShortname} config={disqusConfig} />
              </div>

            </Card>
          </Grid>
          }
        </Grid>

        <Hidden only={['sm', 'lg']} >
          <div className={classes.bottomCenter}>
            {prev ? <PostFooter link={prev.fields.slug} label={'previous'} />:<PostFooterNull />}
            {next ? <PostFooter link={next.fields.slug} label={'next'} />:<PostFooterNull />}
          </div>
        </Hidden>



      </div>
    )
  }
}

export default withStyles(styles)(BlogPostTemplate)

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
      },
      fields {
        slug
      }
    }
  }
`
