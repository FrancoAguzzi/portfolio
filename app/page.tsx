"use client";

import { useEffect, useState } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import {
  ArrowDown,
  Github,
  Linkedin,
  Mail,
  ExternalLink,
  Code,
  Palette,
  Zap,
  Brain,
  BarChart3,
  Layers,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";

export default function Portfolio() {
  const [activeSection, setActiveSection] = useState("home");
  const { scrollYProgress } = useScroll();
  const backgroundY = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);
  const [searchTerm, setSearchTerm] = useState("");

  const allSkills = [
    "AWS",
    "AWS S3",
    "AWS CloudFront",
    "Basic CSS",
    "Price Oracles",
    "Wagmi",
    "Viem",
    "Ethers.js",
    "CI/CD",
    "CSS",
    "CSS Animation",
    "Cypress",
    "DataDog",
    "DevOps",
    "Docker",
    "Drizzle",
    "Figma",
    "SCSS",
    "Git",
    "Google Analytics",
    "TRPC",
    "GraphQL",
    "Gulp",
    "Handlebars",
    "HotJar",
    "HTML",
    "I18n",
    "JavaScript",
    "Jest",
    "JIRA",
    "JQuery",
    "JWT",
    "Lucidchart",
    "Miro",
    "Node.js",
    "NPM",
    "PostCSS",
    "Postgres",
    "Prisma",
    "Python",
    "Django",
    "LangChain",
    "AI agents",
    "FastAPI",
    "React Context API",
    "React Hooks",
    "React Query",
    "Redux",
    "Redis",
    "REST",
    "Sentry",
    "Sitecore",
    "CMSs",
    "Tailwind",
    "Vue.js",
    "VueX",
    "Webpack",
    "Web Performance",
    "Web Accessibility",
    "Yarn",
    "PNPM",
    "Turbo",
    "Vercel",
    "Vite",
  ];

  const filteredSkills = allSkills.filter((skill) =>
    skill.toLowerCase().includes(searchTerm.toLowerCase())
  );

  useEffect(() => {
    const handleScroll = () => {
      const sections = ["home", "about", "achievements", "projects", "contact"];
      const scrollPosition = window.scrollY + 100;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (
            scrollPosition >= offsetTop &&
            scrollPosition < offsetTop + offsetHeight
          ) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="min-h-screen bg-[#F8FAFC] text-[#000000]">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-black/90 backdrop-blur-md border-b border-[#6B7280]/20">
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              className="text-xl font-bold text-white font-montserrat"
            >
              Open for Work
            </motion.div>
            <div className="hidden md:flex space-x-8">
              {["home", "about", "achievements", "projects", "contact"].map(
                (section) => (
                  <button
                    key={section}
                    onClick={() => scrollToSection(section)}
                    className={`capitalize transition-colors font-montserrat ${
                      activeSection === section
                        ? "text-[#6B7280]"
                        : "text-white hover:text-[#6B7280]"
                    }`}
                  >
                    {section}
                  </button>
                )
              )}
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section
        id="home"
        className="min-h-screen flex items-center justify-center relative overflow-hidden"
      >
        {/* Background image (me at desk) */}
        <div
          className="absolute inset-0 z-0"
          style={{
            backgroundImage: "url('/at-the-desk.png')",
            backgroundSize: "cover",
            backgroundPosition: "left bottom",
            backgroundRepeat: "no-repeat",
          }}
        />
        <motion.div
          style={{ y: backgroundY }}
          className="absolute inset-0 z-10 bg-gradient-to-br from-black/80 via-[#F8FAFC]/70 to-[#6B7280]/30 backdrop-blur-[2px]"
        />
        <div className="container mx-auto px-6 text-center relative z-20">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl mx-auto"
          >
            <motion.h1
              className="text-5xl md:text-7xl font-bold mb-6 font-montserrat"
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <span className="text-black">Franco</span>{" "}
            </motion.h1>
            <motion.p
              className="text-xl md:text-2xl mb-8 text-[#000000]/80 font-lora"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              Senior Product Engineer • Engineering Manager
            </motion.p>
            <motion.div
              className="flex flex-col flex-wrap justify-center items-center gap-4 mb-12"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              <div className="flex gap-2">
                <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full">
                  <BarChart3 className="w-5 h-5 text-[#6B7280]" />
                  <span className="font-montserrat">Data-driven Growth</span>
                </div>
                <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full">
                  <Layers className="w-5 h-5 text-[#9CA3AF]" />
                  <span className="font-montserrat">
                    Blockchain for Products
                  </span>
                </div>
                <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full">
                  <Brain className="w-5 h-5 text-[#9CA3AF]" />
                  <span className="font-montserrat">AI/ML for Products</span>
                </div>
              </div>
              <div className="flex">
                <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full">
                  <Brain className="w-5 h-5 text-[#9CA3AF]" />
                  <span className="font-montserrat">
                    Application Performance Focused
                  </span>
                </div>
                <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full">
                  <Layers className="w-5 h-5 text-[#9CA3AF]" />
                  <span className="font-montserrat">
                    Test Resilience Development
                  </span>
                </div>
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
            >
              <Button
                onClick={() => scrollToSection("projects")}
                className="bg-[#6B7280] hover:bg-[#6B7280]/90 text-white px-8 py-3 rounded-full font-montserrat"
              >
                View My Work
              </Button>
            </motion.div>
          </motion.div>
        </div>
        <motion.div
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
        >
          <ArrowDown className="w-6 h-6 text-[#000000]" />
        </motion.div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-[#F8FAFC]">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="max-w-6xl mx-auto"
          >
            <div className="grid md:grid-cols-2 gap-12 items-start mb-16">
              <div className="flex flex-col gap-4 items-center justify-center relative">
                <div className="w-80 mx-auto rounded-full flex items-center justify-center">
                  <div className="w-72 bg-[#F8FAFC] flex items-center justify-center">
                    <img
                      src="/franco-aguzzi.jpg"
                      alt="Franco Aguzzi"
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>

                <div className="mb-6 w-full mt-12 flex flex-col gap-4 items-center justify-center">
                  <div className="space-y-2 text-[#000000]/80 font-lora">
                    <p>📍 Florianópolis, Brazil</p>
                    <p>📞 +55 (48) 98818-3286</p>
                  </div>
                </div>
              </div>
              <div className="text-left">
                <h3 className="text-2xl font-bold mb-4 text-black font-montserrat">
                  Summary
                </h3>
                <p className="text-lg mb-6 font-lora text-[#000000]/80">
                  Senior Product Engineer with 5+ years of experience designing
                  and delivering high-impact, market-leading digital products.
                  Specialized in AI/ML integration, data-driven growth
                  strategies, and software architecture for scalable solutions.
                </p>
                <p className="text-lg mb-6 font-lora text-[#000000]/80">
                  Experienced at implementing strong engineering team standards,
                  upholding code quality, and driving innovation through
                  metrics-driven development. Led a 9-person engineering team,
                  actively contributing to high-performance and collaborative
                  development environments.
                </p>
                <p className="text-lg mb-6 font-lora text-[#000000]/80">
                  Proven track record of building scalable, maintainable
                  solutions across Web3, SaaS, and AI—consistently focused on
                  performance and product market fit. Strategic advisor for
                  digital nation-building solutions and network states
                  development.
                </p>

                <div className="mb-6">
                  <h4 className="text-lg font-semibold mb-3 text-black font-montserrat">
                    Languages (C2)
                  </h4>
                  <div className="flex gap-4 text-[#000000]/80 font-lora">
                    <span className="px-3 py-1 bg-[#9CA3AF]/10 rounded-full">
                      Spanish
                    </span>
                    <span className="px-3 py-1 bg-[#9CA3AF]/10 rounded-full">
                      English
                    </span>
                    <span className="px-3 py-1 bg-[#9CA3AF]/10 rounded-full">
                      Portuguese
                    </span>
                  </div>
                </div>
              </div>
            </div>

            <div className="flex w-full justify-center gap-4 mb-12">
              <a href="https://github.com/FrancoAguzzi/">
                <Button
                  variant="outline"
                  className="border-[#9CA3AF] text-[#9CA3AF] hover:bg-[#9CA3AF] hover:text-white"
                >
                  <Github className="w-4 h-4 mr-2" />
                  GitHub
                </Button>
              </a>
              <a href="https://www.linkedin.com/in/franco-from-crystal/">
                <Button
                  variant="outline"
                  className="border-[#6B7280] text-[#6B7280] hover:bg-[#6B7280] hover:text-white"
                >
                  <Linkedin className="w-4 h-4 mr-2" />
                  LinkedIn
                </Button>
              </a>
            </div>

            {/* Achievements Section */}
            <section id="achievements" className="py-20">
              <div className="container mx-auto px-6">
                <motion.div
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8 }}
                  viewport={{ once: true }}
                  className="max-w-6xl mx-auto"
                >
                  <div className="text-center mb-16">
                    <h2 className="text-4xl md:text-5xl font-bold mb-8 text-black font-montserrat">
                      Key Achievements
                    </h2>
                    <p className="text-xl text-[#000000]/80 font-lora max-w-3xl mx-auto">
                      Quality as a service for global-wide teams since my 18s
                    </p>
                  </div>

                  <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {/* Hackathon Winner */}
                    <motion.div
                      initial={{ opacity: 0, y: 30 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.8 }}
                      viewport={{ once: true }}
                      className="bg-gradient-to-br from-[#6B7280]/5 to-[#6B7280]/10 p-6 rounded-xl hover:shadow-lg transition-all duration-300"
                    >
                      <div className="flex items-center mb-4">
                        <div className="w-12 h-12 bg-gradient-to-br from-[#6B7280] to-[#9CA3AF] rounded-full flex items-center justify-center mr-4">
                          <span className="text-2xl">🏆</span>
                        </div>
                        <div>
                          <h3 className="text-lg font-bold text-black font-montserrat">
                            Hackathon Champion
                          </h3>
                          <p className="text-[#6B7280] font-montserrat text-sm">
                            4x Winner
                          </p>
                        </div>
                      </div>
                      <p className="text-[#000000]/80 font-lora">
                        Winner of both national and global Ethereum hackathon
                        prizes, demonstrating exceptional innovation in Web3
                        development
                      </p>
                    </motion.div>

                    {/* L'ORÉAL Experience */}
                    <motion.div
                      initial={{ opacity: 0, y: 30 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.8, delay: 0.1 }}
                      viewport={{ once: true }}
                      className="bg-gradient-to-br from-[#9CA3AF]/5 to-[#9CA3AF]/10 p-6 rounded-xl hover:shadow-lg transition-all duration-300"
                    >
                      <div className="flex items-center mb-4">
                        <div className="w-12 h-12 bg-gradient-to-br from-[#9CA3AF] to-[#6B7280] rounded-full flex items-center justify-center mr-4">
                          <span className="text-2xl">🌟</span>
                        </div>
                        <div>
                          <h3 className="text-lg font-bold text-black font-montserrat">
                            Enterprise Scale
                          </h3>
                          <p className="text-[#9CA3AF] font-montserrat text-sm">
                            L'ORÉAL NEW YORK
                          </p>
                        </div>
                      </div>
                      <p className="text-[#000000]/80 font-lora">
                        Frontend Engineer serving the full range of US public
                        through high-traffic e-commerce platforms for major
                        beauty brands
                      </p>
                    </motion.div>

                    {/* FINCLASS Experience */}
                    <motion.div
                      initial={{ opacity: 0, y: 30 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.8, delay: 0.2 }}
                      viewport={{ once: true }}
                      className="bg-gradient-to-br from-black/5 to-black/10 p-6 rounded-xl hover:shadow-lg transition-all duration-300"
                    >
                      <div className="flex items-center mb-4">
                        <div className="w-12 h-12 bg-gradient-to-br from-black to-[#6B7280] rounded-full flex items-center justify-center mr-4">
                          <span className="text-2xl">📺</span>
                        </div>
                        <div>
                          <h3 className="text-lg font-bold text-black font-montserrat">
                            Streaming Platform
                          </h3>
                          <p className="text-black font-montserrat text-sm">
                            100K+ Users
                          </p>
                        </div>
                      </div>
                      <p className="text-[#000000]/80 font-lora">
                        Frontend Engineer at FINCLASS, a Netflix-like streaming
                        platform delivering educational content to over 100,000
                        users
                      </p>
                    </motion.div>

                    {/* Leadership Experience */}
                    <motion.div
                      initial={{ opacity: 0, y: 30 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.8, delay: 0.3 }}
                      viewport={{ once: true }}
                      className="bg-gradient-to-br from-[#6B7280]/5 to-[#6B7280]/10 p-6 rounded-xl hover:shadow-lg transition-all duration-300"
                    >
                      <div className="flex items-center mb-4">
                        <div className="w-12 h-12 bg-gradient-to-br from-[#6B7280] to-black rounded-full flex items-center justify-center mr-4">
                          <span className="text-2xl">👑</span>
                        </div>
                        <div>
                          <h3 className="text-lg font-bold text-black font-montserrat">
                            Tech Leadership
                          </h3>
                          <p className="text-[#6B7280] font-montserrat text-sm">
                            CTO • Team Lead
                          </p>
                        </div>
                      </div>
                      <p className="text-[#000000]/80 font-lora">
                        Proven leadership as CTO, Tech Leader, Frontend and
                        FullStack Engineer across multiple high-impact projects
                      </p>
                    </motion.div>

                    {/* Web3 Agency */}
                    <motion.div
                      initial={{ opacity: 0, y: 30 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.8, delay: 0.4 }}
                      viewport={{ once: true }}
                      className="bg-gradient-to-br from-[#9CA3AF]/5 to-[#9CA3AF]/10 p-6 rounded-xl hover:shadow-lg transition-all duration-300"
                    >
                      <div className="flex items-center mb-4">
                        <div className="w-12 h-12 bg-gradient-to-br from-[#9CA3AF] to-black rounded-full flex items-center justify-center mr-4">
                          <span className="text-2xl">🚀</span>
                        </div>
                        <div>
                          <h3 className="text-lg font-bold text-black font-montserrat">
                            Web3 Co-Founder
                          </h3>
                          <p className="text-[#9CA3AF] font-montserrat text-sm">
                            UNISWAP Client
                          </p>
                        </div>
                      </div>
                      <p className="text-[#000000]/80 font-lora">
                        Co-founded a Web3 software agency, delivering
                        cutting-edge solutions for industry leaders like UNISWAP
                      </p>
                    </motion.div>

                    {/* Global Teams */}
                    <motion.div
                      initial={{ opacity: 0, y: 30 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.8, delay: 0.5 }}
                      viewport={{ once: true }}
                      className="bg-gradient-to-br from-black/5 to-black/10 p-6 rounded-xl hover:shadow-lg transition-all duration-300"
                    >
                      <div className="flex items-center mb-4">
                        <div className="w-12 h-12 bg-gradient-to-br from-black to-[#9CA3AF] rounded-full flex items-center justify-center mr-4">
                          <span className="text-2xl">🌍</span>
                        </div>
                        <div>
                          <h3 className="text-lg font-bold text-black font-montserrat">
                            Global Collaboration
                          </h3>
                          <p className="text-black font-montserrat text-sm">
                            Since Age 18
                          </p>
                        </div>
                      </div>
                      <p className="text-[#000000]/80 font-lora">
                        Extensive experience working in multi-cultural teams
                        since age 18, delivering quality solutions for
                        global-wide teams
                      </p>
                    </motion.div>
                  </div>

                  {/* Stats Row */}
                  <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.6 }}
                    viewport={{ once: true }}
                    className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8"
                  >
                    <div className="text-center">
                      <div className="text-3xl md:text-4xl font-bold text-[#6B7280] font-montserrat mb-2">
                        4x
                      </div>
                      <div className="text-[#000000]/80 font-lora">
                        Hackathon Winner
                      </div>
                    </div>
                    <div className="text-center">
                      <div className="text-3xl md:text-4xl font-bold text-[#9CA3AF] font-montserrat mb-2">
                        100K+
                      </div>
                      <div className="text-[#000000]/80 font-lora">
                        Users Served in single platform
                      </div>
                    </div>
                    <div className="text-center">
                      <div className="text-3xl md:text-4xl font-bold text-black font-montserrat mb-2">
                        5+
                      </div>
                      <div className="text-[#000000]/80 font-lora">
                        Years Experience
                      </div>
                    </div>
                    <div className="text-center">
                      <div className="text-3xl md:text-4xl font-bold text-[#6B7280] font-montserrat mb-2">
                        Global
                      </div>
                      <div className="text-[#000000]/80 font-lora">
                        Teams Collaboration
                      </div>
                    </div>
                  </motion.div>
                </motion.div>
              </div>
            </section>

            {/* Specialized Expertise */}
            <div className="mb-16">
              <h3 className="text-3xl font-bold mb-8 text-black font-montserrat text-center">
                You may be interested in knowing I am specialized in:
              </h3>

              <div className="grid lg:grid-cols-3 gap-6">
                {/* AI/ML Integrator */}
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8 }}
                  viewport={{ once: true }}
                  className="bg-gradient-to-br from-[#6B7280]/5 to-[#6B7280]/10 p-6 rounded-xl hover:shadow-lg transition-all duration-300"
                >
                  <div className="flex items-center mb-4">
                    <div>
                      <h4 className="text-lg font-bold text-black font-montserrat">
                        AI for Businesses
                      </h4>
                    </div>
                  </div>
                  <p className="text-[#000000]/80 font-lora text-sm">
                    Have AI-enhanced product journeys: get up to date to the
                    latest technologies in the market with ease. I help teams to
                    deliver value while following innovative product roadmaps. I
                    have built AI/ML + TypeScript SDKs and am certified in AI
                    for Businesses, having awareness of key aspects of AI
                    implementation in businesses.
                  </p>
                </motion.div>

                {/* Data-driven Growth */}
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.1 }}
                  viewport={{ once: true }}
                  className="bg-gradient-to-br from-[#9CA3AF]/5 to-[#9CA3AF]/10 p-6 rounded-xl hover:shadow-lg transition-all duration-300"
                >
                  <div className="flex items-center mb-4">
                    <div>
                      <h4 className="text-lg font-bold text-black font-montserrat">
                        Data-driven Growth
                      </h4>
                    </div>
                  </div>
                  <p className="text-[#000000]/80 font-lora text-sm">
                    Metrics that nurture product teams and stakeholders for
                    realistic feedback loops. Drive your product / company
                    growth through data insights, not through assumptions. I
                    leadered data-driven strategies for L'Óreal products and for
                    engineering teams. Grow team's and stakeholders awareness.
                  </p>
                </motion.div>

                {/* Software Architect */}
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.2 }}
                  viewport={{ once: true }}
                  className="bg-gradient-to-br from-black/5 to-black/10 p-6 rounded-xl hover:shadow-lg transition-all duration-300"
                >
                  <div className="flex items-center mb-4">
                    <div className="flex-shrink">
                      <h4 className="text-lg font-bold text-black font-montserrat">
                        Solutions Architecting and <br />
                        Software Engineering
                      </h4>
                    </div>
                  </div>
                  <p className="text-[#000000]/80 font-lora text-sm">
                    Designed and shipped multiple component libraries,
                    e-commerces, Landing pages, PLPs, PDPs, Blockchain and
                    payments integrations, etc. Create responsive user journeys
                    and nurture them from customer feedbacks alongside with me.
                    My background includes strategical advising on technical
                    challenges of digital nation-building solutions.
                  </p>
                </motion.div>
              </div>
            </div>

            {/* Skills Section */}
            <div className="mb-16">
              <h3 className="text-3xl font-bold mb-8 text-black font-montserrat text-center">
                Core Technologies
              </h3>

              {/* Featured Skills */}
              <div className="mb-8">
                <h4 className="text-xl font-semibold mb-4 text-black font-montserrat">
                  Featured Expertise
                </h4>
                <div className="flex flex-wrap gap-3 mb-6">
                  {[
                    "React.js",
                    "Next.js",
                    "Typescript",
                    "Python",
                    "AWS",
                    "Blockchains",
                  ].map((skill, index) => (
                    <motion.div
                      key={skill}
                      initial={{ opacity: 0, scale: 0.8 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                      viewport={{ once: true }}
                      className="px-4 py-2 bg-gradient-to-r from-[#6B7280] to-[#6B7280]/80 text-white rounded-full font-montserrat font-semibold flex items-center gap-2"
                    >
                      <span className="text-yellow-300">⭐</span>
                      {skill}
                    </motion.div>
                  ))}
                </div>
              </div>

              {/* Search Filter */}
              <div className="mb-8">
                <div className="flex flex-col md:flex-row gap-4 items-center">
                  <div className="w-full md:w-64">
                    <Input
                      type="text"
                      placeholder="Filter technologies..."
                      className="w-full bg-white border-[#F8FAFC] text-[#000000] placeholder:text-[#6B7280]"
                      value={searchTerm}
                      onChange={(e) => setSearchTerm(e.target.value)}
                    />
                  </div>
                </div>
              </div>

              {/* All Skills Grid */}
              <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-3">
                {filteredSkills.length === 0 ? (
                  <div className="flex justify-center col-span-full text-center py-8">
                    <p className="text-[#6B7280] font-montserrat">
                      No technology found.
                    </p>
                  </div>
                ) : (
                  filteredSkills.map((skill, index) => (
                    <motion.div
                      key={skill}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: (index % 12) * 0.05 }}
                      viewport={{ once: true }}
                      className="px-3 py-2 bg-white hover:bg-[#9CA3AF]/10 text-[#000000] text-sm rounded-lg font-montserrat transition-colors duration-200 text-center border border-[#F8FAFC]"
                    >
                      {skill}
                    </motion.div>
                  ))
                )}
              </div>
            </div>

            {/* Core Competencies Section */}
            <div className="mb-16">
              <h3 className="text-3xl font-bold mb-8 text-black font-montserrat text-center">
                Core Competencies
              </h3>

              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {/* TypeScript & Frameworks */}
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8 }}
                  viewport={{ once: true }}
                  className="bg-gradient-to-br from-[#6B7280]/5 to-[#6B7280]/10 p-6 rounded-xl hover:shadow-lg transition-all duration-300"
                >
                  <div className="flex items-center mb-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-[#6B7280] to-[#9CA3AF] rounded-lg flex items-center justify-center mr-4">
                      <Code className="w-6 h-6 text-white" />
                    </div>
                    <h4 className="text-lg font-bold text-black font-montserrat">
                      TypeScript • Frameworks
                    </h4>
                  </div>
                  <p className="text-[#000000]/80 font-lora mb-3">
                    Full-stack development with modern frameworks and type-safe
                    applications
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {[
                      "TypeScript",
                      "React.js",
                      "Next.js",
                      "Node.js",
                      "Python",
                      "Django",
                      "FastAPI",
                    ].map((tech) => (
                      <span
                        key={tech}
                        className="px-2 py-1 bg-[#6B7280]/10 text-[#000000] text-xs rounded font-montserrat"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </motion.div>

                {/* AI/ML */}
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.1 }}
                  viewport={{ once: true }}
                  className="bg-gradient-to-br from-[#9CA3AF]/5 to-[#9CA3AF]/10 p-6 rounded-xl hover:shadow-lg transition-all duration-300"
                >
                  <div className="flex items-center mb-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-[#9CA3AF] to-[#6B7280] rounded-lg flex items-center justify-center mr-4">
                      <Zap className="w-6 h-6 text-white" />
                    </div>
                    <h4 className="text-lg font-bold text-black font-montserrat">
                      AI / ML
                    </h4>
                  </div>
                  <p className="text-[#000000]/80 font-lora mb-3">
                    Artificial Intelligence integrations and machine learning
                    solutions
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {[
                      "AI/ML Integrations",
                      "LLMs",
                      "AI for Businesses Certified",
                      "LangChain",
                    ].map((tech) => (
                      <span
                        key={tech}
                        className="px-2 py-1 bg-[#9CA3AF]/10 text-[#000000] text-xs rounded font-montserrat"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </motion.div>

                {/* DeFi & Blockchain */}
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.2 }}
                  viewport={{ once: true }}
                  className="bg-gradient-to-br from-black/5 to-black/10 p-6 rounded-xl hover:shadow-lg transition-all duration-300"
                >
                  <div className="flex items-center mb-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-black to-[#6B7280] rounded-lg flex items-center justify-center mr-4">
                      <span className="text-white text-lg font-bold">₿</span>
                    </div>
                    <h4 className="text-lg font-bold text-black font-montserrat">
                      DeFi • Blockchain
                    </h4>
                  </div>
                  <p className="text-[#000000]/80 font-lora mb-3">
                    Decentralized finance applications and blockchain solutions
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {[
                      "Cross-chain",
                      "NFTs",
                      "DEXs",
                      "Payments",
                      "Rewards",
                      "Gas Cost Estimation",
                      "ERC20/721",
                    ].map((tech) => (
                      <span
                        key={tech}
                        className="px-2 py-1 bg-black/10 text-[#000000] text-xs rounded font-montserrat"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </motion.div>

                {/* Web Experiences */}
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.3 }}
                  viewport={{ once: true }}
                  className="bg-gradient-to-br from-[#6B7280]/5 to-[#6B7280]/10 p-6 rounded-xl hover:shadow-lg transition-all duration-300"
                >
                  <div className="flex items-center mb-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-[#6B7280] to-black rounded-lg flex items-center justify-center mr-4">
                      <Palette className="w-6 h-6 text-white" />
                    </div>
                    <h4 className="text-lg font-bold text-black font-montserrat">
                      Web Experiences
                    </h4>
                  </div>
                  <p className="text-[#000000]/80 font-lora mb-3">
                    User experience optimization and accessible web applications
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {[
                      "UX Optimization",
                      "Web Perfomance",
                      "Data-driven",
                      "Accessibility via WCAG2.0",
                      "Responsive User Interfaces",
                    ].map((tech) => (
                      <span
                        key={tech}
                        className="px-2 py-1 bg-[#6B7280]/10 text-[#000000] text-xs rounded font-montserrat"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </motion.div>

                {/* Security & Authentication */}
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.4 }}
                  viewport={{ once: true }}
                  className="bg-gradient-to-br from-[#9CA3AF]/5 to-[#9CA3AF]/10 p-6 rounded-xl hover:shadow-lg transition-all duration-300"
                >
                  <div className="flex items-center mb-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-[#9CA3AF] to-black rounded-lg flex items-center justify-center mr-4">
                      <span className="text-white text-lg">🔒</span>
                    </div>
                    <h4 className="text-lg font-bold text-black font-montserrat">
                      Security • Auth
                    </h4>
                  </div>
                  <p className="text-[#000000]/80 font-lora mb-3">
                    Secure application development and authentication systems
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {[
                      "Wallet Auth",
                      "JWT",
                      "NextAuth",
                      "HTTPS",
                      "Software Architecture",
                      "Deployments and CI/CD",
                      "Application Testing and Monitoring",
                    ].map((tech) => (
                      <span
                        key={tech}
                        className="px-2 py-1 bg-[#9CA3AF]/10 text-[#000000] text-xs rounded font-montserrat"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </motion.div>

                {/* Product Growth */}
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.5 }}
                  viewport={{ once: true }}
                  className="bg-gradient-to-br from-black/5 to-black/10 p-6 rounded-xl hover:shadow-lg transition-all duration-300"
                >
                  <div className="flex items-center mb-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-black to-[#9CA3AF] rounded-lg flex items-center justify-center mr-4">
                      <span className="text-white text-lg">📈</span>
                    </div>
                    <h4 className="text-lg font-bold text-black font-montserrat">
                      Product Growth
                    </h4>
                  </div>
                  <p className="text-[#000000]/80 font-lora mb-3">
                    Product leadership and team management for scalable growth
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {[
                      "CTO",
                      "Team Lead",
                      "Solutions Architect",
                      "Remote Teams",
                      "Product Strategy",
                    ].map((tech) => (
                      <span
                        key={tech}
                        className="px-2 py-1 bg-black/10 text-[#000000] text-xs rounded font-montserrat"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </motion.div>
              </div>

              {/* Technical Expertise Grid */}
              <div className="mt-12">
                <h4 className="text-xl font-semibold mb-6 text-black font-montserrat text-center">
                  Technical Expertise
                </h4>
                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                  {/* Testing */}
                  <div className="text-center p-4 bg-white rounded-lg shadow-sm border border-[#F8FAFC]">
                    <h5 className="font-semibold text-black font-montserrat mb-2">
                      Testing
                    </h5>
                    <p className="text-sm text-[#000000]/80 font-lora mb-2">
                      Unit, Integration and E2E
                    </p>
                    <div className="flex flex-wrap justify-center gap-1">
                      {["Jest", "Cypress", "Vitest"].map((tech) => (
                        <span
                          key={tech}
                          className="px-2 py-1 bg-[#F8FAFC] text-[#000000] text-xs rounded font-montserrat"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Performance */}
                  <div className="text-center p-4 bg-white rounded-lg shadow-sm border border-[#F8FAFC]">
                    <h5 className="font-semibold text-black font-montserrat mb-2">
                      Performance
                    </h5>
                    <p className="text-sm text-[#000000]/80 font-lora mb-2">
                      Monitoring and Optimization
                    </p>
                    <div className="flex flex-wrap justify-center gap-1">
                      {[
                        "DataDog",
                        "Sentry",
                        "Vercel",
                        "Turbo",
                        "Web Vitals",
                      ].map((tech) => (
                        <span
                          key={tech}
                          className="px-2 py-1 bg-[#F8FAFC] text-[#000000] text-xs rounded font-montserrat"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Design Systems */}
                  <div className="text-center p-4 bg-white rounded-lg shadow-sm border border-[#F8FAFC]">
                    <h5 className="font-semibold text-black font-montserrat mb-2">
                      Design Systems
                    </h5>
                    <p className="text-sm text-[#000000]/80 font-lora mb-2">
                      Component Libraries
                    </p>
                    <div className="flex flex-wrap justify-center gap-1">
                      {[
                        "Storybook",
                        "Tailwind",
                        "Custom Components",
                        "Atomic Design",
                        "CMSs",
                      ].map((tech) => (
                        <span
                          key={tech}
                          className="px-2 py-1 bg-[#F8FAFC] text-[#000000] text-xs rounded font-montserrat"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* API & DevOps */}
                  <div className="text-center p-4 bg-white rounded-lg shadow-sm border border-[#F8FAFC]">
                    <h5 className="font-semibold text-black font-montserrat mb-2">
                      API and DevOps
                    </h5>
                    <p className="text-sm text-[#000000]/80 font-lora mb-2">
                      Infrastructure and APIs
                    </p>
                    <div className="flex flex-wrap justify-center gap-1">
                      {[
                        "GraphQL",
                        "REST",
                        "Docker",
                        "AWS",
                        "CI/CD",
                        "Environments and APIs Monitoring",
                      ].map((tech) => (
                        <span
                          key={tech}
                          className="px-2 py-1 bg-[#F8FAFC] text-[#000000] text-xs rounded font-montserrat"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Education */}
            <div>
              <h3 className="text-3xl font-bold mb-8 text-black font-montserrat text-center">
                Education • Certifications
              </h3>

              <div className="grid md:grid-cols-2 gap-8">
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8 }}
                  viewport={{ once: true }}
                  className="bg-gradient-to-br from-[#9CA3AF]/10 to-[#9CA3AF]/5 p-6 rounded-lg"
                >
                  <h4 className="text-xl font-bold text-black mb-2 font-montserrat">
                    Bachelor's Degree
                  </h4>
                  <p className="text-lg text-[#9CA3AF] font-semibold mb-2 font-montserrat">
                    Information Systems
                  </p>
                  <p className="text-[#000000]/80 font-lora">
                    Federal University of Saint Catherine
                  </p>
                  <p className="text-[#000000]/60 font-lora">
                    Jan 2019 — Dec 2022 • Florianópolis
                  </p>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.2 }}
                  viewport={{ once: true }}
                  className="bg-gradient-to-br from-[#6B7280]/10 to-[#6B7280]/5 p-6 rounded-lg"
                >
                  <h4 className="text-xl font-bold text-black mb-2 font-montserrat">
                    Professional Certification
                  </h4>
                  <p className="text-lg text-[#6B7280] font-semibold mb-2 font-montserrat">
                    AI Strategist for Businesses
                  </p>
                  <p className="text-[#000000]/80 font-lora">
                    Specialized certification in AI strategy and implementation
                  </p>
                </motion.div>
              </div>
            </div>

            {/* Experience Section */}
            <div className="mt-16">
              <h3 className="text-3xl font-bold mb-8 text-black font-montserrat text-center">
                Past Professional Experiences
              </h3>

              <div className="space-y-8">
                {/* BLOCKFUL */}
                <motion.div
                  initial={{ opacity: 0, x: -50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8 }}
                  viewport={{ once: true }}
                  className="border-l-4 border-[#6B7280] pl-6"
                >
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-3">
                    <h4 className="text-xl font-bold text-black font-montserrat">
                      Senior Full Stack Engineer
                    </h4>
                    <span className="text-[#6B7280] font-montserrat font-semibold">
                      Sep 2022 — Mar 2025
                    </span>
                  </div>
                  <p className="text-lg font-semibold text-[#9CA3AF] mb-3 font-montserrat">
                    BLOCKFUL • Florianópolis, Brazil (Hybrid)
                  </p>
                  <ul className="space-y-2 text-[#000000]/80 font-lora">
                    <li>
                      • Drove technical execution of multiple Web3, DeFi, and AI
                      projects for clients such as UNISWAP and ENS
                    </li>
                    <li>
                      • Contributed to product roadmap planning by breaking down
                      business requirements into actionable engineering tasks
                    </li>
                    <li>
                      • Implemented CI/CD pipelines and automated testing,
                      ensuring code quality and deployment reliability
                    </li>
                    <li>
                      • Maintained transparent reporting on project progress and
                      delivery metrics for stakeholders
                    </li>
                    <li>
                      • Mentored engineers in best practices, code reviews, and
                      knowledge sharing
                    </li>
                  </ul>
                </motion.div>

                {/* L'ORÉAL */}
                <motion.div
                  initial={{ opacity: 0, x: -50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8, delay: 0.2 }}
                  viewport={{ once: true }}
                  className="border-l-4 border-[#9CA3AF] pl-6"
                >
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-3">
                    <h4 className="text-xl font-bold text-black font-montserrat">
                      Frontend Engineer
                    </h4>
                    <span className="text-[#9CA3AF] font-montserrat font-semibold">
                      Oct 2019 — Dec 2021
                    </span>
                  </div>
                  <p className="text-lg font-semibold text-[#6B7280] mb-3 font-montserrat">
                    L'ORÉAL NEW YORK • Florianópolis, Brazil (Hybrid)
                  </p>
                  <ul className="space-y-2 text-[#000000]/80 font-lora">
                    <li>
                      • Developed high-traffic e-commerce platforms for leading
                      US brands (Maybelline, Essie, Garnier, Cerave)
                    </li>
                    <li>
                      • Collaborated with product managers and design teams to
                      prioritize features and implement analytics
                    </li>
                    <li>
                      • Achieved 75%+ unit test coverage and full WCAG 2.0
                      accessibility compliance
                    </li>
                    <li>
                      • Worked in agile, multicultural teams to deliver projects
                      on schedule
                    </li>
                  </ul>
                </motion.div>

                {/* GRUPO PRIMO */}
                <motion.div
                  initial={{ opacity: 0, x: -50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8, delay: 0.4 }}
                  viewport={{ once: true }}
                  className="border-l-4 border-black pl-6"
                >
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-3">
                    <h4 className="text-xl font-bold text-black font-montserrat">
                      Front End Engineer
                    </h4>
                    <span className="text-black font-montserrat font-semibold">
                      Dec 2021 — Jun 2022
                    </span>
                  </div>
                  <p className="text-lg font-semibold text-[#9CA3AF] mb-3 font-montserrat">
                    GRUPO PRIMO (Finclass and Staage) • São Paulo, Brazil
                    (Remote)
                  </p>
                  <ul className="space-y-2 text-[#000000]/80 font-lora">
                    <li>
                      • Delivered features for streaming/edtech platform serving
                      100,000+ users
                    </li>
                    <li>
                      • Built modular social network features using A/B testing
                      and user analytics
                    </li>
                    <li>
                      • Migrated legacy codebases from JavaScript to TypeScript
                    </li>
                    <li>
                      • Partnered with cross-functional teams to ensure seamless
                      feature delivery
                    </li>
                  </ul>
                </motion.div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 bg-[#F8FAFC]">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-8 text-black font-montserrat">
              Featured Projects
            </h2>
            <p className="text-xl text-[#000000]/80 font-lora max-w-2xl mx-auto">
              A showcase of innovative solutions and creative implementations
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "NameHash",
                description:
                  "Fullstack engineer for an innovative NFT marketplace integrating AI/ML, blockchain, and advanced 3D web technologies. Built interactive UI, 3D CSS animations, dynamic OpenGraph images, TRPC APIs, smart contract oracles, and crypto payment flows—delivering a seamless, step-by-step Web3 UX for domain registration.",
                tech: ["NFT", "AI/ML", "Web3"],
                color: "from-[#B721FF] to-[#21D4FD]",
                url: "https://namehash.io/",
                image: "/namehash-labs.png",
              },
              {
                title: "Cerave [New York | United States]",
                description:
                  "Built the Cerave US website from scratch, achieving 75% unit test coverage and full WCAG 2.0 accessibility. Implemented robust web components and data-layer comms, collaborating in diverse Scrum teams using Vue.js, Jest, and modern web tech.",
                tech: ["Vue.js", "Accessibility", "E-commerce"],
                color: "from-[#83a4d4] to-[#b6fbff]",
                url: "http://cerave.com/",
                image: "/cerave.png",
              },
              {
                title: "Finclass",
                description:
                  "Delivered new features and maintained a streaming edtech platform serving 100,000+ users, focused on scalable front-end and strong user engagement. Built modular social network features, modernized codebase to TypeScript, and collaborated across teams for seamless, high-impact releases.",
                tech: ["Vue.js", "TypeScript", "EdTech"],
                color: "from-[#0F2027] to-[#2C5364]",
                url: "https://app.finclass.com/",
                image: "/finclass.png",
              },
              {
                title: "Maybelline [New York | United States]",
                description:
                  "Maintained and improved Maybelline's US e-commerce with 75% unit test coverage and full WCAG 2.0 accessibility. Led web component and data-layer enhancements, collaborating in multicultural Scrum teams using Vue.js, Jest, and modern web tech.",
                tech: ["Vue.js", "Accessibility", "E-commerce"],
                color: "from-[#434343] to-[#262626]",
                url: "https://maybelline.com/",
                image: "/maybelline.png",
              },
              {
                title: "Freename",
                description:
                  "Served as tech leader and frontend developer for Freename, a Web3 domains marketplace enabling users to register and trade blockchain-based domains and TLDs.",
                tech: ["Web3", "Marketplace", "Frontend"],
                color: "from-[#8F00FF] to-[#5CE1E6]",
                url: "https://freename.io/",
                image: "/freename.png",
              },
              {
                title: "Essie [New York | United States]",
                description:
                  "Built and maintained Essie's US e-commerce platform with 75% unit test coverage and 100% WCAG 2.0 accessibility compliance. Led data-driven UI improvements and collaborated with multi-cultural teams, using Vue.js, Jest, and modern web tech.",
                tech: ["Vue.js", "Accessibility", "E-commerce"],
                color: "from-[#F9D423] to-[#FF4E50]",
                url: "http://essie.com/",
                image: "/essie.png",
              },
              {
                title: "Zuzalu's Trustful Plug-in",
                description:
                  "Tech leader for the integration of Trustful into Zuzalu, enabling secure reputation and identity for ZuCities globally. Zuzalu—supported by Vitalik Buterin—connects leading-edge technologies with a handpicked global community to shape the cities of the future.",
                tech: ["Web3", "Identity", "Community"],
                color: "from-[#232526] to-[#e0eafc]",
                url: "https://www.zuzalu.city/",
                image: "/zuzalu.png",
              },
              {
                title: "Shutter Staking dApp",
                description:
                  "Fullstack engineer and architect for a staking dApp integrating rewards, yield, and token delegation. Built both backend and frontend, connecting to Ethereum smart contracts for seamless staking, unstaking, and rewards UX.",
                tech: ["Staking", "Ethereum", "Fullstack"],
                color: "from-[#283E51] to-[#485563]",
                url: "https://shutter-staking-dapp.vercel.app",
                image: "/shutter.png",
              },
              {
                title: "NameGuard",
                description:
                  "Frontend developer for a React library providing ENS domains security checks and profile scoring for safer Web3 experiences.",
                tech: ["React.js", "ENS", "Security"],
                color: "from-[#43e97b] to-[#38f9d7]",
                url: "https://nameguard.io/",
                image: "/nameguard.png",
              },
              {
                title: "NameKit",
                description:
                  "Developed a React component library for the ENS tech community, providing reusable UI elements for building decentralized web apps.",
                tech: ["React.js", "ENS", "Component Library"],
                color: "from-[#8EC5FC] to-[#E0C3FC]",
                url: "https://namekit.io/",
                image: "/namekit.png",
              },
              {
                title: "Swaplace",
                description:
                  "Senior Frontend engineer for Swaplace, a cross-chain dApp for ERC-20 and ERC-721 NFT exchange. Developed cross-chain NFT trading mechanics (listing, orders, querying), with ENS integration and advanced UX using Next.js, Typescript, and Wagmi.",
                tech: ["Next.js", "Cross-chain", "NFT"],
                color: "from-[#232526] to-[#0f2027]",
                url: "https://app.swaplace.xyz/",
                image: "/swaplace.png",
              },
              {
                title: "Enkrypt Wallet",
                description:
                  "Integrated a new API into Enkrypt's Wallet Provider, enriching wallet results with real-time token pricing data.",
                tech: ["Wallet", "API", "Crypto"],
                color: "from-[#a18cd1] to-[#fbc2eb]",
                url: "https://www.enkrypt.com/",
                image: "/enkrypt.png",
              },
              {
                title: "Olimpo NFTs Minting",
                description:
                  "Created the interface for the Olimpo NFT Collection launch, including 3D CSS animations and blockchain integration for secure minting—handling whitelists and wallet verification for a seamless experience.",
                tech: ["NFT", "Blockchain", "UI/UX"],
                color: "from-[#BBA14F] to-[#6B6B6B]",
                url: "https://x.com/Oxolimpo",
                image: "/olimpo.png",
              },
              {
                title: "Agro Bayer [Brazil]",
                description:
                  "Worked on the Frontend team of Agro Bayer (Bayer's agri-tech division), implementing high-quality components and scalable interfaces with Vue.js.",
                tech: ["Vue.js", "Frontend", "AgriTech"],
                color: "from-[#7AC142] to-[#009639]",
                url: "https://www.agro.bayer.com.br/",
                image: "/bayer.png",
              },
              {
                title: "Alien Art Tattoo",
                description:
                  "Designed the UI and built a business story-telling website for a global tattoo studio, blending artistry with engaging digital experience.",
                tech: ["UI/UX", "Storytelling", "Web Design"],
                color: "from-[#232526] to-[#414345]",
                url: "https://alienart.com.br/",
                image: "/alien.png",
              },
              {
                title: "Trustful Stellar",
                description:
                  "Tech leader and frontend developer for the Trustful Stellar dApp, enabling decentralized reputation verification and badge issuance.",
                tech: ["dApp", "Reputation", "Stellar"],
                color: "from-[#232526] to-[#3CA55C]",
                url: "https://github.com/blockful-io/trustful",
                image: "/trustful.png",
              },
              {
                title: "Sam's Club Brazil",
                description:
                  "Contributed to the email marketing operations for Sam's Club Brazil, supporting customer engagement and national campaign success.",
                tech: ["Marketing", "Email", "Retail"],
                color: "from-[#1E90FF] to-[#00BFFF]",
                url: "https://www.samsclub.com",
                image: "/sams-club.png",
              },
              {
                title: "Uniswap Governance Security Platform",
                description:
                  "Developed a governance security platform for Uniswap, featuring DAO insights and on-chain analytics. Built using Next.js and blockchain data ingestion to enhance security and transparency.",
                tech: ["Next.js", "Blockchain", "DAO"],
                color: "from-[#FF007A] to-[#FF4ECD]",
                image: "/uniswap.png",
              },
              {
                title: "Garnier [New York | United States]",
                description:
                  "Maintained and developed new features for Garnier's US e-commerce, achieving 75% unit test coverage and full WCAG 2.0 accessibility compliance. Enabled seamless data-layer communication and contributed to robust, scalable frontend infrastructure.",
                tech: ["Vue.js", "Jest", "Accessibility"],
                color: "from-[#6DD47E] to-[#1A936F]",
                url: "http://garnier.com/",
                image: "/garnier.png",
              },
              {
                title: "Blockful",
                description:
                  "Project Manager for the implementation of Blockful's landing page, overseeing delivery and execution.",
                tech: ["PM", "Landing Page", "Web"],
                color: "from-[#11998e] to-[#38ef7d]",
                url: "http://blockful.io/",
                image: "/blockful.png",
              },
              {
                title: "Nameful",
                description:
                  "Delivered an innovative UI for Nameful, supporting advanced smart contract updates by Blockful during its first year as a Service Provider for ENS DAO.",
                tech: ["ENS", "Web3", "UI/UX"],
                color: "from-[#B721FF] to-[#21D4FD]",
                url: "https://nameful.io/",
                image: "/nameful.png",
              },
            ].map((project, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                viewport={{ once: true }}
                whileHover={{ y: -10 }}
                className="group"
              >
                <Card className="h-full bg-white border-0 shadow-lg hover:shadow-xl transition-all duration-300">
                  <CardContent className="p-0">
                    <div
                      className={`h-48 bg-gradient-to-br ${project.color} relative overflow-hidden`}
                    >
                      <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors duration-300" />
                      {project.url && (
                        <a
                          href={project.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="absolute top-4 right-4"
                        >
                          <ExternalLink className="w-6 h-6 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                        </a>
                      )}
                      <img
                        src={project.image}
                        alt={project.title}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="p-6">
                      <h3 className="text-xl font-bold mb-3 text-black font-montserrat">
                        {project.title}
                      </h3>
                      <p className="text-[#000000]/70 mb-4 font-lora">
                        {project.description}
                      </p>
                      <div className="flex flex-wrap gap-2">
                        {project.tech.map((tech, techIndex) => (
                          <span
                            key={techIndex}
                            className="px-3 py-1 bg-[#F8FAFC] text-[#000000] text-sm rounded-full font-montserrat border border-[#F8FAFC]"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-black">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto"
          >
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold mb-8 text-white font-montserrat">
                Let's Connect
              </h2>
              <p className="text-xl text-white/80 font-lora">
                Ready to bring your next project to life? Let's discuss how we
                can work together.
              </p>
            </div>

            <div className="w-full flex justify-center text-center gap-12">
              <div>
                <h3 className="text-2xl font-bold mb-6 text-white font-montserrat">
                  Get In Touch
                </h3>
                <div className="space-y-4 flex flex-col justify-center items-center text-center">
                  <a
                    href="mailto:frankind.eth@gmail.com"
                    className="flex items-center gap-4"
                  >
                    <Mail className="w-6 h-6 text-[#6B7280]" />
                    <span className="text-white font-lora">
                      frankind.eth@gmail.com
                    </span>
                  </a>
                  <a
                    href="https://www.linkedin.com/in/franco-from-crystal/"
                    className="flex items-center gap-4"
                  >
                    <Linkedin className="w-6 h-6 text-[#9CA3AF]" />
                    <span className="text-white font-lora">
                      linkedin.com/in/franco-from-crystal
                    </span>
                  </a>
                  <a
                    href="https://github.com/FrancoAguzzi"
                    className="flex items-center gap-4"
                  >
                    <Github className="w-6 h-6 text-[#9CA3AF]" />
                    <span className="text-white font-lora">
                      github.com/FrancoAguzzi
                    </span>
                  </a>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 bg-black border-t border-white/10">
        <div className="container mx-auto px-6 text-center">
          <p className="text-white/60 font-lora">
            © 2025 Franco Camelo Aguzzi. Crafted with passion and precision.
          </p>
        </div>
      </footer>
    </div>
  );
}
