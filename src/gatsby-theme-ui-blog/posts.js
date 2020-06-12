/** @jsx jsx */
import { jsx, Styled, Box, Container, AspectImage, Avatar, Text, Image} from 'theme-ui'
import { Link, useStaticQuery, graphql } from 'gatsby'
import { Layout } from 'gatsby-theme-ui-layout'

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

  const {description, title,} = data.site.siteMetadata;

  return (
  <Styled.root>
    <Layout {...props} title={title} description={description}>
    <Container>
    {/* <Image
      src={'https://cdn.pixabay.com/photo/2020/05/17/20/21/cat-5183427_1280.jpg'}
    /> */}

      {/* <Box py={20}>
        <Styled.h1>{description}</Styled.h1>
      </Box> */}
      <Styled.ul
        sx={{
          listStyle: 'none',
          display: 'grid',
          paddingLeft: 0,
          // gridGap: 30,
          gridTemplateColumns: 'repeat(1, 1fr)',
        }}>
        {posts.map(post => (
          <li key={post.id}>
            <Box m={0} pb={20}>
            {/* <Image
              src={(post.frontmatter && post.frontmatter.image) || ''}
            />  */}
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
              <Text>{post.excerpt}</Text>
            </Box>
          </li>
        ))}
      </Styled.ul>
      </Container>
    </Layout>
  </Styled.root>
  )
}