import styles from "./styles.module.css";
export default function BookCard() {
  return (
    <div className={styles.container}>
      <img
        className={styles.image}
        src="https://books.google.com/books/publisher/content?id=VbjHDAAAQBAJ&printsec=frontcover&img=1&zoom=2&edge=curl&imgtk=AFLRE71oCii4TNqFPUAyDLe06Nju9Z2XgtgzD4PTHdz70PNeO3bhjaK2pj8DA4CzTUTnTDI_CgZc8LJUEkRpyaiSIFjsBlnUhWe82LgSQFdSfM6GzkDOlvTK1iE5Hmofre3Pk9oacDBl&source=gbs_api"
      />

      <div className={styles.content}>
        <h2 className={styles.title}>Nutuk</h2>
        <h3 className={styles.author}>Mustafa Kemal Atatürk</h3>
      </div>
    </div>
  );
}
