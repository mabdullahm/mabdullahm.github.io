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
          <Text.Hero>Educative <strong>Design Revamp </strong>2018</Text.Hero>
          <DocsStyled>
            <Image name='educative' width={700} />
          </DocsStyled>
        </PageStyled.Content> 
      </PageStyled>
      <PageStyled.Content2>
        <Folio>
          <Folio.Overview>
            <strong>Overview</strong>
            I started my career at educative as their 6th employ. The platform had recently raised funding and announcing that
            on a PR launch entailed growing traffic and customers which meant our product had to be easy-to-use and understand. 
            But at that point in time - the design, let alone the user experience were abysmal. Hence, the highlighted project
            at that time was to completely re-design, re-vamp and re-structure the application. Given, I had significant experience
            in ui/ux design and html/css, the responsibility was granted to a team of 3 which I was a part of. This was an opportunity
            that was not just work, but a journey of immense learning and growth.
          </Folio.Overview>
          <Folio.Role>
            <strong>Company</strong>
            Educative
            <strong>Role</strong>
            Team Member. Team of 3 developers.
            <strong>Timeline</strong>
            June 2018 - December 2018
          </Folio.Role>
        </Folio>
      </PageStyled.Content2>
      <PageStyled>
        <PageStyled.Content2>
          <Folio>
            <Folio.Description>
              <Text.Hero left><strong>Preview</strong></Text.Hero>
              <Image name='edu' width={700} />
            </Folio.Description>
          </Folio>
        </PageStyled.Content2>
      </PageStyled>
    </Layout>
  )
}

export default EdsPage
