import Link from 'next/link';
import {
  HeaderContainer,
  HeaderLeft,
  HeaderRight,
  HeaderWrapper,
} from './styles';
import Image from 'next/image';
import { destroyCookie } from 'nookies';
import Router from 'next/router';

const Header: React.FC<{ isSigInPage?: boolean }> = ({ isSigInPage }) => {
  if (!isSigInPage) {
    isSigInPage = false;
  }

  async function handleLogout() {
    destroyCookie(null, 'dictionary.token');

    Router.push('/');
  }

  return (
    <HeaderWrapper>
      <HeaderContainer>
        <HeaderLeft>
          <Link href="/" passHref>
            <a>
              <Image
                src="/icons/global/dictionary.png"
                alt="Logo dictionary"
                width={54}
                height={54}
                quality={100}
                layout="fixed"
              />
              Dictionary
            </a>
          </Link>
        </HeaderLeft>
        <HeaderRight>
          {!isSigInPage && <button onClick={handleLogout}>Sair</button>}
        </HeaderRight>
      </HeaderContainer>
    </HeaderWrapper>
  );
};

export default Header;
