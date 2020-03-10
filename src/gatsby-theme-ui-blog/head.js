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
    <title>{JSON.stringify(title)}</title>
    <meta name="title" content={title} />
    <meta name="description" content={description} />
    <link href="https://fonts.googleapis.com/css?family=Noto+Sans+SC|Noto+Serif+SC&display=swap" rel="stylesheet"></link>
  </Helmet>
)}


