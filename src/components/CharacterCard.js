import React from "react";
import styled from 'styled-components';

const CardContainer = styled.div`
  border: 2px solid red;
  display: flex;
  padding: 1% 1%;
  margin: 2% 0;  
`

const CardItem = styled.p`
  border: 1px solid lightgray;
  border-radius: 5px;
  margin: 0 5%;
`


export default function CharacterCard(props) {
  console.log(props)
  return (
    <CardContainer>
      <CardItem>{props.character.name}</CardItem>
      <CardItem>{props.character.gender}</CardItem>
      <CardItem>{props.character.species}</CardItem>
      <CardItem>{props.character.status}</CardItem>
      <CardItem>{props.character.location.name}</CardItem>
    </CardContainer>
  )
}
