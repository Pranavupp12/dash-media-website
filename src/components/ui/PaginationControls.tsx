'use client';

import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from '@/components/ui/pagination';

interface PaginationControlsProps {
  totalPages: number;
  currentPage: number;
}

export function PaginationControls({ totalPages, currentPage }: PaginationControlsProps) {
  const hasPrev = currentPage > 1;
  const hasNext = currentPage < totalPages;

  return (
    <Pagination className="mt-12">
      <PaginationContent>
        <PaginationItem>
          {/* Render a link for the previous page if it exists */}
          {hasPrev ? (
            <PaginationPrevious href={`/blog?page=${currentPage - 1}`} />
          ) : (
            // Otherwise, render a disabled button
            <PaginationPrevious className="pointer-events-none opacity-50" />
          )}
        </PaginationItem>
        
        {/* You can add page numbers here if you like, for now we keep it simple */}
        <PaginationItem>
            <PaginationLink isActive>{currentPage}</PaginationLink>
        </PaginationItem>

        <PaginationItem>
          {/* Render a link for the next page if it exists */}
          {hasNext ? (
            <PaginationNext href={`/blog?page=${currentPage + 1}`} />
          ) : (
            // Otherwise, render a disabled button
            <PaginationNext className="pointer-events-none opacity-50" />
          )}
        </PaginationItem>
      </PaginationContent>
    </Pagination>
  );
}