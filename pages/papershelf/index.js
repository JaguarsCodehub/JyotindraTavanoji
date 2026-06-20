import Head from 'next/head';
import { papers } from '../../lib/papers';

export default function Papershelf() {
  return (
    <>
      <Head>
        <title>Papershelf | Jyotindra Tavanoji</title>
      </Head>
      <div className="max-w-4xl mx-auto px-6 py-20 relative min-h-screen">
        <div className="mb-12">
          <div className="flex items-baseline gap-4 mb-6">
            <h1 className="font-lora text-4xl md:text-5xl font-bold text-foreground">Papershelf</h1>
            <span className="font-mono text-xl text-muted-foreground">({papers.length})</span>
          </div>
          <p className="text-foreground/80 leading-relaxed mb-4">
            A collection of research papers I have read and found interesting. Here are all the papers on my shelf.
          </p>
        </div>
        
        <ul className="space-y-4">
          {papers.map((paper, index) => (
            <li 
              key={index} 
              className="flex flex-col sm:flex-row sm:items-baseline gap-2 sm:gap-4 group relative"
            >
              <span className="text-muted-foreground font-mono text-sm shrink-0 w-16 hidden sm:inline-block">
                {paper.year} :
              </span>
              <span className="text-muted-foreground font-mono text-xs sm:hidden mb-1">
                {paper.year}
              </span>
              
              <a 
                href={paper.link} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="text-primary hover:text-primary/80 transition-colors text-base sm:text-lg"
              >
                {paper.title}
              </a>
            </li>
          ))}
        </ul>

      </div>
    </>
  );
}
