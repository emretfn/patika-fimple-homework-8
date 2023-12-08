import { Search } from "lucide-react";
import styles from "./styles.module.css";
import { useState } from "react";
import { useSearch } from "../../hooks/useSearch";

export default function SearchInput() {
  const [searchText, setSearchText] = useState("");
  const setSearch = useSearch((state) => state.setSearch);
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
