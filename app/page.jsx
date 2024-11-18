import styles from "./page.module.css";
import Card from "./components/card/card.jsx";

export default function Home() {
  return (
    <div className={styles.page}>
      <Card
        text1="Hello World!"
        text2="This is the 'Home' page of this app. Look around with the navbar!"
      />
    </div>
  );
}
