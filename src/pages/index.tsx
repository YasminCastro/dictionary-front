import Layout from '@/components/Global/Layout';
import Login from '@/components/Pages/Index/Login';
import { PageContainer, PageWrapper } from '@/styles/Page';
import type { NextPage } from 'next';

const Home: NextPage = () => {
  return (
    <>
      <Layout>
        <PageWrapper>
          <PageContainer>
            <Login />
          </PageContainer>
        </PageWrapper>
      </Layout>
    </>
  );
};

export default Home;
