import React from 'react'
import styled from 'styled-components'
import { Head } from 'react-static'

// components
import ShareLinks from '../components/ShareLinks'
import PromoHeader from '../components/PromoHeader'
import Schedule from '../components/Schedule'
import img from '../assets/share-promo.png'

const PromoPage = styled.div`
  display: block;
  height: 100%;

  .container {
    max-width: 440px;
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
    margin-top: 30px;
    text-align: left;
  }
`

const Desc = styled.p`
  color: #3B3E48;
  font-size: 16px;
  line-height: 1.4;
  margin-top: 0;
  margin-bottom: 25px;
`

export default () => (
  <PromoPage>
    <Head>
      <title>Twitch Promo - Jairo Gätjens</title>
      <meta name="description" content="Estaremos sorteando un skin de League of legends cada semana en el stream de los viernes a las 9:00 pm (-06  CST)" />
      <meta name="keywords" content="Promo, twitch, jgatjens, Lol, League, Legends, Games" />
      <meta name="author" content="Jairo Gätjens" />
      <meta property="og:type" content="website" />
      <meta property="og:title" content="Twitch Promo - Jairo Gätjens" />
      <meta property="og:description" content="Estaremos sorteando un skin de League of legends cada semana en el stream de los viernes a las 9:00 pm (-06  CST)" />
      <meta property="og:image" content={img} />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:site" content="@jgatjens" />
      <meta name="twitter:creator" content="@jgatjens" />
      <meta name="twitter:title" content="Twitch Promo - Jairo Gätjens" />
      <meta name="twitter:description" content="Estaremos sorteando un skin de League of legends cada semana en el stream de los viernes a las 9:00 pm (-06  CST)" />
      <meta name="twitter:image" content={img} /> 
    </Head>

    <PromoHeader />

    <div className="container">
        <Desc>Estaremos sorteando un skin de League of legends cada semana.</Desc>

        <Schedule />

        <h2>Reglas del concurso</h2>
        <ul>
            <li>Ser follower del stream <a href="https://www.twitch.tv/jgatjens" target="_blank">https://www.twitch.tv/jgatjens</a>.</li>
            <li>Se hara una rifa entre los followers.</li>
            <li>Estar presente el dia del sorteo.</li>
            <li>Dudas por discord o bien los días del stream.</li>
            <li>Al final del stream se dara a conocer el ganador.</li>
            <li>El ganador debera tener cuenta de League of legends en LAN para resivir el skin.</li>
        </ul>
        <ShareLinks />
    </div>
  </PromoPage>
)
