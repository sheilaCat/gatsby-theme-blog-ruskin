/** @jsx jsx */
import { jsx, Styled, Container, Text, Box, useThemeUI, Label, Button, NavLink, Heading, Image } from 'theme-ui'
import { Layout } from 'gatsby-theme-ui-layout'
import ColoredSvg from './colored-svg';
import { DiscussionEmbed } from "disqus-react"
import { Link, useStaticQuery, graphql } from 'gatsby'

export default ({
  title,
  date,
  excerpt,
  children,
  slug,
  keywords,
  tags,
  image,
  ...props
}) => {
  
  const data = useStaticQuery(graphql`
  query {
    site {
      siteMetadata {
        disqusName
      }
    }
  }
`)

const {disqusName} = data.site.siteMetadata;

  const context = useThemeUI()
  const { colorMode } = context

  const disqusConfig = {
    shortname: disqusName,
    config: { identifier: slug, title },
  }

  return (
  <Styled.root>
    <Layout title={title} description={excerpt} {...props}>
      <Container>
        <Styled.h1>{title}</Styled.h1>
        {
          tags.map(tag => (<NavLink href={`/tags/${tag}`}><Button color="text" sx={{ fontWeight: 'bold' }} mr={3} mb={3} bg="gray"># {tag}</Button></NavLink>))
        }
        <div style={{display:'flex', flexDirection: 'row', alignItems: 'center', fontWeight: 'bold'}}>
          <Text mr={10}>sheila.cat</Text>
          <div>{date}</div>
          <Text id="busuanzi_container_page_pv" mx={20} sx={{display: 'flex!important', justifyContent: 'center', alignItems: 'center'}}>
            <ColoredSvg name="eye" width={20} height={20}/>
            <span sx={{lineHeight: '26px', marginLeft: '4px'}} id="busuanzi_value_page_pv">--</span>
          </Text>
        </div>
        {children}

        <Container pt={40}>
          <DiscussionEmbed {...disqusConfig} />
        </Container>

        <script async src="https://busuanzi.ibruce.info/busuanzi/2.3/busuanzi.pure.mini.js"></script>

      </Container>
    </Layout>
  </Styled.root>
)}
