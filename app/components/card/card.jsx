import styles from "./card.module.css";

export default function Card(props) {
  return (
    <div className={styles.card}>
      <h1>{props.text1}</h1>
      <p>{props.text2}</p>
    </div>
  );
}
