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
            acefqfq fqwfqwfqw fqwfqwfqwfqwf qwfqwfq wfqwfqwfq wfqwfqfq wfqwfqwfqwf qwfqwfqwf qwfqwfq
            acefqfq fqwfqwfqw fqwfqwfqwfqwf qwfqwfq wfqwfqwfq wfqwfqfq wfqwfqwfqwf qwfqwfqwf qwfqwfq
            acefqfq fqwfqwfqw fqwfqwfqwfqwf qwfqwfq wfqwfqwfq wfqwfqfq wfqwfqwfqwf qwfqwfqwf qwfqwfq
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
              <Image name='presso' width={700} />
            </Folio.Description>
          </Folio>
        </PageStyled.Content2>
      </PageStyled>

    </Layout>
  )
}

export default EdsPage
