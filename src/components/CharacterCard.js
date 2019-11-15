import React from "react";

export default function CharacterCard(props) {
  return (
    <div>
      <p>{props.characters.name}</p>
      <p>{props.characters.gender}</p>
      <p>{props.characters.status}</p>
    </div>
  )
}
