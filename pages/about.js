import Head from "next/head";
import Link from "next/link";
import homeStyles from "../styles/Home.module.css";
import styles from "../styles/About.module.css";
import darkStyles from "../styles/Dark.module.css";

export default function About () {

    return (
        <>
            <Head>
                <meta charset="UTF-8" />
                <meta http-equiv="X-UA-Compatible" content="IE=edge" />
                <meta name="viewport" content="width=device-width, initial-scale=1.0" />
                <link rel="shortcut icon" href="assets/images/timer.png" type="image/x-icon" />
                <link href='https://unpkg.com/boxicons@2.1.4/css/boxicons.min.css' rel='stylesheet' />
                <title>About Typing Test</title>
            </Head>
            <div className={styles.lightMode}>
                <div className={homeStyles.about}>
                    <h1>About</h1>
                    <div className={homeStyles.subtitle}>
                    <p> 
                    Typing Test is an open-source project created by <i>Arpit Ghura</i>.
                    The purpose of this community project is to collaborate with web developers from around the world.
                    We aim to build a valuable tool to practice and improve typing skills. Which will help you in further coding and in many government exams.
                    If you want to contribute to our project, click on the <i>GitHub</i> link at the top right of the page.
                    </p>
                    <br />
                    <h2>How it works</h2>
                    <p> 
                    To test your skills smash the practice button then first enter a username. Then choose difficulty and duration of the test. You will then be prompted to type a series of random characters.
                    To advance to the next section, enter the correct characters and press the space bar. Your final score will be displayed when you reach the end.
                    </p>
                    </div>
                    <Link href="/practice" className={`${homeStyles.heroBtn} ${homeStyles.practice}`}> Practice </Link>
                </div>
                <footer className={homeStyles.footer}>
                    <p>Made with &hearts; by Arpit Ghura. All Rights Reserved &copy;
                        <span id={styles.copyright}>
                            {" "}{new Date().getFullYear()}
                        </span>
                    </p>
                </footer>
            </div>
        </>
    )
}