import React from "react";
import styled from 'styled-components';

const CardContainer = styled.div`
  border: 2px solid lightgray;
  display: flex;
  padding: 1% 1%;
  margin: 2% 0; 
  border-radius: 5px; 
`

const CardItem = styled.p`
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
