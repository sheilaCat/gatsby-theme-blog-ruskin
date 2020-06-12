import React from 'react'

import { jsx, Styled, Box, Container, AspectImage, Avatar, Text, NavLink, Grid, Button, Flex} from 'theme-ui'
import { Link, useStaticQuery, graphql } from 'gatsby'
import { Layout } from 'gatsby-theme-ui-layout'


// - [x] tags展示
// - [ ]全部文章按照时间线展示

export default props => {

  const data = useStaticQuery(graphql`
  query AllPostQuery {
    allBlogPost {
      nodes {
        date(formatString: "dddd, MMMM Do YYYY")
        excerpt
        slug
        title
      }
      totalCount
    }
  }
`)

const {nodes} = data.allBlogPost;

  return (
    <Styled.root>
      <Layout>
      <Container sx={{display: 'flex', alignItems: 'center'}}>
        <Box py={40}>
          <Styled.h1>Archives</Styled.h1>
          <Flex columns={4} gap={2}>
          {
            props.data.allBlogPost.group.map(item => (
              <NavLink href={`/tags/${item.tag}`}><Button color="text" sx={{ fontWeight: 'bold' }} mr={3} mb={3} bg="gray"># {item.tag}</Button></NavLink>
            ))
          }
          </Flex>
          <Grid columns={1} m={0} pb={20}>
            {nodes.map(post => (
              <>
                <Link sx={{
                  color: 'text',
                  textDecoration: 'none',
                  ':hover,:focus': {
                    color: 'primary',
                    textDecoration: 'underline',
                  }}} to={post.slug}>{post.title}</Link>
                <small sx={{ fontWeight: 'bold' }}>{post.date}</small>
              </>
            ))}
          </Grid>
        </Box>
      </Container>
      </Layout>
    </Styled.root>
  )
}