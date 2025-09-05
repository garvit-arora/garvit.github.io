import React from "react";
import SplitText from "../SplitText";
import ScrollFloat from "../ScrollFloat";
import ScrollReveal from "../ScrollReveal";
import me from "../../assets/garvit.jpg";
import PixelBlast from "../PixelBlast";
import { useRef } from "react";
import ChromaGrid from "../ChromaGrid";
import chatbot from "../../assets/logo2.png";
import logo1 from "../../assets/logo4.png";
import TextPressure from "../TextPressure";
import TrueFocus from "../TrueFocus";
import LogoLoop from "../LogoLoop";
import FuzzyText from "../FuzzyText";
import {
  SiReact,
  SiTypescript,
  SiTailwindcss,
  SiHtml5,
  SiCss3,
  SiJavascript,
  SiCplusplus,
  SiPython,
  SiDocker,
  SiGithub,
  SiNodedotjs,
  SiNpm,
  SiFigma,
  SiLinux,
  SiLinkedin,
  SiLeetcode,
  SiCodeforces,
} from "react-icons/si";
import { Timeline } from "@/components/ui/timeline";
import { AnimatedTimeline } from "../AnimatedTimeline";
import Contact from "../Contact/Contact";

const techLogos = [
  { node: <SiReact />, title: "React", href: "https://react.dev" },
  {
    node: <SiHtml5 />,
    title: "HTML",
    href: "https://en.wikipedia.org/wiki/HTML",
  },
  { node: <SiCss3 />, title: "CSS", href: "https://en.wikipedia.org/wiki/CSS" },
  {
    node: <SiJavascript />,
    title: "JS",
    href: "https://en.wikipedia.org/wiki/JS",
  },
  {
    node: <SiCplusplus />,
    title: "CPP",
    href: "https://en.wikipedia.org/wiki/C%2B%2B",
  },
  {
    node: <SiPython />,
    title: "Python",
    href: "https://en.wikipedia.org/wiki/Python",
  },
  {
    node: <SiDocker />,
    title: "Docker",
    href: "https://en.wikipedia.org/wiki/",
  },
  { node: <SiGithub />, title: "Github", href: "https://www.docker.com/" },
  { node: <SiNodedotjs />, title: "Node.js", href: "https://nodejs.org/" },
  { node: <SiNpm />, title: "NPM", href: "https://www.npmjs.com/" },
  { node: <SiFigma />, title: "Figma", href: "https://www.figma.com/" },
  { node: <SiLinux />, title: "Linux", href: "https://www.linux.org/" },
  {
    node: <SiTypescript />,
    title: "TypeScript",
    href: "https://www.typescriptlang.org",
  },
  {
    node: <SiTailwindcss />,
    title: "Tailwind CSS",
    href: "https://tailwindcss.com",
  },
];
const items = [
  {
    image: chatbot,
    title: "AI CHATBOT",
    subtitle: "React.js, Gemini API, JS",
    handle: "ChatBazzz",
    borderColor: "#3B82F6",
    gradient: "linear-gradient(145deg, #3B82F6, #000)",
    url: "https://chatbazzz.netlify.app/",
  },
  {
    image: logo1,
    title: "AI BUILDER",
    subtitle: "React.js, Gemini API",
    handle: "RESUME MAKER",
    borderColor: "#10B981",
    gradient: "linear-gradient(180deg, #10B981, #000)",
    url: "https://resumebanale.vercel.app/ ",
  },
];
const handleAnimationComplete = () => {
//   console.log("All letters have animated!");
};

