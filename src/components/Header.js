import React from "react";
import Navigation from './Navigation'

export default function Header() {
  return (
    <header className="ui centered">
      <h1 className="ui center">Rick &amp; Morty Fan Page</h1>
      <Navigation />
    </header>
  );
}
