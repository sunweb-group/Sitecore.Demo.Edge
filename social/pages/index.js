import Head from "next/head";
import Link from "next/link";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Demo Social Channel</title>
        <meta name="description" content="Sitecore Demo Social channel" />
        <link rel="icon" href="/favicon.ico" />
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.14.0/css/all.min.css"
        />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>Welcome to the Social Channel</h1>

        <p className={styles.description}>
          Find all your social channel here...
        </p>

        <div className={styles.grid}>
          <Link href="/facebook" passHref>
            <a className={styles.card}>
              <h2>Facebook &rarr;</h2>
              <p>Find in-depth information about Next.js features and API.</p>
            </a>
          </Link>
          <Link href="/twitter" passHref>
            <a className={styles.card}>
              <h2>Twitter &rarr;</h2>
              <p>Learn about Next.js in an interactive course with quizzes!</p>
            </a>
          </Link>
          <Link href="/instagram" passHref>
            <a className={styles.card}>
              <h2>Instagram &rarr;</h2>
              <p>Discover and deploy boilerplate example Next.js projects.</p>
            </a>
          </Link>
          <Link href="/linkedin" passHref>
            <a className={styles.card}>
              <h2>Linkedin &rarr;</h2>
              <p>
                Instantly deploy your Next.js site to a public URL with Vercel.
              </p>
            </a>
          </Link>
        </div>
      </main>

      <footer className={styles.footer}></footer>
    </div>
  );
}
