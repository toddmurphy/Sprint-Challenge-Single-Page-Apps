import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const NavigationContainer = styled.div`
    border: 2px solid red;
    display: flex;
    text-decoration: none;
`


const Navigation = () => {
    return (
        <NavigationContainer>
            <Link to='/Welcome' >Welcome Page</Link>
            <Link to='/Characters' >Character Page</Link>
        </NavigationContainer>
    );
};

export default Navigation;