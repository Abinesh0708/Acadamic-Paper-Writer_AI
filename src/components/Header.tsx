import { BookOpenCheck } from 'lucide-react';
import React from 'react';

const Header: React.FC = () => {
  return (
    <header className="flex items-center h-16 px-6 border-b border-border shrink-0">
      <div className="flex items-center gap-3">
        <BookOpenCheck className="w-7 h-7 text-accent" />
        <h1 className="text-xl font-semibold tracking-tight text-foreground">
          Academic Paper Writer AI
        </h1>
      </div>
    </header>
  );
};

export default Header;
