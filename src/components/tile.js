import PropTypes from "prop-types"
import React from "react"


import TileStyled from '../styles/tile'
import { logo } from "../images/logos.js"


const Tile = ({ heading, description, image, bg, path }) => (
  <TileStyled to={path}>
    <TileStyled.Cover bg={bg}>{image}</TileStyled.Cover>
    <TileStyled.Heading>{heading}</TileStyled.Heading>
    <TileStyled.Desc>{description}</TileStyled.Desc>
  </TileStyled>
)

Tile.propTypes = {
  siteTitle: PropTypes.string,
}

Tile.defaultProps = {
  siteTitle: ``,
}

export default Tile
