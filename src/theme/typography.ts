export interface FontFamilies {
    primary: string;
}

export const fontFamilies: FontFamilies = {
    primary: 'Helvetica, Arial, sans-serif'
};

export interface FontWeights {
    regular: number;
    bold: number;
}

export const fontWeights: FontWeights = {
    regular: 400,
    bold: 700
};

export interface TypeScale {
    h1: string[];
    h2: string[];
    h3: string[];
    intro: string[];
    paragraph: string[];
    quote: string[];
}
export const typeScale: TypeScale = {
    h1: ['72px', '58px'],
    h2: ['48px', '48px'],
    h3: ['24px', '24px'],
    intro: ['24px'],
    paragraph: ['18px'],
    quote: ['24px']
};