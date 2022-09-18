import { createContext, useEffect, useState } from 'react';
import { setCookie, parseCookies } from 'nookies';
import { decode } from 'jsonwebtoken';
import Router from 'next/router';
import axios from 'axios';
import { CONFIG } from '@/config';
import api from '@/backend/api';

type SignInData = {
  email: string;
  password: string;
};

type User = {
  id: string;
  name: string;
  email: string;
};

type AuthContextType = {
  isAuth: boolean;
  user: User | null;
  signIn: (data: SignInData) => Promise<void>;
};

export const AuthContext = createContext({} as AuthContextType);

export function AuthProvider({ children }: any) {
  const [user, setUser] = useState<User | null>(null);
  const isAuth = !!user;

  useEffect(() => {
    const { 'dictionary.token': token } = parseCookies();
    if (token) {
      const userPayload = decode(token, { json: true });

      if (userPayload) {
        setUser({
          id: userPayload._id,
          email: userPayload.email,
          name: userPayload.name,
        });
      }
    }
  }, []);

  async function signIn({ email, password }: SignInData) {
    const { data } = await axios.post(`${CONFIG.BACKEND_URL}/auth/signin`, {
      email,
      password,
    });

    const token = data.token;

    setCookie(undefined, 'dictionary.token', token, { maxAge: 60 * 60 * 1 }); //1 hour

    api.defaults.headers.common['Authorization'] = `Bearer ${token}`;

    setUser({ id: data.id, name: data.name, email });

    Router.push('/dashboard');
  }

  return (
    <AuthContext.Provider value={{ isAuth, signIn, user }}>
      {children}
    </AuthContext.Provider>
  );
}
