import styled from 'styled-components';
import { Flexbox } from './Flexbox';

export const Column = styled(Flexbox)`
    width: ${({ theme }) => theme.dims.columnMaxWidth};
    justify-content: flex-start;
    flex-direction: column;
    padding-left: 32px;
    padding-right: 32px;
    margin-top: ${({ theme }) => theme.dims.mediumSpace};
    margin-bottom: ${({ theme }) => theme.dims.mediumSpace};
`;
