import React from 'react';
import Link from 'next/link';
import { Twitter, Linkedin, Github } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="w-full bg-background/80 backdrop-blur-md border-t border-border mt-20 pt-16 pb-8 relative z-10">
      <div className="max-w-6xl mx-auto px-6">
        <div className="mb-12">
          <h3 className="font-lora text-xl font-bold text-primary mb-2">Subscribe to my newsletter</h3>
          <p className="text-muted-foreground text-sm mb-4">I write about software engineering, devops, and building in public.</p>
          <a href="https://jyotindra-kt.hashnode.dev/" target="_blank" rel="noopener noreferrer" className="inline-block bg-primary text-primary-foreground px-4 py-2 rounded-md font-medium text-sm hover:bg-primary/90 transition-colors">
            Read on Hashnode
          </a>
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-12 text-sm">
          <div>
            <h4 className="font-bold mb-4 text-foreground">Writings and Learnings</h4>
            <div className="flex flex-col space-y-2 text-muted-foreground">
              <Link href="/blogs" className="hover:text-primary">Blogs</Link>
              <Link href="/papershelf" className="hover:text-primary">Papershelf</Link>
            </div>
          </div>
          <div>
            <h4 className="font-bold mb-4 text-foreground">Projects</h4>
            <div className="flex flex-col space-y-2 text-muted-foreground">
              <Link href="/projects" className="hover:text-primary">Showcase</Link>
              <a href="https://github.com/JaguarsCodehub/" className="hover:text-primary">GitHub Profile</a>
            </div>
          </div>
          <div>
            <h4 className="font-bold mb-4 text-foreground">Legal and Contact</h4>
            <div className="flex flex-col space-y-2 text-muted-foreground">
              <a href="mailto:jyotindrakt21@gmail.com" className="hover:text-primary">Contact Me</a>
            </div>
          </div>
          <div>
            <h4 className="font-bold mb-4 text-foreground">Social</h4>
            <div className="flex space-x-4 text-muted-foreground">
              <a href="https://github.com/JaguarsCodehub/" className="hover:text-primary"><Github size={20} /></a>
              <a href="https://x.com/jyotindrakt" className="hover:text-primary"><Twitter size={20} /></a>
              <a href="https://www.linkedin.com/in/jyotindra-tavanoji-41909317a/" className="hover:text-primary"><Linkedin size={20} /></a>
            </div>
          </div>
        </div>
        
        <div className="text-center text-xs text-muted-foreground pt-8 border-t border-border">
          © {new Date().getFullYear()} Jyotindra Tavanoji. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
