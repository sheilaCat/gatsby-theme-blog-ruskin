

/** @jsx jsx */
import { jsx, useColorMode, Button, Flex, Box, Divider, Container, NavLink } from 'theme-ui'

import React from 'react'
import { Link, useStaticQuery, graphql } from 'gatsby'
import Head from './head'
import ColoredSVG from './colored-svg'

import Profile from './profile'

const DarkModeButton = () => {
  const [colorMode, setColorMode] = useColorMode()
  return (
    <Button
      bg='transparent'
      style={{transition: 'display 0.45s ease 0s'}}
      onClick={e => {
        setColorMode(colorMode === 'default' ? 'dark' : 'default')
      }}>
      <ColoredSVG name="mode"/>
    </Button>
  )
}

const Footer = () => {
  return (
    <>
    <Divider />
    <Flex sx={{justifyContent: 'space-between'}}>
      <div>© sheilaCat 2019-2020</div>
      {/* <span id="busuanzi_container_site_uv">
        view counts <span id="busuanzi_value_site_uv">1</span>
      </span> */}
      <div>powered by gatsby · themed by ruskin</div>
    </Flex>
    </>
  )
}

const Header = () => {
  return (
    <>
      <header>
        <Flex>
        <Box p={2} bg='transparent' sx={{ flex: '1 1 auto' }}>
        <Button bg='transparent'><Link to="/">
          <ColoredSVG name="home"/>
        </Link></Button>
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
    <Profile/>
    <Head {...props} />
    <Container 
      // backgroundColor="muted"
      px={[3,5,'20%']}
      py={[1,1,'4%']}
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