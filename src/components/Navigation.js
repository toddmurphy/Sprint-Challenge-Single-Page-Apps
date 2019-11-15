import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const NavigationContainer = styled.div`
    display: flex;
    justify-content: space-evenly;
    text-decoration: none;
`


const Navigation = () => {
    return (
        <NavigationContainer>
            <Link style={{ textDecoration: 'none', color: 'salmon' }} to='/Welcome' >Welcome Page</Link>
            <Link style={{ textDecoration: 'none', color: 'salmon' }} to='/Characters' >Character Page</Link>
        </NavigationContainer >
    );
};

export default Navigation;