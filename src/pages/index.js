import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Tile from "../components/tile"
import Text from '../styles/text'
import PageStyled from '../styles/page'
import TileStyled from '../styles/tile'
import { mountains, sun, edsLogo, polyconsLogo, edpressoLogo, projectsLogo, resdesignLogo } from '../images/logos'

const IndexPage = (props) => {
  return (
    <Layout path={props.path}>
      <SEO title="Home" />
      <PageStyled bg={['#F4F9FF', '#FFF8FC']}>
        <PageStyled.Content>
          <Text>Hi, I'm Abdullah</Text>
          <Text.Hero><strong>Designer</strong> of experiences</Text.Hero>
          <Text.Hero><strong>Developer</strong> of interactions</Text.Hero>
          <div style={{ position: 'absolute', alignSelf: 'flex-end', top: '60px' }}>{sun}</div>
          {mountains}
        </PageStyled.Content> 
      </PageStyled>
      <PageStyled.Content2>
        <TileStyled.Tiles>
          <Tile
            path='/eds'
            heading="Eden Design System"
            description="Unified design language and process for developers, designers and marketing folks at educative."
            bg={['#f3efff', '#fbfaff']}
            image={edsLogo}
          />
          <Tile
            path='/educative'
            heading="Design Revamp 2018 - Educative"
            description="An ed-tech platform for developers to enhance their skillset on pre-configured browser environments."
            bg={['#f3efff', '#fbfaff']}
            image={resdesignLogo}
          />        
        </TileStyled.Tiles>
        <TileStyled.Tiles>
          <Tile
            path='/edpresso'
            heading="Edpresso - A shot of dev knowledge"
            description="Collection of byte sized articles to provide answers and knowledge of basic dev terms, queries and concerns."
            bg={['#f7eee6', '#fffaf6']}
            image={edpressoLogo}
          />
          <Tile
            path='/polycons'
            heading="Polycons - Opensource dynamic icons"
            description="Gallery of icons with 5 different styles and controls (color, thickness, etc.) to appertain any project."
            bg={['#E7FAF7', '#f8fffe']}
            image={polyconsLogo}
          />     
        </TileStyled.Tiles>
        <TileStyled.Tiles>
          <Tile
            path='/projects'
            heading="Design Projects - Web, App and Logo"
            description="Freelance projects with various clients on and off platforms that include designContest, 99designs and fiverr."
            bg={['#e2f8ff', '#F7FCFF']}
            image={projectsLogo}
          />      
        </TileStyled.Tiles>
      </PageStyled.Content2>
    </Layout>
  )
}

export default IndexPage
