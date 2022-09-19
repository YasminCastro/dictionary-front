import { useState } from 'react';
import FavoritesLists from './FavoritesList';
import HistoryList from './HistoryList';
import { Container, TableButtonContainer, ButtonContainer } from './styles';
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
      <TableButtonContainer>
        <ButtonContainer
          onClick={() => setSelectedTabela('words-list')}
          selected={selectedTable === 'words-list'}
        >
          Word list
        </ButtonContainer>
        <ButtonContainer
          onClick={() => setSelectedTabela('favorites')}
          selected={selectedTable === 'favorites'}
        >
          Favorites
        </ButtonContainer>
        <ButtonContainer
          onClick={() => setSelectedTabela('history')}
          selected={selectedTable === 'history'}
        >
          History
        </ButtonContainer>
      </TableButtonContainer>
      {selectedTable === 'words-list' && <WordsList />}
      {selectedTable === 'favorites' && <FavoritesLists />}
      {selectedTable === 'history' && <HistoryList />}
    </Container>
  );
};

export default LeftSide;
