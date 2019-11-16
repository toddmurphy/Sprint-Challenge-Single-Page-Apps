import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const NavigationContainer = styled.div`
    display: flex;
    justify-content: space-evenly;
    text-decoration: none;
`
const LinkStyle = styled(Link)`
    text-decoration: none;
    color: salmon;
`


const Navigation = () => {
    return (
        <NavigationContainer>
            <LinkStyle to='/Welcome' >Welcome Page</LinkStyle>
            <LinkStyle to='/Characters' >Character Page</LinkStyle>
        </NavigationContainer >
    );
};

export default Navigation;