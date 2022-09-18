import Layout from '@/components/Global/Layout';
import { PageContainer, PageWrapper } from '@/styles/Page';
import type { NextPage } from 'next';

const Home: NextPage = () => {
  return (
    <>
      <Layout>
        <PageWrapper>
          <PageContainer></PageContainer>
        </PageWrapper>
      </Layout>
    </>
  );
};

export default Home;
