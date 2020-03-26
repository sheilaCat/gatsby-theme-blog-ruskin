import React from 'react'
import { Helmet } from 'react-helmet'

/**
 * helmet for your head seo
 */

export default ({ lang = 'en-us', title, description, ...props }) => {
  return(
  <Helmet
    {...props}
    htmlAttributes={{
      lang,
      title
    }}>
    <title>{title}</title>
    <meta name="title" content={title} />
    <meta name="description" content={description} />
    <meta property="og:title" content={title} />
    <script src="https://cdn.jsdelivr.net/npm/echarts@4.7.0/dist/echarts.min.js"></script>
  </Helmet>
)}