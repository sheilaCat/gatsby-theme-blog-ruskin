/** @jsx jsx */
import { jsx, Styled, Container, Avatar, Text, Box, useThemeUI } from 'theme-ui'
import { Layout } from 'gatsby-theme-ui-layout'
import logo from "../../content/assets/avatar.png";
import ColoredSvg from './colored-svg';

export default ({
  title,
  date,
  excerpt,
  children,
  keywords,
  tags,
  ...props
}) => {
  
  const context = useThemeUI()
  const { colorMode } = context

  setTimeout(() => {
    document.getElementById('___comment').innerHTML = `
    <script
    src="https://utteranc.es/client.js"
    repo="sheilaCat/sheilacat.github.io"
    issue-term="pathname"
    label="comment"
    theme="github-light"
    crossOrigin="anonymous"
    SameSite="None"
    >
  </script>
  <script 
    SameSite="None"
    id="busuanzi" 
    defer
    src="https://busuanzi.ibruce.info/busuanzi/2.3/busuanzi.pure.mini.js"
  />
`
  }, 1000)

  return (
  <Styled.root>
    <Layout title={title} description={excerpt} {...props}>
      <Container>
        <Styled.h1>{title}</Styled.h1>
        <div style={{display:'flex', flexDirection: 'row', alignItems: 'center'}}>
          <Avatar width={26} mx={10} src={logo}/>
          <Text mx={10}>sheila.cat</Text>
          <div>{date}</div>
          <Text id="busuanzi_container_page_pv" mx={20} sx={{display: 'flex!important', justifyContent: 'center', alignItems: 'center'}}>
            <ColoredSvg name="eye" width={20} height={20}/>
            <span sx={{lineHeight: '26px', marginLeft: '4px'}} id="busuanzi_value_page_pv"></span>
          </Text>
        </div>
        {children}

        <div
          key={`comment`}
          id="___comment"
        />

      </Container>
    </Layout>
  </Styled.root>
)}
