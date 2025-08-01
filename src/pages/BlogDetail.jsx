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
    content: `# How to Build Lightning-Fast React Sites ⚡️`,
    author: "Leia Organa, 1 week ago",
    image: BlogImg2,
  },
  {
    id: "3",
    title: "Branding with Graphics: A Modern Guide",
    content: `# Branding with Graphics: A Modern Guide 🎨`,
    author: "Han Solo, 3 days ago",
    image: BlogImg3,
  },
];

export default function BlogDetail() {
  const { id } = useParams();
  const blog = blogData.find((b) => b.id === id);

  if (!blog) {
    return (
      <div className="container">
        <h2 className="font-bold text-2xl mb-4">Blog not found</h2>
        <Link to="/" className="text-blue-600 underline">
          Back to Home
        </Link>
      </div>
    );
  }

  return (
    <div className="flex justify-center items-start transition-colors duration-300 h-[100%]">
      <article className=" w-full h-[100%] overflow-hidden border border-slate-100 transition-colors duration-300">
        <header className="relative">
          <img
            src={blog.image}
            alt={blog.title}
            className="w-full h-64 object-cover object-center"
          />
          <div className="absolute top-4 left-4 bg-purple-800 text-white px-4 py-1 rounded-full text-xs font-bold shadow-lg">
            Blog
          </div>
        </header>
        <div className="p-8">
          <h1 className="font-extrabold text-4xl mb-3 text-slate-800  leading-tight drop-shadow-sm">
            {blog.title}
          </h1>
          <div className="text-blue-600  font-semibold mb-6 text-sm">
            {blog.author}
          </div>
          <div className="prose prose-lg max-w-none text-justify text-slate-700  mb-8 transition-colors duration-300">
            <ReactMarkdown>{blog.content}</ReactMarkdown>
          </div>
          <Link
            to="/"
            className="inline-block bg-purple-800  hover:bg-purple-700 text-white! font-bold py-2 px-6 rounded-full shadow transition-colors duration-200"
          >
            ← Back to Blog
          </Link>
        </div>
      </article>
    </div>
  );
}
