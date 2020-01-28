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
      <PageStyled bg={['#f7eee6', '#fffaf6']}>
        <PageStyled.Content>
          <Text.Hero><strong>Edpresso </strong>by educative</Text.Hero>
          <DocsStyled>
            <Image name='edpresso' width={700} />
          </DocsStyled>
        </PageStyled.Content> 
      </PageStyled>
      <PageStyled.Content2>
        <Folio>
          <Folio.Overview>
            <strong>Overview</strong>
            Edpresso was a product idea pitched by educative's CEO Fahim. Our platform had lesser free content;
            our users were looking for some place for summarized knowledge of different dev concepts and we had an opportunity
            to challenge the market share of stackoverflow by providing curated concepts that were of perfect length
            to take up minimal time yet teach the learner what they want. Be it on a commute or random browsing. Hence, after
            brainstorming and validation edpresso was born.
          </Folio.Overview>
          <Folio.Role>
            <strong>Company</strong>
            Edpresso by educative
            <strong>Role</strong>
            Project Owner. Team of 1 designer and 1 developers.
            <strong>Timeline</strong>
            January 2019 - March 2019
          </Folio.Role>
        </Folio>
      </PageStyled.Content2>
      <PageStyled>
        <PageStyled.Content2>
          <Folio>
            <Folio.Description>
              <Text.Hero left><strong>Preview</strong></Text.Hero>
              <Image name='presso' width={700} />
            </Folio.Description>
          </Folio>
        </PageStyled.Content2>
      </PageStyled>
    </Layout>
  )
}

export default EdsPage
