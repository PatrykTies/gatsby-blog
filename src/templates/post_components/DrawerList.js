import React from 'react'
import Link from 'gatsby-link'
import List from '@material-ui/core/List'
import Divider from '@material-ui/core/Divider'
import ListItem from '@material-ui/core/ListItem'
import ListItemIcon from '@material-ui/core/ListItemIcon'
import ListItemText from '@material-ui/core/ListItemText'

const DrawerList = ({categories}) => (

  <div>
    <List component="nav">
      <ListItem button component="a" href="/">
        <ListItemText primary="Home" />
      </ListItem>
      <ListItem button component="a" href="/blogs">
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
)

export default DrawerList;