function Home() {
  const containerRef = useRef(null);
  return (
    <>
      <div className="relative h-screen w-full">
        <div className="absolute inset-0 z-10">
          <PixelBlast
            variant="circle"
            pixelSize={6}
            color="#B19EEF"
            patternScale={3}
            patternDensity={1.2}
            pixelSizeJitter={0.5}
            enableRipples
            rippleSpeed={0.4}
            rippleThickness={0.12}
            rippleIntensityScale={1.5}
            liquid
            liquidStrength={0.12}
            liquidRadius={1.2}
            liquidWobbleSpeed={5}
            speed={0.6}
            edgeFade={0.25}
            transparent
          />
        </div>

        <div className="absolute inset-0 flex flex-col items-center justify-start mt-13">
          <img
            src={me}
            alt="My Pic"
            className="w-70 h-70 z-11 mt-10 rounded-full object-cover border-4 border-white shadow-lg "
          />

          <SplitText
            text="Garvit Arora"
            className="xl:text-[14rem] lg:text-[11rem] italic asimovian-regular font-semibold text-center text-white"
            delay={100}
            duration={0.6}
            ease="power3.out"
            splitType="chars"
            from={{ opacity: 0, y: 40 }}
            to={{ opacity: 1, y: 0 }}
            threshold={0.1}
            rootMargin="-100px"
            textAlign="center"
            onLetterAnimationComplete={handleAnimationComplete}
          />

          <SplitText
            text="Frontend Developer | UI/UX Developer"
            className="text-2xl italic asimovian-regular font-semibold text-center text-white m-5"
            delay={100}
            duration={2}
            ease="power3.out"
            splitType="chars"
            from={{ opacity: 0, y: 40 }}
            to={{ opacity: 1, y: 0 }}
            threshold={0.1}
            rootMargin="-100px"
            textAlign="center"
            onLetterAnimationComplete={handleAnimationComplete}
          />
        </div>
      </div>
      <div className="text-white">
        <div className=" text-center font-bold text-9xl m-5 ">
          <ScrollFloat
            animationDuration={1}
            ease="back.inOut(2)"
            scrollStart="top 70%"
            scrollEnd="center 60%"
            stagger={0.03}
          >
            About Me
          </ScrollFloat>
        </div>
        <div className="m-3">
          <ScrollReveal
            baseOpacity={0}
            enableBlur={true}
            baseRotation={5}
            blurStrength={10}
          >
            I’m Garvit Arora, a Frontend Developer with a vision that goes
            beyond just writing code. For me, development is not just about
            pushing pixels on a screen, it’s about creating meaningful digital
            experiences that actually solve problems, tell stories, and leave an
            impression on people who use them. Over the past year, I’ve explored
            and experimented with countless projects — some small and
            experimental, some large and impactful — each one teaching me how
            design and functionality can merge to create something
            unforgettable.
          </ScrollReveal>
        </div>
      </div>
      <div></div>
      <div className="">
        <div className="h-auto w-100% inset-0 text-white">
          <div>
            <div className="projects h-100" id="projects">
              <TextPressure
                text="Projects"
                flex={true}
                alpha={false}
                stroke={false}
                width={true}
                weight={true}
                italic={true}
                textColor="#ffffff"
                strokeColor="#ff0000"
                minFontSize={30}
              />
            </div>{" "}
            <br /> <br />
            <div className="mt-10">
              <ChromaGrid
                items={items}
                radius={300}
                damping={0.45}
                fadeOut={0.6}
                ease="power3.out"
              />
            </div>
          </div>
          <br />
          <br />
        </div>
      </div>
      <div className="text-white mt-40 mb-20">
        <TrueFocus
          sentence="Skills Acquired"
          manualMode={false}
          blurAmount={5}
          borderColor="red"
          animationDuration={2}
          pauseBetweenAnimations={1}
        />
        <div
          style={{ position: "relative", overflow: "hidden" }}
          className="mt-40 w-screen"
        >
          <LogoLoop
            logos={techLogos}
            speed={120}
            direction="left"
            logoHeight={48}
            gap={40}
            pauseOnHover
            scaleOnHover
            fadeOut
            fadeOutColor="#ffffff"
            ariaLabel="Skills"
          />
        </div>{" "}
        <br />
        <br />
      </div>
      <div>
        <div className="text-center m-10">
          <FuzzyText>Work Experience</FuzzyText>
        </div>
        <AnimatedTimeline />
      </div>
      <div>
        <Contact />
      </div>
      <div className="flex space-x-4 mt-4 justify-center m-10">
        <a href="https://linkedin.com/in/garvit-" target="_blank">
          <SiLinkedin className="text-white w-6 h-6" />
        </a>
        <a href="https://github.com/garvit-arora" target="_blank">
          <SiGithub className="text-white w-6 h-6" />
        </a>
        <a href="https://leetcode.com/garvit-" target="_blank">
          <SiLeetcode className="text-white w-6 h-6" />
        </a>
        <a
          href="https://codeforces.com/profile/garvit.university"
          target="_blank"
        >
          <SiCodeforces className="text-white w-6 h-6" />
        </a>
      </div>
    </>
  );
}

export default Home;
