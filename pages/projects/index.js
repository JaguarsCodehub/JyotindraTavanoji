import { useState } from 'react';
import Head from 'next/head';
import Link from 'next/link';
import Image from 'next/image';
import { motion, useMotionValue, useSpring } from 'framer-motion';
import { projects, devopsProjects } from '../../lib/projects';

export default function Projects() {
  const [hoveredProject, setHoveredProject] = useState(null);

  // Framer Motion cursor tracking
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const springConfig = { damping: 25, stiffness: 220 };
  const springX = useSpring(mouseX, springConfig);
  const springY = useSpring(mouseY, springConfig);

  const handleMouseMove = (e) => {
    // Offset to center the 56x56 (w-14 h-14) avatar cursor on the cursor
    mouseX.set(e.clientX - 28);
    mouseY.set(e.clientY - 28);
  };

  return (
    <>
      <Head>
        <title>Projects | Jyotindra Tavanoji</title>
      </Head>
      <div 
        onMouseMove={handleMouseMove}
        className="max-w-6xl mx-auto px-6 py-20 relative"
      >
        {/* Floating cursor-following avatar cursor */}
        <motion.div
          style={{
            position: 'fixed',
            left: springX,
            top: springY,
            pointerEvents: 'none',
            zIndex: 100,
          }}
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ 
            opacity: hoveredProject ? 1 : 0, 
            scale: hoveredProject ? 1 : 0.5,
          }}
          transition={{ type: 'spring', damping: 25, stiffness: 250 }}
          className="w-14 h-14 rounded-full overflow-hidden shadow-xl border-2 border-primary bg-card hidden md:block"
        >
          <div className="relative w-full h-full">
            <Image 
              src="https://avatars.githubusercontent.com/u/82316591?v=4" 
              alt="Avatar cursor" 
              layout="fill" 
              objectFit="cover" 
              quality={95}
              priority
            />
          </div>
        </motion.div>

        {/* Web Projects */}
        <div className="mb-16">
          <h2 className="font-mono text-primary text-xl font-bold mb-8 uppercase tracking-wider">
            {"// Web Projects"}
          </h2>
          
          <div className="flex flex-col gap-4">
            {projects.map((project, index) => (
              <Link href={`/projects/${project.slug}`} key={index}>
                <div 
                  onMouseEnter={() => setHoveredProject(project)}
                  onMouseLeave={() => setHoveredProject(null)}
                  className="flex flex-col md:flex-row md:items-center justify-between gap-4 border border-border/60 rounded-xl bg-card/45 p-5 md:p-6 transition-all duration-300 hover:border-primary/40 hover:bg-card/75 group cursor-pointer"
                >
                  <div className="flex items-center gap-4 shrink-0">
                    <div className="text-3xl transform group-hover:scale-110 transition-transform duration-300">
                      {project.icon}
                    </div>
                    <div>
                      <h3 className="font-lora text-lg font-bold text-foreground group-hover:text-primary transition-colors">
                        {project.title}
                      </h3>
                      <div className="flex flex-wrap gap-2 mt-1">
                        {project.tags.map((tag, i) => (
                          <span 
                            key={tag} 
                            className={`px-2 py-0.5 text-[10px] rounded-md font-mono ${
                              i === 0 ? 'bg-primary/10 text-primary font-bold border border-primary/10' : 'bg-muted/70 text-muted-foreground'
                            }`}
                          >
                            {tag.toLowerCase()}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                  
                  <p className="text-muted-foreground text-sm md:max-w-[45%] text-left md:text-right leading-relaxed flex-grow">
                    {project.description}
                  </p>
                </div>
              </Link>
            ))}
          </div>
        </div>

        {/* DevOps & Infrastructure */}
        <div>
          <h2 className="font-mono text-primary text-xl font-bold mb-8 uppercase tracking-wider">
            {"// DevOps & Infrastructure"}
          </h2>
          
          <div className="flex flex-col gap-4">
            {devopsProjects.map((project, index) => (
              <Link href={`/projects/${project.slug}`} key={index}>
                <div 
                  onMouseEnter={() => setHoveredProject(project)}
                  onMouseLeave={() => setHoveredProject(null)}
                  className="flex flex-col md:flex-row md:items-center justify-between gap-4 border border-border/60 rounded-xl bg-card/45 p-5 md:p-6 transition-all duration-300 hover:border-primary/40 hover:bg-card/75 group cursor-pointer"
                >
                  <div className="flex items-center gap-4 shrink-0">
                    <div className="text-3xl transform group-hover:scale-110 transition-transform duration-300">
                      {project.icon}
                    </div>
                    <div>
                      <h3 className="font-lora text-lg font-bold text-foreground group-hover:text-primary transition-colors">
                        {project.title}
                      </h3>
                      <div className="flex flex-wrap gap-2 mt-1">
                        {project.tags.map((tag, i) => (
                          <span 
                            key={tag} 
                            className={`px-2 py-0.5 text-[10px] rounded-md font-mono ${
                              i === 0 ? 'bg-primary/10 text-primary font-bold border border-primary/10' : 'bg-muted/70 text-muted-foreground'
                            }`}
                          >
                            {tag.toLowerCase()}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                  
                  <p className="text-muted-foreground text-sm md:max-w-[45%] text-left md:text-right leading-relaxed flex-grow">
                    {project.description}
                  </p>
                </div>
              </Link>
            ))}
          </div>
        </div>

      </div>
    </>
  );
}
