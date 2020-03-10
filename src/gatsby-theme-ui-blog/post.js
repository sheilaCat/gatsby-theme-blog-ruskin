/** @jsx jsx */
import { jsx, Styled, Container, Avatar, Text, Box } from 'theme-ui'
import { Layout } from 'gatsby-theme-ui-layout'
import logo from "../../content/assets/avatar.png";

export default ({
  title,
  date,
  excerpt,
  children,
  keywords,
  tags,
  ...props
}) => (
  <Styled.root>
    <Layout title={title} description={excerpt} {...props}>
      <Container >
        <Styled.h1>{title}</Styled.h1>
        <div style={{display:'flex', flexDirection: 'row', alignItems: 'center'}}>
          <Avatar width={26} mx={10} src={logo}/>
          <Text mx={10}>sheila.cat</Text>
          <div>{date}</div>
          
          <Text mx={20}>
            <span id="busuanzi_container_page_pv">
              本文总阅读量<span id="busuanzi_value_page_pv"></span>次
            </span>
          </Text>

        </div>
        {children}

        <div
          key={`comment`}
          id="___comment"
          dangerouslySetInnerHTML={{ __html: `
            <script
            src="https://utteranc.es/client.js"
            repo="sheilaCat/sheilacat.github.io"
            issue-term="title"
            label="comment"
            theme="github-light"
            crossOrigin="anonymous"
            async>
          </script>
        `}}
        />

      </Container>
    </Layout>
  </Styled.root>
)
