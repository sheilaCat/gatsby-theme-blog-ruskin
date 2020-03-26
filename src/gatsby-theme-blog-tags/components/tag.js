// import React from 'react'

// export default props => <pre>{JSON.stringify(props, null, 2)}</pre>


import React from 'react'

import { jsx, Styled, Box, Container, AspectImage, Avatar, Text, NavLink, Grid} from 'theme-ui'
import { Link, useStaticQuery, graphql } from 'gatsby'
import { Layout } from 'gatsby-theme-ui-layout'

// - [ ] 展示某个分类下面的全部文章

export default props => {

  const list = props.data.allBlogPost.edges || [];

  return (
    <Styled.root>
      <Layout>
      <Container sx={{display: 'flex', alignItems: 'center'}}>
        <Box py={40}>
          <Styled.h1>Archives</Styled.h1>
          {/* <pre>{JSON.stringify(list, null, 2)}</pre> */}
          <Grid columns={1} gap={2}>
          {
            list.map(item => (
              <Box>
                <Text>{item.node.title}</Text>
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