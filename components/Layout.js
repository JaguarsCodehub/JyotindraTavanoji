import { useEffect, useState } from 'react';
import { motion, useMotionValue, useSpring } from 'framer-motion';
import Image from 'next/image';
import Navbar from './Navbar';
import Footer from './Footer';
import sceneBg from '../assets/images/scene1.jpg';

export default function Layout({ children }) {
  const [mounted, setMounted] = useState(false);
  const [isHoveringClickable, setIsHoveringClickable] = useState(false);

  // Framer Motion cursor tracking
  const mouseX = useMotionValue(-100);
  const mouseY = useMotionValue(-100);

  const springConfig = { damping: 30, stiffness: 280 };
  const springX = useSpring(mouseX, springConfig);
  const springY = useSpring(mouseY, springConfig);

  useEffect(() => {
    setMounted(true);

    const handleMouseMove = (e) => {
      // Offset to center the 32x32 (w-8 h-8) avatar cursor
      mouseX.set(e.clientX - 16);
      mouseY.set(e.clientY - 16);
    };

    const handleMouseOver = (e) => {
      // Check if the hovered element is clickable
      const target = e.target;
      if (!target) return;
      const isClickable = 
        target.tagName === 'A' || 
        target.tagName === 'BUTTON' || 
        (target.closest && (target.closest('a') || target.closest('button'))) ||
        (target.getAttribute && target.getAttribute('role') === 'button');
      
      setIsHoveringClickable(!!isClickable);
    };

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('mouseover', handleMouseOver);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseover', handleMouseOver);
    };
  }, [mouseX, mouseY]);

  return (
    <div className="min-h-screen flex flex-col font-sans bg-background text-foreground relative z-0 md:cursor-none">
      {mounted && (
        <motion.div
          style={{
            position: 'fixed',
            left: springX,
            top: springY,
            pointerEvents: 'none',
            zIndex: 9999,
          }}
          animate={{
            scale: isHoveringClickable ? 0.3 : 1,
            opacity: isHoveringClickable ? 0 : 1,
          }}
          transition={{ type: 'spring', damping: 25, stiffness: 350 }}
          className="w-8 h-8 rounded-full overflow-hidden shadow-xl border-2 border-primary bg-card hidden md:block"
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
      )}

      <div className="fixed inset-0 -z-10 pointer-events-none">
        <Image 
          src={sceneBg} 
          alt="Background Scene" 
          layout="fill" 
          objectFit="cover" 
          quality={100}
          className="opacity-20 mix-blend-multiply"
        />
      </div>

      <Navbar />
      <main className="flex-grow w-full relative">{children}</main>
      <Footer />
    </div>
  );
}
