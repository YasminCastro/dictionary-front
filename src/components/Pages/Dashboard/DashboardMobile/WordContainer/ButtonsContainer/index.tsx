import { useWord } from '@/providers/WordProvider';
import { Container, Wrapper } from './styles';

const ButtonsContainer: React.FC = () => {
  const { setSearchWord, nextWord, previousWord } = useWord();

  return (
    <Wrapper>
      <Container>
        {previousWord && (
          <button
            onClick={() => {
              setSearchWord(previousWord);
            }}
          >
            Voltar
          </button>
        )}
        {nextWord && (
          <button
            onClick={() => {
              setSearchWord(nextWord);
            }}
          >
            Próximo
          </button>
        )}
      </Container>
    </Wrapper>
  );
};

export default ButtonsContainer;
