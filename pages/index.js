import styles from '../styles/Home.module.css'
import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'

export default function Home() {
  return (
    <>
      <Head>
        <meta charSet="UTF-8" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="shortcut icon" href="/timer.png" type="image/x-icon" />
        <link href='https://unpkg.com/boxicons@2.1.4/css/boxicons.min.css' rel='stylesheet' />
        {/* <link rel="stylesheet" type="text/css" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.1/css/all.min.css" /> */}
        <title>Typing Test : Test and practice your typing skills</title>
      </Head>
      <div onResize={() => display()}>
        <main>
            <section id={styles.hero}>
                <div className={styles.leftSection}>
                    <h1>Master Your Typing Skills in 1 minute</h1>
                    <p className={styles.subtitle}>We have large variety of test and practice sessions which you can perform to practice and test your typing skills. Based on your performance your report will be generated.</p>
                    {/* <a href="./practice.html" className="heroBtn test"> Test Skills <span>&RightArrowBar;</span></a> */}
                    <Link href="/practice" className={`${styles.heroBtn} ${styles.practice}`}> Practice </Link>
                </div>
                <div className={styles.rightSection}>
                    <Image height={400} width={400} src="/heroImage.jpg" alt="Women Typing on the computer. Image by christina morillo" />
                </div>
            </section>

            <section id={styles.features}>
                <div className={styles.feature}>
                    <Image height={100} width={100} src="/timer.png" alt="Time Based Practice Sessions" />
                    <h3>Time Based Practice</h3>
                    <p>You can quantify your skills in a certain interval of time by using timed practise and testing sessions.</p>
                </div>
                <div className={styles.feature}>
                    <Image height={100} width={100} src="/file.png" alt="Paragraph Based Practice Sessions" />
                    <h3>Paragraph Based Practice</h3>
                    <p>You can assess your typing abilities without any time constraints with a paragraph-based session. </p>
                </div>
                <div className={styles.feature}>
                    <Image height={100} width={100} src="/growth-graph.png" alt="Difficulty and Case Selection Sessions" />
                    <h3>Difficulty and Case Selection</h3>
                    <p>There are several alternatives available to test your typing abilities based on the amount of difficulty you choose.</p>
                </div>
            </section>
        </main>
      </div>
    </>
  )
}
