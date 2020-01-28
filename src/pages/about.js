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
      I am a passionate designer and front-end developer who believes in staying positive and optimistic
      in various highs and lows of work life. I take society's issues as opportunities for a better future
      and believe in action. My passion for work is derived from healthy and constructive environments
      which instils in me the drive to be the source of that positivity.
      Apart from work, I love to read; create music (I have a home studio); play cricket and scribble sketches.
      <Text.Hero style={{ margin: '60px 0px 40px'}} dark><strong>Artwork</strong></Text.Hero>
      <TileStyled.Tiles>
        <Image name='art1' width={285} margin="0px 10px 10px 0px" opacity={0.7} maxWidth />
        <Image name='art2' width={500} margin="0px 0px 10px 0px" opacity={0.7} maxWidth />
        <Image name='art3' width={500} margin="0px 10px 10px 0px" opacity={0.7} maxWidth />
        <Image name='art4' width={285} margin="0px 0px 10px 0px" opacity={0.7} maxWidth />
      </TileStyled.Tiles>
    </PageStyled.Content2>
  </Layout>
)}

export default AboutPage
