"use client";
// components/ProjectCard.js
import Image from "next/image";
import image1 from "@/app/public/imag/image1.png";
import image1Logo from "@/app/public/imag/Malcolmgladewell.png";
import image2 from "@/app/public/imag/image2.png";
import image2Logo from "@/app/public/imag/GamecharacterLogo.png";
import image3 from "@/app/public/imag/image3.png";
import image3Logo from "@/app/public/imag/JenkinsLogo.png";
import image4 from "@/app/public/imag/image4.png";
import image4Logo from "@/app/public/imag/edifycollegeLogo.png";
import image5 from "@/app/public/imag/image5.png";
import image5Logo from "@/app/public/imag/FoodWagon.png";
import image6 from "@/app/public/imag/image6.png";
import image6Logo from "@/app/public/imag/chatwithperfessionals.webp";
import imagefoodwagonlogo from "@/app/public/imag/FoodWagonlogo.png"
import { useState } from "react";
import Footer from "../footer/Footer";
import { RiArrowDownBoxLine, RiArrowUpBoxLine } from "react-icons/ri";
const Projectstwo = () => {
  const [isExpanded, setIsExpanded] = useState(false);

  const handleToggle = () => {
    setIsExpanded(!isExpanded);
  };
  const [showMore, setShowMore] = useState({
    project1: false,
    project2: false,
    project3: false,
    project4: false,
    project5: false,
    project6: false,
    project7: false,
    project8: false,
  });

  const toggleShowMore = (projectKey) => {
    setShowMore((prevState) => ({
      ...prevState,
      [projectKey]: !prevState[projectKey], // Toggle specific project
    }));
  };
  const [showCase1, setShowCase1] = useState(false);
  const [showCase2, setShowCase2] = useState(false);
  const [showCase3, setShowCase3] = useState(false);
  const [showCase4, setShowCase4] = useState(false);
  const [showCase5, setShowCase5] = useState(false);
  const [showCase6, setShowCase6] = useState(false);

  return (
    <>
      {/* start project 1//////////////////////////////////////////////////////// */}
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

          <h3 className="text-xl md:text-2xl lg:text-3xl pr-0 lg:pr-8 font-bold">
            Malcolm Gladwell Website
          </h3>

          <p className="text-gray-600 pr-0 md:pr-12 lg:pr-24 text-sm md:text-base">
            Malcolm Gladwell Website is a fully responsive and interactive web platform
            designed to showcase the work, books, podcasts, and articles of the
            world-renowned author Malcolm Gladwell. The website focuses on delivering
            a clean, modern, and user-friendly experience that allows visitors to
            easily explore content, read long-form articles, discover book summaries,
            and stay updated with the author’s latest media appearances.
          </p>

          <ol className="list-decimal pl-6 text-gray-600 text-sm md:text-base space-y-2">
            <li>
              <span className="font-semibold">Built the frontend using</span>{" "}
              Next.js to ensure fast page loading, smooth navigation, and
              SEO-optimized performance across all devices.
            </li>


          </ol>

          {/* TOGGLE CASE DETAILS */}
          {showCase1 && (
            <div className="  text-gray-700 text-sm md:text-base">
              <ol className=" pl-6 text-gray-600 text-sm md:text-base space-y-2">
                <li>
                  <span className="font-semibold"> <span className="text to-black font-semibold">2.</span> Developed backend services</span>{" "}
                  using Node.js to handle contact form submissions and newsletter
                  subscriptions with secure data handling.
                </li>

                <li>
                  <span className="font-semibold"><span className="text to-black font-semibold">3.</span>Integrated dynamic content sections</span>{" "}
                  for books, articles, podcasts, and media highlights, making content
                  management scalable and flexible.
                </li>

                <li>
                  <span className="font-semibold"><span className="text to-black font-semibold">4.</span>Implemented responsive layouts</span>{" "}
                  with a mobile-first approach to ensure a consistent and accessible
                  experience on mobile, tablet, and desktop screens.
                </li>

                <li>
                  <span className="font-semibold"><span className="text to-black font-semibold">5.</span>Focused on clean UI & UX</span>{" "}
                  by prioritizing readability, typography hierarchy, and smooth user
                  interactions for long-form content consumption.
                </li>
              </ol>
            </div>
          )}

          {/* BUTTON — TEXT KE NEECHAY */}
          <div className="mt-4 md:mt-6 w-full justify-center lg:justify-start">
            <button
              onClick={() => setShowCase1(!showCase1)}
              className="px-4 py-2 bg-black text-white rounded-lg shadow-md hover:bg-gray-800"
            >
              {showCase1 ? "Hide Case" : "View Case"}
              <RiArrowDownBoxLine className="inline-block ml-2" />
            </button>
          </div>

        </div>

        {/* Right Section - MAIN IMAGE */}
        <div className="flex-1 mt-8 md:mt-0 md:ml-8">
          <div className="relative flex items-center justify-center">
            <Image
              src={image1}
              alt="Malcolm Gladwell Website Preview"
              width={450}
              height={600}
              className="rounded-lg"
            />
          </div>
        </div>

      </div>


      {/* start project 2//////////////////////////////////////////////////////// */}
      <div className="flex flex-col md:flex-row items-center md:items-start p-6 md:p-12 mx-4 lg:mx-7 rounded-xl">

        {/* Left Section - Image */}
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

        {/* Right Section - Text */}
        <div className="flex-1 w-full md:w-1/2 text-left space-y-4 mt-8 md:mt-0">

          <div className="flex items-center justify-start mb-5">
            <div className="px-2 py-1 border border-[#d5d8d2] rounded-full bg-[#e7e9e6] text-xs md:text-sm uppercase font-sans">
              ____ Project 2
            </div>
          </div>

          <div>
            <Image src={image2Logo} alt="logo" />
          </div>

          <h3 className="text-xl md:text-2xl lg:text-3xl pr-0 lg:pr-8 font-bold">
            GameVerse – Advanced Game Character Creation & Showcase Platform
          </h3>

          <p className="text-gray-600 pr-0 md:pr-12 lg:pr-24 text-sm md:text-base">
            GameVerse is a fully-featured web platform built for gamers and digital
            creators to design, customize, and showcase high-quality game characters.
            The platform delivers a visually immersive experience where users can
            generate characters, modify attributes, select classes, and preview
            animations in real time using advanced rendering techniques.
          </p>

          <div className="mr-[5%]">
            <ol className="list-decimal pl-6 text-gray-600 text-sm md:text-base space-y-2">

              <li>
                <span className="font-semibold">Built the frontend</span>{" "}
                using React.js to deliver a fast, responsive, and highly interactive
                interface optimized for graphics-heavy workflows.
              </li>

            </ol>
          </div>

          {/* TOGGLE CASE DETAILS */}
          {showCase2 && (
            <div className="text-gray-700 text-sm md:text-base">
              <ol className=" pl-6 text-gray-600 text-sm md:text-base space-y-2">



                <li>
                  <span className="font-semibold"> <span className="text to-black font-semibold">2.</span>Developed real-time customization</span>{" "}
                  features including appearance sliders, class selection, abilities,
                  equipment management, and live 3D character previews.
                </li>

                <li>
                  <span className="font-semibold"><span className="text to-black font-semibold">3.</span>Integrated a Node.js backend</span>{" "}
                  for secure authentication, character saving, profile management, and
                  server-side handling of high-resolution assets.
                </li>

                <li>
                  <span className="font-semibold"><span className="text to-black font-semibold">4.</span>Implemented advanced rendering</span>{" "}
                  and performance optimization techniques to smoothly handle large
                  character models, animations, and visual effects without lag.
                </li>

                <li>
                  <span className="font-semibold"><span className="text to-black font-semibold">5.bje</span>Added cloud-based storage</span>{" "}
                  and caching to ensure fast load times, scalable data handling, and
                  reliable performance even with thousands of user-generated characters.
                </li>

              </ol>
            </div>
          )}

          {/* BUTTON — TEXT KE NEECHAY */}
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

      {/* start project 3//////////////////////////////////////////////////////// */}

      <div className="flex flex-col md:flex-row items-center md:items-start p-6 md:p-12 mx-4 lg:mx-7 rounded-xl">

        {/* Left / Text Section */}
        <div className="flex-1 text-left space-y-4 mt-8 md:mt-0">

          <div className="flex items-center justify-start mb-5">
            <div className="px-2 py-1 border border-[#d5d8d2] rounded-full bg-[#e7e9e6] text-xs md:text-sm uppercase font-sans">
              ____ Project 3
            </div>
          </div>

          <div>
            <Image src={image3Logo} alt="logo" className="h-20 w-32" />
          </div>

          <h3 className="text-xl md:text-3xl lg:text-4xl pr-0 lg:pr-20 font-bold">
            Award-Winning Jenkins.io – Automated Build & Deployment Platform
          </h3>

          <p className="text-gray-600 pr-0 md:pr-12 lg:pr-24 text-sm md:text-base">
            Jenkins.io is a powerful automation-driven platform built to streamline
            CI/CD workflows for developers and engineering teams. It simplifies the
            entire software delivery pipeline — from building and testing to deploying
            applications — through intelligent automation, seamless integrations, and
            real-time monitoring. The platform significantly improves productivity,
            reliability, and deployment speed across modern development environments.
          </p>

          <div className="mr-[5%]">
            <ol className="list-decimal pl-6 text-gray-600 text-sm md:text-base space-y-3">

              <li>
                <span className="font-semibold">Built the frontend</span>{" "}
                using React.js to deliver a clean, responsive, and
                developer-friendly interface for managing pipelines and automation
                workflows.
              </li>
            </ol>
          </div>

          {/* TOGGLE CASE DETAILS */}
          {showCase3 && (
            <div className="text-gray-700 text-sm md:text-base">
              <ol className=" pl-6 text-gray-600 text-sm md:text-base space-y-3">
                <li>
                  <span className="font-semibold"><span className="text to-black font-semibold ">2.</span>Developed the backend</span>{" "}
                  using Node.js and Express, enabling secure pipeline execution,
                  plugin management, and communication with external DevOps tools.
                </li>

                <li>
                  <span className="font-semibold"><span className="text to-black font-semibold ">2.</span>Integrated Jenkins automation features</span>{" "}
                  allowing users to create, configure, trigger, and monitor builds
                  effortlessly through customizable pipelines.
                </li>

                <li>
                  <span className="font-semibold"><span className="text to-black font-semibold ">2.</span>Implemented real-time logs</span>{" "}
                  status updates, build histories, and pipeline previews to give
                  developers full visibility and control over ongoing processes.
                </li>

                <li>
                  <span className="font-semibold"><span className="text to-black font-semibold ">2.</span>Designed a scalable & secure architecture</span>{" "}
                  with authentication, saved configurations, role-based access, and
                  cross-device support to manage builds anytime, anywhere.
                </li>

              </ol>
            </div>
          )}

          {/* BUTTON — TEXT KE NEECHAY */}
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

        {/* Right / Image Section */}
        <div className="flex-1 mt-8 md:mt-0 -ml-0 lg:-ml-8">
          <div className="relative flex items-center justify-center">
            <Image
              src={image3}
              alt="Jenkins Platform Preview"
              width={450}
              height={600}
              className="rounded-lg"
            />
          </div>
        </div>

      </div>


      <div className="flex flex-col md:flex-row items-center md:items-start p-6 md:p-12 mx-4 lg:mx-7 rounded-xl">

        {/* Left / Image Section */}
        <div className="flex-1 mt-8 md:mt-0 -ml-0 lg:-ml-8">
          <div className="relative flex items-center justify-center">
            <Image
              src={image4}
              alt="Edify College Platform Preview"
              width={450}
              height={600}
              className="rounded-lg"
            />
          </div>
        </div>

        {/* Right / Text Section */}
        <div className="flex-1 text-left space-y-4 mt-8 md:mt-0">

          <div className="flex items-center justify-start mb-5">
            <div className="px-2 py-1 border border-[#d5d8d2] rounded-full bg-[#e7e9e6] text-xs md:text-sm uppercase font-sans">
              ____ Project 4
            </div>
          </div>

          <div>
            <Image src={image4Logo} alt="logo" className="h-10 w-32" />
          </div>

          <h3 className="text-xl md:text-3xl lg:text-4xl pr-0 lg:pr-20 font-bold">
            Edify College of IT – Digital Learning & Student Management Platform
          </h3>

          <p className="text-gray-600 pr-0 md:pr-12 lg:pr-24 text-sm md:text-base">
            Edify College of IT is a modern digital education platform designed to
            simplify learning, student management, and academic workflows. It provides
            students, faculty, and administrators with a centralized system to access
            courses, submit assignments, track results, and manage academic records
            through a clean and responsive interface.
          </p>

          <div className="mr-[5%]">
            <ol className="list-decimal pl-6 text-gray-600 text-sm md:text-base space-y-3">

              <li>
                Developed the <span className="font-semibold">frontend</span>{" "}
                using React, delivering an intuitive and student-friendly interface
                for course browsing, assignment submissions, and academic notifications.
              </li>
            </ol>
          </div>

          {/* CASE STUDY TOGGLE */}
          {showCase4 && (
            <div className="text-gray-700 text-sm md:text-base">
              <ol className=" pl-6 text-gray-600 text-sm md:text-base space-y-3">

                <li>
                  <span className="text-black font-semibold">2.</span>
                  Developed the <span className="font-semibold"> frontend</span>{" "}
                  using React, delivering an intuitive and student-friendly interface
                  for course browsing, assignment submissions, and academic notifications.
                </li>

                <li>
                  <span className="text-black font-semibold">3.</span>
                  Built the{" "}
                  <span className="font-semibold">backend with Node.js and Express</span>{" "}
                  to enable secure data handling, student record management, and smooth
                  communication between academic departments.
                </li>

                <li>
                  <span className="text-black font-semibold">4.</span>
                  Integrated{" "}
                  <span className="font-semibold">real-time academic updates</span>{" "}
                  allowing students and faculty to instantly view announcements,
                  assignment feedback, and schedule changes.
                </li>

                <li>
                  <span className="text-black font-semibold">5.</span>
                  Implemented{" "}
                  <span className="font-semibold">collaboration & notification features</span>{" "}
                  so users receive instant alerts for grades, submissions, and important
                  academic activities.
                </li>

                <li>
                  <span className="text-black font-semibold">6.</span>
                  Designed a{" "}
                  <span className="font-semibold">
                    secure login system with role-based access
                  </span>{" "}
                  ensuring data privacy, controlled permissions, and reliable system
                  performance across all user roles.
                </li>

              </ol>
            </div>
          )}

          {/* BUTTON */}
          <div className="mt-4 md:mt-6 w-full justify-center lg:justify-start">
            <button
              onClick={() => setShowCase4(!showCase4)}
              className="px-4 py-2 bg-black text-white rounded-lg shadow-md hover:bg-gray-800"
            >
              {showCase4 ? "Hide Case" : "View Case"}
              <RiArrowDownBoxLine className="inline-block ml-2" />
            </button>
          </div>

        </div>
      </div>

      {/* start project 5//////////////////////////////////////////////////////// */}
      <div className="flex flex-col md:flex-row items-center md:items-start p-6 md:p-12 mx-4 lg:mx-16 rounded-xl">
        {/* Left Section (Text) */}
        <div className="flex-1 text-left space-y-4">
          <div className="flex items-center justify-start mb-5">
            <div className="px-2 py-1 border border-[#d5d8d2] rounded-full bg-[#e7e9e6] text-xs md:text-sm uppercase font-sans">
              ____ Project 5
            </div>
          </div>
          <div className="flex ">
            <Image src={image5Logo} alt="logo" className="h-8 mt-1" />
            <Image src={imagefoodwagonlogo} alt="logo" />

          </div>
          <h3 className="text-xl md:text-3xl lg:text-4xl pr-0 md:pr-6 lg:pr-14 font-bold">
            Food Wagon {"–"} Online Food Ordering & Delivery Platform
          </h3>
          <p className="text-gray-600 pr-0 md:pr-6 lg:pr-14 text-sm md:text-base">
            Food Wagon is a fast, user-friendly food delivery platform that connects users with nearby restaurants, enabling them to browse menus, place orders, and receive meals quickly. The platform offers a smooth ordering experience, secure payments, and real-time delivery updates to ensure convenience and reliability for every customer.
          </p>
          {/* {showMore.project5 && ( */}
          <ol className="list-decimal pl-6 text-gray-600 text-sm md:text-base">
            <li>
              Developed the <span className="font-semibold">frontend</span>{" "}
              using React Native, creating a clean and interactive mobile app interface for browsing restaurants and placing orders effortlessly.
            </li>
          </ol>
          {showCase5 && (
            <div className="text-gray-700 text-sm md:text-base">
              <ol className=" pl-6 text-gray-600 text-sm md:text-base space-y-3">

                <li>
                  <span className="text-black font-semibold">2.</span>
                  Built a <span className="font-semibold">scalable backend</span>{" "}
                  with Node.js, TypeScript, and Prisma, supporting restaurant listings, order processing, and delivery management.
                </li>
                <li>
                  <span className="text-black font-semibold">3.</span>
                  Integrated {" "}
                  <span className="font-semibold">
                    secure payment methods
                  </span>
                  including credit/debit cards and mobile wallet options for safe and easy checkout.
                </li>
                <li>
                  <span className="text-black font-semibold">4.</span>
                  Added {" "}
                  <span className="font-semibold">user-focused features</span>such as live order tracking, driver ratings, restaurant reviews, and delivery tipping.
                </li>
                <li>
                  <span className="text-black font-semibold">5.</span>
                  Optimized performance {" "}
                  <span className="font-semibold">using Prisma and relational databases,</span>{" "}
                  ensuring fast data retrieval and smooth app functionality even during peak hours.
                </li>

              </ol>
            </div>
          )}

          {/* BUTTON */}
          <div className="mt-4 md:mt-6 w-full justify-center lg:justify-start">
            <button
              onClick={() => setShowCase5(!showCase5)}
              className="px-4 py-2 bg-black text-white rounded-lg shadow-md hover:bg-gray-800"
            >
              {showCase5 ? "Hide Case" : "View Case"}
              <RiArrowDownBoxLine className="inline-block ml-2" />
            </button>
          </div>
        </div>

        {/* Right Section (Image) */}
        <div className="flex-1 mt-8 md:mt-0 md:ml-8">
          <div className="relative flex items-center justify-center">
            <Image
              src={image5} // Replace with your image path
              alt="Mobile Mockup"
              width={450}
              height={600}
              // className="rounded-lg w-full md:w-auto"
              className="rounded-lg"
            />
          </div>
        </div>
      </div>

      {/* start project 6//////////////////////////////////////////////////////// */}
      <div className="flex flex-col md:flex-row items-center md:items-start p-6 md:p-12 mx-4 lg:mx-7 rounded-xl">
        {/* Left Section (Image) */}
        <div className="flex-1 mt-8 md:mt-0 -ml-0 lg:-ml-8">
          <div className="relative flex items-center justify-center">
            <Image
              src={image6} // Replace with your image path
              alt="Mobile Mockup"
              width={450}
              height={600}
              // className="rounded-lg w-full md:w-auto"
              className="rounded-lg"
            />
          </div>
        </div>

        {/* Right Section (Text) */}
        <div className="flex-1 text-left space-y-4 mt-8 md:mt-0">
          <div className="flex items-center justify-start mb-5">
            <div className="px-2 py-1 border border-[#d5d8d2] rounded-full bg-[#e7e9e6] text-xs md:text-sm uppercase font-sans">
              ____ Project 6
            </div>
          </div>
          <div>
            <Image src={image6Logo} alt="logo" />
          </div>
          <h3 className="text-xl md:text-3xl lg:text-4xl pr-0 lg:pr-20 font-bold">
            Chat With Professionals {"–"} Expert Consultation & Real-Time Messaging Platform
          </h3>
          <p className="text-gray-600 pr-0 md:pr-12 lg:pr-24 text-sm md:text-base">
            Chat With Professionals is an advanced communication platform designed to connect users with industry experts for real-time guidance, consulting, and professional support. It provides dedicated dashboards for experts and users, enabling smooth messaging, session management, and secure interactions within a modern, responsive environment.
          </p>
          {/* {showMore.project6 && ( */}
          <ol className="list-decimal pl-6 text-gray-600 text-sm md:text-base">
            <li>
              Developed the {" "}
              <span className="font-semibold">expert dashboard</span> to manage consultation requests, chat sessions, availability schedules, and user interactions.
            </li>

          </ol>
          {showCase6 && (
            <div className="text-gray-700 text-sm md:text-base">
              <ol className=" pl-6 text-gray-600 text-sm md:text-base space-y-3">
                <li>
                  <span className="text-black font-semibold">2.</span>
                  Built the{" "}
                  <span className="font-semibold">user dashboard</span> for seamless expert discovery, real-time messaging, session booking, and chat history access.
                </li>
                <li>
                <span className="text-black font-semibold">3.</span>
                  Implemented secure{" "}
                  <span className="font-semibold">scalable communication </span> and{" "}
                  <span className="font-semibold">features</span> ensuring stable real-time chats as platform usage grows.
                </li>
                <li>
                <span className="text-black font-semibold">4.</span>
                  Contributed to both {" "}
                  <span className="font-semibold">frontend and backend development</span>{" "}
                  ensuring responsive layouts, smooth functionality, and fast data handling.
                </li>
                <li>
                <span className="text-black font-semibold">5.</span>
                  Focused on {" "}
                  <span className="font-semibold">user-friendly UI/UX</span>{" "}
                  and{" "}
                  <span className="font-semibold">
                    automating key processes
                  </span>{" "}
                  like session scheduling, expert matching, and notification delivery.
                </li>
              </ol>
            </div>
          )}

          {/* BUTTON */}
          <div className="mt-4 md:mt-6 w-full justify-center lg:justify-start">
            <button
              onClick={() => setShowCase6(!showCase6)}
              className="px-4 py-2 bg-black text-white rounded-lg shadow-md hover:bg-gray-800"
            >
              {showCase6 ? "Hide Case" : "View Case"}
              <RiArrowDownBoxLine className="inline-block ml-2" />
            </button>
          </div>
        </div>
      </div>

      {/* end project 6//////////////////////////////////////////////////////// */}
      <Footer />
    </>
  );
};

export default Projectstwo;
