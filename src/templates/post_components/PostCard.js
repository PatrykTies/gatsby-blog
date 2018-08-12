import React from 'react'
import PropTypes from 'prop-types'
import Link from 'gatsby-link'

import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
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


const styles = {
  card: {
    minWidth: 275,
  },
  bullet: {
    display: 'inline-block',
    margin: '0 2px',
    transform: 'scale(0.8)',
  },
  title: {
    marginBottom: 16,
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
};

const PostCard = (props) => {


    const { classes } = props;
    const {title,author,date,postCardImage} = props.postdata ? props.postdata.node.frontmatter : {}
    const {slug} = props.postdata ? props.postdata.node.fields : {}
    const excerpt = props.postdata ? props.postdata.node.excerpt : 'Nothing has been written'

    return (

        <Card className={classes.card}>
          <CardHeader
            avatar={
              <Avatar aria-label="Recipe" >
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
            <Typography component="p" className={classes.pos}>
              {excerpt}
            </Typography>
          </CardContent>
          <CardActions>
            <Button size="small" variant="contained" color='primary'>
              <Link to={slug}>Read more</Link>
            </Button>
          </CardActions>
        </Card>

    );

}

export default withStyles(styles)(PostCard);
