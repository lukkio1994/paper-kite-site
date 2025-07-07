// Container System Exports
export { Container } from './Container';
export {
  HeaderContainer,
  MainContainer,
  SectionContainer,
  FooterContainer,
  CardContainer
} from './SpecializedContainers';

// Layout Component Exports
export { Header } from './Header';
export { default as HeaderClient } from './HeaderClient';
export { DynamicHeader, useHeaderConfig } from './DynamicHeader';
export { Footer, FooterSection, FooterLink } from './Footer';
export { default as FooterClient } from './FooterClient';
export { DynamicFooter, useFooterConfig } from './DynamicFooter';

// Type exports
export type {
  ContainerProps,
  ContainerSize,
  ContainerVariant,
  ContainerSpacing,
  ContainerBackground
} from '@/types/container';
