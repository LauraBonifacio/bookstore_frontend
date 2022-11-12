import React, { useState } from "react";
import { useEffect } from "react";
import ItemCard from "../../components/ItemCard";

const List = () => {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3001/books")
      .then((response) => response.json())
      .then((data) => setBooks(data));
  }, []);

  return (
    <>
      <div className="flex justify-center">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-8">
          {books
            .map((book) => (
              <ItemCard
                id={book.idLivro}
                key={book.idLivro}
                title={book.titulo}
                subtitle={book.subtitulo}
                publicationDate={book.data_publicacao}
                authors={book.autores}
                className="col-span-1"
              />
            ))}
        </div>
      </div>
    </>
  );
};

export default List;
