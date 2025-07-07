'use client';

import React from 'react';
import { cn } from '@/lib/utils';
import Button from '../ui/Button';
import IconButton from '../ui/IconButton';

export interface PaginationProps {
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
  showFirstLast?: boolean;
  showPrevNext?: boolean;
  maxVisible?: number;
  size?: 'sm' | 'md' | 'lg';
  className?: string;
  disabled?: boolean;
  // Localization props
  paginationAriaLabel?: string;
  firstPageAriaLabel?: string;
  previousPageAriaLabel?: string;
  nextPageAriaLabel?: string;
  lastPageAriaLabel?: string;
  goToPageAriaLabel?: (pageNumber: number) => string;
}

const Pagination: React.FC<PaginationProps> = ({
  currentPage,
  totalPages,
  onPageChange,
  showFirstLast = true,
  showPrevNext = true,
  maxVisible = 7,
  size = 'md',
  className,
  disabled = false,
  paginationAriaLabel = 'Pagination',
  firstPageAriaLabel = 'Go to first page',
  previousPageAriaLabel = 'Go to previous page',
  nextPageAriaLabel = 'Go to next page',
  lastPageAriaLabel = 'Go to last page',
  goToPageAriaLabel = (pageNumber: number) => `Go to page ${pageNumber}`
}) => {
  if (totalPages <= 1) return null;

  const getVisiblePages = (): (number | string)[] => {
    if (totalPages <= maxVisible) {
      return Array.from({ length: totalPages }, (_, i) => i + 1);
    }

    const pages: (number | string)[] = [];
    const halfVisible = Math.floor(maxVisible / 2);

    // Always show first page
    if (currentPage <= halfVisible + 1) {
      // Show pages from start
      for (let i = 1; i <= Math.min(maxVisible - 1, totalPages); i++) {
        pages.push(i);
      }
      if (totalPages > maxVisible - 1) {
        pages.push('...');
        pages.push(totalPages);
      }
    } else if (currentPage >= totalPages - halfVisible) {
      // Show pages from end
      pages.push(1);
      if (totalPages > maxVisible - 1) {
        pages.push('...');
      }
      for (let i = Math.max(totalPages - maxVisible + 2, 2); i <= totalPages; i++) {
        pages.push(i);
      }
    } else {
      // Show pages around current
      pages.push(1);
      pages.push('...');
      for (let i = currentPage - halfVisible + 1; i <= currentPage + halfVisible - 1; i++) {
        pages.push(i);
      }
      pages.push('...');
      pages.push(totalPages);
    }

    return pages;
  };

  const visiblePages = getVisiblePages();
  
  const buttonSizes = {
    sm: 'sm' as const,
    md: 'md' as const,
    lg: 'lg' as const
  };

  const iconSizes = {
    sm: 'sm' as const,
    md: 'md' as const,
    lg: 'lg' as const
  };

  const handlePageChange = (page: number) => {
    if (disabled || page === currentPage || page < 1 || page > totalPages) return;
    onPageChange(page);
  };

  const prevIcon = (
    <svg
      width="16"
      height="16"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <polyline points="15,18 9,12 15,6" />
    </svg>
  );

  const nextIcon = (
    <svg
      width="16"
      height="16"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <polyline points="9,18 15,12 9,6" />
    </svg>
  );

  const firstIcon = (
    <svg
      width="16"
      height="16"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <polyline points="11,17 6,12 11,7" />
      <polyline points="18,17 13,12 18,7" />
    </svg>
  );

  const lastIcon = (
    <svg
      width="16"
      height="16"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <polyline points="13,17 18,12 13,7" />
      <polyline points="6,17 11,12 6,7" />
    </svg>
  );

  return (
    <nav 
      aria-label={paginationAriaLabel}
      className={cn('flex items-center justify-center gap-1', className)}
    >
      <div className="flex items-center gap-1">
        {/* First Page */}
        {showFirstLast && (
          <IconButton
            variant="ghost"
            size={iconSizes[size]}
            onClick={() => handlePageChange(1)}
            disabled={disabled || currentPage === 1}
            aria-label={firstPageAriaLabel}
            icon={firstIcon}
          />
        )}

        {/* Previous Page */}
        {showPrevNext && (
          <IconButton
            variant="ghost"
            size={iconSizes[size]}
            onClick={() => handlePageChange(currentPage - 1)}
            disabled={disabled || currentPage === 1}
            aria-label={previousPageAriaLabel}
            icon={prevIcon}
          />
        )}

        {/* Page Numbers */}
        {visiblePages.map((page, index) => {
          if (page === '...') {
            return (
              <span
                key={`ellipsis-${index}`}
                className="px-3 py-2 text-muted"
                aria-hidden="true"
              >
                ...
              </span>
            );
          }

          const pageNumber = page as number;
          const isActive = pageNumber === currentPage;

          return (
            <Button
              key={pageNumber}
              variant={isActive ? 'primary' : 'ghost'}
              size={buttonSizes[size]}
              onClick={() => handlePageChange(pageNumber)}
              disabled={disabled}
              aria-label={goToPageAriaLabel(pageNumber)}
              aria-current={isActive ? 'page' : undefined}
              className="min-w-0"
            >
              {pageNumber}
            </Button>
          );
        })}

        {/* Next Page */}
        {showPrevNext && (
          <IconButton
            variant="ghost"
            size={iconSizes[size]}
            onClick={() => handlePageChange(currentPage + 1)}
            disabled={disabled || currentPage === totalPages}
            aria-label={nextPageAriaLabel}
            icon={nextIcon}
          />
        )}

        {/* Last Page */}
        {showFirstLast && (
          <IconButton
            variant="ghost"
            size={iconSizes[size]}
            onClick={() => handlePageChange(totalPages)}
            disabled={disabled || currentPage === totalPages}
            aria-label={lastPageAriaLabel}
            icon={lastIcon}
          />
        )}
      </div>
    </nav>
  );
};

export default Pagination;
