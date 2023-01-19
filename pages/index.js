import styles from '../styles/Home.module.css'
import Head from 'next/head'
import Image from 'next/image'

export default function Home() {
  return (
    <>
      <Head>
        <meta charset="UTF-8" />
        <meta http-equiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="shortcut icon" href="assets/images/timer.png" type="image/x-icon" />
        <link rel="stylesheet" href="assets/css/index.css" />
        <link href='https://unpkg.com/boxicons@2.1.4/css/boxicons.min.css' rel='stylesheet' />
        <link rel="stylesheet" type="text/css" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.1/css/all.min.css" />
        <title>Typing Test : Test and practice your typing skills</title>
      </Head>
      <div onresize="display()">
        <nav>
            <div className={styles.navbar}>
                <div className={styles.brand}>
                    <a href="./index.html" className={styles.brandName}>Typing Test</a>
                </div>
                <div className={styles.navigation}>
                    <ul className={styles.mainMenu}>
                        <li className={styles.navItem}><a href="practice.html" className="nav-item-link">Practice</a></li>
                        <li className={styles.navItem}><a href="about.html" className="nav-item-link">About</a></li>
                        <li className={styles.navItem}><a href="profile.html" className="nav-item-link">Profile</a></li>
                    </ul>
                </div>
                <div className="github-icon">
                    <a href="https://github.com/arpitghura/typing-test" className="nav-item-link"><i className='bx bx-sm bxl-github'></i></a>
                </div>
                <div className="mobile-nav">
                    <div className="bar1"></div>
                    <div className="bar2"></div>
                    <div className="bar3"></div>
                </div>
            </div>
        </nav>
        <main>
            <section id="hero">
                <div className="left-section">
                    <h1>Master Your Typing Skills in 1 minute</h1>
                    <p className="subtitle">We have large variety of test and practice sessions which you can perform to practice and test your typing skills. Based on your performance your report will be generated.</p>
                    {/* <a href="./practice.html" className="heroBtn test"> Test Skills <span>&RightArrowBar;</span></a> */}
                    <a href="./practice.html" className="heroBtn practice"> Practice </a>
                </div>
                <div className="right-section">
                    <Image height={552} width={552} src="/heroImage.jpg" alt="Women Typing on the computer. Image by christina morillo" />
                </div>
            </section>

            <section id="features">
                <div className="feature">
                    <img src="/timer.png" alt="Time Based Practice Sessions" />
                    <h3>Time Based Practice</h3>
                    <p>You can quantify your skills in a certain interval of time by using timed practise and testing sessions.</p>
                </div>
                <div className="feature">
                    <img src="/file.png" alt="Paragraph Based Practice Sessions" />
                    <h3>Paragraph Based Practice</h3>
                    <p>You can assess your typing abilities without any time constraints with a paragraph-based session. </p>
                </div>
                <div className="feature">
                    <img src="/growth-graph.png" alt="Difficulty and Case Selection Sessions" />
                    <h3>Difficulty and Case Selection</h3>
                    <p>There are several alternatives available to test your typing abilities based on the amount of difficulty you choose.</p>
                </div>
            </section>
        </main>

        <footer id='footer'>
            <p>
                Made with &hearts; by Arpit Ghura. All Rights Reserved &copy; 
                <span id="copyright">
                    2022
                    {/* <script>document.getElementById('copyright').appendChild(document.createTextNode(new Date().getFullYear()))</script> */}
                </span>
            </p>
        </footer>
      </div>
    </>
  )
}
