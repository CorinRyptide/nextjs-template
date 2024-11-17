import styles from "./card.module.css";

export default function Card(props) {
  return (
    <div className={styles.card}>
        <p>{props.text1}</p>
        <p>{props.text2}</p>
    </div>
  );
}