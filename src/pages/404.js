import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import PageStyled from '../styles/page'
import Text from '../styles/text'

const NotFoundPage = () => (
  <Layout>
    <SEO title="404: Not found" />
    <PageStyled bg={['#fae7e7', '#fffdef']}>
      <PageStyled.Content style={{ minHeight: '500px' }}>
        <Text.Hero style={{ marginTop: '-100px' }}><strong>404</strong> - Page Not Found</Text.Hero>
      </PageStyled.Content> 
    </PageStyled>
  </Layout>
)

export default NotFoundPage
