import styled from 'styled-components';
import Footer from '../Footer';
import Header from '../Header';

const Layout: React.FC<{
  children?: React.ReactNode;
  isSigInPage?: boolean;
}> = ({ children, isSigInPage }) => {
  return (
    <>
      <Header isSigInPage={isSigInPage} />
      <MainContainer>{children}</MainContainer>
      <Footer />
    </>
  );
};

export default Layout;

const MainContainer = styled.main``;
