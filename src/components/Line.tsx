import styled from 'styled-components';
import { defaultTo } from 'ramda';

interface Props {
  size: number
}
export const Line = styled.div<Props>`
    background-color: ${({ theme }) => theme.colors.primary};
    height: ${({ size }) => defaultTo('3', size)}px;
    width: 100%;
`;
