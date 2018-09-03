import React from 'react'
import { Router } from 'react-static'
import { injectGlobal } from 'styled-components'
import styledNormalize from 'styled-normalize'
import { hot } from 'react-hot-loader'
//
import Routes from 'react-static-routes'

injectGlobal`
  ${styledNormalize}
  
  body, html {
    font-family: 'Roboto';
    font-size: 16px;
    margin: 0;
    padding: 0;
    height: 100%;
  }

  #root {
    height: 100%;
  }
`

const App = () => (
  <Router>
    <Routes />
  </Router>
)

export default hot(module)(App)
