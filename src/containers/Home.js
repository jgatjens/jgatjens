import React from 'react'
import { Head } from 'react-static'
import styled from 'styled-components'
// components
import Profile from '../components/Profile'
import ShareLinks from '../components/ShareLinks'
import HireMe from '../components/HireMe'
import Background from '../components/Background'
// import ForkMe from '../components/ForkMe'
import img from '../assets/jgatjens.jpg';

const Desc = styled.p`
  margin: 0;
  padding: 30px 0 0 0;
  line-height: 22px;
  font-weight: 200;
  color: #020218;
  font-size: 13px;
  text-align: center;
`

const HomePage = styled.div`
  display: flex;
  align-items: center;
  align-items: center;
  height: 100%;
  flex-direction: column;
  justify-content: center;
`

export default () => (
  <HomePage>

    <Head>
      <title>Jairo Gätjens - Website</title>
      <meta name="description" content="I'm an experienced Developer based in Costa Rica." />
      <meta name="keywords" content="Website, Resume, Profile, Github, HTML, CSS, JavaScript" />
      <meta name="author" content="Jairo Gätjens" />
      <link rel="icon" href="/favicon.ico" type="image/x-icon"/>
      <meta property="og:type" content="website" />
      <meta property="og:title" content="Jairo Gätjens" />
      <meta property="og:description" content="I'm an experienced Software Developer based in Costa Rica." />
      <meta property="og:image" content={img} />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:site" content="@jgatjens" />
      <meta name="twitter:creator" content="@jgatjens" />
      <meta name="twitter:title" content="Website Jairo Gatjens" />
      <meta name="twitter:description" content="Jairo Gatjens has been web developer for 8 years, and is currently a Front End Lead in Costa Rica. He received his degree in Computer Science in 2009. Some of his current responsibilities are: developing quality software, participating in the architecture phase and serving as the platform lead on projects, advising and mentoring fellow developers, assisting in the definition of technology standards and best practices." />
      <meta name="twitter:image" content={img} /> 
    </Head>

    {/* <ForkMe /> */}
    <Background />
    <Profile />
    <HireMe />
    <Desc>
      Experienced Software  <br />
      Developer based in Costa Rica.
    </Desc>
    <ShareLinks />
  </HomePage>
)
