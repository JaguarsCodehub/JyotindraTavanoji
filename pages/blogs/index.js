import Head from 'next/head';
import Link from 'next/link';
import { getSortedPostsData } from '../../lib/posts';

export default function Blogs({ allPostsData }) {
  return (
    <>
      <Head>
        <title>Blogs | Jyotindra Tavanoji</title>
      </Head>
      <div className="max-w-4xl mx-auto px-6 py-20 relative min-h-screen">
        <div className="mb-12">
          <div className="flex items-baseline gap-4 mb-6">
            <h1 className="font-lora text-4xl md:text-5xl font-bold text-foreground">Blogs</h1>
            <span className="font-mono text-xl text-muted-foreground">({allPostsData.length})</span>
          </div>
          
          <p className="text-foreground/80 leading-relaxed mb-4">
            Every week, I document and articulate my thoughts and learnings on System Design, DevOps Internals, and Engineering Explorations. Here are all blogs I wrote to date.
          </p>
        </div>

        <ul className="space-y-4">
          {allPostsData.map((post) => (
            <li 
              key={post.id} 
              className="flex flex-col sm:flex-row sm:items-baseline gap-2 sm:gap-4 group relative"
            >
              <span className="text-muted-foreground font-mono text-sm shrink-0 w-32 hidden sm:inline-block">
                {new Date(post.date).toLocaleDateString('en-US', { month: 'short', day: '2-digit', year: 'numeric' })} :
              </span>
              <span className="text-muted-foreground font-mono text-xs sm:hidden mb-1">
                {new Date(post.date).toLocaleDateString('en-US', { month: 'short', day: '2-digit', year: 'numeric' })}
              </span>
              
              <Link 
                href={`/blogs/${post.id}`} 
                className="text-primary hover:text-primary/80 transition-colors text-base sm:text-lg"
              >
                {post.title}
              </Link>
            </li>
          ))}
        </ul>
        
        {allPostsData.length === 0 && (
          <div className="text-left py-10 text-muted-foreground font-mono">
            No posts found.
          </div>
        )}
      </div>
    </>
  );
}

export async function getStaticProps() {
  const allPostsData = await getSortedPostsData();
  return {
    props: {
      allPostsData,
    },
    // Revalidate every hour so new Hashnode posts show up without manual redeploy
    revalidate: 3600,
  };
}
