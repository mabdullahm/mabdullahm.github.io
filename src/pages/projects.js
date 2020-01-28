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
          <Text.Hero>Web and Logo<strong> Design Projects</strong></Text.Hero>
          <DocsStyled>
            <Image name='projects' width={700} />
          </DocsStyled>
        </PageStyled.Content> 
      </PageStyled>
      <PageStyled.Content2>
        <Folio>
          <Folio.Overview>
            <strong>Web Design</strong>
            I started my UI/UX design journey with web design. I took a course on udemy that taught creating web designs
            and freelancing on platforms like 99designs and designcontest. It was a passion for detail that drove me to win many contests.
          </Folio.Overview>
          <Folio.Role>
            <strong>Platform</strong>
            Design Contest
            <strong>Role</strong>
            Web Designer
            <strong>Timeline</strong>
            July 2015 - June 2018
          </Folio.Role>
        </Folio>
        <Image name='websitz' width={700} />
        <Folio>
          <Folio.Overview>
            <strong>Logo Design</strong>
            I am a fond of creating logos with different concepts even if they're not proper products. To me
            a logo is the very start of the vision of any product. The more it aligns to the goals, culture and
            values, the more meaningful it becomes.
          </Folio.Overview>
          <Folio.Role>
            <strong>Platform</strong>
            Fiverr
            <strong>Role</strong>
            Logo Designer
            <strong>Timeline</strong>
            September 2019 - December 2019
          </Folio.Role>
        </Folio>
        <Image name='logod' width={700} />
      </PageStyled.Content2>
    </Layout>
  )
}

export default EdsPage
