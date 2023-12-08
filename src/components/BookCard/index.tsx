import { Book } from "../../types";
import styles from "./styles.module.css";
import fallBackImage from "../../../public/default-fallback-image.png?url";

interface BookCardProps {
  book: Book;
}

export default function BookCard({ book }: BookCardProps) {
  return (
    <div className={styles.container}>
      <img
        className={styles.image}
        // todo: add fallback image
        src={book.volumeInfo.imageLinks ? book.volumeInfo.imageLinks.thumbnail : fallBackImage}
      />

      <div className={styles.content}>
        <h2 className={styles.title}>{book.volumeInfo.title}</h2>
        <h3 className={styles.author}>
          {book.volumeInfo?.authors?.map((author) => (
            <span key={author}>{author}</span>
          ))}
        </h3>
      </div>
    </div>
  );
}
