import LeftSide from './LeftSide';
import RightSide from './RightSide';
import { Container, Wrapper } from './styles';

const DashboardContainer: React.FC = () => {
  return (
    <Wrapper>
      <Container>
        <RightSide />
        <LeftSide />
      </Container>
    </Wrapper>
  );
};

export default DashboardContainer;
