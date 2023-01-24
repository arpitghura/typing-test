import Head from "next/head";

export default function About () {

    return (
        <>
            <Head>
                <meta charset="UTF-8" />
                <meta http-equiv="X-UA-Compatible" content="IE=edge" />
                <meta name="viewport" content="width=device-width, initial-scale=1.0" />
                <link rel="shortcut icon" href="assets/images/timer.png" type="image/x-icon" />
                <link rel="stylesheet" href="assets/css/index.css" />
                <link rel="stylesheet" href="assets/css/about.css" />
                <link rel="stylesheet" href="assets/css/dark.css" />
                <link href='https://unpkg.com/boxicons@2.1.4/css/boxicons.min.css' rel='stylesheet' />
                <title>About Typing Test</title>
            </Head>
            <div className="light-mode">
                <nav>
                    <div class="navbar">
                        <div class="brand">
                            <a href="./index.html" class="brand-name">Typing Test</a>
                        </div>
                        <div class="navigation">
                            <ul class="main-menu">
                                <li class="nav-item"><a href="practice.html" class="nav-item-link">Practice</a></li>
                                <li class="nav-item"><a href="about.html" class="nav-item-link">About</a></li>
                                <li class="nav-item"><a href="profile.html" class="nav-item-link">Profile</a></li>
                            </ul>
                        </div>
                        <div class="nav-right">
                            <div class="github-icon">
                                <a href="https://github.com/arpitghura/typing-test" class="nav-item-link"><i class='bx bx-sm bxl-github'></i></a>
                            </div>
                            <button onclick="toggleLightDarkMode()" class="dark-btn">Dark Mode</button>     
                        </div>
                        <div class="mobile-nav">
                            <div class="bar1"></div>
                            <div class="bar2"></div>
                            <div class="bar3"></div>
                        </div>
                    </div>
                </nav>
                <div class="about">
                    <h1>About</h1>
                    <div class="subtitle">
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
                    <a href="./practice.html" class="heroBtn practice"> Practice </a>
                </div>
                <footer>
                    <p>Made with &hearts; by Arpit Ghura. All Rights Reserved &copy;
                        <span id="copyright">
                            {new Date().getFullYear()}
                        </span>
                    </p>
                </footer>
            </div>
        </>
    )
}