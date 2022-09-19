import { Button, TextField } from '@mui/material';
import { IStepActive } from '..';
import { Container } from './styles';
import { useContext, useState } from 'react';
import { ErrorMessage } from '@/styles/Global/global';
import { AuthContext } from '@/providers/AuthContext';

interface IProps {
  setCardActive: React.Dispatch<React.SetStateAction<IStepActive>>;
}

const SignIn: React.FC<IProps> = ({ setCardActive }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const { signIn } = useContext(AuthContext);

  const handleSubmit = async (e: any) => {
    e.preventDefault();

    try {
      await signIn({ email, password });

      setCardActive('signIn');
    } catch (error: any) {
      const errorMessageRaws = error.response.data.message;
      if (errorMessageRaws.includes('Email not found')) {
        setErrorMessage('Usuário não encontrado');
      } else if (errorMessageRaws.includes('Password is not matching')) {
        setErrorMessage('Senha incorreta.');
      } else {
        setErrorMessage(
          'Ocorreu um erro no login, tente novamente mais tarde.'
        );
      }
    }
  };

  return (
    <Container>
      <form onSubmit={handleSubmit}>
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
          Entrar
        </Button>
      </form>

      <Button
        onClick={() => {
          setCardActive('signUp');
        }}
      >
        Criar nova conta
      </Button>
    </Container>
  );
};

export default SignIn;
