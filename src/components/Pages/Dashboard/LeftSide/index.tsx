import { useState } from 'react';
import { Container } from './styles';
import WordsList from './WordsList';

export interface WordsList {
  hasNext: boolean;
  hasPrev: boolean;
  page: number;
  results: any[];
  totalDocs: number;
  totalPages: number;
}

const LeftSide: React.FC = () => {
  const [selectedTable, setSelectedTabela] = useState('words-list');

  return (
    <Container>
      {selectedTable === 'words-list' && <WordsList />}
      {/* {selectedTable === 'favorites' && <TableSection />}
      {selectedTable === 'history' && <TableSection />} */}
    </Container>
  );
};

export default LeftSide;
