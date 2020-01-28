import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"
import Tile from "../components/tile"
import Text from '../styles/text'
import PageStyled from '../styles/page'
import AboutStyled from '../styles/about'
import TileStyled from '../styles/tile'
import { moon, darkMountains } from '../images/logos'

const AboutPage = (props) => {
  return (
  <Layout dark path={props.uri}>
    <SEO title="About" />
    <PageStyled bg={['#1a181a', '#440040']}>
      <PageStyled.Content>
      <div>Every child is an artist. The problem is how to remain an artist once we grow up.</div>
      ~ Picasso
        <div style={{ position: 'absolute', alignSelf: 'flex-end', top: '60px' }}>{moon}</div>
        {darkMountains}
      </PageStyled.Content> 
    </PageStyled>
    <PageStyled.Content2>
      <Image name='me' width={800} margin="15px 0px 30px" />
      I was always an artist
      <Text.Heading dark>Artwork</Text.Heading>
      <TileStyled.Tiles>
        <Image name='art1' width={285} margin="0px 10px 10px 0px" opacity={0.7} />
        <Image name='art2' width={500} margin="0px 0px 10px 0px" opacity={0.7} />
        <Image name='art3' width={500} margin="0px 10px 10px 0px" opacity={0.7} />
        <Image name='art4' width={285} margin="0px 0px 10px 0px" opacity={0.7} />
      </TileStyled.Tiles>
    </PageStyled.Content2>
  </Layout>
)}

export default AboutPage
