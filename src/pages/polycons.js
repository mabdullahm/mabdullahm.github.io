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
      <PageStyled bg={['#E7FAF7', '#f8fffe']}>
        <PageStyled.Content>
          <Text.Hero>Opensource <strong>dynamic icons</strong></Text.Hero>
          <DocsStyled>
            <Image name='polycons' width={700} />
          </DocsStyled>
        </PageStyled.Content> 
      </PageStyled>
      <PageStyled.Content2>
        <Folio>
          <Folio.Overview>
            <strong>Overview</strong>
            Being a part of a dynamic team wearing different hats - sometimes as a developer or a designer, I realized a major factor that
            slowed down my progress. That factor was lack of standardisation. I was unable to get free matching styles icons at times. This problem
            lead to a basic idea of me creating a library of icons for myself. As my dev progress also enhanced, I realized the power of svg
            code and found a way to style those icons according to my personal changes globally using scripts. The idea for polycons came into
            being. I designed an interface and am currently working on it's development to aid designers and developers both to set their own style
            preferences to get a batch of ready-made free icons for any of their projects. 
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
      <PageStyled>
        <PageStyled.Content2>
          <Folio>
            <Folio.Description>
              <Text.Hero left><strong>Preview</strong></Text.Hero>
              <Image name='polyconss' width={700} />
            </Folio.Description>
          </Folio>
        </PageStyled.Content2>
      </PageStyled>

    </Layout>
  )
}

export default EdsPage
