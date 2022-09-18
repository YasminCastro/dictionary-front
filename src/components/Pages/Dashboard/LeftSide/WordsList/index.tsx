import api from '@/backend/api';
import { useEffect, useState } from 'react';
import { Container } from './styles';

interface Words {
  results: string[];
}

const WordsList: React.FC = () => {
  const [words, setWords] = useState<any[]>([]);
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [wordsPage, setWordsPage] = useState(16);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getWords();
  }, [page]);

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);

    return () => window.removeEventListener('scroll', handleScroll);
  });

  function handleScroll() {
    if (
      window.innerHeight + document.documentElement.scrollTop <
        document.documentElement.offsetHeight ||
      page === totalPages ||
      loading
    ) {
      return;
    }

    setPage(page + 1);
    console.log('PAGE', page);
  }

  async function getWords() {
    setLoading(true);

    const { data } = await api.get(
      `/entries/en?page=${page}&limit=${wordsPage}`
    );

    setTotalPages(data.totalPages);
    setWords([...words, ...data.results]);
    setLoading(false);
  }

  return (
    <Container>
      {words.map((word) => (
        <p key={word}>{word}</p>
      ))}
      {loading && <>Carregando...</>}
    </Container>
  );
};

export default WordsList;
