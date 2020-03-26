import React from 'react'

import { jsx, Styled, Box, Container, AspectImage, Avatar, Text, NavLink, Grid} from 'theme-ui'
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
          <Grid columns={3} gap={2}>
          {
            props.data.allBlogPost.group.map(item => (
              <NavLink href={`/tags/${item.tag}`}><Text>#{item.tag}</Text></NavLink>
            ))
          }
          </Grid>
          <Grid columns={1}>
          {
            nodes.map(node => (
              <Box>
                <Text>{node.title}</Text>
              </Box>
            ))
          }
          </Grid>

        </Box>
      </Container>
      </Layout>
    </Styled.root>
  )
}