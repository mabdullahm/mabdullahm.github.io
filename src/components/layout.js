import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"


import Footer from "./footer"
import Header from "./header"
import PageStyled from '../styles/page'
import "./layout.css"

const Layout = (props) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <>
      <Header siteTitle={data.site.siteMetadata.title} dark={props.dark} path={props.path} darkL={props.darkL} />
      <PageStyled dark={props.dark}>
        {props.children}
        <Footer dark={props.dark} />
      </PageStyled>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
