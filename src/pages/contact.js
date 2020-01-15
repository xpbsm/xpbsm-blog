import React from 'react'
import Helmet from 'react-helmet'
import Layout from '../layout'
import config from '../../data/SiteConfig'

const ContactPage = () => (
  <Layout>
    <main>
      <Helmet title={`Contact | ${config.siteTitle}`} />
      <h1>Contact me</h1>
      <p>I'm xiepeng , as a fronted end programmer , I will share my knowlanage with earths, just enjoy yourselful</p>
      
    </main>
  </Layout>
)
export default ContactPage;
