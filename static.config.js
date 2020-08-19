// import axios from 'axios'
import React, { Component } from "react";
import { ServerStyleSheet } from "styled-components";

export default {
  siteRoot: "https://jgatjens.com/",
  getSiteData: () => ({
    title: "Jairo Gätjens - Website",
  }),
  // eslint-disable-next-line arrow-body-style
  getRoutes: () => {
    return [
      {
        path: "/",
        component: "src/containers/Home",
      },
      {
        title: "jgatjens - twitch promo LoL",
        path: "/league-of-legends-free-skin/",
        component: "src/containers/Promo",
      },
      {
        title: "jgatjens - Merecemos un mejor ping",
        path: "/we-deserve-better-ping/",
        component: "src/containers/Ping",
        getData: () => ({
          title: "Merecemos un mejor PING",
          desc: `La igualdad de PING es la lucha por otorgar derechos fundamentales a millones 
            de jugadores que actualmente no pueden experimentar sus juegos favoritos con una 
            latencia menor a los 100 ms`,
          url: "merecemos-un-mejor-ping",
          body: {
            desc1: `
              La igualdad de PING es la lucha por otorgar derechos fundamentales a millones de
              jugadores que actualmente no pueden experimentar sus juegos favoritos con una latencia
              menor a los 100 ms, Queremos formular una pregunta simple:
            `,
            title: `
              Por que EA, Steam, Battle.net, etc.. tienen servers en Sur y Norte America pero
              aqui en America central NO?
            `,
            desc2: `
              La comunidad gamer latina alza su voz por esta causa, la desigualdad de PING
              equivale al estancamiento del progreso de nuestra comunidad a nivel competitivo
              y casual. Ayudanos con un click y tu firma para juntos lograr un cambio.
            `,
          },
          buttonText: "Necesitamos tu ayuda",
        }),
      },
      {
        is404: true,
        component: "src/containers/404",
      },
    ];
  },
  renderToHtml: (render, Comp, meta) => {
    const sheet = new ServerStyleSheet();
    const html = render(sheet.collectStyles(<Comp />));
    meta.styleTags = sheet.getStyleElement();
    return html;
  },
  Document: class CustomHtml extends Component {
    render() {
      const { Html, Head, Body, children, renderMeta } = this.props;

      return (
        <Html>
          <Head>
            <meta charSet="UTF-8" />
            <meta
              name="viewport"
              content="width=device-width, initial-scale=1"
            />
            <link
              rel="stylesheet"
              href="https://cdnjs.cloudflare.com/ajax/libs/normalize/3.0.3/normalize.css"
              type="text/css"
            />
            <link
              href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;600&display=swap"
              rel="stylesheet"
            />
            {renderMeta.styleTags}
          </Head>
          <Body>{children}</Body>
        </Html>
      );
    }
  },
};
