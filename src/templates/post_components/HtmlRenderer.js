import React from 'react'


const HtmlRenderer = (props) => (
  <div dangerouslySetInnerHTML={{ __html: props.html }} />
)


export default HtmlRenderer
