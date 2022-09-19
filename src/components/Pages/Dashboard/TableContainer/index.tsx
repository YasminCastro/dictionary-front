import { useState } from 'react';
import { Container, TableButtonContainer, ButtonContainer } from './styles';
import TableSection from './TableSection';

export interface WordsList {
  hasNext: boolean;
  hasPrev: boolean;
  page: number;
  results: any[];
  totalDocs: number;
  totalPages: number;
}

const LeftSide: React.FC = () => {
  const wordList = 'words-list';
  const favorites = 'favorites';
  const history = 'history';

  const [selectedTable, setSelectedTabela] = useState(
    favorites as 'words-list' | 'favorites' | 'history'
  );

  return (
    <Container>
      <TableButtonContainer>
        <ButtonContainer
          onClick={() => setSelectedTabela(wordList)}
          selected={selectedTable === wordList}
        >
          Word list
        </ButtonContainer>
        <ButtonContainer
          onClick={() => setSelectedTabela(favorites)}
          selected={selectedTable === favorites}
        >
          Favorites
        </ButtonContainer>
        <ButtonContainer
          onClick={() => setSelectedTabela(history)}
          selected={selectedTable === history}
        >
          History
        </ButtonContainer>
      </TableButtonContainer>

      {selectedTable === wordList && <TableSection tableName={wordList} />}
      {selectedTable === favorites && <TableSection tableName={favorites} />}
      {selectedTable === history && <TableSection tableName={history} />}
    </Container>
  );
};

export default LeftSide;
