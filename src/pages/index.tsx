import * as React from "react"
import { Link, graphql } from "gatsby"
import { kebabCase } from "lodash"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Img from "gatsby-image"
import { makeStyles } from "@material-ui/core/styles"
import Card from "@material-ui/core/Card"
import CardActionArea from "@material-ui/core/CardActionArea"
import Grid from "@material-ui/core/Grid"
import CardContent from "@material-ui/core/CardContent"
import Button from "@material-ui/core/Button"
import Typography from "@material-ui/core/Typography"
import { IndexPagesQuery } from '../../types/graphql-types'

type Props = {
  data: IndexPagesQuery,
  location: any
}

const useStyles = makeStyles({
  root: {
  },
  media: {
    height: 280,
  },
})


const BlogIndex: React.FC<Props> = ({ data, location }) => {
  const classes = useStyles();
  const siteTitle = data.site.siteMetadata.title
  const posts = data.allMarkdownRemark.edges

  return (
    <Layout location={location} title={siteTitle}>
      <SEO title={siteTitle} />
      <Grid container spacing={3}>
      {posts.map(({ node }) => {
        const title = node.frontmatter.title || node.fields.slug
        return (
          <Grid item xs={12} xl={12} sm={6} md={4} lg={3}>
          <article key={node.fields.slug}>
            <Card className={classes.root}>
              <CardActionArea>
                <Link style={{ boxShadow: `none` }} to={node.fields.slug}>
                  <Img
                    className={classes.media}
                    fluid={node.frontmatter.featuredimage.childImageSharp.fluid}
                  />
                  <CardContent>
                    <Typography gutterBottom variant="h5" component="h2">
                      {title}
                    </Typography>
                    <Typography
                      variant="body2"
                      color="textSecondary"
                      component="p"
                    >
                      {node.excerpt}
                    </Typography>
                  </CardContent>
                </Link>
              </CardActionArea>
              <CardContent>
                {node.frontmatter.tags.map(tag => {
                  return (
                    <Button>
                      <Link to={`/tags/${kebabCase(tag)}/`}>
                        <Typography variant="button">{tag}</Typography>
                      </Link>
                    </Button>
                  )
                })}
                <Typography variant="body2" color="textSecondary" component="p">
                  {node.frontmatter.date}
                </Typography>
              </CardContent>
            </Card>
            </article>
            </Grid>
        )
      })}
      </Grid>
    </Layout>
  )
}

export const pageQuery = graphql`
         query IndexPages {
           site {
             siteMetadata {
               title
             }
           }
           allMarkdownRemark(
             sort: { fields: [frontmatter___date], order: DESC }
           ) {
             edges {
               node {
                 excerpt
                 fields {
                   slug
                 }
                 frontmatter {
                   date(formatString: "MMMM DD, YYYY")
                   title
                   tags
                   description
                   featuredimage {
                     childImageSharp {
                       fluid(maxWidth: 1000) {
                         ...GatsbyImageSharpFluid
                       }
                     }
                   }
                 }
               }
             }
           }
         }
       `

export default BlogIndex
