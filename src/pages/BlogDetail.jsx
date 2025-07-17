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
# How to Build Lightning-Fast React Sites 🚀

In today's digital world, speed is everything. Users expect web applications to load instantly and respond without delay. Here are the top strategies to make your React sites lightning-fast and deliver a seamless user experience:

---

## 1. Code Splitting & Lazy Loading
Break your app into smaller bundles so users only download what's needed for the current page.

\`\`\`jsx
const Blog = React.lazy(() => import('./Blog'));
\`\`\`

> **Pro Tip:** Use React.Suspense for smooth loading states!

---

## 2. Image Optimization 🖼️
- Use modern formats like **WebP**
- Compress images
- Use responsive images with \`srcSet\`

---

## 3. Memoization & useCallback 🧠
Avoid unnecessary re-renders by memoizing components and functions:

\`\`\`jsx
const MemoizedComponent = React.memo(MyComponent);
const memoizedCallback = useCallback(() => { /* ... */ }, [deps]);
\`\`\`

---

## 4. Use a CDN 🌍
Serve static assets from a Content Delivery Network to reduce latency and speed up load times globally.

---

## 5. Analyze & Monitor Performance 📊
Use tools like **Lighthouse**, **WebPageTest**, and **React DevTools** to identify bottlenecks and monitor your app's performance over time.

---

> "Performance is not a feature, it's a requirement." — Unknown

By following these tips, your React applications will be blazing fast and delightful to use. Happy coding!
`,
    author: "By John Doe, July 16, 2025",
    image: BlogImg1,
  },
  {
    id: "2",
    title: "UI/UX Design Principles for 2025",
    content: `
# UI/UX Design Principles for 2025 ✨

Stay ahead of the curve with these modern design principles:

---

## 1. Minimalism with Personality
- Clean layouts, but with bold accent colors and playful micro-interactions.

## 2. Accessibility-First Design ♿
- Use sufficient color contrast
- Provide keyboard navigation
- Add descriptive alt text for images

## 3. Fluid, Adaptive Layouts 📱
- Use CSS Grid & Flexbox
- Design for all screen sizes

## 4. Soft Gradients & Glassmorphism
- Subtle backgrounds and frosted glass effects add depth and modernity.

---

> "Design is intelligence made visible." — Alina Wheeler

Embrace these trends to create beautiful, user-friendly interfaces in 2025 and beyond!
`,
    author: "Leia Organa, 1 week ago",
    image: BlogImg2,
  },
  {
    id: "3",
    title: "Branding with Graphics: A Modern Guide",
    content: `
# Branding with Graphics: A Modern Guide 🎨

Modern brands use graphics and visual storytelling to stand out. Here’s how:

---

## 1. Consistent Color Palettes
- Choose 2-3 brand colors and use them everywhere.

## 2. Custom Illustrations & Icons
- Unique visuals make your brand memorable.

## 3. Motion Graphics for Engagement
- Use subtle animations to guide attention and delight users.

## 4. Story-Driven Visuals
- Every image should reinforce your brand’s story and values.

---

> "Your brand is a story unfolding across all customer touch points." — Jonah Sachs

Level up your branding with these modern graphic strategies!
`,
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
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-100 dark:from-[#0F172A] dark:to-[#1E293B] py-12 px-2 flex justify-center items-start transition-colors duration-300">
      <article className="bg-white dark:bg-[#18181b] shadow-2xl rounded-3xl max-w-2xl w-full overflow-hidden border border-slate-100 dark:border-slate-700 transition-colors duration-300">
        <header className="relative">
          <img
            src={blog.image}
            alt={blog.title}
            className="w-full h-64 object-cover object-center rounded-t-3xl"
          />
          <div className="absolute top-4 left-4 bg-blue-600 dark:bg-cyan-400 text-white dark:text-slate-900 px-4 py-1 rounded-full text-xs font-bold shadow-lg">
            Blog
          </div>
        </header>
        <div className="p-8">
          <h1 className="font-extrabold text-4xl mb-3 text-slate-800 dark:text-white leading-tight drop-shadow-sm">
            {blog.title}
          </h1>
          <div className="text-blue-600 dark:text-cyan-400 font-semibold mb-6 text-sm">
            {blog.author}
          </div>
          <div className="prose prose-lg max-w-none text-justify text-slate-700 dark:text-slate-200 mb-8 transition-colors duration-300">
            <ReactMarkdown>{blog.content}</ReactMarkdown>
          </div>
          <Link
            to="/"
            className="inline-block bg-blue-600 dark:bg-cyan-400 hover:bg-blue-700 dark:hover:bg-cyan-300 text-white dark:text-slate-900 font-bold py-2 px-6 rounded-full shadow transition-colors duration-200"
          >
            ← Back to Blog
          </Link>
        </div>
      </article>
    </div>
  );
}
