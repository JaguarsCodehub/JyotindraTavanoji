import '../styles/globals.css';
import { Raleway } from 'next/font/google';
import { Analytics } from '@vercel/analytics/react';
import Layout from '../components/Layout';

const raleway = Raleway({ subsets: ['latin'], variable: '--font-raleway' });

function MyApp({ Component, pageProps }) {
  return (
    <main className={`${raleway.variable} font-sans`}>
      <Layout>
        <Component {...pageProps} />
      </Layout>
      <Analytics />
    </main>
  );
}

export default MyApp;
