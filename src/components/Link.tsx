import styled from 'styled-components';

export const Link = styled.a`
    font-weight: ${({ theme }) => theme.fontWeights.bold};
    color: ${({ theme }) => theme.colors.primary};
    cursor: pointer;
`;
