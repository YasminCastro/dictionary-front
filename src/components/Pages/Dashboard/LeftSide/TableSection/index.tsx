import { WordsList } from '..';
import { Container } from './styles';

interface IProps {
  words: WordsList | null;
}

const TableSection: React.FC<IProps> = ({ words }) => {
  console.log(words);
  return <Container>LEFT here</Container>;
};

export default TableSection;
