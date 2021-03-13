import React from 'react';
import styled from 'styled-components';
import { Flexbox } from './layout/Flexbox';
import { Line } from './Line';

type headerTypes = 'h1' | 'h2' | 'h3';

interface SectionTextProps {
  type: headerTypes
}

const SectionText = styled.h1<SectionTextProps>`
    color: ${({ type, theme }) => type === 'h3' ? theme.colors.text: theme.colors.primary};
    font-weight: ${({ theme }) => theme.fontWeights.bold};
    font-size: ${({ type, theme }) => theme.typeScale[type][0]};
    @media (max-width: 443px) {
        font-size: ${({ type, theme }) => theme.typeScale[type][1]};
    }
    margin: 0;
    line-height: 1.2;
`;

const SectionWrapper = styled(Flexbox)`
    margin: ${({ theme }) => theme.dims.mediumSpace} 0;
`;

interface SectionProps extends SectionTextProps {
  text: string;
}

export const Section: React.FC<SectionProps> = ({ text, type }) => (
    <SectionWrapper justify="flex-start" direction="column">
        <SectionText as={type} type={type}>
            {text}
        </SectionText>
        {type !== 'h3' && (
            <Line size={5} />
        )}
    </SectionWrapper>
);
