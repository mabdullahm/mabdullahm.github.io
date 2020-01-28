import PropTypes from "prop-types"
import React from "react"
import { Facebook, Linkedin, GitHub, Instagram } from 'react-feather'

import LinkStyled from '../styles/link'
import FooterStyled from '../styles/footer'
import { smallMountains, smallMountainsDark } from '../images/logos'


const Footer = (props) => (
  <FooterStyled dark={props.dark} id='contact'>
    <FooterStyled.Title dark={props.dark}>Feel free to reach out</FooterStyled.Title>
    <FooterStyled.Desc>
      Hit me up for collaboration or just a casual chat!{' '}
      <LinkStyled as="a" href="mailto:mabdullahm.work@gmail.com" blue dark={props.dark}>
        mabdullahm.work@gmail.com
      </LinkStyled>
    </FooterStyled.Desc>
    {/* <FooterStyled.Icons dark={props.dark}>
      <Facebook />
      <Linkedin />
      <GitHub />
      <Instagram />
    </FooterStyled.Icons> */}
    {props.dark ? smallMountainsDark : smallMountains}
  </FooterStyled>
)

Footer.propTypes = {
  siteTitle: PropTypes.string,
}

Footer.defaultProps = {
  siteTitle: ``,
}

export default Footer
