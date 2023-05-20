import { SvgIconType } from './svg-type';

declare module '*.svg' {
  const content: SvgIconType;
  export default content;
}
