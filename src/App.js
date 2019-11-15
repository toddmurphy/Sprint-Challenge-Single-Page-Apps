import React from "react";
import { Route } from 'react-router-dom';
import Header from "./components/Header.js";
import CharacterList from './components/CharacterList';
import WelcomePage from "./components/WelcomePage";
import styled from 'styled-components';



export default function App() {
  return (
    <main>
      <Header />
      <WelcomePage />
      <Route exact path={'/'} component={WelcomePage} />
      <Route exact path={'/Characters'} component={CharacterList} />
    </main>
  );
}
