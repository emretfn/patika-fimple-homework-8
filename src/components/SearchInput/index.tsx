import { Search } from "lucide-react";
import styles from "./styles.module.css";

export default function SearchInput() {
  return (
    <form className={styles.container}>
      <div className={styles.wrapper}>
        <input type="text" placeholder="Search book..." className={styles.input} />
        <button className={styles.button}>
          <Search />
        </button>
      </div>
    </form>
  );
}
