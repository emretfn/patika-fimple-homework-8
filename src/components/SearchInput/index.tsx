import { Search } from "lucide-react";
import styles from "./styles.module.css";
import { useState } from "react";

interface Props {
  setSearch: React.Dispatch<React.SetStateAction<string>>;
}

export default function SearchInput({ setSearch }: Props) {
  const [searchText, setSearchText] = useState("");
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSearch(searchText);
  };
  return (
    <form onSubmit={handleSubmit} className={styles.container}>
      <div className={styles.wrapper}>
        <input
          type="text"
          placeholder="Search book..."
          className={styles.input}
          value={searchText}
          onChange={(e) => setSearchText(e.target.value)}
        />
        <button className={styles.button}>
          <Search />
        </button>
      </div>
    </form>
  );
}
