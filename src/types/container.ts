import { ElementType, ComponentPropsWithoutRef, ReactNode } from 'react';

// Container size options
export type ContainerSize = 
  | 'xs' | 'sm' | 'md' | 'lg' | 'xl' 
  | '2xl' | '3xl' | '4xl' | '5xl' | '6xl' | '7xl' 
  | 'full' | 'screen';

// Container variants for different use cases
export type ContainerVariant = 
  | 'base' | 'section' | 'content' | 'nav' | 'card' | 'elevated';

// Spacing options for different content densities
export type ContainerSpacing = 
  | 'none' | 'tight' | 'compact' | 'comfortable' | 'loose' | 'spacious';

// Background variants for visual hierarchy
export type ContainerBackground = 
  | 'transparent' | 'subtle' | 'card' | 'elevated' | 'primary' | 'secondary';

// Base container props without element-specific props
export interface BaseContainerProps {
  /**
   * The maximum width of the container
   * @default 'xl'
   */
  size?: ContainerSize;
  
  /**
   * The visual variant of the container
   * @default 'base'
   */
  variant?: ContainerVariant;
  
  /**
   * The spacing/padding of the container
   * @default 'comfortable'
   */
  spacing?: ContainerSpacing;
  
  /**
   * The background treatment of the container
   * @default 'transparent'
   */
  background?: ContainerBackground;
  
  /**
   * Whether the container should be fluid (full width)
   * @default false
   */
  fluid?: boolean;
  
  /**
   * Whether to center the container content
   * @default true
   */
  centered?: boolean;
  
  /**
   * Additional CSS classes
   */
  className?: string;
  
  /**
   * Container content
   */
  children: ReactNode;
}

// Polymorphic component props
export type ContainerProps<T extends ElementType = 'div'> = 
  BaseContainerProps & 
  Omit<ComponentPropsWithoutRef<T>, keyof BaseContainerProps> & {
    /**
     * The HTML element or React component to render
     * @default 'div'
     */
    as?: T;
  };
