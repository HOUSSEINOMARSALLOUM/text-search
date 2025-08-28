export interface Article {
  id: number;
  title: string;
  content: string;
  date: string;
  author: string;
}

export const articles: Article[] = [
  {
    id: 1,
    title: "Understanding the difference between grid-template and grid-auto",
    content: "With all the new properties related to CSS Grid Layout, one of the distinctions that always confused me was the difference between the grid-template-* and grid-auto-* properties. Specifically the difference between grid-template-rows/columns and grid-auto-rows/columns. Although I knew they were to define the size of grid tracks, I wasn't entirely sure when to use which.",
    date: "Oct 09, 2018",
    author: "Ire Aderinokun"
  },
  {
    id: 2,
    title: "Recreating the GitHub Contribution Graph with CSS Grid Layout",
    content: "The GitHub contribution graph is a great example of a grid layout that can be recreated using CSS Grid. In this article, we'll explore how to build a similar visualization using modern CSS techniques. We'll cover grid template areas, responsive design patterns, and dynamic data visualization with CSS Grid Layout.",
    date: "Sep 15, 2018",
    author: "Ire Aderinokun"
  },
  {
    id: 3,
    title: "CSS Grid Layout: A Complete Guide",
    content: "CSS Grid Layout is a two-dimensional layout system for the web. It lets you lay content out in rows and columns, and has many features that make building complex layouts straightforward. This comprehensive guide covers everything from basic grid concepts to advanced layout techniques.",
    date: "Aug 22, 2018",
    author: "Ire Aderinokun"
  },
  {
    id: 4,
    title: "Flexbox vs CSS Grid: When to Use Which",
    content: "Both Flexbox and CSS Grid are powerful layout systems, but they serve different purposes. Flexbox is designed for one-dimensional layouts, while Grid is designed for two-dimensional layouts. Understanding when to use each can help you build better, more maintainable layouts.",
    date: "Jul 10, 2018",
    author: "Ire Aderinokun"
  },
  {
    id: 5,
    title: "Modern CSS Layout Techniques",
    content: "The landscape of CSS layout has evolved dramatically over the past few years. From floats and positioning to Flexbox and Grid, we now have powerful tools for creating complex layouts. This article explores the modern approaches to CSS layout and when to use each technique.",
    date: "Jun 05, 2018",
    author: "Ire Aderinokun"
  },
  {
    id: 6,
    title: "Responsive Design with CSS Grid",
    content: "CSS Grid makes creating responsive layouts easier than ever before. With features like auto-fit, minmax(), and grid template areas, you can create layouts that adapt to different screen sizes without complex media queries. Learn how to harness the power of CSS Grid for responsive design.",
    date: "May 18, 2018",
    author: "Ire Aderinokun"
  },
  {
    id: 7,
    title: "Advanced Grid Layout Patterns",
    content: "Once you've mastered the basics of CSS Grid, there are many advanced patterns you can explore. From creating magazine-style layouts to complex dashboard interfaces, Grid offers incredible flexibility for creative layout solutions.",
    date: "Apr 12, 2018",
    author: "Ire Aderinokun"
  },
  {
    id: 8,
    title: "CSS Grid Browser Support and Fallbacks",
    content: "While CSS Grid has excellent browser support today, understanding how to provide fallbacks for older browsers is still important. This article covers progressive enhancement strategies and how to gracefully degrade Grid layouts for better compatibility.",
    date: "Mar 25, 2018",
    author: "Ire Aderinokun"
  },
  {
    id: 9,
    title: "Building a Photo Gallery with CSS Grid",
    content: "Photo galleries are a perfect use case for CSS Grid. With Grid's ability to create complex layouts and handle different image sizes, you can build beautiful, responsive galleries. This tutorial walks through creating a Pinterest-style photo grid layout.",
    date: "Feb 14, 2018",
    author: "Ire Aderinokun"
  },
  {
    id: 10,
    title: "CSS Grid and Accessibility Considerations",
    content: "When using CSS Grid, it's important to consider accessibility implications. The visual order of elements can differ from the source order, which can affect screen readers and keyboard navigation. Learn how to use Grid responsibly while maintaining accessibility.",
    date: "Jan 30, 2018",
    author: "Ire Aderinokun"
  }
];