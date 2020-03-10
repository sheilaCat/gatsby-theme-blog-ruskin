import React from 'react'
import { Helmet } from 'react-helmet'

/**
 * helmet for your head seo
 */

export default ({ lang = 'en-us', title, excerpt, ...props }) => (
  <Helmet
    {...props}
    htmlAttributes={{
      lang,
    }}>
    {title && <title>{title}</title>}
    {excerpt && <meta name="description" content={excerpt} />}
    <link href="https://fonts.googleapis.com/css?family=Noto+Sans+SC|Noto+Serif+SC&display=swap" rel="stylesheet"></link>
  </Helmet>
)
