import React, { useState } from "react";
import BlogBox from "../components/BlogBox";
import FullButton from "../components/FullButton";
import TestimonialSlider from "../components/TestimonialSlider";
import BlogImg1 from "../assets/img/contact-1.png";
import BlogImg2 from "../assets/img/contact-2.png";
import BlogImg3 from "../assets/img/contact-3.png";
import { Link } from "react-router-dom";

const allBlogPosts = [
  {
    id: 1,
    title: "How to Build Lightning-Fast React Sites",
    text: "Learn the secrets to optimizing your React apps for speed and performance, from code splitting to lazy loading and more.",
    tag: "Web Development",
    author: "Luke Skywalker, 2 days ago",
    image: BlogImg1,
    link: "/blog/1",
  },
  {
    id: 2,
    title: "UI/UX Design Principles for 2025",
    text: "Discover the latest trends and timeless rules for creating beautiful, user-friendly interfaces in 2025.",
    tag: "UI/UX Design",
    author: "Leia Organa, 1 week ago",
    image: BlogImg2,
    link: "/blog/2",
  },
  {
    id: 3,
    title: "Branding with Graphics: A Modern Guide",
    text: "Explore how modern brands use graphics and visual storytelling to stand out in a crowded market.",
    tag: "Graphics Design",
    author: "Han Solo, 3 days ago",
    image: BlogImg3,
    link: "/blog/3",
  },
];

export default function Blog() {
  const [visibleCount, setVisibleCount] = useState(3);
  const blogPosts = allBlogPosts.slice(0, visibleCount);
  const hasMore = visibleCount < allBlogPosts.length;

  return (
    <section id="blog" className="w-full pt-[20px]">
      <div className="whiteBg">
        <div className="container">
          <div className="mb-[30px] text-left md:text-center">
            <h1 className="font40 extraBold">Our Blog Stories</h1>
            <p className="font15">
              Stay updated on the latest in web design trends, SEO hacks, and
              development best practices. Our expert insights help you navigate
              the ever-changing digital landscape.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-y-[30px] textCenter">
            {blogPosts.map((post) => (
              <Link
                key={post.id}
                to={post.link}
                className="block hover:shadow-lg transition-shadow"
                aria-label={`Read more about ${post.title}`}
              >
                <BlogBox
                  title={post.title}
                  text={post.text}
                  tag={post.tag}
                  author={post.author}
                  image={post.image}
                  action={null}
                >
                  <div className="w-full flex flex-col items-center">
                    <img
                      src={post.image}
                      alt={post.title}
                      className="rounded-lg w-full h-40 object-cover mb-4"
                    />
                    <span
                      className="text-[#7620ff] font-semibold underline mt-2 block transition-colors hover:text-[#4b1fa7]"
                    >
                      Read More
                    </span>
                  </div>
                </BlogBox>
              </Link>
            ))}
          </div>

          {hasMore && (
            <div className="flexCenter mt-[50px] mb-[50px]">
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

      <div className="lightBg py-[50px]">
        <div className="container">
          <div className="mb-[30px] text-left md:text-center">
            <h1 className="font40 extraBold">What They Say?</h1>
            <p className="font13">
              Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
              nonumy eirmod tempor invidunt ut
              <br />
              labore et dolore magna aliquyam erat, sed diam voluptua.
            </p>
          </div>
          <TestimonialSlider />
        </div>
      </div>
    </section>
  );
}
