import type { GetServerSideProps, NextPage } from 'next';
import { parseCookies } from 'nookies';

import { PageContainer, PageWrapper } from '@/styles/Page/dashboard';

import Layout from '@/components/Global/Layout';
import DashboardContainer from '@/components/Pages/Dashboard';
import DashboardContainerMobile from '@/components/Pages/Dashboard/DashboardMobile';
import SEO from '@/components/Global/SEO';

const Dashboard: NextPage = () => {
  return (
    <>
      <SEO title="Dashboard" />
      <Layout>
        <PageWrapper>
          <PageContainer>
            <DashboardContainer />
            <DashboardContainerMobile />
          </PageContainer>
        </PageWrapper>
      </Layout>
    </>
  );
};

export default Dashboard;

export const getServerSideProps: GetServerSideProps = async (ctx) => {
  const { ['dictionary.token']: token } = parseCookies(ctx);

  if (!token) {
    return {
      redirect: {
        destination: '/',
        permanent: false,
      },
    };
  }

  return {
    props: {},
  };
};
