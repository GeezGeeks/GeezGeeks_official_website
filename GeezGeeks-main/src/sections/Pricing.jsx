import React from "react";
import PricingTable from "../components/PricingTable";

export default function Pricing() {
  return (
    <section
      id="pricing"
      className="w-full py-16 bg-slate-50 dark:bg-[#0F172A] transition-colors duration-300"
    >
      <div className="container mx-auto px-4">
        <div className="mb-12 text-left md:text-center">
          <h1 className="text-3xl md:text-4xl font-extrabold text-slate-800 dark:text-white mb-2">
            Check Our Pricing Plans
          </h1>
          <p className="text-base text-slate-600 dark:text-slate-300 max-w-2xl mx-auto">
            Choose a package that fits your ambitions. Need a custom roadmap?
            We’re here to craft a solution just for you.
          </p>
        </div>
        <div className="flex flex-wrap gap-8 justify-center">
          <div className="w-full md:w-[31%] max-w-[370px] mx-auto">
            <PricingTable
              price="$29,99/mo"
              title="Starter"
              text=""
              offers={[
                { name: "Product Offer", cheked: true },
                { name: "Offer", cheked: true },
                { name: "Product Offer #2", cheked: false },
                { name: "Product", cheked: false },
                { name: "Product Offer", cheked: false },
              ]}
              action={() => alert("clicked")}
            />
          </div>
          <div className="w-full md:w-[31%] max-w-[370px] mx-auto">
            <PricingTable
              icon="monitor"
              price="$49,99/mo"
              title="Basic"
              text="Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor."
              offers={[
                { name: "Product Offer", cheked: true },
                { name: "Offer", cheked: true },
                { name: "Product Offer #2", cheked: true },
                { name: "Product", cheked: true },
                { name: "Product Offer", cheked: false },
              ]}
              action={() => alert("clicked")}
            />
          </div>
          <div className="w-full md:w-[31%] max-w-[370px] mx-auto">
            <PricingTable
              price="$59,99/mo"
              title="Golden"
              text="Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor."
              offers={[
                { name: "Product Offer", cheked: true },
                { name: "Offer", cheked: true },
                { name: "Product Offer #2", cheked: true },
                { name: "Product", cheked: true },
                { name: "Product Offer", cheked: true },
              ]}
              action={() => alert("clicked")}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
