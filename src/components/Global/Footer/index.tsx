import Link from 'next/link';
import { FooterWrapper, FooterContainer, SocialMediaContainer } from './styles';
import Image from 'next/image';

const Footer: React.FC = () => {
  return (
    <FooterWrapper>
      <FooterContainer>
        <p>Copyright © 2022 Yasmin Castro</p>

        <SocialMediaContainer>
          <Link
            href="https://www.linkedin.com/in/yasmin-castro-b579451b8"
            passHref
          >
            <a target="_blank">
              <Image
                src="/icons/global/linkedin.svg"
                alt="Ícone LinkedIn"
                width={20}
                height={20}
              />
            </a>
          </Link>
          <Link href="https://github.com/YasminCastro" passHref>
            <a target="_blank">
              <Image
                src="/icons/global/github.svg"
                alt="Ícone Github"
                width={20}
                height={20}
              />
            </a>
          </Link>
        </SocialMediaContainer>
      </FooterContainer>
    </FooterWrapper>
  );
};

export default Footer;
