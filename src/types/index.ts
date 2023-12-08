export type BooksResponse = {
  kind: string;
  totalItems: number;
  items: Book[];
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
};

export type ImageLinks = {
  smallThumbnail: string;
  thumbnail: string;
};
