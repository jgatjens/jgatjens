import React from 'react'
import styled, { css } from 'styled-components'

const SkillList = styled.div`
  padding-top: 10px;
  text-align: center;
`

const Button = styled.a`
  display: inline-block;
  font-size: 15px;
  border-radius: 20px;
  padding: 7px 18px;
  border: 1px solid #CDCFD4;
  margin: 0 2px 10px;
  font-weight: 200;
  color: #777777;
  text-decoration: none;
  text-transform: uppercase;

  ${props => props.active && css`
    background-color: #3B3E49;
    border-color: #3B3E49;
    color: white;
  `}
`

export default () => (
  <SkillList>
		<Button href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/" target="_blank">Javascript</Button>
		<Button href="https://nodejs.org/" target="_blank">Nodejs</Button>
		<Button href="https://facebook.github.io/react-native/" target="_blank">Mobile</Button>
		<Button active href="https://www.linkedin.com/in/jgatjens?trk=hp-identity-photo#background-skills-container" target="_blank">+10</Button>
  </SkillList>
)