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
2. Navigate to the project directory.
3. Run the `pnpm install` command to install the necessary dependencies.
4. Create a `.env.local` file in the root directory of the project.
5. Inside the `.env.local` file, add the `VITE_API_URL` variable and set it to the URL of your API.
6. Run the `pnpm run dev` command to start the development server.

## Usage

On the main page, enter a book name into the search box and press the Enter key. The search results will be listed below. When you click on a book, you will be redirected to the book's detail page.
