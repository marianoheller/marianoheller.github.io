import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import styled from 'styled-components';

import Navbar from '../components/Navbar'
import './index.css'

const ContentContainer = styled.div`
  margin: 0 auto;
  max-width: 960px;
  padding: 0px 1.0875rem 1.45rem;
  padding-top: 0;
  font-family: 'Open Sans', sans-serif;
`


const TemplateWrapper = ({ children }) => (
  <div>
    <Helmet
      title="Mariano Heller"
      meta={[
        { name: 'description', content: 'Portfolio' },
        { name: 'keywords', content: 'mariano, heller, portfolio, blog' },
      ]}
    />
    <Navbar />
    <ContentContainer>
      {children()}
    </ContentContainer>
  </div>
)

TemplateWrapper.propTypes = {
  children: PropTypes.func,
}

export default TemplateWrapper
