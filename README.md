# React Movie Cards

A responsive React application that displays movie cards in a clean, modern layout. Each card shows a movie's title, subtitle, description, poster image, and rating.

## Features

- Responsive layout (cards stack on mobile, display in rows on desktop)
- Star rating system with visual stars
- Color-coded rating badges
- Modern UI with hover effects
- Mixed styling approaches (CSS Modules, inline styles, and Tailwind CSS)

## Technologies Used

- React (Functional Components)
- Tailwind CSS for utility-first styling
- CSS Modules for component-specific styling
- Inline styles for dynamic styling

## Project Structure

```
src/
├── components/
│   ├── Header.jsx          # Site header with navigation
│   ├── MovieCard.jsx       # Individual movie card component
│   ├── MovieGrid.jsx       # Grid layout for movie cards
│   └── styles/
│       └── MovieCard.module.css  # CSS module for MovieCard
├── data/
│   └── moviesData.js       # Sample movie data
├── App.js                  # Main application component
└── index.js                # Application entry point
```

## Getting Started

1. Clone the repository
2. Install dependencies: `npm install`
3. Start the development server: `npm start`
4. Open [http://localhost:3000](http://localhost:3000) to view it in the browser

## Styling Approach

This project demonstrates three different styling approaches in React:

1. **Tailwind CSS**: Used for the overall layout, header, and utility classes
2. **CSS Modules**: Used for the MovieCard component's base styling
3. **Inline Styles**: Used for dynamic elements like the rating badge

## Screenshot

![Movie Cards Screenshot](screenshot.png)
*(Note: Screenshot will be available after you run the project)*

## License

MIT
