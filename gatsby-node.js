'use strict';
const { createFilePath } = require("gatsby-source-filesystem")
const _ = require("lodash")
const { fmImagesToRelative } = require("gatsby-remark-relative-images")

require('ts-node').register({
  compilerOptions: {
    module: 'commonjs',
    target: 'esnext'
  }
})

exports.createPages = require('./gatsby-node/index').createPages

exports.onCreateNode = ({ node, actions, getNode }) => {
  const { createNodeField } = actions
  fmImagesToRelative(node)

  if (node.internal.type === `MarkdownRemark`) {
    const value = createFilePath({ node, getNode })
    createNodeField({
      name: `slug`,
      node,
      value,
    })
  }
}

exports.onCreateWebpackConfig = ({ actions }) => {
  actions.setWebpackConfig({
    resolve: {
      // It's important to have 'node_modules' in resolve module,
      // otherwise the webpack resolve won't be able to find dependencies
      // correctly.
      modules: ["node_modules"],
    },
  })
}
