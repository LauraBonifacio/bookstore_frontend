import styled from "styled-components";
import { InputLabel } from "@material-ui/core";

export const Container = styled.form`
  background: #fff;
  max-width: 500px;
  border-radius: 15px;
  padding: 40px;
  border: 1px solid #d1d1d1;
  box-shadow: 0px 0px 16px 1px rgba(0, 0, 0, 0.15);
  width: 100%;
  display: grid;
  gap: 15px;
`;

export const InputContainer = styled.div`
  display: block;
  width: 100%;
`;

export const AuthorsLabel = styled(InputLabel)`
  display: block;
  margin-left: 15px;
  margin-top: -3px;
`;

export const FormTitle = styled.h1`
  font-size: 28px;
`;

export const Input = styled.input`
  display: block;
  width: 100%;

  padding: 10px 20px;
  border: 1px solid #d1d1d1;
  border-radius: 10px;
  margin-top: 5px;
  margin-bottom: 20px;
`;

export const SubmitButton = styled.button`
  display: block;
  width: 100%;

  padding: 10px 20px;
  color: #2c3e50;
  border: 1px solid #2c3e50;
  border-radius: 10px;

  transition: 200ms;
  &:hover {
    color: white;
    background-color: #2c3e50;
  }
`;
