import styled from 'styled-components';
import Footer from '../Footer';
import Header from '../Header';

const Layout: React.FC<{ children?: React.ReactNode }> = ({ children }) => {
  return (
    <>
      <Header />
      <MainContainer>{children}</MainContainer>
      <Footer />
    </>
  );
};

export default Layout;

const MainContainer = styled.main``;
