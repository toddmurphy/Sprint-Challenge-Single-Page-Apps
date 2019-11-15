import React from "react";


export default function CharacterCard(props) {
  console.log(props)
  return (
    <div>
      <p>{props.character.name}</p>
      <p>{props.character.gender}</p>
      <p>{props.character.status}</p>
    </div>
  )
}
