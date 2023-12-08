import { Book } from "../../types";
import styles from "./styles.module.css";
import fallBackImage from "../../../public/default-fallback-image.png?url";
import { Link } from "react-router-dom";

interface BookCardProps {
  book: Book;
}

export default function BookCard({ book }: BookCardProps) {
  return (
    <Link to={`/${book.id}`} className={styles.container}>
      <img
        className={styles.image}
        // todo: add fallback image
        src={book.volumeInfo.imageLinks ? book.volumeInfo.imageLinks.thumbnail : fallBackImage}
      />

      <div className={styles.content}>
        <h2 className={styles.title}>{book.volumeInfo.title}</h2>
        <h3 className={styles.author}>{book.volumeInfo.authors?.[0]}</h3>
      </div>
    </Link>
  );
}
