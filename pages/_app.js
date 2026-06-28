import '../styles/globals.css';
import { Montserrat } from 'next/font/google';
import { Analytics } from '@vercel/analytics/react';
import Layout from '../components/Layout';

const montserrat = Montserrat({ 
  subsets: ['latin'], 
  variable: '--font-montserrat' 
});

function MyApp({ Component, pageProps }) {
  return (
    <main className={`${montserrat.variable} font-sans`}>
      <Layout>
        <Component {...pageProps} />
      </Layout>
      <Analytics />
    </main>
  );
}

export default MyApp;
