import { useWord } from '@/providers/WordProvider';
import ReactPlayer from 'react-player';
import {
  ButtonsContainer,
  Container,
  MeaningsContainer,
  PlayerContainer,
  WordContainer,
  Wrapper,
} from './styles';

const RightSide: React.FC = () => {
  const { wordDefinition, wordError, setSearchWord } = useWord();

  console.log('wordDefinition', wordDefinition);

  return (
    <Wrapper>
      <Container>
        <WordContainer>
          <div>{wordDefinition.word}</div>
          <div>{wordDefinition.phonetic}</div>
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
        <ButtonsContainer>
          <button>Voltar</button>
          <button>Próximo</button>
        </ButtonsContainer>
      </Container>
    </Wrapper>
  );
};

export default RightSide;
