import React from "react";
import ReactMarkdown from "react-markdown";
import { useParams, Link } from "react-router-dom";
import BlogImg1 from "../assets/img/contact-1.png";
import BlogImg2 from "../assets/img/contact-2.png";
import BlogImg3 from "../assets/img/contact-3.png";

const blogData = [
  {
    id: "1",
    title: "How to Build Lightning-Fast React Sites",

    content: `
In today's digital world, speed is everything. Users expect web applications to load instantly and respond without delay. In this comprehensive guide, we'll explore proven strategies to make your React sites lightning-fast and deliver a seamless user experience.

## 1. Code Splitting
Code splitting allows you to break your app into smaller bundles, so users only download what's needed for the current page. Use React's built-in lazy loading with React.lazy and Suspense:

\`\`\`jsx
const Blog = React.lazy(() => import('./Blog'));
\`\`\`

## 2. Image Optimization
Large images can slow down your site. Use modern formats like WebP, compress images, and leverage responsive images with the srcSet attribute.

## 3. Memoization and useCallback
Avoid unnecessary re-renders by memoizing components and functions:

const MemoizedComponent = React.memo(MyComponent);
const memoizedCallback = useCallback(() => { /* ... */ }, [deps]);

## 4. Use a CDN
Serve static assets from a Content Delivery Network to reduce latency and speed up load times globally.

## 5. Analyze and Monitor Performance
Use tools like Lighthouse, WebPageTest, and React DevTools to identify bottlenecks and monitor your app's performance over time.

---

By following these tips, you can ensure your React applications are not just functional, but also blazing fast. Happy coding!
`,
    author: "By John Doe, July 16, 2025",
    image: BlogImg1,
  },
  {
    id: "2",
    title: "UI/UX Design Principles for 2025",
    content: `Discover the latest trends and timeless rules for creating beautiful, user-friendly interfaces in 2025.\n\nFull blog content goes here. Add more paragraphs, images, and formatting as needed.`,
    author: "Leia Organa, 1 week ago",
    image: BlogImg2,
  },
  {
    id: "3",
    title: "Branding with Graphics: A Modern Guide",
    content: `Explore how modern brands use graphics and visual storytelling to stand out in a crowded market.\n\nFull blog content goes here. Add more paragraphs, images, and formatting as needed.`,
    author: "Han Solo, 3 days ago",
    image: BlogImg3,
  },
];

export default function BlogDetail() {
  const { id } = useParams();
  const blog = blogData.find((b) => b.id === id);

  if (!blog) {
    return (
      <div className="container py-10">
        <h2 className="font-bold text-2xl mb-4">Blog not found</h2>
        <Link to="/" className="text-blue-600 underline">
          Back to Home
        </Link>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#f8fafc] to-[#e0e7ff] py-12 px-2 flex justify-center items-start">
      <div className="bg-white shadow-2xl rounded-3xl max-w-2xl w-full overflow-hidden border border-[#e0e7ff]">
        <div className="relative">
          <img
            src={blog.image}
            alt={blog.title}
            className="w-full h-64 object-cover object-center rounded-t-3xl"
          />
          <div className="absolute top-4 left-4 bg-[#7620ff] text-white px-4 py-1 rounded-full text-xs font-bold shadow-lg">
            Blog
          </div>
        </div>
        <div className="p-8">
          <h1 className="font-extrabold text-4xl mb-3 text-[#2d2d2d] leading-tight drop-shadow-sm">
            {blog.title}
          </h1>
          <div className="text-[#7620ff] font-semibold mb-6 text-sm">
            {blog.author}
          </div>
          <div className="prose prose-lg max-w-none text-justify text-[#333] mb-8">
            <ReactMarkdown>{blog.content}</ReactMarkdown>
          </div>
          <Link
            to="/"
            className="inline-block bg-[#7620ff] hover:bg-[#4b1fa7] text-white font-bold py-2 px-6 rounded-full shadow transition-colors duration-200"
          >
            ← Back to Blog
          </Link>
        </div>
      </div>
    </div>
  );
}
