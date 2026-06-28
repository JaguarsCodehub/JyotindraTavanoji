import Image from 'next/image';
import Navbar from './Navbar';
import Footer from './Footer';
import sceneBg from '../assets/images/scene1.jpg';

export default function Layout({ children }) {
  return (
    <div className="min-h-screen flex flex-col font-sans bg-background text-foreground relative z-0">
      {/* <div className="fixed inset-0 -z-10 pointer-events-none">
        <Image 
          src={sceneBg} 
          alt="Background Scene" 
          layout="fill" 
          objectFit="cover" 
          quality={100}
          className="opacity-20 mix-blend-multiply"
        />
      </div> */}

      <Navbar />
      <main className="flex-grow w-full relative">{children}</main>
      <Footer />
    </div>
  );
}
