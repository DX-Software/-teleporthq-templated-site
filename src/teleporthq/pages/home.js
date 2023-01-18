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
      <span>TITLE</span>
      <span>
        <span>Lorem Ipsum</span>
        <br></br>
      </span>
      <button className="button">
        <span>
          <span>Lorem Ipsum</span>
          <br></br>
        </span>
      </button>
    </div>
  )
}

export default Home
