import styles from "./page.module.css";
import Counter from "../components/counter/counter.jsx";

export default function Page3() {
  return (
    <div className={styles.page}>
      <Counter/>
    </div>
  );
}
