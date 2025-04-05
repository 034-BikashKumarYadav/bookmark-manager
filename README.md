# Personal Bookmark Manager

Welcome to the Personal Bookmark Manager! This application allows you to manage your bookmarks efficiently and enjoyably. Below are the details regarding setup, features, and usage.

## Features

- **View Bookmarks**: See all your saved bookmarks in a clean list or grid format.
- **Add Bookmarks**: Easily add new bookmarks with a title, URL, and category.
- **Remove Bookmarks**: Delete bookmarks you no longer need.
- **Filter by Category**: Filter bookmarks based on categories or tags.
- **Light/Dark Mode**: Switch between light and dark themes for a comfortable viewing experience.

## Technologies Used

- **Next.js**: A React framework for server-side rendering and static site generation.
- **TypeScript**: A strongly typed programming language that enhances JavaScript.
- **Tailwind CSS**: A utility-first CSS framework for building custom user interfaces.

## Setup Instructions

1. Ensure you have Node.js installed (version 14.x or higher).
2. Clone the repository:
   ```
   git clone https://github.com/yourusername/bookmark-manager.git
   ```
3. Navigate to the project directory:
   ```
   cd bookmark-manager
   ```
4. Install the dependencies:
   ```
   npm install
   ```
5. Start the development server:
   ```
   npm run dev
   ```
6. Open your browser and go to [http://localhost:3000](http://localhost:3000) to see the application in action.

## File Structure

```
bookmark-manager
├── public
│   └── favicon.ico
├── src
│   ├── components
│   │   ├── BookmarkFilter.tsx
│   │   ├── BookmarkForm.tsx
│   │   ├── BookmarkList.tsx
│   │   └── ThemeToggle.tsx
│   ├── pages
│   │   └── index.tsx
│   ├── styles
│   │   └── globals.css
│   ├── types
│   │   └── Bookmark.ts
│   └── utils
│       └── localStorage.ts
├── .eslintrc.json
├── next.config.js
├── package.json
├── postcss.config.js
├── tailwind.config.js
├── tsconfig.json
└── README.md
```

## Usage

- To add a bookmark, fill out the form with the title, URL, and category, then submit.
- Use the filter component to view bookmarks by category.
- Click on a bookmark title to open the URL in a new tab.
- Toggle between light and dark mode using the theme toggle button.

## License

This project is open-source and available under the MIT License. Feel free to contribute and make it better!