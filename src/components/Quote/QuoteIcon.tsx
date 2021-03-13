import React from 'react';
import styled from 'styled-components';

interface Props {
    rotated?: boolean;
}

const QuoteIconWrapper = styled.div<Props>`
    width: 139px;
    transform: ${({ rotated }) => rotated ? 'rotate(180deg)' : 'unset'};
`;

export const QuoteIcon: React.FC<Props> = ({ rotated }) => (
    <QuoteIconWrapper rotated={rotated}>
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 139 103">
            <path fill="#DB7093" d="M84.916 84.416c12.637-1.845 20.977-9.093 25.02-21.746 2.359-7.513 3.202-14.037 2.528-19.572H84.916V0H139v39.737c0 15.684-4.128 29.72-12.384 42.11-8.255 12.257-22.155 19.308-41.7 21.153V84.416zM0 84.416c12.636-1.845 21.06-9.093 25.273-21.746 2.358-7.513 3.117-14.037 2.274-19.572H0V0h53.83v39.737c0 15.684-4.127 29.655-12.383 41.912C33.191 93.774 19.376 100.89 0 103V84.416z" />
        </svg>
    </QuoteIconWrapper>
);

