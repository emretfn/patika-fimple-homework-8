export type BooksResponse = {
  kind: string;
  totalItems: number;
  items: Book[];
};

export type BookDetailResponse = {
  id: string;
  volumeInfo: VolumeInfo;
};

export type Book = {
  id: string;
  volumeInfo: VolumeInfo;
};

export type VolumeInfo = {
  title: string;
  authors: string[];
  subtitle: string;
  imageLinks?: ImageLinks;
  description?: string;
  pageCount?: number;
  publisher?: string;
  publishedDate?: string;
};

export type ImageLinks = {
  smallThumbnail: string;
  thumbnail: string;
  small?: string;
  medium?: string;
  large?: string;
};
