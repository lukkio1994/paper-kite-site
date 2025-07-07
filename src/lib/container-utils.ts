import { 
  containerSizes, 
  containerSpacing, 
  containerBackgrounds, 
  containerVariants,
  containerBase,
  containerCentering
} from './container-styles';
import { ContainerSize, ContainerSpacing, ContainerBackground, ContainerVariant } from '@/types/container';

/**
 * Combines class names, filtering out falsy values
 */
export function cn(...classes: (string | undefined | null | false)[]): string {
  return classes.filter(Boolean).join(' ');
}

/**
 * Generates the complete class string for a container
 */
export function getContainerClasses({
  size = 'xl',
  spacing = 'comfortable',
  background = 'transparent',
  variant = 'base',
  fluid = false,
  centered = true,
  className = ''
}: {
  size?: ContainerSize;
  spacing?: ContainerSpacing;
  background?: ContainerBackground;
  variant?: ContainerVariant;
  fluid?: boolean;
  centered?: boolean;
  className?: string;
}): string {
  return cn(
    // Base styling for all containers
    containerBase,
    
    // Variant-specific styles
    containerVariants[variant],
    
    // Size constraints (unless fluid)
    !fluid && containerSizes[size],
    
    // Centering (unless fluid)
    !fluid && centered && containerCentering.centered,
    
    // Fluid width
    fluid && 'w-full',
    
    // Spacing/padding
    containerSpacing[spacing],
    
    // Background treatment
    containerBackgrounds[background],
    
    // Custom classes
    className
  );
}

/**
 * Validates container props and provides defaults
 */
export function normalizeContainerProps({
  size = 'xl',
  spacing = 'comfortable',
  background = 'transparent',
  variant = 'base',
  fluid = false,
  centered = true,
  ...rest
}: Partial<{
  size: ContainerSize;
  spacing: ContainerSpacing;
  background: ContainerBackground;
  variant: ContainerVariant;
  fluid: boolean;
  centered: boolean;
}> & Record<string, unknown>) {
  return {
    size,
    spacing,
    background,
    variant,
    fluid,
    centered,
    ...rest
  };
}
