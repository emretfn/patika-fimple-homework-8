import BookList from "./components/BookList";
import SearchInput from "./components/SearchInput";
import { useState } from "react";

function App() {
  const [search, setSearch] = useState("nutuk");

  return (
    <>
      <SearchInput setSearch={setSearch} />
      <BookList search={search} />
    </>
  );
}

export default App;
