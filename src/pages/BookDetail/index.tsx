import { X } from "lucide-react";
import styles from "./styles.module.css";
import { useNavigate, useParams } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import { fetchBook } from "../../apis/books";
import { BookDetailResponse } from "../../types";
import fallbackImage from "../../../public/default-fallback-image.png?url";

export default function BookDetail() {
  const navigate = useNavigate();
  const params = useParams();

  const { data, isLoading, error } = useQuery<BookDetailResponse>({
    queryKey: ["book", params.bookId],
    queryFn: async () => fetchBook(params.bookId!),
    enabled: !!params?.bookId,
  });

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error...</div>;
  }

  console.log(data);

  return (
    <div className={styles.container}>
      <div className={styles.imageSection}>
        <img src={data?.volumeInfo.imageLinks?.thumbnail ?? fallbackImage} alt="" />
      </div>
      <div className={styles.contentSection}>
        <h1 className={styles.title}>{data?.volumeInfo.title}</h1>
        <h2 className={styles.author}>{data?.volumeInfo.authors[0]}</h2>
        {data?.volumeInfo.description && (
          <p
            className={styles.description}
            dangerouslySetInnerHTML={{ __html: data?.volumeInfo.description }}
          />
        )}
        <p className={styles.pageCount}>
          <span>Sayfa Sayısı:</span> 100
        </p>
        <p className={styles.publisher}>
          <span>Yayınevi:</span> İş Bankası Kültür Yayınları
        </p>
        <p className={styles.publishedDate}>
          <span>Yayın Tarihi:</span> 2016
        </p>
      </div>

      <button onClick={() => navigate(-1)}>
        <X />
      </button>
    </div>
  );
}
