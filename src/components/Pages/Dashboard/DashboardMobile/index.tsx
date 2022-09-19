import TableContainer from './TableContainer';
import WordContainer from './WordContainer';
import { Container, Wrapper } from './styles';

const DashboardContainerMobile: React.FC = () => {
  return (
    <Wrapper>
      <Container>
        <TableContainer />
      </Container>
    </Wrapper>
  );
};

export default DashboardContainerMobile;
