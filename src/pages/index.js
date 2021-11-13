import * as React from 'react'
import Layout from '../components/layout'
import { StaticImage } from 'gatsby-plugin-image'

const IndexPage = () => {
  return (
    <Layout pageTitle="Home Page">
      <h1>Welcome to my Gatsby site !</h1>
      <StaticImage alt="My journey" src="https://1.bp.blogspot.com/-N1jg9BuAUYU/XtQG-PGgOYI/AAAAAAAAA5E/nX3Zbu-UjaYAqTqUHTD22ZL9AHuopcXbACK4BGAsYHg/w640-h360/membaca.jpg" />
      <p>I'm making this by following the Gatsby Tutorial</p>
    </Layout>
  )
}


export default IndexPage