import { Link } from "react-router-dom";
import logo from "../../assets/logo.png";
import styles from "./header.module.css";

export function Header() {

    return (
        <header className={styles.header}>

            <img src={logo} alt="Breaking Bad" title="Breaking Bad" />

            <nav className={styles.menu}>
                <Link to="/">Home</Link>
                <Link to="/bb">Breaking Bad</Link>
                <Link to="/bcs">Better Call Saul</Link>
            </nav>

        </header>
    )
}