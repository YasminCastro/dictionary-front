import Link from 'next/link';
import {
  HeaderContainer,
  HeaderLeft,
  HeaderRight,
  HeaderWrapper,
} from './styles';
import Image from 'next/image';

const Header: React.FC = () => {
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
            </a>
          </Link>
        </HeaderLeft>
        <HeaderRight></HeaderRight>
      </HeaderContainer>
    </HeaderWrapper>
  );
};

export default Header;
