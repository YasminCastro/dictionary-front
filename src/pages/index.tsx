import Layout from '@/components/Global/Layout';
import SEO from '@/components/Global/SEO';
import Login from '@/components/Pages/Index/Login';
import { PageContainer, PageWrapper } from '@/styles/Page';
import type { NextPage } from 'next';

const Home: NextPage = () => {
  return (
    <>
      <SEO title="Entrar" />
      <Layout isSigInPage={true}>
        <PageWrapper>
          <PageContainer>
            <h1>Dictionary</h1>
            <Login />
          </PageContainer>
        </PageWrapper>
      </Layout>
    </>
  );
};

export default Home;
