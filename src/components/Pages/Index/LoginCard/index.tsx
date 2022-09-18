import { Button, TextField } from '@mui/material';
import { IStepActive } from '../Login';
import { Container } from './styles';
import axios from 'axios';
import { useState } from 'react';

interface IProps {
  setCardActive: React.Dispatch<React.SetStateAction<IStepActive>>;
}

interface ILogin {
  email: string;
  password: string;
}

const LoginCard: React.FC<IProps> = ({ setCardActive }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    console.log(password, email);

    try {
      const response = await axios.post('/api/signin', {
        email,
        password,
      });
    } catch (error) {}
  };

  return (
    <Container>
      <h2>Entrar</h2>

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
          label="Password"
          variant="filled"
          type="password"
          required
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <Button type="submit" variant="contained" color="primary">
          Signin
        </Button>
      </form>
    </Container>
  );
};

export default LoginCard;
