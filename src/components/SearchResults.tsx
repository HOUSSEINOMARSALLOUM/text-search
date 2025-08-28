import React from 'react';
import type { Article } from '@/data/articles';
import { ArticleCard } from './ArticleCard';

interface SearchResultsProps {
  articles: Article[];
  searchTerm: string;
  totalCount: number;
}

export const SearchResults: React.FC<SearchResultsProps> = ({ 
  articles, 
  searchTerm, 
  totalCount 
}) => {
  const showingCount = articles.length;
  
  return (
    <div className="w-full max-w-4xl mx-auto">
      {searchTerm && (
        <div className="mb-6">
          <p className="text-muted-foreground">
            {showingCount === totalCount ? (
              `${showingCount} posts were found.`
            ) : (
              `Showing ${showingCount} of ${totalCount} posts.`
            )}
          </p>
        </div>
      )}
      
      <div className="space-y-6">
        {articles.map((article) => (
          <ArticleCard 
            key={article.id} 
            article={article} 
            searchTerm={searchTerm}
          />
        ))}
        
        {articles.length === 0 && searchTerm && (
          <div className="text-center py-12">
            <p className="text-muted-foreground text-lg">
              No articles found matching "{searchTerm}"
            </p>
            <p className="text-muted-foreground mt-2">
              Try searching for different keywords or browse all articles.
            </p>
          </div>
        )}
      </div>
    </div>
  );
};