/** @jsx jsx */
import { jsx, Styled, Box, Container, AspectImage, Avatar, Text} from 'theme-ui'
import { Link, useStaticQuery, graphql } from 'gatsby'
import { Layout } from 'gatsby-theme-ui-layout'

import logo from "../../content/assets/avatar.png";

export default ({ posts, ...props }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title,
          description
        }
      }
    }
  `)

  const {description, title} = data.site.siteMetadata;

  return (
  <Styled.root>
    <Layout {...props} title={title} description={description}>
    <Container>
      <Box py={40}>
        <Styled.h1>{description}</Styled.h1>
      </Box>
      <div style={{display:'flex', flexDirection: 'row', alignItems: 'center'}}>
        <Avatar width={26} mx={10} src={logo}/>
        <Text mx={10}>{title}</Text>
      </div>

      <ul
        sx={{
          listStyle: 'none',
          display: 'grid',
          // gridGap: 69,
          // gridTemplateColumns: 'repeat(2, minmax(10px, 460px))',
        }}>
        {posts.map(post => (
          <li key={post.id}>
            <Box p={0}>
            {/* {post.coverUrl && <AspectImage ratio={8/3} src={post.coverUrl} />} */}
            <Styled.h3
              sx={{
                m: 0,
              }}>
              <Link to={post.slug}
                sx={{
                  color: 'inherit',
                  textDecoration: 'none',
                  ':hover,:focus': {
                    color: 'primary',
                    textDecoration: 'underline',
                  }
                }}>
                {post.title}
              </Link>
            </Styled.h3>
            <small sx={{ fontWeight: 'bold' }}>{post.date}</small>
            </Box>
          </li>
        ))}
      </ul>
      </Container>
    </Layout>
  </Styled.root>
  )
}