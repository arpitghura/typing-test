import styles from "../styles/Navbar.module.css"
import Link from "next/link"

export default function Navbar() {
    return (
        <nav>
            <div className={styles.navbar}>
                <div className={styles.brand}>
                    <Link href="/" className={styles.brandName}>Typing Test</Link>
                </div>
                <div className={styles.navigation}>
                    <ul className={styles.mainMenu}>
                        <li className={styles.navItem}><Link href="/practice" className={styles.navItemLink}>Practice</Link></li>
                        <li className={styles.navItem}><Link href="/about" className={styles.navItemLink}>About</Link></li>
                        <li className={styles.navItem}><Link href="/profile" className={styles.navItemLink}>Profile</Link></li>
                    </ul>
                </div>
                <div className={styles.navRight}>
                    <div className={styles.githubIcon}>
                        <a href="https://github.com/arpitghura/typing-test" className={styles.navItemLink}><i className='bx bx-sm bxl-github'></i></a>
                    </div>
                    <button onClick="toggleLightDarkMode()" className={styles.darkBtn}>Dark Mode</button>     
                </div>
                <div className={styles.mobileNav}>
                    <div className={styles.bar1}></div>
                    <div className={styles.bar2}></div>
                    <div className={styles.bar3}></div>
                </div>
            </div>
        </nav>
    )
}