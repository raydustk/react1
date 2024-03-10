import React from 'react';

const  Header = ({titulo}) => {
    return (
        <header className='cabecera'>
            <h1>{titulo}</h1>
        </header>
    )
}

export default Header