import { useWord } from '@/providers/WordProvider';
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
          <div>{wordDefinition.audio}</div>
        </PlayerContainer>
        <MeaningsContainer>
          <h3>Meanings</h3>
          <div>{wordDefinition.meaning}</div>
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
