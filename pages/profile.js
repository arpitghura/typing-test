import Head from "next/head"
import styles from "../styles/Profile.module.css"
import { useAppContext } from "../components/context"

export default function Profile() {
    const [user, setUser] = useAppContext()

    return (
        <>
            <Head>
                <meta charSet="UTF-8" />
                <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
                <meta name="viewport" content="width=device-width, initial-scale=1.0" />
                <link rel="shortcut icon" href="assets/images/timer.png" type="image/x-icon" />
                <link rel="stylesheet" href="assets/css/index.css" />
                <link rel="stylesheet" href="assets/css/profile.css" />
                <link rel="stylesheet" href="assets/css/practice.css" />
                <link rel="stylesheet" href="assets/css/dark.css" />
                <link href='https://unpkg.com/boxicons@2.1.4/css/boxicons.min.css' rel='stylesheet' />
                <title>Profile - Typing Master</title>
            </Head>
            <div class="light-mode">
                <section id="hero element2">
                    <div class={styles.container}>
                        <h1 class={styles.heading}>Profile Details</h1>
                        <h2 class={styles.subtitle} id={styles.username}></h2>
                        <p id={styles.navigateUserText}></p>
                    </div>
                    <div class={styles.history}>
                        <h2 class={styles.historyHeading}>History</h2>
                        <div class={styles.historyTable}>
                            <table>
                                <thead>
                                    <tr>
                                        <th className={styles.th}>Speed (wpm)</th>
                                        <th className={styles.th}>Time Taken (Minutes)</th>
                                        <th className={styles.th}>Difficulty Level</th>
                                    </tr>
                                </thead>
                                <tbody id={styles.historyTableBody}>
                                </tbody>
                            </table>
                        </div>
                        <div class={styles.hr}></div>
                        <div class={styles.historyAvg}>
                            <table>
                                <thead>
                                    <tr>
                                        <th className={styles.th}>Average Speed (wpm)</th>
                                        <th className={styles.th}>Average Time Taken (Minutes)</th>
                                    </tr>
                                </thead>
                                <tbody id={styles.avgTableBody}>
                                </tbody>
                            </table>
                        </div>
                        <button id={styles.historyResetBtn}>Reset Data</button>
                    </div>
                </section>
            </div>
        </>
    )
}