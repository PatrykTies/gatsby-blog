import React from 'react'
import Link from 'gatsby-link'

const Categories = ({pathContext}) => {
  const {posts, categoryName} = pathContext
  if(posts){
    return(
      <div>
        <span>Posts about {categoryName}:</span>
        <ul>
          {posts.map(post=>{
            return(
              <li>
                <Link key={post.fields.slug} to={post.fields.slug}>
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

export default Categories
