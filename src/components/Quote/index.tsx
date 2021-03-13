import styled from 'styled-components';
import React from 'react';
import { Flexbox } from '../layout/Flexbox';
import { QuoteIcon } from './QuoteIcon';

interface Props {
  text: string
}

const QuoteWrapper = styled(Flexbox)`
  width: 100%;
  color: ${({ theme }) => theme.colors.text};
  font-weight: ${({ theme }) => theme.fontWeights.bold};
  font-size: ${({ theme }) => theme.typeScale.quote};
  padding-top: 16px;
`;

const Wrapper = styled.div`
    padding-top: 32px;
    padding-bottom: 32px;
`;

export const Quote: React.FC<Props> = ({ text }) => (
    <Wrapper>
        <Flexbox justify="space-between">
            <QuoteIcon rotated />
            <QuoteIcon />
        </Flexbox>
        <QuoteWrapper justify="center" align="center">
            {text}
        </QuoteWrapper>
    </Wrapper>
);
