import * as React from 'react'
import BlogPostTemplate from '../../templates/blog-post'

type Props = {
  entry: any
  widgetFor: any
}


const BlogPostPreview:React.FC<Props> = ({ entry, widgetFor }) => {
  const tags = entry.getIn(['data', 'tags'])
  const previewData = {
    site: {
      siteMetadata: {
        title: entry.getIn(["data", "title"]),
      },
    },
    markdownRemark: {
      frontmatter: {
        title: String(entry.getIn(["data", "title"])),
      },
    },
  }
  const location = ''
  const pageContext = ''
  return (
    <BlogPostTemplate
      data={previewData}
      pageContext={pageContext}
      location={location}
    />
  )
}

export default BlogPostPreview