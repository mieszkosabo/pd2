import styled from 'styled-components';

interface Props {
  intro?: boolean
}

export const Paragraph = styled.p<Props>`
    font-size: ${({ intro, theme }) => intro
        ? theme.typeScale.intro
        : theme.typeScale.paragraph};
    color: ${({ theme }) => theme.colors.text};
`;
