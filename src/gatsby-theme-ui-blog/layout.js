

/** @jsx jsx */
import { jsx, useColorMode, Button, Flex, Box, Divider, Container } from 'theme-ui'

import React from 'react'
import { Link, useStaticQuery, graphql } from 'gatsby'
import Head from './head'

import DarkModeSVG from '../../content/assets/dark-mode.svg'
import LightModeSVG from '../../content/assets/light-mode.svg'
import WriteDarkSVG from '../../content/assets/write-dark.svg'

const DarkModeButton = () => {
  const [colorMode, setColorMode] = useColorMode()
  return (
    <Button
      bg='transparent'
      style={{transition: 'display 0.45s ease 0s'}}
      onClick={e => {
        setColorMode(colorMode === 'default' ? 'dark' : 'default')
      }}>
      {colorMode === 'default' ? <DarkModeSVG /> : <LightModeSVG />}
  </Button>
  )
}

const Footer = () => {
  return (
    <>
    <Divider />
    <script async src="//busuanzi.ibruce.info/busuanzi/2.3/busuanzi.pure.mini.js"></script>

    <span id="busuanzi_container_site_uv">
      本站访客数<span id="busuanzi_value_site_uv"></span>人次
    </span>
    <div>© sheilaCat 2019-2020</div>
    </>
  )
}

const Header = () => {
  return (
    <>
      <header>
        <Flex>
        <Box p={2} bg='transparent' sx={{ flex: '1 1 auto' }}>
          <WriteDarkSVG/>
        </Box>
        <Box p={2} bg='transparent'>
        <DarkModeButton />
        </Box>
      </Flex>
      </header>
    </>
  )
}

export default props => {

  const data = useStaticQuery(graphql`
    query GoogleUA {
      site {
        siteMetadata {
          googleAnalyticsUA
        }
      }
    }
  `)

const {googleAnalyticsUA} = data.site.siteMetadata;

  return (
  <>
    <Head {...props} />
    <Container 
    // px={600} py={50}
    >
      <Header />
      {props.children}
      <Footer/>
    </Container>
        {/* <!-- Google Analytics --> */}
    <script
      dangerouslySetInnerHTML={{
        __html: `
        (function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
        (i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
        m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
        })(window,document,'script','//www.google-analytics.com/analytics.js','ga');

        ga('create', '${googleAnalyticsUA}', 'auto');
        ga('send', 'pageview');`,
      }}
      />
    {/* <!-- End Google Analytics --> */}
  </>
)}