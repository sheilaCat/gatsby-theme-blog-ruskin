/** @jsx jsx */
import { jsx, useColorMode, Button, Flex, Box, Divider, Container, NavLink, Card, Text, Image, Grid } from 'theme-ui'

import React from 'react'
import { Link, useStaticQuery, graphql } from 'gatsby'
import Head from './head'
import ColoredSVG from './colored-svg'

export default profile => {
  return (
    <Container 
      bg='highlight' 
      px={20}
      sx={{position: 'fixed', width: 300, height: '94%', m: 20, p: 20, borderRadius: 10, alignItems: 'center', flex: 1, justifyContent: 'center'}}>
      <Image style={{borderRadius: 10, width: 100, height: 100}} src="https://images.unsplash.com/photo-1520222984843-df35ebc0f24d?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max&ixid=eyJhcHBfaWQiOjF9" />
      <Text sx={{fontWeight: '500', fontSize: '1.4em'}}>SHEILACAT</Text>
      <Text color='secondary' backgroundColor='muted' sx={{fontSize: '.4em', display: 'inline-block', borderRadius: 4, p: 1}}>SOFTWARE ENGINER</Text>
      <Grid gap={3} columns={2} sx={{my: 3}}>   
        <NavLink href="/books-gallery" >
          <Card sx={{p: 20, borderRadius: 4}} backgroundColor="muted">
            <Text sx={{fontSize: '.6em'}} color='gray'>Reading Books in 2020</Text>
            <Text sx={{fontSize: '1.5em', fontWeight: '500'}}>10</Text>
          </Card>
        </NavLink>
        <NavLink href="/tags" >
          <Card sx={{p: 20, borderRadius: 4}} backgroundColor="muted">
            <Text sx={{fontSize: '.6em'}} color='gray'>Write blogs</Text>
            <Text sx={{fontSize: '1.5em', fontWeight: '500'}}>40</Text>
          </Card>
        </NavLink>
        <Card sx={{p: 20, borderRadius: 4}} backgroundColor="muted">
          <Text sx={{fontSize: '.6em'}} color='gray'>Reading</Text>
          <Text sx={{fontSize: '1.5em', fontWeight: '500'}}>10</Text>
        </Card>
        <Card sx={{p: 20, borderRadius: 4}} backgroundColor="muted">
          <Text sx={{fontSize: '.6em'}} color='gray'>Reading</Text>
          <Text sx={{fontSize: '1.5em', fontWeight: '500'}}>10</Text>
        </Card>
      </Grid>
    </Container>
  )
}