import React from "react";
import PricingTable from "../components/PricingTable";

export default function Pricing() {
  return (
    <section id="pricing" className="w-full py-[50px]">
      <div className="whiteBg">
        <div className="container">
          <div className="mb-[50px] textLeft max-[860px]:textCenter">
            <h1 className="font40 extraBold">Check Our Pricing</h1>
            <p className="font13">
              Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut
              <br />
              labore et dolore magna aliquyam erat, sed diam voluptua.
            </p>
          </div>
          <div className="flexSpaceNull max-[860px]:flex-col">
            <div className="w-[31%] max-[860px]:w-full max-[860px]:max-w-[370px] max-[860px]:mx-auto">
              <PricingTable
                icon="roller"
                price="$29,99/mo"
                title="Starter"
                text="Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor."
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
            <div className="w-[31%] max-[860px]:w-full max-[860px]:max-w-[370px] max-[860px]:mx-auto">
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
            <div className="w-[31%] max-[860px]:w-full max-[860px]:max-w-[370px] max-[860px]:mx-auto">
              <PricingTable
                icon="browser"
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
      </div>
    </section>
  );
}
