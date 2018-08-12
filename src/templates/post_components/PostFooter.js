import React from 'react'
import Link from 'gatsby-link'
import Button from '@material-ui/core/Button';
import ArrowForwardIcon from '@material-ui/icons/ArrowForward';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';


const styles = {
  bottomCenter:{
    background: 'rgba(44, 67, 61, 1)',
    position: 'fixed',
    bottom: '0',
    left:'0',
    width: '100%'
  },
  bottomAction:{
    minWidth: '50%',
    height:'60px'
  },
  bottomLeftIcon:{
    left: '10%',
    position: 'absolute'
  },
  bottomRightIcon:{
    right: '15%',
    position: 'absolute'
  },
  disabledLink:{
    minWidth: '50%',
    height:'60px'
  }
}

const PostFooter = ({link, label}) => (

          <Link to={link} >
            <Button style={styles.bottomAction}>
                {label}
            </Button>
          </Link>
)

const PostFooterNull = () => (

          <Link to={'/blog'}>
            <Button  style={styles.disabledLink}>
                BLOG
            </Button>
          </Link>
)

export {
  PostFooter,
  PostFooterNull
}
