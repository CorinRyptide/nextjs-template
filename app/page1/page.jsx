import styles from "./page.module.css";
import Card from "../components/card/card.jsx";

export default function Page1() {
  return (
    <div className={styles.page}>
      <Card
        text1="This text card is something called a 'React Component'"
        text2="Components allow you to reuse common designs! You can edit this component at './app/components/card'"
      />
    </div>
  );
}
