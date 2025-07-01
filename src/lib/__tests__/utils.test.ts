/**
 * Utility Functions Tests
 * 
 * Tests for common utility functions including:
 * - className merging (cn)
 * - Date formatting
 * - Text utilities
 * - Type guards
 * 
 * @test-file
 */

import { cn, formatDate, truncateText, slugify, delay, isDefined } from '@/lib/utils'

describe('Utility Functions', () => {
  describe('cn (className merger)', () => {
    it('merges basic classes', () => {
      const result = cn('px-4 py-2', 'text-red-500')
      expect(result).toContain('px-4')
      expect(result).toContain('py-2')
      expect(result).toContain('text-red-500')
    })

    it('handles conditional classes', () => {
      const isActive = true
      const result = cn('base-class', isActive && 'active-class')
      expect(result).toContain('base-class')
      expect(result).toContain('active-class')
    })

    it('handles false conditions', () => {
      const isActive = false
      const result = cn('base-class', isActive && 'active-class')
      expect(result).toContain('base-class')
      expect(result).not.toContain('active-class')
    })

    it('resolves Tailwind conflicts', () => {
      const result = cn('px-4', 'px-6')
      expect(result).toContain('px-6')
      expect(result).not.toContain('px-4')
    })
  })

  describe('formatDate', () => {
    it('formats Date objects', () => {
      const date = new Date('2024-01-15T12:00:00Z')
      const result = formatDate(date)
      expect(result).toMatch(/January \d{1,2}, 2024/)
    })

    it('formats date strings', () => {
      const result = formatDate('2024-01-15T12:00:00Z')
      expect(result).toMatch(/January \d{1,2}, 2024/)
    })

    it('accepts custom options', () => {
      const date = new Date('2024-01-15T12:00:00Z')
      const result = formatDate(date, { 
        year: 'numeric', 
        month: 'short', 
        day: 'numeric' 
      })
      expect(result).toMatch(/Jan \d{1,2}, 2024/)
    })
  })

  describe('truncateText', () => {
    it('truncates long text', () => {
      const text = 'This is a very long text that should be truncated'
      const result = truncateText(text, 20)
      expect(result).toBe('This is a very long...')
    })

    it('returns short text unchanged', () => {
      const text = 'Short text'
      const result = truncateText(text, 20)
      expect(result).toBe('Short text')
    })

    it('handles exact length', () => {
      const text = 'Exactly twenty chars'
      const result = truncateText(text, 20)
      expect(result).toBe('Exactly twenty chars')
    })
  })

  describe('slugify', () => {
    it('converts text to URL-friendly slug', () => {
      const result = slugify('Hello World!')
      expect(result).toBe('hello-world')
    })

    it('handles special characters', () => {
      const result = slugify('This & That - Test #123')
      expect(result).toMatch(/this.*that.*test.*123/)
    })

    it('handles multiple spaces', () => {
      const result = slugify('Multiple   Spaces   Here')
      expect(result).toBe('multiple-spaces-here')
    })

    it('trims whitespace', () => {
      const result = slugify('  Trimmed Text  ')
      expect(result).toBe('trimmed-text')
    })
  })

  describe('delay', () => {
    it('returns a promise', () => {
      const result = delay(100)
      expect(result).toBeInstanceOf(Promise)
    })

    it('resolves after specified time', async () => {
      const start = Date.now()
      await delay(100)
      const end = Date.now()
      expect(end - start).toBeGreaterThanOrEqual(95) // Allow some variance
    })
  })

  describe('isDefined', () => {
    it('returns true for defined values', () => {
      expect(isDefined('string')).toBe(true)
      expect(isDefined(123)).toBe(true)
      expect(isDefined({})).toBe(true)
      expect(isDefined([])).toBe(true)
      expect(isDefined(false)).toBe(true)
      expect(isDefined(0)).toBe(true)
    })

    it('returns false for null and undefined', () => {
      expect(isDefined(null)).toBe(false)
      expect(isDefined(undefined)).toBe(false)
    })
  })
})
