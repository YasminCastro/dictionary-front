import TableContainer from './TableContainer';
import WordContainer from './WordContainer';
import { Container, Wrapper } from './styles';
import { useRenderWordsContainer } from '@/providers/RenderWordsContainerProvider';
import Popup from 'reactjs-popup';

const DashboardContainerMobile: React.FC = () => {
  const { renderWordContainer, setRenderWordContainer } =
    useRenderWordsContainer();

  return (
    <Wrapper>
      <Container>
        <TableContainer />
        <Popup
          contentStyle={{ width: '100%' }}
          className="popup"
          open={renderWordContainer}
          onClose={() => {
            setRenderWordContainer(false);
          }}
          position="right center"
        >
          <WordContainer />
        </Popup>
      </Container>
    </Wrapper>
  );
};

export default DashboardContainerMobile;
