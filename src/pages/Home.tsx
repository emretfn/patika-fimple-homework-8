import BookList from "../components/BookList";
import SearchInput from "../components/SearchInput";
import { useState } from "react";

function Home() {
  const [search, setSearch] = useState("nutuk");

  return (
    <>
      <SearchInput setSearch={setSearch} />
      <BookList search={search} />
    </>
  );
}

export default Home;
