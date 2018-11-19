import React from 'react'
import Helmet from 'react-helmet'

import Navbar from '../components/Navbar'
import './all.sass'
import 'antd/dist/antd.css'

const TemplateWrapper = ({ children }) => (
  <div>
    <Helmet title="MadLab Design" />
    <Navbar />
    <div>{children}</div>
  </div>
);

export default TemplateWrapper
