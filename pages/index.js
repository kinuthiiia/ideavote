import {
  IconBrandInstagram,
  IconBrandLinkedin,
  IconMoon,
  IconSun,
  IconX,
} from "@tabler/icons";
import { useTheme } from "next-themes";
import { useState, useEffect } from "react";

export default function Home() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);
  const [navbar, setNavbar] = useState(false);

  if (!mounted) return null;

  return (
    <div className="dark:bg-black">
      <nav class="p-4 w-full">
        <div className="justify-between px-4 mx-auto lg:max-w-7xl md:items-center md:flex md:px-8">
          <div className="flex items-center justify-between py-1  md:block">
            <a href="/">
              {theme === "light" ? (
                <img src="/ideavote_logo.jpg" alt="logo" width="130" />
              ) : (
                <img src="/ideavote_logo_dark.jpg" alt="logo" width="130" />
              )}
            </a>

            <div className="md:hidden flex space-x-2">
              <button
                className="mt-1 w-8 h-8 bg-blue-100 rounded-lg dark:bg-slate-800 flex items-center justify-center hover:ring-2 ring-blue-400 transition-all duration-300 focus:outline-none"
                onClick={() => setTheme(theme === "light" ? "dark" : "light")}
                aria-label="Toggle Dark Mode"
              >
                {theme === "light" ? <IconMoon /> : <IconSun />}
              </button>
              <button
                className="p-2 text-gray-700 rounded-md outline-none focus:border-gray-400 focus:border"
                onClick={() => setNavbar(!navbar)}
              >
                {navbar ? (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-6 h-6 text-blue-700"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                      clipRule="evenodd"
                    />
                  </svg>
                ) : (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-6 h-6 text-blue-700"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M4 6h16M4 12h16M4 18h16"
                    />
                  </svg>
                )}
              </button>
            </div>
          </div>
          <div
            className={`flex-1 justify-self-center pb-3  md:block md:pb-0 md:mt-0 ${
              navbar ? "block" : "hidden"
            }`}
          >
            <ul className=" ml-8 items-center justify-center space-y-8 md:flex md:space-x-6 md:space-y-0">
              <li>
                <a href="#home" class="text-[#3E90F3]">
                  Home
                </a>
              </li>
              <li>
                <a href="#about">About</a>
              </li>
              <li>
                <a href="#">Pricing</a>
              </li>
              <li>
                <a href="#">Contact</a>
              </li>
              <button
                className={`${
                  navbar ? "hidden" : "flex"
                } w-8 h-8 bg-blue-100 rounded-lg dark:bg-slate-800  items-center justify-center hover:ring-2 ring-blue-400 transition-all duration-300 focus:outline-none`}
                onClick={() => setTheme(theme === "light" ? "dark" : "light")}
                aria-label="Toggle Dark Mode"
              >
                {theme === "light" ? <IconMoon /> : <IconSun />}
              </button>
            </ul>
          </div>
        </div>
      </nav>

      <main>
        <section id="home" class=" h-[500px] md:h-[calc(100vh-120px)] relative">
          <div class="space-y-5 top-[40%] w-[70%] mx-auto absolute translate-y-[-50%] left-[50%] translate-x-[-50%]">
            <h1 class="text-[2.25rem] md:text-[3.5rem] font-semibold">
              Transform idea into{" "}
              <span class="bg-gradient-to-r from-blue-600 via-green-500 to-indigo-400 inline-block text-transparent bg-clip-text">
                action
              </span>{" "}
              fast
            </h1>

            <p class="font-light text-left md:text-[1.3rem] dark:text-slate-400">
              Our user-friendly platform lets you effortlessly gather, analyze,
              and leverage valuable customer insights to improve your products
              and services, fostering stronger customer relationships and a
              competitive edge. Start today!
            </p>

            <div class="md:flex space-y-3 md:space-y-0 md:space-x-3">
              <button class="outline-none  bg-[#3E90F3] px-6 py-2 text-white rounded-md text-[1.2rem] font-medium">
                Get started
              </button>
              <button class="outline-none border-[#3E90F3] border-[1px] px-6 py-2 text-[#3E90F3] rounded-md text-[1.2rem] font-medium">
                Talk to sales
              </button>
            </div>
          </div>
        </section>

        <section
          id="about"
          class=" h-[300px] md:h-[100vh] bg-[#3E90F3] relative"
        >
          <div>
            <span class="bg-slate-600 text-white uppercase p-2 rounded-sm tracking-wider absolute z-20 left-[50%] translate-x-[-50%] translate-y-[50%]">
              easy to use interface
            </span>
            <img
              src="/ideavote_home_light.jpg"
              class=" w-[90%] md:w-[70%] absolute left-[50%] translate-x-[-50%] top-[50%] translate-y-[-50%]"
              alt="easy_to_use"
            />
          </div>
        </section>

        <section class="min-h-[700px] md:min-h-[500px]">
          <div class="md:flex my-[100px] justify-between md:space-x-12">
            <div class="pl-6 md:pl-16 md:w-1/2 space-y-8">
              <h1 class="text-[2rem] md:text-[2.5rem] font-semibold leading-[48px]">
                Crafting solutions that speak to your audience
              </h1>
              <p class="font-light text-left text-[1.2rem] dark:text-slate-400 ">
                We help you listen to your customers and you make stuff they'll
                love.
              </p>
            </div>
            <div class="md:w-1/2 w-[80%] mt-12 mx-auto">
              <img src="/ideavote_home_dark.png" />
            </div>
          </div>
          <h1 class="text-[1.3rem] font-semibold py-12  text-center w-full bg-black text-white">
            Over{" "}
            <span class="bg-gradient-to-r from-blue-600 via-green-500 to-indigo-400 inline-block text-transparent bg-clip-text mr-1">
              1,000
            </span>
            ideas shared and voted on IdeaVote !🥳
          </h1>
          <br />
          <br />
        </section>

        <section id="about" class="h-[1250px] md:h-[90vh]">
          <div class=" w-[90%] md:flex md:justify-between md:space-x-8 mx-auto space-y-12 md:space-y-0">
            <div class="space-y-4">
              <div class="w-[56px] h-[56px] rounded-md bg-gradient-to-tr from-blue-600 to-green-500 relative">
                <img
                  src="/simple.svg"
                  width="30px"
                  class="top-[50%] translate-x-[50%] left-[50%] translate-y-[50%]"
                  alt="simple"
                />
              </div>
              <h1 class="text-[1.3rem] font-semibold ">
                Simple Idea Submission
              </h1>
              <p class="font-light text-left text-[1.3rem] dark:text-slate-400">
                Just a few clicks, and your customers are one step closer to
                making a difference
              </p>
            </div>

            <div class="space-y-4">
              <div class="w-[56px] h-[56px] rounded-md bg-gradient-to-tr from-blue-600 to-green-500 relative">
                <img
                  src="/community.svg"
                  width="30px"
                  class="top-[50%] translate-x-[50%] left-[50%] translate-y-[50%]"
                  alt="simple"
                />
              </div>
              <h1 class="text-[1.3rem] font-semibold ">
                Community Feedback Integration
              </h1>
              <p class="font-light text-left text-[1.3rem] dark:text-slate-400">
                Incorporate collective wisdom of your audience directly into
                your decisionmaking process
              </p>
            </div>

            <div class="space-y-4">
              <div class="w-[56px] h-[56px] rounded-md bg-gradient-to-tr from-blue-600 to-green-500 relative">
                <img
                  src="/realtime.svg"
                  width="30px"
                  class="top-[50%] translate-x-[50%] left-[50%] translate-y-[50%]"
                  alt="simple"
                />
              </div>
              <h1 class="text-[1.3rem] font-semibold ">
                Real-time Voting Analytics
              </h1>
              <p class="font-light text-left text-[1.3rem] dark:text-slate-400">
                Get immediate insights from your audience's , empowering you to
                make informed decisions on the fly
              </p>
            </div>

            <div class="space-y-4">
              <div class="w-[56px] h-[56px] rounded-md bg-gradient-to-tr from-blue-600 to-green-500 relative">
                <img
                  src="/rss.svg"
                  width="30px"
                  class="top-[50%] translate-x-[50%] left-[50%] translate-y-[50%]"
                  alt="simple"
                />
              </div>
              <h1 class="text-[1.3rem] font-semibold ">RSS Feed Integration</h1>
              <p class="font-light text-left text-[1.3rem] dark:text-slate-400">
                Empower your users to stay updated with our RSS Feed. They'll
                receive instant notifications about new ideas, comments, and app
                updates, ensuring they're always part of the latest discussions
                and innovations.
              </p>
            </div>
          </div>

          <div class="mt-[100px] w-4/5 mx-auto">
            <p class="font-medium text-center text-[1rem]  ">
              Trusted by leading companies
            </p>
            <div class="w-[300px] md:w-[400px] grid-cols-4 mt-[56px] grid mx-auto">
              <img src="/absa.png" alt="absa" class="w-[56px] col-span-1" />
              <img src="/kcb.png" alt="kcb" class="w-[56px] col-span-1" />
              <img src="/zeraki.png" alt="zeraki" class="w-[56px] col-span-1" />
              <img
                src="/tropikal_brands.png"
                alt="tropikal_brands"
                class="w-[56px] col-span-1"
              />
            </div>
          </div>
        </section>

        <section id="pricing">
          <div class="space-y-12 md:space-y-0 w-[70%] md:w-[50%]  mx-auto my-[100px] md:flex md:space-x-[48px]">
            <div class="md:w-1/2 rounded-lg bg-[rgba(0,0,0,0.2)] dark:bg-white p-6">
              <h3 class="font-bold text-[1.2rem] dark:text-black">
                Basic Plan
              </h3>
              <br />
              <p class="font-light text-left dark:text-slate-800">
                Collect feedback directly from your customers, and keep them
                engaged with questions and status updates.
              </p>
              <br />
              <br />

              <h3 class="font-bold text-[1.2rem] dark:text-black">
                $25{" "}
                <span class="font-light text-left dark:text-slate-800">
                  /month
                </span>
              </h3>
              <br />
              <br />
              <button class="outline-none bg-black px-6 py-2 text-white rounded-md font-medium w-full">
                Get started
              </button>
            </div>

            <div class="md:w-1/2 rounded-lg  bg-[rgba(0,0,0,0.2)] dark:bg-white relative p-6">
              <h3 class="font-bold text-[1.2rem] dark:text-black">
                Enterprise
              </h3>
              <br />
              <p class="font-light text-left dark:text-slate-800">
                Contact sales for an enterprise plan.
              </p>
              <br />
              <br />

              <br />
              <br />
              <button class="absolute bottom-6 outline-none bg-black px-6 py-2 text-white rounded-md font-medium w-[83%]">
                Contact sales
              </button>
            </div>
          </div>
        </section>

        <section>
          <div class="relative h-[145vh] md:h-[100vh]">
            <img
              src="/quoted_bg.png"
              class="absolute h-[145vh] md:w-full md:h-[100vh] object-cover"
              alt=""
            />
            <br />
            <br />
            <div className="w-[90%] mx-auto left-[50%] translate-x-[0%]">
              <h1 className="text-center text-white text-[2rem] font-medium mb-1">
                What our Early Supporters Are saying
              </h1>
              <p className="text-center text-black">
                Thank you all for supporting and believing in IdeaVote from the
                start!
              </p>
            </div>

            <div class="space-y-12 md:space-y-0 absolute w-[70%] gap-12 left-[50%] translate-x-[-50%]  translate-y-[5%] md:translate-y-[20%]  md:flex md:justify-between">
              <div class="rounded-xl bg-white p-6 md:w-[33%] dark:bg-black">
                <img
                  src="/user_1.jpeg"
                  class="w-[56px] h-[56px] rounded-full object-cover mx-auto"
                  alt=""
                />
                <br />
                <p class="font-medium text-[1.2rem]">
                  "IdeaVote helped me bring my dream project to life!"
                </p>
                <br />
                <br />
                <div>
                  <p class="text-[0.8rem] tracking-wider text-[#808080] text-center">
                    JOHN DOE
                  </p>
                  <p class="text-[0.8rem] tracking-wider text-[#3E90F3] text-center">
                    MANAGING DIRECTOR , ABSA
                  </p>
                </div>
              </div>

              <div class=" rounded-xl bg-white dark:bg-black p-6 md:w-[33%]">
                <img
                  src="/user_2.jpeg"
                  class="w-[56px] h-[56px] rounded-full object-cover mx-auto"
                  alt=""
                />
                <br />
                <p class="font-medium text-[1.2rem]">
                  "Through IdeaVote, my team can easily share and agree on
                  ideas"
                </p>
                <br />
                <br />
                <div>
                  <p class="text-[0.8rem] tracking-wider text-[#808080] text-center">
                    JANE DOE
                  </p>
                  <p class="text-[0.8rem] tracking-wider text-[#3E90F3] text-center">
                    FOUNDER , PLATY
                  </p>
                </div>
              </div>

              <div class=" rounded-xl bg-white p-6 md:w-[33%] dark:bg-black">
                <img
                  src="/user_3.jpeg"
                  class="w-[56px] h-[56px] rounded-full object-cover mx-auto"
                  alt=""
                />
                <br />
                <p class="font-medium text-[1.2rem]">
                  "I was able to accelerate product discovery with user feedback
                  through IdeaVote"
                </p>
                <br />
                <br />
                <div>
                  <p class="text-[0.8rem] tracking-wider text-[#808080] text-center">
                    GARY HAMPTON
                  </p>
                  <p class="text-[0.8rem] tracking-wider text-[#3E90F3] text-center">
                    PRODUCT MANAGER , UNICORN
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <footer>
        <div class="md:flex md:justify-between p-[50px] gap-x-12">
          <div class="space-y-6 md:w-1/3 ">
            {theme === "light" ? (
              <img src="/ideavote_logo.jpg" alt="logo" width="130" />
            ) : (
              <img src="/ideavote_logo_dark.jpg" alt="logo" width="130" />
            )}

            <p class="font-light text-left ml-4">
              Gather, analyze, and leverage valuable customer insights to
              improve your products and services.
            </p>

            <p class="ml-4 text-[0.8rem] font-medium mt-4">
              Copyright © Idea Vote
            </p>
          </div>

          <div class="md:w-1/3 mt-12 ml-4 ">
            <ul class="space-y-4">
              <li>
                <a href="#home" class="text-[#3E90F3]">
                  Home
                </a>
              </li>
              <li class="text-[#909090]">
                <a href="#about">About</a>
              </li>
              <li class="text-[#909090]">
                <a href="#pricing">Pricing</a>
              </li>
              <li class="text-[#909090]">
                <a href="#">Contact</a>
              </li>
            </ul>

            <div class="flex space-x-8 mt-12">
              <a href="#">
                <IconBrandInstagram />
              </a>
              <a href="#">
                <IconX />
              </a>
              <a href="#">
                <IconBrandLinkedin />
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
