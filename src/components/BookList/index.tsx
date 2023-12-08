import BookCard from "../BookCard";
import styles from "./styles.module.css";
import { fetchBooks } from "../../apis/books";
import { useQuery } from "@tanstack/react-query";
import { BooksResponse } from "../../types";
import { useSearch } from "../../hooks/useSearch";
import { Loader2 } from "lucide-react";

export default function BookList() {
  const searchQuery = useSearch((state) => state.search);
  const { data, isLoading, isError } = useQuery<BooksResponse>({
    queryKey: ["books", searchQuery],
    queryFn: () => fetchBooks(searchQuery),
    enabled: !!searchQuery,
  });

  if (isError) return <div>Error</div>;

  return (
    <div className={styles.container}>
      {isLoading ? (
        <div className={styles.loader}>
          <Loader2 className="animate-spin" />
        </div>
      ) : (
        <div className={styles.wrapper}>
          {data?.items.map((book) => (
            <BookCard key={book.id} book={book} />
          ))}
        </div>
      )}
    </div>
  );
}
