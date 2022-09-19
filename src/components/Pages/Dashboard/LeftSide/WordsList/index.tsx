import api from '@/backend/api';
import { useEffect, useState } from 'react';
import { Container, TableContainer, WordContainer } from './styles';
import InfiniteScroll from 'react-infinite-scroller';

const WordsList: React.FC = () => {
  const [words, setWords] = useState<any[]>([]);
  const [page, setPage] = useState(1);
  const [hasMore, setHasMore] = useState(true);

  useEffect(() => {
    getWords();
  }, []);

  async function getWords() {
    const { data } = await api.get(`/entries/en?page=${page}&limit=40`);

    console.log(data);

    setWords([...words, ...data.results]);
    setPage(page + 1);
    setHasMore(hasMore);
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
            <WordContainer>
              <div key={word}>{word}</div>
            </WordContainer>
          ))}
        </TableContainer>
      </InfiniteScroll>
    </Container>
  );
};

export default WordsList;
