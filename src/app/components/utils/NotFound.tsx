import React from 'react';
import Link from 'next/link';
import Button from '../ui/Button';

interface NotFoundProps {
  title?: string;
  description?: string;
  showHomeLink?: boolean;
  homeText?: string;
  className?: string;
}

const NotFound: React.FC<NotFoundProps> = ({
  title = '404 - Page Not Found',
  description = "Sorry, we couldn't find the page you're looking for.",
  showHomeLink = true,
  homeText = 'Go back home',
  className = '',
}) => {
  return (
    <div className={`flex min-h-[400px] flex-col items-center justify-center p-8 text-center ${className}`}>
      <div className="mx-auto max-w-md">
        <div className="mb-6">
          <h1 className="mb-2 text-6xl font-bold text-foreground">
            404
          </h1>
          <h2 className="mb-4 text-2xl font-semibold text-foreground">
            {title}
          </h2>
          <p className="text-muted">
            {description}
          </p>
        </div>
        
        {showHomeLink && (
          <Link href="/" className="inline-block">
            <Button variant="primary">
              {homeText}
            </Button>
          </Link>
        )}
      </div>
    </div>
  );
};

export default NotFound;
export type { NotFoundProps };
