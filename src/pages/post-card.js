import React from 'react'
import PropTypes from 'prop-types'
import Link from 'gatsby-link'
import Helmet from 'react-helmet'

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

import ray7 from '../images/armory/ray7.png'

class PostCard extends React.Component {
  constructor(props){
   super(props);
   this.state = { expanded: false};
 }



  handleExpandClick = () => {
    this.setState({ expanded: !this.state.expanded })
  };
  render(){

    // const authorsEdges =
    //   this.props.data.allAuthorsJson && this.props.data.allAuthorsJson.edges
    //     ? this.props.data.allAuthorsJson.edges
    //     : [];

    const {title,author,date,postCardImage} = this.props.postdata ? this.props.postdata.node.frontmatter : {}
    const {slug} = this.props.postdata ? this.props.postdata.node.fields : {}
    const excerpt = this.props.postdata ? this.props.postdata.node.excerpt : 'Nothing has been written'

    return (
      <div>
        <Card className='card'>
          <CardHeader
            avatar={
              <Avatar aria-label="Recipe" className='avatar'>
                R
              </Avatar>
            }
            action={
              <IconButton>
                <MoreVertIcon />
              </IconButton>
            }
            title={title}
            subheader={`Posted by ${author} on ${date}`}
          />
          <CardMedia

            image={postCardImage}
            title="Contemplative Reptile"
            style={{height: '0px',backgroundSize: 'cover',
            paddingTop: '56.25%', // 16:9,
            marginTop:'0px'}}
          />
          <CardContent>
            <Typography component="p">
              {excerpt}
            </Typography>
          </CardContent>
          <CardActions>
            <Button size="small" variant="contained" color='secondary'>
              Share
            </Button>
            <Button size="small" variant="contained" color='primary'>
              <Link to={slug}>Read more</Link>
            </Button>
          </CardActions>
        </Card>
      </div>
    );
  }
}

export default PostCard;
