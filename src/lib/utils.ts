import { clsx, type ClassValue } from 'clsx';

/**
 * Utility function to merge Tailwind CSS classes with conflict resolution
 * Uses clsx for conditional class handling
 * 
 * @param inputs - Class values to merge
 * @returns Merged class string
 */
export function cn(...inputs: ClassValue[]) {
  return clsx(inputs);
}
