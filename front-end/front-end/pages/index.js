import Head from 'next/head';
import Image from 'next/image'
import styles from '../styles/Layout.module.css'

export default function Home() {
  return (
      <div>
        <Head>
          <title>Northern Herpetoculture</title>
          <meta name='keywords' content='Reptiles, Geckos, Pets Store, Animals, Herpetology, Lizards' />
        </Head>
        <h1>Welcome to Northern Herpetoculture</h1>
      </div>
  )
}
