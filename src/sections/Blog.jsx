import React, { useState } from "react";
import BlogBox from "../components/BlogBox";
import FullButton from "../components/FullButton";
import TestimonialSlider from "../components/TestimonialSlider";
import BlogImg1 from "../assets/img/image.png";
import BlogImg2 from "../assets/img/image2.webp";
import BlogImg3 from "../assets/img/image3.webp";
import { Link } from "react-router-dom";

const allBlogPosts = [
  {
    id: 1,
    title:
      "Figma’s stock soared in its highly anticipated IPO, market cap instantly hit $45B",
    text: "Figma began trading on the New York Stock Exchange on Thursday after a long delay. It soared so quickly that trading was halted for a short time due to market volatility.....",
    tag: "Start Up",
    author: "Julie Bort, July 31,2025",
    image: BlogImg1,
    link: "/blog/1",
  },
  {
    id: 2,
    title:
      "Hackers stole Social Security numbers during Allianz Life cyberattack",
    text: "Hackers who breached U.S. insurance giant Allianz Life earlier this month stole reams of customer Social Security numbers, according to notifications...",
    tag: "Security",
    author: "Zack Whittaker 11:00 AM PDT · July 30, 2025",
    image: BlogImg2,
    link: "/blog/2",
  },
  {
    id: 3,
    title: "Branding with Graphics: A Modern Guide",
    text: "Google has backed STAN, an Indian social gaming platform that connects gamers with creators, communities, and publishers....",
    tag: "Gaming",
    author: "Jagmeet Singh 10:05 AM PDT · August 1, 2025",
    image: BlogImg3,
    link: "/blog/3",
  },
];

export default function Blog() {
  const [visibleCount, setVisibleCount] = useState(3);
  const blogPosts = allBlogPosts.slice(0, visibleCount);
  const hasMore = visibleCount < allBlogPosts.length;

  return (
    <section id="blog" className="w-full pt-10">
      <div className="bg-slate-50  transition-colors duration-300 py-12">
        <div className="container mx-auto px-4">
          <div className="mb-8 text-left md:text-center">
            <h1 className="text-3xl md:text-4xl font-extrabold text-slate-800 mb-2">
              Our Blog Stories
            </h1>
            <p className="text-base text-slate-600 max-w-2xl mx-auto">
              Stay updated on the latest in web design trends, SEO hacks, and
              development best practices. Our expert insights help you navigate
              the ever-changing digital landscape.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 ">
            {blogPosts.map((post) => (
              <Link
                key={post.id}
                to={post.link}
                className="block hover:shadow-lg transition-shadow  border! rounded-2xl! border-slate-200 "
                aria-label={`Read more about ${post.title}`}
              >
                <div className="flex flex-col items-center">
                  <img
                    src={post.image}
                    alt={post.title}
                    className=" w-full h-40 object-cover shadow rounded-t-2xl"
                  />
                  <BlogBox
                    title={post.title}
                    text={post.text}
                    tag={post.tag}
                    author={post.author}
                    image={post.image}
                    action={null}
                  />
                  <span className="text-blue-600  font-semibold underline my-2 block transition-colors hover:text-blue-800 ">
                    Read More
                  </span>
                </div>
              </Link>
            ))}
          </div>

          {hasMore && (
            <div className="flex justify-center mt-12 mb-12">
              <div className="w-[200px]">
                <FullButton
                  title="Load More"
                  action={() => setVisibleCount((c) => c + 3)}
                />
              </div>
            </div>
          )}
        </div>
      </div>

      <div className="bg-white py-12 transition-colors duration-300">
        <div className="container mx-auto px-4">
          <div className="mb-8 text-left md:text-center">
            <h1 className="text-3xl md:text-4xl font-extrabold text-slate-800 mb-2">
              What They Say?
            </h1>
          </div>
          <TestimonialSlider />
        </div>
      </div>
    </section>
  );
}
