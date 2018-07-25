import React from 'react'
import Link from 'gatsby-link'

const Tags = ({pathContext}) => {
  const {posts, tagName} = pathContext
  if(posts){
    return(
      <div>
        <span>Posts about {tagName}:</span>
        <ul>
          {posts.map(post=>{
            return(
              <li>
                <Link key={post.frontmatter.path} to={post.frontmatter.path}>
                  {post.frontmatter.title}
                </Link>
              </li>
            )
          })

          }
        </ul>
      </div>

    )
  }else{
    return(
      <div><h1>NO POSTS FOR THAT TAG NAME</h1></div>
    )
  }
}

export default Tags
