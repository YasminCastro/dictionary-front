import api from '@/backend/api';
import { useEffect, useState } from 'react';
import { Container, TableContainer, WordContainer } from './styles';
import InfiniteScroll from 'react-infinite-scroller';
import { useWord } from '@/providers/WordProvider';

const WordsList: React.FC = () => {
  const { setSearchWord } = useWord();
  const [words, setWords] = useState<any[]>([]);
  const [page, setPage] = useState(1);
  const [hasMore, setHasMore] = useState(true);

  useEffect(() => {
    getWords();
  }, []);

  async function getWords() {
    const { data } = await api.get(`/entries/en?page=${page}&limit=50`);

    setWords([...words, ...data.results]);
    setPage(page + 1);
    setHasMore(data.hasNext);
  }

  return (
    <Container>
      <InfiniteScroll
        pageStart={page}
        loadMore={getWords}
        hasMore={hasMore}
        useWindow={false}
        loader={
          <div className="loader" key={0}>
            Carregando ...
          </div>
        }
      >
        <TableContainer>
          {words.map((word) => (
            <WordContainer
              onClick={() => {
                setSearchWord(word);
              }}
              key={word}
            >
              {word}
            </WordContainer>
          ))}
        </TableContainer>
      </InfiniteScroll>
    </Container>
  );
};

export default WordsList;
