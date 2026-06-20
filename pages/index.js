import Head from 'next/head';
import Link from 'next/link';
import Hero from '../components/Hero';
import { getSortedPostsData } from '../lib/posts';
import { papers } from '../lib/papers';
import { ArrowRight } from 'lucide-react';

export default function Home({ recentPosts }) {
  const recentPapers = papers.slice(0, 5);

  return (
    <>
      <Head>
        <title>Jyotindra Tavanoji</title>
        <meta name='description' content='Fullstack engineering, devops, and systems.' />
        <link rel='icon' href='/logo.png' />
      </Head>

      <Hero />

      <section className="max-w-6xl mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
          
          {/* Recent Blogs */}
          <div>
            <h2 className="font-lora text-2xl font-bold text-foreground mb-6 flex items-center justify-between">
              Recent blog posts
              <Link href="/blogs" className="text-sm text-primary hover:underline flex items-center gap-1 font-sans font-medium">
                Full archive <ArrowRight size={14} />
              </Link>
            </h2>
            <div className="flex flex-col space-y-4">
              {recentPosts.map(({ id, date, title }) => (
                <div key={id} className="flex flex-col sm:flex-row sm:items-baseline gap-1 sm:gap-3 group">
                  <span className="text-muted-foreground font-mono text-sm shrink-0 hidden sm:inline-block">
                    {new Date(date).toLocaleDateString('en-US', { month: 'short', day: '2-digit', year: 'numeric' })} :
                  </span>
                  <span className="text-muted-foreground font-mono text-xs sm:hidden mb-0.5">
                    {new Date(date).toLocaleDateString('en-US', { month: 'short', day: '2-digit', year: 'numeric' })}
                  </span>
                  <Link 
                    href={`/blogs/${id}`} 
                    className="text-foreground hover:text-primary font-medium transition-colors text-base"
                  >
                    {title}
                  </Link>
                </div>
              ))}
            </div>
          </div>

          {/* Recent Papers */}
          <div>
            <h2 className="font-lora text-2xl font-bold text-foreground mb-6 flex items-center justify-between">
              Recent papers
              <Link href="/papershelf" className="text-sm text-primary hover:underline flex items-center gap-1 font-sans font-medium">
                Papershelf <ArrowRight size={14} />
              </Link>
            </h2>
            <div className="flex flex-col space-y-4">
              {recentPapers.map((paper, index) => (
                <div key={index} className="flex flex-col sm:flex-row sm:items-baseline gap-1 sm:gap-3 group">
                  <span className="text-muted-foreground font-mono text-sm shrink-0 hidden sm:inline-block">
                    {paper.year} :
                  </span>
                  <span className="text-muted-foreground font-mono text-xs sm:hidden mb-0.5">
                    {paper.year}
                  </span>
                  <a 
                    href={paper.link} 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="text-foreground hover:text-primary font-medium transition-colors text-base"
                  >
                    {paper.title}
                  </a>
                </div>
              ))}
            </div>
          </div>

        </div>
      </section>
    </>
  );
}

export async function getStaticProps() {
  const allPostsData = getSortedPostsData();
  const recentPosts = allPostsData.slice(0, 8);
  return {
    props: {
      recentPosts,
    },
  };
}
