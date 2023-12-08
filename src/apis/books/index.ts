import axios from "axios";
import { BASE_API_URL } from "../../config";

export const fetchBooks = async (searchQuery: string) => {
  const { data } = await axios.get(`${BASE_API_URL}?q=${searchQuery}&maxResults=24`);

  return data;
};

export const fetchBook = async (id: string) => {
  const { data } = await axios.get(`${BASE_API_URL}/${id}`);

  return data;
};
