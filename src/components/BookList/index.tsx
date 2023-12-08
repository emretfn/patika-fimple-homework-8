import BookCard from "../BookCard";
import styles from "./styles.module.css";
import { fetchBooks } from "../../apis/books";
import { useQuery } from "@tanstack/react-query";
import { BooksResponse } from "../../types";

export default function BookList({ search }: { search: string }) {
  const { data, isLoading, isError } = useQuery<BooksResponse>({
    queryKey: ["books", search],
    queryFn: () => fetchBooks(search),
    enabled: !!search,
  });

  if (isLoading) return <div>Loading...</div>;

  if (isError) return <div>Error</div>;

  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
        {data?.items.map((book) => (
          <BookCard key={book.id} book={book} />
        ))}
      </div>
    </div>
  );
}
