import React, { useEffect, useMemo, useState } from 'react';
import { useRouter } from 'next/router';

// import CadastroCard from './CadastroCard';

import { Wrapper } from './styles';
import LoginCard from '../LoginCard';

export type IStepActive = 'ativo';

const Login: React.FC = () => {
  const { query } = useRouter();
  const [cardActive, setCardActive] = useState<IStepActive>('ativo');

  useEffect(() => {
    if (query?.cardActive) setCardActive(query?.cardActive as IStepActive);
  }, [query]);

  const Cards = useMemo(
    () => ({
      ativo: () => <LoginCard setCardActive={setCardActive} />,
      // cadastro: () => <CadastroCard setCardActive={setCardActive} />,
    }),
    []
  );

  return <Wrapper>{Cards[cardActive]()}</Wrapper>;
};

export default Login;
