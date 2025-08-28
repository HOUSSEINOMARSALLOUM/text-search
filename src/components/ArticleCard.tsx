import React from 'react';
import { Card, CardContent, CardHeader } from '@/components/ui/card';
import type { Article } from '@/data/articles';
import { highlightText } from '@/utils/searchUtils';

interface ArticleCardProps {
  article: Article;
  searchTerm: string;
}

export const ArticleCard: React.FC<ArticleCardProps> = ({ article, searchTerm }) => {
  return (
    <Card className="transition-all duration-200 hover:shadow-lg border-2 hover:border-accent/20">
      <CardHeader className="pb-3">
        <h2 className="text-xl font-semibold leading-tight text-foreground">
          {highlightText(article.title, searchTerm)}
        </h2>
        <div className="flex items-center gap-2 text-sm text-muted-foreground">
          <span>{article.date}</span>
          <span>•</span>
          <span>{highlightText(article.author, searchTerm)}</span>
        </div>
      </CardHeader>
      <CardContent>
        <p className="text-muted-foreground leading-relaxed">
          {highlightText(article.content, searchTerm)}
        </p>
      </CardContent>
    </Card>
  );
};