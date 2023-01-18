import React from 'react'

import { Helmet } from 'react-helmet'

import './home.css'

const Home = (props) => {
  return (
    <div className="home-container">
      <Helmet>
        <title>Acclaimed Pricey Pheasant</title>
        <meta property="og:title" content="Acclaimed Pricey Pheasant" />
      </Helmet>
      <button className="button">Button</button>
    </div>
  )
}

export default Home
