import styles from "./page.module.css";
import Card from "../components/card/card.jsx";

export default function Page2() {
  return (
    <div className={styles.page}>
      <Card
        text1="Try to mess around with styling!"
        text2="Try making the background of this page blue (./page2/page.module.css)! Also try messing around with the styles on this card component!"
      />
    </div>
  );
}
