import { useWord } from '@/providers/WordProvider';
import ReactPlayer from 'react-player';
import { ErrorMessage } from '@/styles/Global/global';
import {
  Container,
  MeaningsContainer,
  PlayerContainer,
  WordContainer,
  Wrapper,
} from './styles';
import ButtonsContainer from './ButtonsContainer';

const RightSide: React.FC = () => {
  const { wordDefinition, wordError, setSearchWord } = useWord();

  return (
    <Wrapper>
      <Container>
        <WordContainer>
          {wordError ? (
            <ErrorMessage>{wordError}</ErrorMessage>
          ) : (
            <>
              <p>{wordDefinition.word}</p>
              <p>{wordDefinition.phonetic}</p>
            </>
          )}
        </WordContainer>
        <PlayerContainer>
          {wordDefinition.audio && (
            <ReactPlayer
              url={wordDefinition.audio}
              controls={true}
              width="500px"
              height="40px"
            />
          )}
        </PlayerContainer>
        <MeaningsContainer>
          <h2>Meanings</h2>
          <p>{wordDefinition.meaning}</p>
        </MeaningsContainer>
        <ButtonsContainer />
      </Container>
    </Wrapper>
  );
};

export default RightSide;
