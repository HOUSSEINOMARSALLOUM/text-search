import React, { useState, useMemo } from 'react';
import { SearchBox } from '@/components/SearchBox';
import { SearchResults } from '@/components/SearchResults';
import { articles } from '@/data/articles';
import { searchArticles } from '@/utils/searchUtils';

const Index = () => {
  const [searchTerm, setSearchTerm] = useState('');

  const filteredArticles = useMemo(() => {
    return searchArticles(articles, searchTerm);
  }, [searchTerm]);

  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-4 py-8">
        {/* Header */}
        <header className="text-center mb-12">
          <h1 className="text-4xl font-bold text-foreground mb-2">Text Search</h1>
          <p className="text-lg text-muted-foreground">
            Search through frontend development articles
          </p>
        </header>

        {/* Search Box */}
        <div className="mb-8">
          <SearchBox 
            value={searchTerm}
            onChange={setSearchTerm}
            placeholder="Search articles..."
          />
        </div>

        {/* Results */}
        <SearchResults 
          articles={filteredArticles}
          searchTerm={searchTerm}
          totalCount={articles.length}
        />
      </div>
    </div>
  );
};

export default Index;