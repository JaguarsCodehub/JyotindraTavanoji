import React from 'react';
import Link from 'next/link';
import { Github } from 'lucide-react';

export default function Navbar() {
  return (
    <nav className="w-full border-b border-border bg-background/80 backdrop-blur-md sticky top-0 z-50">
      <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
        <Link href="/" className="font-mono text-md md:text-xl font-bold text-foreground hover:text-primary transition-colors">
          jyotindra
        </Link>
        <div className="flex items-center space-x-6 text-sm font-medium">
          <Link href="/blogs" className="text-foreground hover:text-primary transition-colors">Blogs</Link>
          <Link href="/projects" className="text-foreground hover:text-primary transition-colors">Projects</Link>
          <Link href="/papershelf" className="text-foreground hover:text-primary transition-colors">Papershelf</Link>
          <a 
            href="https://github.com/JaguarsCodehub/" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="w-8 h-8 rounded-full bg-black hover:bg-neutral-800 text-white flex items-center justify-center transition-colors"
            aria-label="GitHub"
          >
            <Github size={16} />
          </a>
        </div>
      </div>
    </nav>
  );
}
