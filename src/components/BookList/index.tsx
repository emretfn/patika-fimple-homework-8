import BookCard from "../BookCard";
import styles from "./styles.module.css";

export default function BookList() {
  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
        <BookCard />
        <BookCard />
        <BookCard />
        <BookCard />
        <BookCard />
      </div>
    </div>
  );
}
