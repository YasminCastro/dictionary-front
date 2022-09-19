import TableContainer from './TableContainer';
import WordContainer from './WordContainer';
import { Container, Wrapper } from './styles';

const DashboardContainer: React.FC = () => {
  return (
    <Wrapper>
      <Container>
        <WordContainer />
        <TableContainer />
      </Container>
    </Wrapper>
  );
};

export default DashboardContainer;
