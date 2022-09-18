import React, { useEffect, useMemo, useState } from 'react';
import { useRouter } from 'next/router';

import { Wrapper } from './styles';
import SignIn from './SignIn';
import SignUp from './SignUp';

export type IStepActive = 'signIn' | 'signUp';

const Login: React.FC = () => {
  const { query } = useRouter();
  const [cardActive, setCardActive] = useState<IStepActive>('signIn');

  useEffect(() => {
    if (query?.cardActive) setCardActive(query?.cardActive as IStepActive);
  }, [query]);

  const Cards = useMemo(
    () => ({
      signIn: () => <SignIn setCardActive={setCardActive} />,
      signUp: () => <SignUp setCardActive={setCardActive} />,
    }),
    []
  );

  return <Wrapper>{Cards[cardActive]()}</Wrapper>;
};

export default Login;
