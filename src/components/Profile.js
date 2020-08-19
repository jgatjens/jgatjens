import React from 'react'
import styled from 'styled-components'
import picture from '../assets/jgatjens.jpg'

const Logo = styled.img`
  margin: 0 auto;
  background-color: #F2F2F2;
  display: block;
  width: 142px;
  height: 142px;
`

const Title = styled.h1`
  margin: 20px 0 0 0;
  color: #020218;
  font-size: 34px;
  font-weight: 600;
  word-spacing: 2px;

  small {
    padding-top: 10px;
    display: block;
    font-weight: 500;
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