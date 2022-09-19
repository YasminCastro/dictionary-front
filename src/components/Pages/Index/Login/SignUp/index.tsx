import { useState } from 'react';
import axios from 'axios';
import { Button, TextField } from '@mui/material';

import { IStepActive } from '..';

import { ErrorMessage } from '@/styles/Global/global';
import { Container } from './styles';

interface IProps {
  setCardActive: React.Dispatch<React.SetStateAction<IStepActive>>;
}

const SignUp: React.FC<IProps> = ({ setCardActive }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const handleSubmit = async (e: any) => {
    e.preventDefault();

    try {
      await axios.post('/api/signup', {
        email,
        password,
        name,
      });

      setErrorMessage('');

      setCardActive('signIn');
    } catch (error: any) {
      console.log(error);
      const errorMessageRaws = error.response.data.message;
      if (errorMessageRaws.includes('This email already exists')) {
        setErrorMessage('Email já cadastrado');
      } else if (errorMessageRaws.includes('password must be longer')) {
        setErrorMessage('Senha deve conter mais de 5 caracteres.');
      } else if (errorMessageRaws.includes('name must be longer')) {
        setErrorMessage('Nome deve conter mais de 3 caracteres.');
      } else {
        setErrorMessage(
          'Ocorreu um erro no cadastro, tente novamente mais tarde.'
        );
      }
    }
  };

  return (
    <Container>
      <form onSubmit={handleSubmit}>
        <TextField
          label="Nome"
          variant="filled"
          type="name"
          required
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <TextField
          label="Email"
          variant="filled"
          type="email"
          required
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <TextField
          label="Senha"
          variant="filled"
          type="password"
          required
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        {errorMessage && (
          <ErrorMessage className="onSubmitErrorMessage">
            {errorMessage}
          </ErrorMessage>
        )}
        <Button type="submit" variant="contained" color="primary">
          Cadastre-se
        </Button>
      </form>

      <Button
        onClick={() => {
          setCardActive('signIn');
        }}
      >
        Fazer login
      </Button>
    </Container>
  );
};

export default SignUp;
