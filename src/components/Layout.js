import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import { StaticQuery, graphql } from 'gatsby'

import './all.sass'
import 'antd/dist/antd.css'
import { TemplateWrapper } from "../shared/TemplateWapper";
import NavBar from "./navBar/NavBar";
import Footer from "./footer/Footer";


const Layout = ({ children }) => (
  <StaticQuery
    query={graphql`
      query SiteTitleQuery {
        site {
          siteMetadata {
            title
          }
        }
      }
    `}
    render={data => (
      <>
        <Helmet
          title={data.site.siteMetadata.title}
          meta={[
            { name: 'description', content: 'MadLab Design' },
            { name: 'keywords', content: 'mad, madlab, lab, web, front end, frontend, blaine, lingard, open source, free, react, styles' },
          ]}
        >
          <html lang="en" />
        </Helmet>
        <NavBar/>
        <TemplateWrapper style={{ margin: '0 16px' }}>
          {children}
        </TemplateWrapper>
        <Footer/>
      </>
    )}
  />
);

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout
