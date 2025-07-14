import React from "react";
import BlogBox from "../components/BlogBox";
import FullButton from "../components/FullButton";
import TestimonialSlider from "../components/TestimonialSlider";

export default function Blog() {
  return (
    <section id="blog" className="w-full pt-[20px]">
      <div className="whiteBg">
        <div className="container">
          <div className="mb-[30px] text-left md:text-center">
            <h1 className="font40 extraBold">Our Blog Stories</h1>
            <p className="font13">
              Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut
              <br />
              labore et dolore magna aliquyam erat, sed diam voluptua.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-y-[30px] textCenter">
            {Array(6)
              .fill()
              .map((_, index) => (
                <BlogBox key={index} title="New Office!" text="Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor." tag="company" author="Luke Skywalker, 2 days ago" action={() => alert("clicked")} />
              ))}
          </div>

          <div className="flexCenter mt-[50px] mb-[50px]">
            <div className="w-[200px]">
              <FullButton title="Load More" action={() => alert("clicked")} />
            </div>
          </div>
        </div>
      </div>

      <div className="lightBg py-[50px]">
        <div className="container">
          <div className="mb-[30px] text-left md:text-center">
            <h1 className="font40 extraBold">What They Say?</h1>
            <p className="font13">
              Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut
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
