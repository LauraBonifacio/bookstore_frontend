import React, { useState } from "react";
import {
  TextField,
  Select,
  FormControl,
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

const AuthorForm = () => {
  const [name, setName] = useState('');
  const [birthDate, setBirthDate] = useState('');
  const [gender, setGender] = useState('');

  const submit = async () => {
    const parsedBirthDate = birthDate.toISOString().split('T')[0];

    await fetch('http://localhost:3001/authors', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        nome: name,
        data_de_nascimento: parsedBirthDate,
        sexo: gender,
      }),
    });

    window.location.reload();
  }

  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <Container>
        <FormTitle>Cadastrar autor</FormTitle>
        <InputContainer>
          <TextField
            label="Nome"
            variant="outlined"
            value={name}
            onChange={(e) => setName(e.target.value)}
            fullWidth
          />
        </InputContainer>
        <InputContainer>
          <MobileDatePicker
            label="Data de Nascimento"
            inputFormat="DD/MM/YYYY"
            value={birthDate}
            onChange={(value) => setBirthDate(value)}
            renderInput={(params) => <TextField fullWidth variant="outlined" {...params} />}
          />
        </InputContainer>
        <FormControl fullWidth>
          <AuthorsLabel>Sexo</AuthorsLabel>
          <Select
            variant="outlined"
            value={gender}
            label="Sexo"
            onChange={(e) => setGender(e.target.value)}
          >
            <MenuItem value='m'>Masculino</MenuItem>
            <MenuItem value='f'>Feminino</MenuItem>
            <MenuItem value='o'>Outro</MenuItem>
          </Select>
        </FormControl>
        <SubmitButton type="button" onClick={submit}>
          Cadastrar
        </SubmitButton>
      </Container>
    </LocalizationProvider>
  );
};

export default AuthorForm;
