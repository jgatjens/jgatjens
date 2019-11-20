import React from 'react'
import styled from 'styled-components'
import { Head, useSiteData } from 'react-static'
import {
  FacebookShareButton, FacebookIcon,
  TwitterShareButton, TwitterIcon,
  EmailShareButton, EmailIcon,
} from 'react-share'

// components
import ShareLinks from '../components/ShareLinks'
import PingHeader from '../components/PingHeader'
import { Button } from '../components/Button'
import img from '../assets/apex-ping.jpg'

const PromoPage = styled.div`
  display: block;
  height: 100%;

  .container {
    max-width: 620px;
    margin: 0 auto;
    padding-top: 35px;
    padding-left: 20px;
    padding-right: 20px;
    color: #3B3E48;
  }

  h2 {
    font-size: 20px;
    font-weight: normal;
  }

  ul {
    font-size: 14px;
    line-height: 22px;
    list-style: disc;
    padding-left: 18px;
  }

  div[class*="ShareLinks"] {
    margin-top: 40px;
    margin-bottom: 40px;
  }
`

const Desc = styled.p`
  color: #3B3E48;
  font-size: 16px;
  line-height: 1.6;
  margin-top: 0;
  margin-bottom: 25px;
`

const Inline = styled.div`
  display: flex;
  div {
    margin-right: 2px;
    cursor: pointer;
  }
`

console.log(useSiteData);

export default () => {
  const {
    title, desc, url, body, buttonText,
  } = useSiteData()

  return (
    <PromoPage>
      <Head>
        <title>{title}</title>
        <meta name="description" content={desc} />
        <meta name="keywords" content="FPS, Apex, COD MW2, twitch, jgatjens, League of Legends, Games" />
        <meta name="author" content="jgatjens" />
        <meta property="og:type" content="website" />
        <meta property="og:title" content={title} />
        <meta property="og:description" content={desc} />
        <meta property="og:image" content={img} />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@jgatjens" />
        <meta name="twitter:creator" content="@jgatjens" />
        <meta name="twitter:image" content={img} />
      </Head>
      <PingHeader title={title} />
      <div className="container">
        <Inline>
          <FacebookShareButton windowWidth={560}
            windowHeight={745}
            quote={title}
            url={`https://jgatjens.com/${url}/`}>
            <FacebookIcon size={32} round />
          </FacebookShareButton>
          <TwitterShareButton title={title}
            hashtags={['ea', 'battle.net', 'league-of-legends', 'Steam', 'etc']}
            url={`https://jgatjens.com/${url}/`}>
            <TwitterIcon size={32} round />
          </TwitterShareButton>

          <EmailShareButton url={`https://jgatjens.com/${url}/`} subject={title} openWindow>
            <EmailIcon size={32} round />
          </EmailShareButton>
        </Inline>
        <br />
        <Desc>{body.desc1}</Desc>
        <h2>{body.title}</h2>
        <Desc>{body.desc2}</Desc>
        <Button active href="https://secure.avaaz.org/es/community_petitions/EA_La_igualdad_de_PING" target="_blank">{buttonText}</Button>

        <ShareLinks />
      </div>
    </PromoPage>
  )
}
