import Link from "next/link";
import styles from "./navbar.module.css";

export default function Navbar() {
  return (
    <div>
        <ul className={styles.navbar}>  
            <li>
                <Link href="/" className={styles.navbarbtn}>
                    <p>Home</p>
                </Link>
            </li>
            <li>
                <Link href="/page1" className={styles.navbarbtn}>
                    <p>Page 1</p>
                </Link>
            </li>
            <li>  
                <Link href="/page2" className={styles.navbarbtn}>
                    <p>Page 2</p>
                </Link>
            </li>
            <li>
                <Link href="/page3" className={styles.navbarbtn}>
                    <p>Page 3</p>
                </Link>
            </li>   
        </ul>
    </div>
  );
};