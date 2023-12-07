import axios from "axios";
import { BASE_API_URL } from "../../config";

export const fetchBooks = async (searchQuery: string) => {
  const { data } = await axios.get(`${BASE_API_URL}?q=${searchQuery}`);

  return data;
};

export const fetchBook = async (id: string) => {
  const { data } = await axios.get(`${BASE_API_URL}/${id}`);

  return data;
};
