import Head from 'next/head';
import Layout from '../components/Layout';
import '../styles/globals.css';

function MyApp({ Component, pageProps }) {
  return (
      <div>
          <Head>
              <meta name='keywords' content='Reptiles, Geckos, Pets Store, Animals, Herpetology, Lizards' />
          </Head>
      <Layout>
        <Component {...pageProps} />
      </Layout>
      </div>
  )
}

export default MyApp
