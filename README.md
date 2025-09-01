# ALX Listing App

## Project Description
The ALX Listing App project aims to scaffold and lay the foundational structure for a modern Airbnb clone. This initial milestone focuses on setting up a well-organized and scalable codebase using Next.js, TypeScript, TailwindCSS, and ESLint. By establishing a clean folder structure, reusable components, and adhering to best practices, the project ensures a solid starting point for building a dynamic, responsive, and user-friendly property listing page.

## Project Structure
* `components/`: Contains reusable React components.
    * `common/`: For general-purpose, widely used components like `Card` and `Button`.
* `interfaces/`: Defines TypeScript interfaces for ensuring type safety and consistency across data structures and component props.
* `constants/`: Stores reusable data, configuration settings, API URLs, and static text.
* `public/assets/`: Holds static assets such as images and SVG files, accessible directly via the root URL.
* `pages/`: Next.js core directory for defining routes (Pages Router).
* `styles/`: Global CSS files, including Tailwind CSS imports.
* `tailwind.config.js`: Tailwind CSS configuration.
* `postcss.config.js`: PostCSS configuration.
* `.eslintrc.json`: ESLint configuration for code quality.
* `tsconfig.json`: TypeScript configuration.

## How to Run the Project Locally

1.  **Clone the repository:**
    ```bash
    git clone [https://github.com/KoketsoPhiri/alx-listing-app.git](https://github.com/KoketsoPhiri/alx-listing-app.git)
    ```
2.  **Navigate into the project directory:**
    ```bash
    cd alx-listing-app
    ```
3.  **Install dependencies:**
    ```bash
    npm install
    # or yarn install
    # or pnpm install
    ```
4.  **Run the development server:**
    ```bash
    npm run dev
    ```
5.  **Open in browser:**
    Navigate to `http://localhost:3000` in your web browser.