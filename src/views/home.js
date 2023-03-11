import React from 'react'

import { Helmet } from 'react-helmet'

import './home.css'

const Home = (props) => {
  return (
    <div className="home-container">
      <Helmet>
        <title>commlabs x commlabs</title>
        <meta property="og:title" content="commlabs x commlabs" />
      </Helmet>
    </div>
  )
}

export default Home
