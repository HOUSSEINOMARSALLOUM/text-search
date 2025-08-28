import React from 'react';
import type { Article } from '@/data/articles';

export const highlightText = (text: string, searchTerm: string): JSX.Element[] => {
  if (!searchTerm) return [<span key="0">{text}</span>];
  
  const escapedTerm = searchTerm.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
  const regex = new RegExp(`(${escapedTerm})`, 'gi');
  const parts = text.split(regex);
  
  return parts.map((part, index) => {
    if (part.toLowerCase() === searchTerm.toLowerCase()) {
      return (
        <mark 
          key={index} 
          className="bg-highlight text-highlight-foreground px-0.5 rounded-sm font-medium"
        >
          {part}
        </mark>
      );
    }
    return <span key={index}>{part}</span>;
  });
};

export const searchArticles = (articles: Article[], searchTerm: string): Article[] => {
  if (!searchTerm) return articles;
  
  const term = searchTerm.toLowerCase();
  return articles.filter(article => 
    article.title.toLowerCase().includes(term) || 
    article.content.toLowerCase().includes(term) ||
    article.author.toLowerCase().includes(term)
  );
};