"use client";
import { useState } from "react";
import Image from "next/image";
import image1 from "@/app/public/imag/image1.png";
import image1Logo from "@/app/public/imag/Malcolmgladewell.png";
import image2 from "@/app/public/imag/image2.png";
import image2Logo from "@/app/public/imag/GamecharacterLogo.png";
import image3 from "@/app/public/imag/image3.png";
import image3Logo from "@/app/public/imag/JenkinsLogo.png";
import { RiArrowDownBoxLine, RiArrowUpBoxLine } from "react-icons/ri";
import { useRouter } from "next/navigation";
const Projects = () => {
  const router = useRouter()
  const [showMore, setShowMore] = useState({
    project1: false,
    project2: false,
    project3: false,
  });

  const toggleShowMore = (project) => {
    setShowMore((prev) => ({ ...prev, [project]: !prev[project] }));
  };
  const [showCase, setShowCase] = useState(false);
  const [showCase2, setShowCase2] = useState(false);
  const [showCase3, setShowCase3] = useState(false);


  return (
    <>
      {/* Project 1 */}
      <div className="flex flex-col md:flex-row items-center md:items-start p-6 md:p-12 mx-4 lg:mx-16 rounded-xl">

        {/* Left Section */}
        <div className="flex-1 text-left space-y-4">

          <div className="flex items-center justify-start mb-5">
            <div className="px-2 py-1 border border-[#d5d8d2] rounded-full bg-[#e7e9e6] text-xs md:text-sm uppercase font-sans">
              ____ Project 1
            </div>
          </div>

          <div>
            <Image src={image1Logo} alt="logo" className="w-44 h-14" />
          </div>

          <h3 className="text-xl md:text-2xl lg:text-3xl font-bold">
            Malcolm Gladwell Website
          </h3>

          <p className="text-gray-600 text-sm md:text-base pr-0 md:pr-12 lg:pr-24">
            Malcolm Gladwell Website is a responsive and interactive web platform designed to showcase the work, books, and articles of the acclaimed author.
          </p>

          <ol className="list-decimal pl-6 text-gray-600 text-sm md:text-base">
            <li>
              <span className="font-semibold">Built the frontend using</span> Next.js to ensure fast, responsive, and SEO-friendly pages.
            </li>
          </ol>

          {/* TEXT SECTION (JO TOGGLE HOGA) */}
          {showCase && (
            <div className="mt-6 p-4 rounded-lg text-sm md:text-base">
              <ol>
                <li>
                  <span className="font-semibold">
                    <span className="text-black font-semibold">2.</span>  Developed backend services
                  </span>{" "}
                  Developed minimal backend functionality with Node.js for handling contact forms and newsletter subscriptions.
                </li>
                <li>
                  <span className="font-semibold">
                    <span className="text-black font-semibold">3.</span>Integrated dynamic dashboards
                  </span>{" "}
                  Integrated dynamic content sections for books, articles, and media features.
                </li>
                <li>
                  <span className="font-semibold">
                    <span className="text-black font-semibold">4.</span> Implemented secure user authentication
                  </span>{" "}
                  Implemented a clean, mobile-first design for easy navigation across devices.
                </li>

                <li>
                  <span className="font-semibold">
                    <span className="text-black font-semibold">5.</span>  Focused on a clean, mobile-friendly UI,
                  </span>{" "}
                  Focused on readability and accessibility, ensuring a smooth experience for all users.
                </li>
              </ol>
            </div>
          )}

          {/* BUTTON — now placed AFTER the text */}
          <div className="mt-4 md:mt-6 w-full">
            <button
              onClick={() => setShowCase(!showCase)}
              className="px-4 py-2 bg-black text-white rounded-lg shadow-md hover:bg-gray-800"
            >
              {showCase ? "Hide Case" : "View Case"}
              <RiArrowDownBoxLine className="inline-block ml-2 w-5 h-5" />
            </button>
          </div>

        </div>

        {/* Right Section - Image */}
        <div className="flex-1 flex flex-col items-center md:items-start mt-8 md:mt-0 md:ml-8">
          <div className="relative flex items-center justify-center">
            <Image
              src={image1}
              alt="Mobile Mockup"
              width={450}
              height={400}
              className="rounded-lg "
            />
          </div>
        </div>
      </div >

      {/* Project 2 */}
      <div className="flex flex-col md:flex-row items-center md:items-start p-6 md:p-12 mx-4 lg:mx-7 rounded-xl">

        {/* Left Section */}
        <div className="flex-1 mt-8 md:mt-0 -ml-0 lg:-ml-8">
          <div className="relative flex items-center justify-center">
            <Image
              src={image2}
              alt="Mobile Mockup"
              width={450}
              height={600}
              className="rounded-lg"
            />
          </div>
        </div>

        {/* Right Section */}
        <div className="flex-1 w-full md:w-1/2 text-left space-y-4 mt-8 md:mt-0">

          <div className="flex items-center justify-start mb-5">
            <div className="px-2 py-1 border border-[#d5d8d2] rounded-full bg-[#e7e9e6] text-xs md:text-sm uppercase font-sans">
              ____ Project 2
            </div>
          </div>

          <div>
            <Image src={image2Logo} alt="logo" className="bg-black" />
          </div>

          <h3 className="text-xl md:text-2xl lg:text-3xl pr-0 lg:pr-8 font-bold">
            {"GameVerse – Advanced Game Character Creation & Showcase Platform"}
          </h3>

          <p className="text-gray-600 pr-0 md:pr-12 lg:pr-24 text-sm md:text-base">
            GameVerse is a fully-featured web platform designed for gamers and creators to build, customize, and showcase high-quality game characters. The platform delivers a powerful, visually immersive experience where users can generate characters, adjust attributes, and preview animations in real time.
          </p>

          <div className="mr-[5%]">
            <ol className="list-decimal pl-6 text-gray-600 text-sm md:text-base">
              <li>
                <span className="font-semibold">Built the frontend</span>{" "}
                using ReactJS using React.js, ensuring a fast, responsive, and highly interactive UI
                optimized for heavy visual content.
              </li>
            </ol>
          </div>

          {/* ✅ CASE TEXT — Toggle Section */}
          {showCase2 && (
            <div className="mt-2 p-4 text-sm md:text-base">
              <ol>
                <li>
                  <span className="font-semibold">
                    <span className="text-black font-semibold">2.</span> Developed real-time character customization features
                  </span>{" "}
                  including appearance sliders, class selection, abilities, and 3D preview support.
                </li>
                <li>
                  <span className="font-semibold">
                    <span className="text-black font-semibold">3.</span>  Integrated a Node.js backend
                  </span>{" "}
                  for secure user accounts, character saving, and server-side rendering of high-resolution models.
                </li>

                <li>
                  <span className="font-semibold">
                    <span className="text-black font-semibold">4.</span>  Implemented advanced
                  </span>{" "}
                  rendering and optimization techniques so the website can handle heavy graphics, animations, and large character files without lag.
                </li>

                <li>
                  <span className="font-semibold">
                    <span className="text-black font-semibold">5.</span> Added cloud-based storage
                  </span>{" "}
                  and caching, ensuring smooth loading, fast rendering, and reliable performance even with thousands of user-generated characters.
                </li>
              </ol>
            </div>
          )}

          {/* ✅ BUTTON — Now Always Below the Text */}
          <div className="mt-4 md:mt-6 w-full justify-center lg:justify-start">
            <button
              onClick={() => setShowCase2(!showCase2)}
              className="px-4 py-2 bg-black text-white rounded-lg shadow-md hover:bg-gray-800"
            >
              {showCase2 ? "Hide Case" : "View Case"}
              <RiArrowDownBoxLine className="inline-block ml-2" />
            </button>
          </div>

        </div>
      </div>

      {/* Project 3 */}
      <div className="flex flex-col md:flex-row items-center md:items-start p-6 md:p-12 mx-4 lg:mx-16 rounded-xl">

        {/* Left Section - Text */}
        <div className="flex-1 text-left space-y-4">

          <div className="flex items-center justify-start mb-5">
            <div className="px-2 py-1 border border-[#d5d8d2] rounded-full bg-[#e7e9e6] text-xs md:text-sm uppercase font-sans">
              ____ Project 3
            </div>
          </div>

          <div>
            <Image src={image3Logo} alt="logo" className="h-20 w-32" />
          </div>

          <h3 className="text-xl md:text-3xl lg:text-4xl pr-0 md:pr-6 lg:pr-14 font-bold">
            Award-Winning Jenkins.io – Automated Build & Deployment Platform
          </h3>

          <p className="text-gray-600 pr-0 md:pr-12 lg:pr-24 text-sm md:text-base">
            Jenkins.io is a powerful automation-driven platform designed to streamline CI/CD workflows for developers and teams. It simplifies the entire software delivery pipeline—from building and testing to deploying—through intelligent automation, integrations, and real-time monitoring. The platform enhances productivity and reliability by ensuring that code changes move smoothly from development to production with minimal manual effort.
          </p>

          <div className="mr-[5%]">
            <ol className="list-decimal pl-6 text-gray-600 text-sm md:text-base">
              <li>
                <span className="font-semibold">Built the frontend</span>{" "}
                using React.js, providing a clean, responsive, and developer-friendly interface for managing pipelines and automation tasks.
              </li>
            </ol>
          </div>

          {/* ✅ SHOW TEXT (TOGGLE AREA) */}
          {showCase3 && (
            <div className="mt-6 p-4 text-sm md:text-base">
             <ol>
             <li className="mt-4">
                <span className="font-semibold">
                <span className="text-black font-semibold">2.</span>Developed the backend
                </span>{" "}
                Node.js and Express, enabling secure pipeline execution, plugin management, and communication with external tools.
              </li>
              <li className="mt-4">
                <span className="font-semibold">
                <span className="text-black font-semibold">3.</span>Integrated Jenkins automation features
                </span>{" "}
                {"allowing users to create, trigger, and monitor builds effortlessly using customizable pipelines."}
              </li>
              <li className="mt-4">
                <span className="font-semibold">
                <span className="text-black font-semibold">4.</span>Implemented real-time logs, status updates
                </span>{" "}
                and pipeline previews, giving developers full visibility and control over their workflows.
              </li>
              <li className="mt-4">
                <span className="font-semibold">
                <span className="text-black font-semibold">5.</span> Designed a scalable, secure architecture
                </span>{" "}
                with user authentication, saved configurations, and cross-device access to manage builds anytime, anywhere.
              </li>
             </ol>
            </div>
          )}

          {/* ✅ BUTTON — ALWAYS BELOW THE TEXT */}
          <div className="mt-4 md:mt-6 w-full justify-center lg:justify-start">
            <button
              onClick={() => setShowCase3(!showCase3)}
              className="px-4 py-2 bg-black text-white rounded-lg shadow-md hover:bg-gray-800"
            >
              {showCase3 ? "Hide Case" : "View Case"}
              <RiArrowDownBoxLine className="inline-block ml-2" />
            </button>
          </div>

        </div>

        {/* Right Section - Image */}
        <div className="flex-1 mt-8 md:mt-0 md:ml-8">
          <div className="relative flex items-center justify-center">
            <Image
              src={image3}
              alt="Mobile Mockup"
              width={450}
              height={600}
              className="rounded-lg"
            />
          </div>
        </div>

      </div>


      <div className="flex items-center justify-center">

        <button
          onClick={() => router.push("/Portfolio")}
          className="px-8 py-3 mt-2 bg-black text-white rounded-lg shadow-md hover:bg-gray-800"
        >
          View More
        </button>
      </div>
    </>
  );
};

export default Projects;
