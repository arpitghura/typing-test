import Head from "next/head"
import styles from "../styles/Practice.module.css"

export default function Practice() {
    return (
        <>
        <Head>
            <meta charset="UTF-8" />
            <meta http-equiv="X-UA-Compatible" content="IE=edge" />
            <meta name="viewport" content="width=device-width, initial-scale=1.0" />
            <link rel="shortcut icon" href="/timer.png" type="image/x-icon" />
            <link rel="stylesheet" href="assets/css/index.css" />
            <link rel="stylesheet" href="assets/css/practice.css" />
            <link rel="stylesheet" href="assets/css/dark.css" />
            <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css" />
            <link href='https://unpkg.com/boxicons@2.1.4/css/boxicons.min.css' rel='stylesheet' />
            <title>Practice | Practice your typing skills at ease</title>
        </Head>
        <div className={styles.lightMode}>
            <div class={styles.content}>
                <div class={styles.container}>
                    <div id={styles.userHeader}>
                        <h1 class={styles.heading}>Typing Test</h1>
                        <div class={styles.userDetails}>
                            <h2 id={styles.greetUser}></h2>
                        </div>
                        <h2 class={styles.subtitle}>Practice your typing skills!</h2>
                    </div>

                    <div class={styles.dynamicTextBox}>
                        <p id={styles.quote}></p>
                    </div>

                    <div id={styles.levelSelector}>
                        <h3>Choose difficulty level:</h3>
                        <label class={styles.difficultyLevelSelectorBtn} id={styles.easy}>
                            <input type="radio" id="easyLvlBtn" name="radio-button" />
                            <span for="easyLvlBtn" class="radio-label">Easy</span>
                        </label>
                        <label class={styles.difficultyLevelSelectorBtn} id={styles.intermed}>
                            <input type="radio" id="interLvlBtn" name="radio-button" />
                            <span for="interLvlBtn" class="radio-label">Intermediate</span>
                        </label>
                        <label class={styles.difficultyLevelSelectorBtn} id={styles.hard}>
                            <input type="radio" id="hardLvlBtn" name="radio-button" />
                            <span for="hardLvlBtn" class="radio-label">Hard</span>
                        </label>
                    </div>

                    <div id={styles.timingSessionChoose}>
                        <h2>Choose Time Duration</h2>
                            <ul class={styles.timerListUL}>
                                <label class={styles.timerSelector}>
                                    <input type="radio" id="onemin" name="time-button" />
                                    <span for="onemin" class={styles.radioLabel}>1 minute</span>
                                </label>
                                <label class={styles.timerSelector}>
                                    <input type="radio" id="twomin" name="time-button" />
                                    <span for="twomin" class={styles.radioLabel}>2 minute</span>
                                </label>
                                <label class={styles.timerSelector}>
                                    <input type="radio" id="fivemin" name="time-button" />
                                    <span for="fivemin" class={styles.radioLabel}>5 minute</span>
                                </label>
                            </ul>
                    </div>
                
                    <div class={styles.startBtn}>
                        <button id={styles.startBtn}>START</button><br />
                        <h3 class={styles.startIns}> Press Space to Start</h3>
                        <button id={styles.resetBtn}>RESET</button>
                    </div>
                    <div id={styles.messages}>
                        <p id={styles.message}></p><br />
                        <p id={styles.speed}></p>
                    </div>
                </div>
                
                <div class={styles.userInputBox} id="userInputBox">
                    <input type="text" name="user-input" id={styles.userInput} />
                </div>

                <div class={styles.nameModal} id="element">
                    <span class="prompt">Enter Your Username: </span>
                    <input type="text" name="userName" id="userName" required />
                    <input type="submit" value="Save and Go" id="nameSubmitBtn" />
                </div>
            </div>
        </div>
        </>
    )
}