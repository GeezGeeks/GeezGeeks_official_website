import React from "react";
import ReactMarkdown from "react-markdown";
import { useParams, Link } from "react-router-dom";
import BlogImg1 from "../assets/img/image.png";
import BlogImg2 from "../assets/img/image2.webp";
import BlogImg3 from "../assets/img/image3.webp";

const blogData = [
  {
    id: "1",
    title:
      "Figma’s stock soared in its highly anticipated IPO, market cap instantly hit $45B",
    content: `Figma began trading on the New York Stock Exchange on Thursday after a long delay. It soared so quickly that trading was halted for a short time due to market volatility.\n\nWithin a minute of trading, its market cap hit $45 billion but the price spent the day bouncing between $101 and as high as $124. It closed at $115.50 and a $47 billion market cap, Yahoo Finance reports.\n\nThe company and existing investors sold shares at the IPO price of $33 per share. Quite the pop. And after-market trading is still hot with the stock price climbing.\n\nThere has been so much demand for this stock that people on X were posting funny pictures of their orders being fulfilled by Robinhood. Instead of getting dozens or hundreds of shares as requested, they were allocated one solitary share, they said. (One person bragged about getting 17 shares.)\n\nIn any case, the successful IPO means Figma’s failed $20 billion acquisition by competitor Adobe in 2023 is now just a shoulder-shrug footnote in its history.`,
    author: "Julie Bort, July 31,2025",
    tag: "Start Up",
    image: BlogImg1,
  },
  {
    id: "2",
    title:
      "Hackers stole Social Security numbers during Allianz Life cyberattack",
    content: `Hackers who breached U.S. insurance giant Allianz Life earlier this month stole reams of customer Social Security numbers, according to notifications filed with several U.S. states and seen by TechCrunch.\n\nAllianz Life disclosed the July 16 breach this past weekend, confirming to TechCrunch the unidentified hackers stole the personally identifiable information belonging to the “majority” of its 1.4 million customers, as well as financial professionals and some Allianz Life employees.\n\nThe company said its customer relationship database was compromised in a social engineering attack, a ploy in which malicious hackers use deception tricks, such as impersonating an employee claiming to have lost their password, to convince helpdesks into granting them access to a system or network.\n\nIn a new filing with the Texas attorney general, Allianz Life said the hackers stole names, dates of birth, postal addresses, and Social Security numbers from its database. A separate filing with the Massachusetts attorney general’s office also confirmed Social Security numbers were taken in the breach.\n\nWhen reached by email, Allianz Life spokesperson Brett Weinberg said that the company is aware of the types of personal data that was stolen in the breach, but declined to share this information with TechCrunch.\n\nThe spokesperson said Allianz Life is expected to begin notifying affected individuals by August 1.\n\n“The letters will offer specific information relevant to impacted individuals including the type of data that may have been affected,” the spokesperson added.\n\nAllianz Life is the latest insurance company, including Aflac and Erie, in recent weeks to have been breached, as multiple hacking groups known for social engineering attacks ramp up their cyberattacks.\n\nDo you know more about the Allianz Life cyberattack? Are you an affected customer or employee? Securely contact this reporter via encrypted message at zackwhittaker.1337 on Signal.\n\nUpdated with additional comment from Allianz Life.`,
    author: "Zack Whittaker 11:00 AM PDT · July 30, 2025",
    tag: "Security",
    image: BlogImg2,
  },
  {
    id: "3",
    title: "Google bets on STAN, an Indian social gaming platform",
    content: `Google has backed STAN, an Indian social gaming platform that connects gamers with creators, communities, and publishers.

Google’s investment comes as part of an $8.5 million equity funding round, which also saw investment from Japanese gaming giants Bandai Namco Entertainment, Square Enix, and Reazon Holdings. Aptos Labs and King River Capital, as well as existing backers General Catalyst and GFR Fund, also participated. Google joined the round via its AI Futures Fund, which launched in May to support startups building with its AI tools.

STAN, headquartered in Singapore, is trying to position itself as a gaming community platform to rival Discord, but its approach to the market is quite different. STAN lets users earn in-app currency called “Gems” by winning games like Krafton’s Battlegrounds Mobile India, Garena’s Free Fire Max, Minecraft, Call of Duty, or casual titles like Ludo and Snakes & Ladders.

The app also lets creators set up chat rooms called Clubs, which are channels tailored for each game on the platform. While anyone can join these Clubs, they need to pay a social currency to access the “gaming experiences” that creators offer. The startup takes a commission from these transactions.

The primary attraction seems to be the in-app currency, however, as it can be redeemed for vouchers on various e-commerce platforms like Amazon, PhonePe, and Flipkart. Users can also earn currency via referrals, a spin-to-win wheel, and daily rewards.

It appears STAN’s monetization model is what sets it apart: users can earn rewards through interactions, unlike on Discord, where chatting or participating in communities doesn’t earn users much, apart from clout.

Nonetheless, STAN wants to shadow Discord. The company claims it has already garnered over 25 million downloads on the Play Store and App Store altogether, and has around 5.5 million monthly active users.`,
    author: "Jagmeet Singh 10:05 AM PDT · August 1, 2025",
    tag: "Gaming",
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
      <article className="w-full h-[100%] overflow-hidden border border-slate-100 transition-colors duration-300">
        <header className="relative flex items-center">
          <div>
            <img
              src={blog.image}
              alt={blog.title}
              className="w-full h-150 object-cover object-center"
            />
            <div className="absolute top-4 left-4 bg-purple-800 text-white px-4 py-1 rounded-full text-xs font-bold shadow-lg">
              Blog
            </div>
          </div>

          <div className="bg-purple-800 w-full h-150 flex text-white justify-center pl-4 flex-col gap-20">
            <div className="text-white border w-fit p-3 border-[gray] font-semibold mb-6 text-sm">
              {blog.tag}
            </div>
            <h1 className="font-extrabold text-4xl mb-3 leading-tight drop-shadow-sm">
              {blog.title}
            </h1>
            <div className="text-white font-semibold mb-6 text-sm">
              {blog.author}
            </div>
          </div>
        </header>
        <div className="p-8">
          <div className="flex justify-center mx-auto max-w-4xl">
            <div className="prose prose-lg text-justify text-slate-700 mb-8 transition-colors duration-300">
              <ReactMarkdown
                components={{
                  p: ({ node, ...props }) => (
                    <p {...props} style={{ marginBottom: "2em" }} />
                  ),
                }}
              >
                {blog.content}
              </ReactMarkdown>
            </div>
          </div>
          <Link
            to="/"
            className="inline-block bg-purple-800 hover:bg-purple-700 text-white! font-bold py-2 px-6 rounded-full shadow transition-colors duration-200"
          >
            ← Back to Blog
          </Link>
        </div>
      </article>
    </div>
  );
}
