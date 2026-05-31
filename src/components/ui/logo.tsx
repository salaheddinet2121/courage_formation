import React from 'react';
import { cn } from '@/lib/utils';
interface LogoProps {
  className?: string;
  wrapperClassName?: string;
}

const Logo: React.FC<LogoProps> = ({
  className = '',
  wrapperClassName = '',
}) => {


  return (
    <div className={cn(``, wrapperClassName)}>
      <a href="/" className={cn(`relative block`, className)}>
        <img
          src="/layout/full_logo.svg"
          alt="Courage Formation"
          className="object-contain size-full"
        />
    
     </a>
    </div>
  );
};

export default Logo;
