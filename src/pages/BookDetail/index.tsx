import { X } from "lucide-react";
import styles from "./styles.module.css";
import { useNavigate } from "react-router-dom";

export default function BookDetail() {
  const navigate = useNavigate();
  return (
    <div className={styles.container}>
      <div className={styles.imageSection}>
        <img
          src="https://books.google.com/books/publisher/content?id=VbjHDAAAQBAJ&printsec=frontcover&img=1&zoom=4&edge=curl&imgtk=AFLRE70nqvnkXqRcbMypp4ir_kEB2KLh35n-_Tv8hOcusRytuqTVguYsbhfZ67p5jYwGcedF8Lzz7B4aS4hsccw6rYpNfRIpu10h_ubyzQE96AKex0DEvuiYqFuO6cYOVkoOBNtbM3Gt&source=gbs_api"
          alt=""
        />
      </div>
      <div className={styles.contentSection}>
        <h1 className={styles.title}>Nutuk</h1>
        <h2 className={styles.author}>Mustafa Kemal Atatürk</h2>
        <p className={styles.description}>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Temporibus, excepturi eos?
          Dolore labore accusantium reiciendis eius officia voluptatem ratione veniam voluptas
          explicabo autem unde earum nesciunt, repellat consequuntur perspiciatis ea inventore!
          Illum placeat pariatur, esse adipisci id cumque modi eveniet dolorum repudiandae
          perferendis, numquam in quia rerum accusamus repellendus laboriosam.
        </p>
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
