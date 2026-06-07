import React from 'react';

interface CategoryBadgeProps {
  label: string;
  icon?: React.ReactNode;
}

export default function CategoryBadge({ label }: CategoryBadgeProps) {
  return (
    <span className="inline-block w-fit rounded-full bg-secondary px-3 py-1 text-xs text-accent font-medium border border-secondary">
      {label}
    </span>
  );
}
