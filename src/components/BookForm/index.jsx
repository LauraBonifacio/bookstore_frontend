import React, { useState, useEffect } from "react";
import {
  TextField,
  Select,
  FormControl,
  Box,
  Chip,
  OutlinedInput,
  MenuItem,
} from "@material-ui/core";
import { MobileDatePicker } from '@mui/x-date-pickers/MobileDatePicker';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';

import {
  AuthorsLabel,
  Container,
  FormTitle,
  InputContainer,
  SubmitButton,
} from "./styles";

const BookForm = () => {
  const [title, setTitle] = useState('');
  const [subtitle, setSubtitle] = useState('');
  const [authors, setAuthors] = useState([]);
  const [publicationDate, setPublicationDate] = useState('');
  const [fetchedAuthors, setFetchedAuthors] = useState([]);

  useEffect(() => {
    fetch('http://localhost:3001/authors')
      .then((response) => response.json())
      .then((data) => setFetchedAuthors(data));
  }, []);

  const submit = async () => {
    console.log({ title, subtitle, authors, publicationDate });
    const parsedBirthDate = publicationDate.toISOString().split('T')[0];

    await fetch('http://localhost:3001/books', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        titulo: title,
        subtitulo: subtitle,
        data_publicacao: parsedBirthDate,
        idsAutores: authors.map((author) => author.idAutor),
      }),
    });
  }

  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <Container>
        <FormTitle>Cadastrar livro</FormTitle>
        <InputContainer>
          <TextField
            label="Título"
            variant="outlined"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            fullWidth
          />
        </InputContainer>
        <InputContainer>
          <TextField
            label="Subtítulo"
            variant="outlined"
            value={subtitle}
            onChange={(e) => setSubtitle(e.target.value)}
            fullWidth
          />
        </InputContainer>
        <InputContainer>
          <MobileDatePicker
            label="Data de Publicação"
            inputFormat="DD/MM/YYYY"
            value={publicationDate}
            onChange={(value) => setPublicationDate(value)}
            renderInput={(params) => <TextField fullWidth variant="outlined" {...params} />}
          />
        </InputContainer>
        <FormControl>
          <AuthorsLabel>Autores</AuthorsLabel>
          <Select
            multiple
            value={authors}
            onChange={(e) => setAuthors(e.target.value)}
            input={<OutlinedInput sx={{ ml: 2 }} label="Autores" />}
            renderValue={(selected) => (
              <Box sx={{ display: "flex", flexWrap: "wrap", gap: 0.5 }}>
                {selected.map((value) => (
                  <Chip key={value.idAutor} label={value.nome} />
                ))}
              </Box>
            )}
          >
            {!fetchedAuthors.length && <MenuItem disabled>Cadastre um autor</MenuItem>}
            {fetchedAuthors.map((author) => (
              <MenuItem key={author.idAutor} value={author}>
                {author.nome}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
        <SubmitButton type="button" onClick={submit}>
          Cadastrar
        </SubmitButton>
      </Container >
    </LocalizationProvider>
  );
};

export default BookForm;
