

/** @jsx jsx */
import { jsx, useColorMode, Button, Flex, Box, Divider, Container, NavLink, Text, Styled, Image } from 'theme-ui'

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
    <Flex sx={{justifyContent: 'space-between', fontWeight: 'bold'}}>
      <div sx={{display: ['none', 'none', 'block']}}>© sheila.cat 2020</div>
      <span sx={{display: ['none', 'none', 'block']}} id="busuanzi_container_site_uv">
        view counts <span id="busuanzi_value_site_uv">--</span>
      </span>
      <div>powered by gatsby · themed by ruskin</div>
    </Flex>
    </>
  )
}

const Header = ({description}) => {
  return (
    <>
      <header>
        {/* <Flex>
        <Box p={2} bg='transparent' sx={{ flex: '1 1 auto' }}>
        <Button bg='transparent'><Link to="/">
          <ColoredSVG name="home"/>
        </Link></Button>
        </Box>
        <Box p={2} bg='transparent'>
        <DarkModeButton />
        </Box>
      </Flex> */}
      <Box 
        bg="navBg"
        px={20}
       sx={{position: ['relative', 'relative', 'fixed'], top: 0, left: 0, bottom: 0, minWidth: 240, background: '' }}
       >
 
         <div sx={{position: 'relative', top: '80%'}}>
         <Text sx={{color: 'background', fontSize: 6, fontStyle: 'italic', fontWeight: '700'}}>{description}</Text>
        <Flex as='nav'>
          <NavLink color="background" href='/' p={2}>
            Home
          </NavLink>
          <NavLink color="background"  href='/tags' p={2}>
          Tags
          </NavLink>
          <NavLink color="background"  href='/books-gallery' p={2}>
          Books
          </NavLink>
        </Flex>
        <DarkModeButton />
         </div>
      </Box>
      </header>
    </>
  )
}

export default props => {

  const data = useStaticQuery(graphql`
    query GoogleUA {
      site {
        siteMetadata {
          googleAnalyticsUA,
          description
        }
      }
    }
  `)

const {googleAnalyticsUA, description} = data.site.siteMetadata;

  return (
  <>
    {/* <Profile/> */}
    <Head {...props} />
    <Header description={description}/>
    <Container 
      // backgroundColor="muted"
      px={[3,5,'30%']}
      py={[1,1,'1%']}
    >
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