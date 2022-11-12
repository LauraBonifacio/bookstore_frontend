import React from 'react';

import { Container } from './styles';

const ItemCard = ({ id, title, subtitle, publicationDate, authors }) => {
  const parsedDate = new Date(publicationDate).toLocaleDateString('pt-BR');

  return (
    <Container>
      <div>
        <strong>Título: </strong> {title}
      </div>
      <div>
        <strong>Subtítulo: </strong> {subtitle}
      </div>
      <div>
        <strong>Data de publicação:</strong> {parsedDate}
      </div>
      <div>
        <strong>Autores: </strong>
        {authors.length && <span>{authors.map(author => author.nome).join(", ")}</span>}
      </div>
    </Container>
  );
}

export default ItemCard;