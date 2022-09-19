import { useWord } from '@/providers/WordProvider';
import ReactPlayer from 'react-player';
import { ErrorMessage } from '@/styles/Global/global';
import { AiOutlineStar, AiOutlineCloseCircle } from 'react-icons/ai';
import {
  Container,
  MeaningsContainer,
  PlayerContainer,
  WordContainer,
  Wrapper,
} from './styles';
import ButtonsContainer from './ButtonsContainer';
import api from '@/backend/api';
import { useEffect, useState } from 'react';
import { useRenderWordsContainer } from '@/providers/RenderWordsContainerProvider';

const RightSide: React.FC = () => {
  const { wordDefinition, wordError } = useWord();
  const [isFavoriteWord, setIsFavoriteWord] = useState(false);
  const { setRenderWordContainer } = useRenderWordsContainer();

  useEffect(() => {
    const fetchFavoriteWords = async () => {
      setIsFavoriteWord(false);

      const { data } = await api.get(`/user/me/favorites?limit=1000`);

      const found = data.results.find(
        (element: any) => element.word === wordDefinition.word
      );

      if (found) {
        setIsFavoriteWord(true);
      }
    };

    fetchFavoriteWords();
  }, [wordDefinition]);

  const handleSaveFavoriteWord = async () => {
    await api.post(`/entries/en/${wordDefinition.word}/favorite`);

    setIsFavoriteWord(true);
  };

  const handleRemoveFavoriteWord = async () => {
    await api.delete(`/entries/en/${wordDefinition.word}/unfavorite`);

    setIsFavoriteWord(false);
  };

  return (
    <Wrapper>
      <Container>
        <a
          onClick={() => {
            setRenderWordContainer(false);
          }}
        >
          <AiOutlineCloseCircle size={20} />
        </a>
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
              width="100%"
              height="35px"
            />
          )}
        </PlayerContainer>
        <MeaningsContainer isFavoriteWord={isFavoriteWord}>
          <div>
            <h2>Meanings</h2>
            {isFavoriteWord ? (
              <a onClick={handleRemoveFavoriteWord}>
                <AiOutlineStar size={20} />
              </a>
            ) : (
              <a onClick={handleSaveFavoriteWord}>
                <AiOutlineStar size={20} />
              </a>
            )}
          </div>

          <p>{wordDefinition.meaning}</p>
        </MeaningsContainer>
        <ButtonsContainer />
      </Container>
    </Wrapper>
  );
};

export default RightSide;
