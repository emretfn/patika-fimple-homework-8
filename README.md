# Book Search Application

This project is a book search application where users can search for books and view their details. The project is built with React and TypeScript and is configured with Vite.

## See Live

The live version of the project can be accessed at [here](https://patika-fimple-homework-8.vercel.app)

## Project Structure

- `src/apis/books`: Contains the book search API.
- `src/components`: Contains the React components of the application. This includes components like `BookList` for listing books and `SearchInput` for providing the search functionality.
- `src/hooks`: Contains custom React hooks. This includes the `useSearch` hook for managing the search state.
- `src/pages`: Contains the pages of the application. This includes the home page and the book detail page.
- `src/routes`: Contains the routes of the application.

## Installation

1. Clone the project.
2. Run the `npm install` or `pnpm install` command.
3. Create a `.env.local` file and add the necessary environment variables.
4. Run the `npm run dev` or `pnpm run dev` command.

## Usage

On the main page, enter a book name into the search box and press the Enter key. The search results will be listed below. When you click on a book, you will be redirected to the book's detail page.
