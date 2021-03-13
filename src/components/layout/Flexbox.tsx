import { defaultTo } from 'ramda';
import styled from 'styled-components';

type justifyTypes = 'center' | 'flex-start' | 'space-between';

interface Props {
  justify?: justifyTypes;
  direction?: 'row' | 'column';
  align?: justifyTypes
}

export const Flexbox = styled.div<Props>`
    width: 100%;
    display: flex;
    justify-content: ${({ justify }) => defaultTo('unset', justify)};
    flex-direction: ${({ direction }) => defaultTo('row', direction)};
    align-items: ${({ align }) => defaultTo('unset', align)};
`;
