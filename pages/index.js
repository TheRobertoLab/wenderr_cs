import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Wenderr | Local Crafts and Services</title>
        <meta name="description" content="A great platform for local artisans and service providers" />
        <link rel="icon" href="/Wenderr.png" />
      </Head>

      <main className={styles.main}>
        <Image src="/Logo.svg" width="200" height="100" />

        <h1 style={{ margin: 0 }}>Coming Soon</h1>
        <p>A great platform for local artisans and service providers</p>
        <footer className={styles.footer}>

          <p>All rights reserved</p>

        </footer>
      </main>
    </div>
  )
}
