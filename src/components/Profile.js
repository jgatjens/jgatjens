import React from 'react'
import styled from 'styled-components'
import picture from '../assets/jgatjens.jpg'

const Logo = styled.img`
  margin: 0 auto;
  background-color: #F2F2F2;
  display: block;
  width: 200px;
  height: 200px;
`

const Title = styled.h1`
  margin: 0.67em 0;
  color: #3B3E48;
  font-size: 22px;
  font-weight: 500;
  word-spacing: 2px;

  small {
    padding-top: 5px;
    display: block;
    font-weight: 200;
    color: #777777;
    font-size: 13px;
  }
`

const Picture = styled.div`
  text-align: center;
`

export default () => (
  <Picture>
    <Logo src={picture} alt="Jairo Gatjens" />
    <Title>Jairo Gätjens <small>Heredia, Costa Rica</small></Title>
  </Picture>
)