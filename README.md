# Text Search App

A clean, minimal frontend application for searching through articles with real-time text highlighting, built with React and TypeScript.

## Features

- **Real-time Search**: Instant filtering as you type
- **Text Highlighting**: Matched search terms are highlighted in yellow
- **Case-insensitive**: Search works regardless of case
- **Responsive Design**: Works beautifully on all device sizes
- **Clean UI**: Minimal, modern design inspired by popular blog platforms

## How to Run

### Prerequisites
- Node.js (v16 or higher)
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd text-search-app
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Open your browser and navigate to `http://localhost:8080`

## How It Works

### Search Functionality
The app implements real-time search through a constant array of articles stored in `src/data/articles.ts`. The search algorithm:

1. **Filters articles** based on matches in title, content, or author fields
2. **Case-insensitive matching** using `toLowerCase()` comparison
3. **Real-time updates** using React's `useMemo` hook for performance

### Text Highlighting
The highlighting functionality is implemented in `src/utils/searchUtils.tsx`:

1. **Text splitting**: Uses regex to split text around matched terms
2. **Safe regex**: Escapes special characters to prevent regex errors  
3. **JSX rendering**: Wraps matched text in `<mark>` elements with custom styling
4. **Preserved formatting**: Maintains original text structure while adding highlights

### Key Components

- **SearchBox**: Input component with search icon and focus states
- **ArticleCard**: Displays individual articles with highlighted matches
- **SearchResults**: Manages the list of filtered articles and result counts

### Design System
- Uses semantic color tokens defined in `src/index.css`
- Yellow highlight color (`--highlight`) for search matches
- Consistent spacing and typography throughout
- Smooth hover animations and transitions

## Architecture

```
src/
├── components/          # Reusable UI components
│   ├── SearchBox.tsx   # Search input component
│   ├── ArticleCard.tsx # Individual article display
│   └── SearchResults.tsx # Results list and empty states
├── data/               # Static data
│   └── articles.ts     # Article data array
├── utils/              # Utility functions
│   └── searchUtils.tsx # Search and highlight logic
└── pages/              # Page components
    └── Index.tsx       # Main application page
```

## Technologies Used

- **React 18** - Component library
- **TypeScript** - Type safety
- **Tailwind CSS** - Styling system
- **Vite** - Build tool and dev server
- **Lucide React** - Icons
- **shadcn/ui** - UI component library

## Search Tips

- Search is **case-insensitive**
- Matches are found in **title**, **content**, and **author** fields
- Multiple words are treated as a single search phrase
- Special characters are automatically escaped for safe searching

## Future Enhancements

- Add search filters (by author, date range)
- Implement search result sorting options
- Add keyboard shortcuts for search
- Include reading time estimates
- Add search history/suggestions