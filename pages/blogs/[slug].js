import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import { MDXRemote } from 'next-mdx-remote';
import { serialize } from 'next-mdx-remote/serialize';
import { getPostData, getAllPostIds } from '../../lib/posts';
import { ArrowLeft } from 'lucide-react';

export default function Post({ postData }) {
  return (
    <>
      <Head>
        <title>{postData.title} | Jyotindra Tavanoji</title>
        <meta name="description" content={postData.description || postData.title} />
      </Head>
      <article className="max-w-4xl mx-auto px-6 py-20">
        
        <div className="mb-10">
          <Link href="/blogs" className="text-muted-foreground hover:text-primary transition-colors flex items-center gap-2 text-sm font-mono tracking-wide">
            <ArrowLeft size={16} /> back to writings
          </Link>
        </div>

        {/* Cover Image */}
        {postData.coverImage && (
          <div className="relative w-full h-64 md:h-96 rounded-xl overflow-hidden mb-10 shadow-md">
            <Image 
              src={postData.coverImage} 
              alt={postData.title} 
              layout="fill" 
              objectFit="cover" 
              priority
            />
          </div>
        )}

        {/* Header */}
        <div className="mb-12 border-b border-border/50 pb-8">
          <h1 className="font-lora text-3xl md:text-4xl font-bold text-foreground mb-6 leading-tight">
            {postData.title}
          </h1>
          <div className="flex items-center gap-4 text-muted-foreground font-mono text-sm">
            <span>
              {new Date(postData.date).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}
            </span>
            {postData.readTime && (
              <>
                <span>•</span>
                <span>{postData.readTime} min read</span>
              </>
            )}
            {postData.source === 'hashnode' && (
              <>
                <span>•</span>
                <span className="text-primary/70">via Hashnode</span>
              </>
            )}
          </div>
        </div>

        {/* Content */}
        {postData.source === 'hashnode' && (
          <div className="mb-8 p-4 bg-primary/10 border-l-4 border-primary rounded-r-md text-foreground">
            The blog was originally written on hashnode - please visit here{' '}
            <a 
              href={postData.url || `https://jyotindra-kt.hashnode.dev/${postData.slug}`} 
              target="_blank" 
              rel="noopener noreferrer" 
              className="font-bold underline text-primary hover:text-primary/80 transition-colors"
            >
              Hashnode Link
            </a>
          </div>
        )}
        <div className="prose prose-lg dark:prose-invert prose-a:text-primary hover:prose-a:text-primary/80 prose-headings:font-lora max-w-none text-foreground/90">
          <MDXRemote {...postData.mdxSource} />
        </div>
        
      </article>
    </>
  );
}

export async function getStaticPaths() {
  const paths = await getAllPostIds();
  return {
    paths,
    fallback: 'blocking', // Allows new hashnode posts to be built on demand
  };
}

export async function getStaticProps({ params }) {
  try {
    const postData = await getPostData(params.slug);
    const mdxSource = await serialize(postData.content);
    return {
      props: {
        postData: {
          ...postData,
          mdxSource,
        },
      },
      revalidate: 3600, // Revalidate every hour
    };
  } catch (error) {
    return {
      notFound: true,
    };
  }
}
