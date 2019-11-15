import React from 'react';
import { Link } from 'react-router-dom';


const Navigation = () => {
    return (
        <div>
            <Link to='/Welcome' >Welcome Page</Link>
            <Link to='/Characters' >Character Page</Link>
        </div>
    );
};

export default Navigation;