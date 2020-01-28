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
      <PageStyled bg={['#f3efff', '#fbfaff']}>
        <PageStyled.Content>
          <Text.Hero>Eden <strong>Design System</strong></Text.Hero>
          <DocsStyled>
            <Image name='eds' width={700} />
          </DocsStyled>
        </PageStyled.Content> 
      </PageStyled>
      <PageStyled.Content2>
        <Folio>
          <Folio.Overview>
            <strong>Overview</strong>
            <div>As the educative team grew rapidly, it became really important to maintian styling consistency across the product.
            We needed a design language to guide our developers, designers, marketing team and the seniority to put in their collective
            efforts in a much more systematic and orderly way.</div>
            <div>The initial idea to have a collection of reusable components was
            already implemented in 2018 but as the time went on, new developers and designers became a part of the team and started shaping the product
            in their own ways - this caused a lot of inconsistency. There, the need for clear principles and set rules had become imperative. As a result we explored our options and came
            up to the idea of implementing an atomic design system - breaking down complex UI components to their basic building blocks and then building
            back up.</div>
          </Folio.Overview>
          <Folio.Role>
            <strong>Company</strong>
            Educative
            <strong>Role</strong>
            Project Lead. Team of 1 designer and 2 developers.
            <strong>Timeline</strong>
            Nov 2019 - Present
          </Folio.Role>
        </Folio>
      </PageStyled.Content2>
      <PageStyled>
        <PageStyled.Content2>
          <Folio>
            <Folio.Description>
              <Text.Hero left><strong>Preview</strong></Text.Hero>
              <Image name='edsystem' width={700} />
            </Folio.Description>
          </Folio>
        </PageStyled.Content2>
      </PageStyled>
      {/* <PageStyled.Content2>
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
      </PageStyled.Content2> */}
    </Layout>
  )
}

export default EdsPage
