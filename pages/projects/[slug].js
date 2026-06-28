import Head from 'next/head';
import Link from 'next/link';
import { projects, devopsProjects, getProjectBySlug } from '../../lib/projects';
import { ArrowLeft, Play, FileText, Github } from 'lucide-react';

export default function ProjectDetail({ project }) {
  if (!project) return null;

  return (
    <>
      <Head>
        <title>{project.title} | Jyotindra Tavanoji</title>
        <meta name="description" content={project.description} />
      </Head>
      
      <div className="max-w-4xl mx-auto px-6 py-16">
        
        {/* Back Navigation */}
        <div className="mb-12">
          <Link href="/projects" className="text-muted-foreground hover:text-primary transition-colors flex items-center gap-2 text-sm font-mono tracking-wide">
            <ArrowLeft size={16} /> projects
          </Link>
        </div>

        {/* Header Section */}
        <div className="mb-16">
          <div className="text-5xl mb-6">{project.icon}</div>
          <h1 className="font-lora text-3xl md:text-4xl font-bold text-foreground mb-6">
            {project.title}
          </h1>
          <p className="text-muted-foreground text-lg mb-8 leading-relaxed max-w-2xl">
            {project.description}
          </p>
          
          <div className="flex flex-wrap gap-3 mb-8">
            {project.tags.map((tag, i) => (
              <span 
                key={tag} 
                className={`px-3 py-1.5 text-sm rounded-md font-mono ${i === 0 ? 'bg-primary/10 text-primary font-bold border border-primary/20' : 'bg-muted text-muted-foreground border border-transparent'}`}
              >
                {tag.toLowerCase()}
              </span>
            ))}
          </div>
        </div>

        {/* Resources Section */}
        <div>
          <h2 className="font-mono text-primary text-sm font-bold mb-6 uppercase tracking-widest border-b border-border/50 pb-2">
            {"// Resources"}
          </h2>
          
          <div className="flex flex-col gap-4">
            {project.resources?.map((resource, i) => (
              <a 
                key={i} 
                href={resource.url} 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex flex-col md:flex-row md:items-center p-5 rounded-xl border border-border/60 bg-card hover:border-primary/40 hover:shadow-sm transition-all group"
              >
                <div className="mb-3 md:mb-0 md:w-32 shrink-0">
                  <span className={`text-xs font-bold font-mono px-2 py-1 rounded-md ${
                    resource.type === 'GITHUB' ? 'bg-zinc-800 text-zinc-100 dark:bg-zinc-200 dark:text-zinc-900' :
                    resource.type === 'BLOG' ? 'bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-400' :
                    resource.type === 'DOCS' ? 'bg-amber-100 text-amber-700 dark:bg-amber-900/30 dark:text-amber-400' :
                    'bg-emerald-100 text-emerald-700 dark:bg-emerald-900/30 dark:text-emerald-400'
                  }`}>
                    {resource.type}
                  </span>
                </div>
                
                <div className="flex-grow pr-4">
                  <h3 className="font-bold text-foreground group-hover:text-primary transition-colors flex items-center gap-2">
                    {resource.title}
                  </h3>
                  {resource.description && (
                    <p className="text-muted-foreground text-sm mt-1">
                      {resource.description}
                    </p>
                  )}
                </div>
                
                <div className="hidden md:flex text-muted-foreground group-hover:text-primary transition-colors shrink-0">
                  {resource.type === 'GITHUB' && <Github size={18} />}
                  {resource.type === 'BLOG' && <FileText size={18} />}
                  {resource.type === 'DEMO' && <Play size={18} />}
                  {resource.type === 'DOCS' && <FileText size={18} />}
                </div>
              </a>
            ))}
          </div>
        </div>

      </div>
    </>
  );
}

export async function getStaticPaths() {
  const allProjects = [...projects, ...devopsProjects];
  const paths = allProjects.map(p => ({
    params: { slug: p.slug }
  }));

  return {
    paths,
    fallback: false
  };
}

export async function getStaticProps({ params }) {
  const project = getProjectBySlug(params.slug);
  
  // Exclude non-serializable 'image' property from props
  const { image, ...serializableProject } = project || {};

  return {
    props: { project: serializableProject }
  };
}
