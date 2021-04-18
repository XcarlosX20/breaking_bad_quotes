import React from 'react';
import styled from '@emotion/styled';
const ContenedorFrase = styled.div`
padding: 3rem;
border-radius: .5rem;
background-color: #fff;
width: 0px;

h1{ font-size: 3rem;
    padding-left: 4rem; 
    position: relative;
    
    
}
p{
    color: #666;
    font-size: 1.4rem;
    font-weight: bold;
    margin-top: 1rem;
    text-align: right;
}
`;
const Frase = ({frase}) => {
    console.log(frase);
    return ( 
        <ContenedorFrase>
            <h1>{frase.quote}</h1>
            <p>{frase.author}</p>
        </ContenedorFrase>
     );
}
 
export default Frase;