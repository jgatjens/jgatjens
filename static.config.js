// import axios from 'axios'
import React, { Component } from 'react'
import { ServerStyleSheet } from 'styled-components'

export default {
  siteRoot: '/',
  getSiteData: () => ({
    title: 'Jairo Gätjens - Website',
  }),
  getRoutes: () => {
    return [
      {
        path: '/',
        component: 'src/containers/Home',
      },
      {
        title: 'jgatjens - twitch promo LoL',
        path: '/league-of-legends-free-skin/',
        component: 'src/containers/Promo',
      },
      {
        is404: true,
        component: 'src/containers/404',
      },
    ]
  },
  renderToHtml: (render, Comp, meta) => {
    const sheet = new ServerStyleSheet()
    const html = render(sheet.collectStyles(<Comp />))
    meta.styleTags = sheet.getStyleElement()
    return html
  },
  Document: class CustomHtml extends Component {
    render () {
      const {
        Html, Head, Body, children, renderMeta,
      } = this.props

      return (
        <Html>
          <Head>
            <meta charSet="UTF-8" />
            <meta name="viewport" content="width=device-width, initial-scale=1" />

            <link rel="icon" href="favicon.ico" type="image/x-icon"/>

            <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/normalize/3.0.3/normalize.css" type="text/css" />
            <link rel="stylesheet" href="http://fonts.googleapis.com/css?family=Roboto:300,400,500,700" type="text/css" />

            {renderMeta.styleTags}

          </Head>
          <Body>{children}</Body>
        </Html>
      )
    }
  },
}
