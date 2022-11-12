import React from 'react';
import { Link } from "react-router-dom";

import { Container, HeaderItem } from './styles';

const Header = () => {
  return (
    <Container>
      <h1>Listagem e Cadastro de Livros</h1>
      <div className="flex">
        <HeaderItem>
          <Link to="/">Lista</Link>
        </HeaderItem>
        <HeaderItem className="ml-8">
          <Link to="/register">Cadastrar</Link>
        </HeaderItem>
      </div>
    </Container>
  );
}

export default Header;