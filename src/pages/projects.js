import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Image from '../components/image'
import Text from '../styles/text'
import PageStyled from '../styles/page'
import DocsStyled from '../styles/docs'
import Folio from '../styles/portfolio'

const EdsPage = (props) => {
  return (
    <Layout path={props.path}>
      <SEO title="Home" />
      <PageStyled bg={['#d0f0fb', '#F7FCFF']}>
        <PageStyled.Content>
          <Text.Hero>Web, App and Logo<strong> Design Projects</strong></Text.Hero>
          <DocsStyled>
            <Image name='projects' width={700} />
          </DocsStyled>
        </PageStyled.Content> 
      </PageStyled>
      <PageStyled.Content2>
        <Folio>
          <Folio.Overview>
            <strong>Overview</strong>
            With the growth of the educative team, it became increasingly important to maintain a
            consistent style and visual language across all areas of the product. We needed more
            systematic ways to guide and leverage our collective efforts. The initial outcome was to
            have a collection of reusable components, guided by clear principles, that can be combined
            together to create as simple and as complex experiences, as needed.
          </Folio.Overview>
          <Folio.Role>
            <strong>Company</strong>
            Polycons
            <strong>Role</strong>
            Creator
            <strong>Timeline</strong>
            December 2019 - Present
          </Folio.Role>
        </Folio>
      </PageStyled.Content2>
      <PageStyled bg={['#F7FCFF', '#F7FCFF']}>
        <PageStyled.Content2>
          <Folio>
            <Folio.Description>
              <Text.Hero left><strong>Preview</strong></Text.Hero>
            </Folio.Description>
          </Folio>
        </PageStyled.Content2>
      </PageStyled>
      <PageStyled.Content2>
        <Folio>
          <Folio.Description>
            <Text.Hero left><strong>Problem</strong></Text.Hero>
          </Folio.Description>
        </Folio>
        <Folio>
          <Folio.Description>
            <Text.Hero left><strong>Solution</strong></Text.Hero>
          </Folio.Description>
        </Folio>
        <Folio>
          <Folio.Description>
            <Text.Hero left><strong>Challenges</strong></Text.Hero>
          </Folio.Description>
        </Folio>
        <Folio>
          <Folio.Description>
            <Text.Hero left><strong>Key Learnings</strong></Text.Hero>
          </Folio.Description>
        </Folio>
      </PageStyled.Content2>

    </Layout>
  )
}

export default EdsPage
