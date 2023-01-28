import styles from "../styles/Footer.module.css"

export default function Footer() {
    return (
        <footer className={styles.footer}>
            <p>
                Made with &hearts; by Arpit Ghura. All Rights Reserved &copy;{" "}
                <span id={styles.copyright}>
                    {new Date().getFullYear()}
                </span>
            </p>
        </footer>
    )
}