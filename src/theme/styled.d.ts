import 'styled-components';
import { Colors } from './colors';
import { Dims } from './dims';
import { FontFamilies, FontWeights, TypeScale } from './typography';

declare module 'styled-components' {
  export interface DefaultTheme {
    colors: Colors;
    dims: Dims;
    fontWeights: FontWeights;
    typeScale: TypeScale;
    fontFamilies: FontFamilies;
  }
}