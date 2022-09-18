import { useContext, useEffect } from 'react';
import type { GetServerSideProps, NextPage } from 'next';
import { parseCookies } from 'nookies';

import { getAPIClient } from '@/backend/axios';
import { AuthContext } from '@/providers/AuthContext';

import { PageContainer, PageWrapper } from '@/styles/Page/dashboard';

import Layout from '@/components/Global/Layout';
import DashboardContainer from '@/components/Pages/Dashboard';

const Dashboard: NextPage = () => {
  const { user } = useContext(AuthContext);
  useEffect(() => {
    // const test = backend.get('/user/me');
  }, []);

  return (
    <>
      <Layout>
        <PageWrapper>
          <PageContainer>
            <DashboardContainer />
          </PageContainer>
        </PageWrapper>
      </Layout>
    </>
  );
};

export default Dashboard;

export const getServerSideProps: GetServerSideProps = async (ctx) => {
  const apiClient = getAPIClient(ctx);
  const { ['dictionary.token']: token } = parseCookies(ctx);

  if (!token) {
    return {
      redirect: {
        destination: '/',
        permanent: false,
      },
    };
  }

  const test = await apiClient.get('/user/me');

  return {
    props: {},
  };
};
