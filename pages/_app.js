import '../styles/globals.css';
import Head from 'next/head';
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
      <Head>
        <link rel="icon" href="https://avatars.githubusercontent.com/u/82316591?v=4" />
      </Head>
      <Layout>
        <Component {...pageProps} />
      </Layout>
      <Analytics />
    </main>
  );
}

export default MyApp;
