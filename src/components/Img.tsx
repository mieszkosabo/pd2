import React from 'react';
import Image from 'next/image';
import styled from 'styled-components';
import { Flexbox } from './layout/Flexbox';

const ImageText = styled.p`
    font-size: ${({ theme }) => theme.typeScale.paragraph};
    font-weight: ${({ theme }) => theme.fontWeights.bold};
    margin-bottom: 0;
`;

const ImageWrapper = styled(Flexbox)`
    margin: ${({ theme }) => theme.dims.mediumSpace} 0;
`;

interface Props {
  width: number;
  height: number;
  text: string;
  src: string;
  layout?: 'fixed' | 'responsive' | 'intrinsic' | undefined
}

export const Img: React.FC<Props> = ({
    src, height, width, text, layout
}) => (
    <ImageWrapper direction="column" align="center">
        <Image
            src={src}
            height={height}
            width={width}
            alt={text}
            layout={layout}
        />
        <ImageText>
            {text}
        </ImageText>
    </ImageWrapper>
);
