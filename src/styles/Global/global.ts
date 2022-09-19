import styled from 'styled-components';
import { colors } from '../GlobalStyles';

export const ErrorMessage = styled.span`
  margin-top: 6px;

  font-size: 14px;

  line-height: 16px;
  font-weight: normal;
  color: ${colors.redError};
`;
