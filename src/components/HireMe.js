import React from 'react'
import styled from 'styled-components'

const HireMe = styled.a`
  height: 48px;
  width: 240px;
  border-radius: 6px;
  line-height: 48px;
  border-color: #020218;
  color: #020218;
  padding: 0;
  background-color: white;
  text-transform: uppercase;
  border-width: 2px;
  border-style: solid;
  font-weight: 600;
  font-size: 17px;
  margin-top: 30px;
  display: block;
  text-align: center;
  text-decoration: none;

  &:hover {
    color: white;
    background-color: #FF2F4A;
    border-color: #FFCBD1;
  }
`

export default () => (
  <HireMe href="mailto:jgatjens@gmail.com">hire me</HireMe>
)