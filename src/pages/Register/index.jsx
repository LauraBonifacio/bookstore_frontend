import React from 'react';
import BookForm from '../../components/BookForm';
import AuthorForm from '../../components/AuthorForm';

import { Container } from './styles';

const Register = () => {
  return (
    <Container>
      <AuthorForm />
      <BookForm />
    </Container>
  );
}

export default Register;