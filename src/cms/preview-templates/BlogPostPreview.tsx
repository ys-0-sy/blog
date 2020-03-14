import * as React from 'react'
import BlogPostTemplate from '../../templates/blog-post'

type Props = {
  entry: any
  widgetFor: any
}


const BlogPostPreview:React.FC<Props> = ({ entry, widgetFor }) => {
  //const tags = entry.getIn(['data', 'tags'])
  const previewData = {
    site: {
      siteMetadata: {
        title: entry.getIn(["data", "title"]),
      },
    },
    markdownRemark: {
      html: widgetFor('body'),
      frontmatter: {
        title: String(entry.getIn(["data", "title"])),
        date: String(entry.getIn(["data", "date"])),
        description: String(entry.getIn(['data', 'description']))

      },
    },
  }
  const location = ''
  const pageContext = ''
  console.log(entry)
  return (
    <BlogPostTemplate
      data={previewData}
      pageContext={pageContext}
      location={location}
    />
  )
}

export default BlogPostPreview