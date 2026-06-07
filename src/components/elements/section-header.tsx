import React from 'react';
import CategoryBadge from './category-badge';
import { cn } from '@/lib/utils';

interface SectionHeaderProps {
  category: string;
  title: string;
  description: string;
  className?: string;
  icon?: React.ReactNode;
  isCenter?: boolean;
}

export default function SectionHeader({
  title,
  category,
  description,
  className = '',
  isCenter = false,
}: SectionHeaderProps) {
  return (
    <div className={cn('flex flex-col gap-4', isCenter && 'items-center text-center', className)}>
      <CategoryBadge label={category} />
      <h2 className="text-2xl font-bold md:text-4xl lg:text-5xl tracking-tight leading-tight">
        {title}
      </h2>
      {description && (
        <p className={cn('text-muted-foreground text-base max-w-xl', isCenter && 'mx-auto')}>
          {description}
        </p>
      )}
    </div>
  );
}
