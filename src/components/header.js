import PropTypes from "prop-types"
import React from "react"


import HeaderStyled from '../styles/header'
import LinkStyled from '../styles/link'
import { logo, darkLogo } from "../images/logos.js"
import resume from './Resume.pdf'

const Header = (props) => {
  const { dark, path } = props;
  let logoJSX = logo;
  if (dark) logoJSX = darkLogo;
  return (
  <HeaderStyled>
    <LinkStyled to="/">{logoJSX}</LinkStyled>
    <HeaderStyled.LinksContainer>
      <LinkStyled to="/" active={path === '/'} dark={dark}>
        Work
      </LinkStyled>
      <LinkStyled to="/about" active={path === '/about'} dark={dark}>
        About
      </LinkStyled>
      <LinkStyled as="a" href="mailto:mabdullahm.work@gmail.com" dark={dark}>
        Contact
      </LinkStyled>
      <LinkStyled as="a" href={resume} download="Resume - Muhammmad Abdullah Malik" dark={dark}>
        Resumé
      </LinkStyled>
    </HeaderStyled.LinksContainer>
  </HeaderStyled>
)}

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
