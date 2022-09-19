import api from '@/backend/api';
import { useEffect, useState } from 'react';
import { Container, TableContainer, WordContainer } from './styles';
import InfiniteScroll from 'react-infinite-scroller';
import { useWord } from '@/providers/WordProvider';

interface IProps {
  tableName: string;
}

const TableSection: React.FC<IProps> = ({ tableName }) => {
  const { setSearchWord } = useWord();
  const [words, setWords] = useState<any[]>([]);
  const [page, setPage] = useState(1);
  const [hasMore, setHasMore] = useState(true);
  const url = getApiUrl(tableName);

  useEffect(() => {
    getWords();
  }, []);

  async function getWords() {
    const { data } = await api.get(`${url}?page=${page}&limit=40`);

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
            Carregando...
          </div>
        }
      >
        <TableContainer>
          {words.map((wordRaw) => {
            let word = wordRaw;

            if (tableName !== 'words-list') {
              word = wordRaw.word;
            }

            return (
              <WordContainer
                onClick={() => {
                  setSearchWord(word);
                }}
                key={word}
              >
                {word}
              </WordContainer>
            );
          })}
        </TableContainer>
      </InfiniteScroll>
    </Container>
  );
};

export default TableSection;

const getApiUrl = (tableName: string) => {
  switch (tableName) {
    case 'words-list':
      return '/entries/en';
    case 'favorites':
      return '/user/me/favorites';
    case 'history':
      return '/user/me/history';
  }
};
