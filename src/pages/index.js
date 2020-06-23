import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"

const IndexPage = ({data}) => (
  <Layout>
    <SEO title="Home" />
    {data.allStrapiArticle.nodes.map(homeArticle => (
	<div>{homeArticle.title}</div>
	))}
  </Layout>
)

export default IndexPage

export const pageQuery = graphql`
query MyQuery {
  allStrapiArticle {
    nodes {
      title
    }
  }
}
`



