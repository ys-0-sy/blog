import * as React from 'react'
import * as remark from 'remark'
import reactRenderer from 'remark-react'

//import BlogPostTemplate from '../../templates/blog-post'

type Props = {
  entry: any
  widgetFor: any
}


const BlogPostPreview:React.FC<Props> = ({ entry }) => {
  return (
    <BlogPostTemplate
      content={entry.getIn(["data", "body"])}
      description={entry.getIn(["data", "description"])}
      title={entry.getIn(["data", "title"])}
    />
  )
}

type TemplateProps = {
  content: string
  description: string
  title: string
}

const BlogPostTemplate:React.FC<TemplateProps> = ({
  content,
  description,
  title,
}) => {
  const processor = remark().use(reactRenderer)
  console.log(processor.processSync(content))
  return (
    <section className="section">
      {""}
      <div className="container content">
        <div className="columns">
          <div className="column is-10 is-offset-1">
            <h1 className="title is-size-2 has-text-weight-bold is-bold-light">
              {title}
            </h1>
            <p>{description}</p>
            {processor.processSync(content).contents}
          </div>
        </div>
      </div>
    </section>
  )
}


export default BlogPostPreview