import { cn } from '@/lib/utils';

type ContainerProps<T extends React.ElementType> = {
  as?: T;
  className?: string;
  children: React.ReactNode;
} & Omit<React.ComponentPropsWithoutRef<T>, 'as' | 'className' | 'children'>;

/** Centered, responsive max-width wrapper used across all sections. */
export function Container<T extends React.ElementType = 'div'>({
  as,
  className,
  children,
  ...rest
}: ContainerProps<T>) {
  const Tag = (as ?? 'div') as React.ElementType;
  return (
    <Tag
      className={cn('mx-auto w-full max-w-7xl px-5 sm:px-6 lg:px-8', className)}
      {...rest}
    >
      {children}
    </Tag>
  );
}
