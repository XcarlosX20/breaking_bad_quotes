/** @jsxImportSource @emotion/react */
import React, { Fragment,useState, useEffect } from 'react';
import styled from '@emotion/styled';
import Frase from './Components/Frase';
import logo from './logo.svg';
const Header = styled.header`
display: flex;
justify-content: center;
padding: 1rem;
`;
const Contenedor = styled.div`
display: flex;
align-items: center;
padding-top: 5rem;
flex-direction: column;
`;
const Boton = styled.div`
background: -webkit-linear-gradient(top left, #007d35 0%,#007d35 40%, #0f574e 100%);
background-size: 300px;
font-family: Arial, Helvetica, sans-serif;
color: #fff;
margin-top: 3rem;
padding: 1rem 3rem;
font-size: 2rem;
cursor: pointer;
border: 2px solid black;
`;
const Footer = styled.footer`
width: 100%;
margin-top: 2rem;
text-align: center;
font-size:1rem;
;
`;
const App = () => {
  const año = new Date().getFullYear();
  const [frase, setFrase] = useState({});
  const consultarApi = async () => {
   const API = await fetch('https://breaking-bad-quotes.herokuapp.com/v1/quotes');
   const frase = await API.json();
   setFrase(frase[0]);
  }
  useEffect(() => {
    consultarApi();
    
  }, []);
  return ( 
  <Fragment>
    <Header>
      <img src={logo} alt="logo-bb"/>
    </Header>
    <Contenedor>
      <Frase frase={frase}/>
      <Boton onClick={() => consultarApi()}>Obtener Frase</Boton>
      
    </Contenedor>
    <Footer><p>©{año} Carlos Sierra. Todos los derechos reservados</p></Footer>
  </Fragment> );
  
}
 
export default App;