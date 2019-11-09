/**
 * Layout component that queries for data
 * with Gatsby's StaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/static-query/
 */

import React from "react"
import {StaticQuery, graphql} from "gatsby"
import Header from "./header/header"
import MainSlider from "./MainSlider"

const Layout = ({children, pageInfo}) => (
  <StaticQuery
    query={graphql`
      query SiteTitleQuery {
        site {
          siteMetadata {
            title
          }
        },
        file(relativePath: { eq: "logo.png" }) {
          childImageSharp {
            fixed(width: 220, height: 49) {
              ...GatsbyImageSharpFixed
            }
          }
        },
      }
    `}
    render={data => (
      <>
        <Header logoImage={data.file.childImageSharp.fixed} />
        <MainSlider />
      </>
    )}
  />
)

export default Layout
