// src/App.jsx
import { useState } from "react";
import { motion } from "framer-motion";

import {
  Github,
  Linkedin,
  Mail,
  MapPin,
  ExternalLink,
  ArrowRight,
  Cpu,
  Cloud,
  Brain,
  Code,
  Sparkles,
  GraduationCap,
  Phone,
  BarChart3,
  Database,
  Globe,
  Send,
} from "lucide-react";

const sections = ["home", "about", "skills", "projects", "certifications", "contact"];

// Base animation variants
const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  visible: (delay = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay, ease: "easeOut" },
  }),
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.12 },
  },
};

const projectFilters = [
  { key: "all", label: "All" },
  { key: "fullstack", label: "Full-Stack" },
  { key: "ml", label: "ML / Data" },
  { key: "cloud", label: "Cloud & DevOps" },
];

const projects = [
  {
    title: "Online Dry Fruit Store",
    badge: "Full-Stack E-Commerce · MERN + UPI",
    description:
      "E-commerce platform for selling dry fruits with catalog, cart, checkout and order tracking. Integrated UPI payments and deployed using Docker on AWS EC2.",
    tech: [
      "React",
      "Node.js",
      "Express.js",
      "MongoDB",
      "UPI Payments",
      "AWS EC2",
      "Docker",
    ],
    github: "https://github.com/Mr-Hemanth/Herambha_dryfruits", // update if needed
    live: "",
    tags: ["fullstack", "cloud"],
  },
  {
    title: "Healthcare Management System",
    badge: "Microservice-style · Cloud",
    description:
      "Healthcare platform with modules for patients, doctors and appointments. Frontend and backend containerized and deployed as separate services on AWS with Nginx and CI/CD using GitHub Actions.",
    tech: [
      "Vue.js",
      "Node.js",
      "Express",
      "MongoDB",
      "Docker",
      "AWS",
      "Nginx",
      "GitHub Actions",
    ],
    github: "https://github.com/Mr-Hemanth/healthcare-management-system", // update if needed
    live: "",
    tags: ["fullstack", "cloud"],
  },
  {
    title: "Carbon Credit Exchange Platform",
    badge: "MERN · Secure Dashboards",
    description:
      "Platform for companies to list and browse carbon credits with secure JWT authentication, React dashboards and a modular backend deployed on AWS.",
    tech: ["React", "Node.js", "Express.js", "MongoDB", "JWT Auth", "AWS EC2"],
    github: "https://github.com/Mr-Hemanth", // replace with exact repo later
    live: "",
    tags: ["fullstack", "cloud"],
  },
  {
    title: "Water Quality Prediction",
    badge: "ML Classification · Flask App",
    description:
      "Machine learning app that predicts water potability from physicochemical parameters. Includes preprocessing, model training and a Flask-based web UI.",
    tech: ["Python", "scikit-learn", "Pandas", "NumPy", "Flask", "HTML/CSS"],
    github: "https://github.com/Mr-Hemanth", // replace with exact repo later
    live: "",
    tags: ["ml"],
  },
];

const certificationsML = [
  "Mathematics for Machine Learning Specialization – Imperial College London (Coursera)",
  "Deep Learning for Computer Vision – NPTEL / IIT Hyderabad (SWAYAM)",
  "Exploratory Data Analysis for Machine Learning – IBM (Coursera)",
  "Data Mining Methods – University of Colorado Boulder (Coursera)",
];

const certificationsDev = [
  "Advanced React – Meta (Coursera)",
  "Core Java – LearnQuest (Coursera)",
  "Cloud Virtualization, Containers and APIs – Duke University (Coursera)",
  "Data Analysis & Visualization with Power BI – Microsoft (Coursera)",
];

function App() {
  const handleScrollTo = (id) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <div className="relative min-h-screen overflow-x-hidden bg-slate-950 text-slate-50">
      {/* Soft animated background blobs */}
      <div className="pointer-events-none fixed inset-0 -z-10">
        <motion.div
          className="absolute -left-24 -top-24 h-72 w-72 rounded-full bg-cyan-500/30 blur-[80px]"
          animate={{ y: [0, 20, 0], x: [0, 10, 0] }}
          transition={{ duration: 18, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute -right-16 top-40 h-80 w-80 rounded-full bg-violet-600/30 blur-[90px]"
          animate={{ y: [0, -25, 0], x: [0, -15, 0] }}
          transition={{ duration: 22, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute bottom-0 left-1/3 h-64 w-64 rounded-full bg-emerald-500/25 blur-[80px]"
          animate={{ y: [0, 15, 0] }}
          transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
        />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_#1f2937_0,_#020617_45%)]" />
      </div>

      {/* Page container */}
      <div className="mx-auto flex min-h-screen max-w-6xl flex-col px-4 pb-14 pt-4 sm:px-6 lg:px-8">
        <Navbar onNavClick={handleScrollTo} />
        <main className="mt-8 flex flex-1 flex-col gap-16 sm:gap-20 lg:gap-24">
          <Hero onNavClick={handleScrollTo} />
          <About />
          <Skills />
          <Projects />
          <Certifications />
          <Contact />
        </main>
        <Footer />
      </div>
    </div>
  );
}

function Navbar({ onNavClick }) {
  return (
    <motion.header
      className="sticky top-3 z-20"
      initial={{ opacity: 0, y: -16 }}
      animate={{ opacity: 1, y: 0, transition: { duration: 0.5 } }}
    >
      <div className="flex items-center justify-between rounded-full border border-slate-700/70 bg-slate-900/80 px-4 py-2 shadow-xl shadow-slate-950/80 backdrop-blur">
        <div className="flex items-center gap-2">
          <motion.div
            className="flex h-9 w-9 items-center justify-center rounded-full bg-gradient-to-br from-cyan-400 via-sky-500 to-violet-500 text-xs font-semibold text-slate-950 shadow-md shadow-cyan-500/40"
            whileHover={{ scale: 1.05, rotate: 2 }}
            transition={{ type: "spring", stiffness: 260, damping: 18 }}
          >
            HR
          </motion.div>
          <div className="text-xs sm:text-sm">
            <div className="font-medium tracking-tight">Hemanth Reddy Dwarampudi</div>
            <div className="text-[0.7rem] text-slate-400">
              Full-Stack · ML · DevOps
            </div>
          </div>
        </div>
        <nav className="hidden items-center gap-4 text-xs text-slate-300 sm:flex">
          {sections.map((s) => (
            <button
              key={s}
              onClick={() => onNavClick(s)}
              className="relative rounded-full px-2 py-1 text-[0.72rem] font-medium tracking-tight text-slate-300 transition hover:text-slate-50"
            >
              <span className="capitalize">{s}</span>
              <span className="absolute inset-x-1 bottom-0 h-[2px] origin-left scale-x-0 rounded-full bg-gradient-to-r from-cyan-400 via-violet-500 to-orange-400 transition-transform duration-200 hover:scale-x-100" />
            </button>
          ))}
        </nav>
        <div className="flex items-center gap-2">
          {/* Social icon buttons */}
          <a
            href="https://github.com/Mr-Hemanth"
            target="_blank"
            rel="noreferrer"
            className="flex h-8 w-8 items-center justify-center rounded-full border border-slate-700 bg-slate-950/70 text-slate-200 shadow-sm shadow-slate-950/70 transition hover:border-cyan-400 hover:text-cyan-300"
          >
            <Github className="h-4 w-4" />
          </a>
          <a
            href="https://www.linkedin.com/in/dwarampudi-hemanth/"
            target="_blank"
            rel="noreferrer"
            className="flex h-8 w-8 items-center justify-center rounded-full border border-slate-700 bg-slate-950/70 text-slate-200 shadow-sm shadow-slate-950/70 transition hover:border-cyan-400 hover:text-cyan-300"
          >
            <Linkedin className="h-4 w-4" />
          </a>
          <a
            href="mailto:hemanthreddydwarampudi@gmail.com"
            className="hidden items-center gap-1 rounded-full border border-slate-700 bg-slate-900/80 px-3 py-1 text-[0.72rem] font-medium text-slate-200 shadow-sm shadow-slate-950/70 transition hover:border-cyan-400 hover:text-slate-50 sm:flex"
          >
            <Mail className="h-3.5 w-3.5" />
            <span>Say hi</span>
          </a>
        </div>
      </div>
    </motion.header>
  );
}

function Hero({ onNavClick }) {
  return (
    <section id="home">
      <motion.div
        className="grid gap-10 md:grid-cols-[minmax(0,1.4fr)_minmax(0,1fr)] md:items-center"
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.45 }}
      >
        {/* Text */}
        <motion.div custom={0} variants={fadeUp}>
          <motion.div
            className="mb-4 inline-flex items-center gap-2 rounded-full border border-slate-700 bg-slate-900/70 px-3 py-1 text-[0.7rem] text-slate-300 shadow shadow-slate-950/70"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1, transition: { duration: 0.5 } }}
          >
            <Sparkles className="h-3.5 w-3.5 text-cyan-400" />
            <span>Full-Stack · Machine Learning · DevOps on AWS</span>
          </motion.div>
          <h1 className="mb-3 text-3xl font-semibold leading-tight tracking-tight sm:text-4xl lg:text-[2.6rem]">
            Hi, I&apos;m{" "}
            <span className="bg-gradient-to-r from-cyan-400 via-violet-500 to-orange-400 bg-clip-text text-transparent">
              Hemanth Reddy
            </span>
            , I build &amp; ship modern web and ML applications.
          </h1>
          <p className="mb-4 max-w-xl text-sm leading-relaxed text-slate-300 sm:text-[0.95rem]">
            I&apos;m a Computer Science undergraduate specializing in full-stack
            development, ML fundamentals and cloud deployment. I enjoy designing
            clean APIs, building intuitive UIs, and deploying production-ready apps
            using Docker, GitHub Actions and AWS.
          </p>
          <div className="mb-3 flex flex-wrap gap-2">
            <Tag label="MERN · Vue" />
            <Tag label="AWS · Docker · CI/CD" />
            <Tag label="scikit-learn · EDA · Math for ML" />
            <Tag label="Core Java · OOP" />
          </div>
          <div className="mb-4 flex flex-wrap items-center gap-2 text-[0.7rem] text-slate-300">
            <span className="inline-flex items-center gap-1 rounded-full bg-slate-950/80 px-2 py-1">
              <Code className="h-3.5 w-3.5 text-cyan-400" />
              <span>Full-Stack (MERN / Vue)</span>
            </span>
            <span className="inline-flex items-center gap-1 rounded-full bg-slate-950/80 px-2 py-1">
              <Brain className="h-3.5 w-3.5 text-violet-400" />
              <span>ML &amp; Data</span>
            </span>
            <span className="inline-flex items-center gap-1 rounded-full bg-slate-950/80 px-2 py-1">
              <Cloud className="h-3.5 w-3.5 text-emerald-400" />
              <span>AWS &amp; DevOps</span>
            </span>
          </div>
          <div className="flex flex-wrap items-center gap-3">
            <motion.a
              href="https://github.com/Mr-Hemanth"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-cyan-400 via-violet-500 to-orange-400 px-4 py-2 text-xs font-semibold text-slate-950 shadow-lg shadow-cyan-500/40"
              whileHover={{ scale: 1.03, y: -2 }}
              whileTap={{ scale: 0.98 }}
            >
              <Github className="h-4 w-4" />
              <span>View GitHub</span>
              <ArrowRight className="h-3.5 w-3.5" />
            </motion.a>
            <motion.button
              onClick={() => onNavClick("projects")}
              className="inline-flex items-center gap-2 rounded-full border border-slate-600 bg-slate-900/70 px-3.5 py-1.5 text-xs font-medium text-slate-200 shadow shadow-slate-950/70 transition hover:border-cyan-400 hover:text-slate-50"
              whileHover={{ y: -1 }}
              whileTap={{ scale: 0.97 }}
            >
              <Code className="h-4 w-4 text-cyan-400" />
              <span>See projects</span>
            </motion.button>
          </div>
        </motion.div>

        {/* Right summary card */}
        <motion.div custom={0.2} variants={fadeUp} className="relative">
          <div className="pointer-events-none absolute -right-2 -top-6 h-32 w-32 rounded-full bg-cyan-500/30 blur-[60px]" />
          <div className="pointer-events-none absolute -bottom-10 -left-6 h-32 w-32 rounded-full bg-violet-500/25 blur-[60px]" />
          <motion.div
            className="relative overflow-hidden rounded-3xl border border-slate-700/80 bg-gradient-to-br from-slate-900 via-slate-900/95 to-slate-950/95 p-4 shadow-2xl shadow-slate-950/90"
            whileHover={{ y: -4 }}
            transition={{ type: "spring", stiffness: 180, damping: 18 }}
          >
            <div className="mb-4 flex items-center justify-between gap-3">
              <div>
                <div className="text-[0.7rem] uppercase tracking-[0.16em] text-slate-400">
                  Based in
                </div>
                <div className="text-sm font-medium">Amalapuram, Andhra Pradesh</div>
              </div>
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-br from-cyan-400 via-sky-500 to-violet-500 text-sm font-semibold text-slate-950 shadow-lg shadow-cyan-500/50">
                HR
              </div>
              <div className="text-right text-[0.75rem] text-slate-300">
                <div>Available for</div>
                <div className="mt-1 inline-flex items-center gap-1 rounded-full border border-emerald-400/60 bg-emerald-500/10 px-2 py-[2px] text-[0.7rem] font-medium text-emerald-100">
                  <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
                  Internships &amp; full-time
                </div>
              </div>
            </div>
            <div className="mb-4 grid grid-cols-3 gap-2 text-[0.72rem]">
              <Stat label="Projects built" value="10+" />
              <Stat label="Focus areas" value="Full-Stack · ML" />
              <Stat label="Cloud" value="AWS · Docker" />
            </div>
            <div className="mb-3 h-px bg-gradient-to-r from-transparent via-slate-700 to-transparent" />
            <div className="space-y-2 text-[0.76rem] text-slate-300">
              <div className="flex items-center gap-2">
                <Cpu className="h-3.5 w-3.5 text-cyan-400" />
                <p>Design clean APIs, database schemas and modular backend logic.</p>
              </div>
              <div className="flex items-center gap-2">
                <Brain className="h-3.5 w-3.5 text-violet-400" />
                <p>Comfortable with ML pipelines: preprocessing, training, evaluation.</p>
              </div>
              <div className="flex items-center gap-2">
                <Cloud className="h-3.5 w-3.5 text-emerald-400" />
                <p>Deploy apps on AWS using Docker and GitHub Actions CI/CD.</p>
              </div>
            </div>
            <div className="mt-3 flex items-center justify-between pt-2 text-[0.75rem] text-slate-400">
              <span className="inline-flex items-center gap-1">
                <Mail className="h-3.5 w-3.5" />
                hemanthreddydwarampudi@gmail.com
              </span>
              <span className="inline-flex items-center gap-1">
                <MapPin className="h-3.5 w-3.5" />
                India
              </span>
            </div>
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  );
}

function About() {
  return (
    <section id="about">
      <motion.div
        className="space-y-6"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.35 }}
        variants={staggerContainer}
      >
        <motion.div variants={fadeUp}>
          <SectionHeading
            title="About"
            subtitle="Who I am and how I think about building software."
          />
        </motion.div>
        <motion.div
          className="grid gap-5 md:grid-cols-[minmax(0,1.6fr)_minmax(0,1fr)]"
          variants={fadeUp}
        >
          <div className="rounded-2xl border border-slate-700/70 bg-slate-900/80 p-5 text-[0.9rem] leading-relaxed text-slate-200 shadow-lg shadow-slate-950/80">
            <p className="mb-3">
              I&apos;m a{" "}
              <span className="font-semibold">
                B.Tech CSE student at Woxsen University
              </span>{" "}
              (CGPA 8.32) who enjoys building complete systems: frontends, backends,
              databases, and ML components that actually work together in production.
            </p>
            <p className="mb-3">
              I work with <span className="font-semibold">React / Vue, Node.js, Express, MongoDB</span>{" "}
              for full-stack apps, and <span className="font-semibold">
                Python, scikit-learn, and strong math foundations
              </span>{" "}
              (Linear Algebra, Calculus, Probability) for ML projects.
            </p>
            <p>
              I like clean architecture, readable code, and good developer workflows:
              version control with Git, CI/CD with GitHub Actions, and deployments on
              AWS with Docker so that projects are easy to run, debug and scale.
            </p>
          </div>
          <div className="grid gap-3 text-[0.82rem] text-slate-200">
            <HighlightCard
              icon={GraduationCap}
              title="Education"
              body="B.Tech in Computer Science & Engineering · Woxsen University (2022–2026) · CGPA 8.32/10."
              footer="Key areas: DSA, OS, DBMS, Computer Networks, Web Technologies, Cloud Computing, ML."
            />
            <HighlightCard
              icon={Brain}
              title="What I’m focusing on"
              body="Building full-stack apps (MERN & Vue), ML projects from data to deployment, and improving my DevOps skills."
              footer="Actively looking for internships & entry-level SWE / ML roles."
            />
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
}

function Skills() {
  const [selectedSkill, setSelectedSkill] = useState("");

  return (
    <section id="skills">
      <motion.div
        className="space-y-6"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={staggerContainer}
      >
        <motion.div variants={fadeUp}>
          <SectionHeading
            title="Skills & Tech Stack"
            subtitle="Technologies I’m comfortable using in real projects."
          />
        </motion.div>
        <motion.div
          className="grid gap-5 lg:grid-cols-[minmax(0,1.5fr)_minmax(0,1fr)]"
          variants={fadeUp}
        >
          <div className="rounded-2xl border border-slate-700/80 bg-slate-900/80 p-5 shadow-lg shadow-slate-950/80">
            <div className="mb-2 flex items-center gap-2">
              <Code className="h-4 w-4 text-cyan-400" />
              <h3 className="text-sm font-semibold tracking-tight">
                Core technologies
              </h3>
            </div>
            <div className="mb-3 text-xs text-slate-300">
              Full-stack development, ML fundamentals, analytics, and cloud deployment.
            </div>
            <SkillGroup
              label="Languages"
              items={["JavaScript", "Java", "Python", "C++", "SQL"]}
              onSelect={setSelectedSkill}
              selectedSkill={selectedSkill}
            />
            <SkillGroup
              label="Web & Backend"
              items={[
                "React",
                "Vue.js (Healthcare app)",
                "Node.js",
                "Express.js",
                "REST APIs",
                "HTML",
                "CSS",
              ]}
              onSelect={setSelectedSkill}
              selectedSkill={selectedSkill}
            />
            <SkillGroup
              label="ML & Data"
              items={[
                "scikit-learn",
                "Pandas",
                "NumPy",
                "Matplotlib",
                "Seaborn",
                "Jupyter / Colab",
              ]}
              onSelect={setSelectedSkill}
              selectedSkill={selectedSkill}
            />
            <SkillGroup
              label="Cloud & DevOps"
              items={[
                "AWS EC2",
                "S3",
                "IAM (basic)",
                "Docker",
                "GitHub Actions (CI/CD)",
                "Linux",
                "Nginx (basic)",
              ]}
              onSelect={setSelectedSkill}
              selectedSkill={selectedSkill}
            />
            <SkillGroup
              label="Data & Analytics"
              items={[
                "Exploratory Data Analysis",
                "Data Mining",
                "Power BI",
              ]}
              onSelect={setSelectedSkill}
              selectedSkill={selectedSkill}
            />
            <SkillGroup
              label="Tools & Other"
              items={[
                "Git",
                "GitHub",
                "VS Code",
                "Postman",
                "Figma",
              ]}
              onSelect={setSelectedSkill}
              selectedSkill={selectedSkill}
            />

            {selectedSkill && (
              <motion.div
                className="mt-4 flex items-center gap-2 rounded-xl border border-cyan-500/50 bg-cyan-500/10 px-3 py-2 text-[0.8rem] text-cyan-100"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0, transition: { duration: 0.25 } }}
              >
                <Sparkles className="h-4 w-4" />
                <div>
                  <span className="font-semibold">{selectedSkill}</span>{" "}
                  <span className="text-cyan-100/80">
                    is one of the skills I actively use and improve.
                  </span>
                </div>
              </motion.div>
            )}
          </div>
          <div className="space-y-4">
            <div className="rounded-2xl border border-slate-700/80 bg-slate-900/80 p-4 shadow-lg shadow-slate-950/80">
              <h3 className="mb-3 flex items-center gap-2 text-sm font-semibold tracking-tight">
                <BarChart3 className="h-4 w-4 text-cyan-400" />
                <span>Comfort levels</span>
              </h3>
              <SkillMeter label="Full-Stack Web Development" value={90} />
              <SkillMeter label="Machine Learning Fundamentals" value={80} />
              <SkillMeter label="Cloud & DevOps (AWS, Docker, CI/CD)" value={78} />
              <SkillMeter label="Data Structures & Algorithms" value={75} />
            </div>
            <div className="rounded-2xl border border-slate-700/80 bg-slate-900/80 p-4 text-xs text-slate-200 shadow-lg shadow-slate-950/80">
              <div className="mb-2 flex items-center gap-2">
                <Globe className="h-4 w-4 text-cyan-400" />
                <h3 className="text-sm font-semibold">How I work</h3>
              </div>
              <p className="mb-1">
                • Branch-based Git workflow with meaningful commits.
              </p>
              <p className="mb-1">
                • Prefer clean folder structure, modular code, and clear naming.
              </p>
              <p>
                • I keep README, environment setup, and API details documented so others can run my projects easily.
              </p>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
}

function Projects() {
  const [activeFilter, setActiveFilter] = useState("all");

  const filteredProjects = projects.filter((p) => {
    if (activeFilter === "all") return true;

    if (!Array.isArray(p.tags)) return false;

    const normalizedTags = p.tags.map((t) => String(t).toLowerCase());
    const normalizedFilter = String(activeFilter).toLowerCase();

    return normalizedTags.includes(normalizedFilter);
  });

  return (
    <section id="projects">
      <motion.div
        className="space-y-6"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.25 }}
        variants={staggerContainer}
      >
        <motion.div variants={fadeUp}>
          <SectionHeading
            title="Projects"
            subtitle="Real-world style work spanning full-stack, ML, and cloud."
          />
        </motion.div>

        {/* Filter chips */}
        <motion.div
          className="flex flex-wrap items-center justify-between gap-2 text-[0.75rem]"
          variants={fadeUp}
        >
          <div className="flex flex-wrap gap-2">
            {projectFilters.map((f) => {
              const isActive = f.key === activeFilter;
              return (
                <button
                  key={f.key}
                  onClick={() => setActiveFilter(f.key)}
                  className={`inline-flex items-center gap-1 rounded-full border px-3 py-1 transition ${
                    isActive
                      ? "border-cyan-400 bg-cyan-500/10 text-cyan-100 shadow shadow-cyan-500/40"
                      : "border-slate-700 bg-slate-900/80 text-slate-300 hover:border-cyan-400/70 hover:text-slate-50"
                  }`}
                >
                  <span
                    className={`h-1.5 w-1.5 rounded-full ${
                      isActive ? "bg-cyan-400" : "bg-slate-500"
                    }`}
                  />
                  {f.label}
                </button>
              );
            })}
          </div>

          <div className="text-[0.7rem] text-slate-400">
            Showing{" "}
            <span className="font-semibold text-slate-100">
              {filteredProjects.length}
            </span>{" "}
            project{filteredProjects.length === 1 ? "" : "s"}
          </div>
        </motion.div>

        <motion.div
          className="grid gap-5 md:grid-cols-2"
          variants={fadeUp}
        >
          {filteredProjects.map((p, idx) => (
            <ProjectCard key={p.title} project={p} index={idx} />
          ))}

          {filteredProjects.length === 0 && (
            <div className="col-span-full rounded-2xl border border-slate-700/80 bg-slate-900/80 p-6 text-center text-sm text-slate-300">
              No projects yet for this category. Add{" "}
              <code className="rounded bg-slate-800 px-1 py-0.5 text-[0.7rem] text-cyan-300">
                "{activeFilter}"
              </code>{" "}
              to the <code className="rounded bg-slate-800 px-1 py-0.5 text-[0.7rem]">
                tags
              </code>{" "}
              array of a project in your{" "}
              <code className="rounded bg-slate-800 px-1 py-0.5 text-[0.7rem]">
                projects
              </code>{" "}
              list.
            </div>
          )}
        </motion.div>
      </motion.div>
    </section>
  );
}

function Certifications() {
  return (
    <section id="certifications">
      <motion.div
        className="space-y-6"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={staggerContainer}
      >
        <motion.div variants={fadeUp}>
          <SectionHeading
            title="Education & Certifications"
            subtitle="Formal degree + curated online learning."
          />
        </motion.div>
        <motion.div
          className="grid gap-5 md:grid-cols-3"
          variants={fadeUp}
        >
          <motion.div
            className="rounded-2xl border border-slate-700/80 bg-slate-900/80 p-4 text-xs text-slate-300 shadow-lg shadow-slate-950/80"
            whileHover={{ y: -3 }}
            transition={{ type: "spring", stiffness: 210, damping: 18 }}
          >
            <div className="mb-2 flex items-center gap-2">
              <GraduationCap className="h-4 w-4 text-cyan-400" />
              <h3 className="text-sm font-semibold">B.Tech · CSE</h3>
            </div>
            <p className="mb-1 font-medium text-slate-100">
              Woxsen University · Hyderabad, India
            </p>
            <p className="mb-1">2022 – 2026 · CGPA: 8.32 / 10</p>
            <p className="mb-2">
              Core subjects: DSA, OS, DBMS, Computer Networks, Web Tech, Cloud Computing, ML.
            </p>
          </motion.div>

          <CertList title="ML & Data" items={certificationsML} />
          <CertList title="Dev & Cloud" items={certificationsDev} />
        </motion.div>
      </motion.div>
    </section>
  );
}

function Contact() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [status, setStatus] = useState("");

  const handleChange = (e) => {
    setStatus("");
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const { name, email, message } = form;
    if (!name || !email || !message) {
      setStatus("Please fill in all fields.");
      return;
    }

    const subject = encodeURIComponent(
      `Portfolio contact from ${name} (${email})`
    );
    const body = encodeURIComponent(
      `Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`
    );

    window.location.href = `mailto:hemanthreddydwarampudi@gmail.com?subject=${subject}&body=${body}`;

    setStatus("Opening your email client to send the message...");
  };

  return (
    <section id="contact">
      <motion.div
        className="space-y-6"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={staggerContainer}
      >
        <motion.div variants={fadeUp}>
          <SectionHeading
            title="Let’s connect"
            subtitle="Open to internships, entry-level roles, and collaborations."
          />
        </motion.div>
        <motion.div
          className="grid gap-5 md:grid-cols-[minmax(0,1.2fr)_minmax(0,1fr)]"
          variants={fadeUp}
        >
          <motion.div
            className="rounded-2xl border border-slate-700/80 bg-slate-900/80 p-5 text-sm text-slate-200 shadow-lg shadow-slate-950/80"
            whileHover={{ y: -3 }}
            transition={{ type: "spring", stiffness: 180, damping: 18 }}
          >
            <p className="mb-3">
              If you&apos;re working on something involving full-stack development,
              ML, or cloud, I&apos;d love to hear about it. I&apos;m especially interested
              in roles where I can work across the stack and learn from a strong team.
            </p>
            <div className="space-y-3 text-[0.85rem]">
              <ContactRow
                icon={Mail}
                label="Email"
                value="hemanthreddydwarampudi@gmail.com"
                href="mailto:hemanthreddydwarampudi@gmail.com"
              />
              <ContactRow
                icon={Phone}
                label="Phone"
                value="+91-9169166667"
              />
              <ContactRow
                icon={Github}
                label="GitHub"
                value="github.com/Mr-Hemanth"
                href="https://github.com/Mr-Hemanth"
              />
              <ContactRow
                icon={Linkedin}
                label="LinkedIn"
                value="linkedin.com/in/dwarampudi-hemanth"
                href="https://www.linkedin.com/in/dwarampudi-hemanth/"
              />
              <ContactRow
                icon={MapPin}
                label="Location"
                value="Amalapuram, Andhra Pradesh, India"
              />
            </div>
          </motion.div>
          <motion.div
            className="rounded-2xl border border-slate-700/80 bg-slate-900/80 p-5 text-xs text-slate-200 shadow-lg shadow-slate-950/80"
            whileHover={{ y: -3 }}
            transition={{ type: "spring", stiffness: 180, damping: 18 }}
          >
            <p className="mb-2 font-medium">
              Quick message form
            </p>
            <p className="mb-3 text-[0.74rem] text-slate-400">
              This form opens your email app with the message ready to send to me.
            </p>
            <form
              onSubmit={handleSubmit}
              className="space-y-2"
            >
              <Field label="Name">
                <input
                  name="name"
                  value={form.name}
                  onChange={handleChange}
                  className="w-full rounded-lg border border-slate-700 bg-slate-950/80 px-2.5 py-1.5 text-xs outline-none ring-cyan-400/0 transition focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400/60"
                  placeholder="Your name"
                  required
                />
              </Field>
              <Field label="Email">
                <input
                  type="email"
                  name="email"
                  value={form.email}
                  onChange={handleChange}
                  className="w-full rounded-lg border border-slate-700 bg-slate-950/80 px-2.5 py-1.5 text-xs outline-none ring-cyan-400/0 transition focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400/60"
                  placeholder="you@example.com"
                  required
                />
              </Field>
              <Field label="Message">
                <textarea
                  rows={4}
                  name="message"
                  value={form.message}
                  onChange={handleChange}
                  className="w-full resize-none rounded-lg border border-slate-700 bg-slate-950/80 px-2.5 py-1.5 text-xs outline-none ring-cyan-400/0 transition focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400/60"
                  placeholder="Tell me about the role, project, or idea..."
                  required
                />
              </Field>
              <motion.button
                type="submit"
                className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-gradient-to-r from-cyan-400 via-violet-500 to-orange-400 px-4 py-2 text-xs font-semibold text-slate-950 shadow-md shadow-cyan-500/40"
                whileHover={{ scale: 1.02, y: -1 }}
                whileTap={{ scale: 0.97 }}
              >
                <Send className="h-4 w-4" />
                <span>Contact me</span>
              </motion.button>
              {status && (
                <p className="mt-1 text-[0.7rem] text-slate-400">
                  {status}
                </p>
              )}
            </form>
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  );
}

function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="mt-10 border-t border-slate-800 pt-4 text-center text-[0.72rem] text-slate-500">
      <p>
        © {year} Hemanth Reddy Dwarampudi · Built with React, Tailwind CSS &amp; Framer Motion.
      </p>
    </footer>
  );
}

/* ==== Reusable components ==== */

function SectionHeading({ title, subtitle }) {
  return (
    <div className="mb-1 flex items-baseline justify-between gap-2">
      <div className="flex items-center gap-2">
        <h2 className="text-lg font-semibold tracking-tight">{title}</h2>
        <span className="h-px w-10 bg-gradient-to-r from-cyan-400 via-violet-500 to-transparent" />
      </div>
      <p className="hidden max-w-xs text-[0.78rem] text-slate-400 sm:block">
        {subtitle}
      </p>
    </div>
  );
}

function Tag({ label }) {
  return (
    <span className="inline-flex items-center rounded-full border border-slate-600 bg-slate-900/80 px-2.5 py-1 text-[0.68rem] text-slate-300">
      {label}
    </span>
  );
}

function Stat({ label, value }) {
  return (
    <div className="rounded-xl border border-slate-700 bg-slate-950/80 px-2.5 py-2">
      <div className="text-[0.68rem] text-slate-400">{label}</div>
      <div className="text-[0.86rem] font-semibold text-slate-100">{value}</div>
    </div>
  );
}

function HighlightCard({ icon: Icon, title, body, footer }) {
  return (
    <motion.div
      className="flex h-full flex-col rounded-2xl border border-slate-700/80 bg-slate-900/80 p-4 shadow-lg shadow-slate-950/80"
      whileHover={{ y: -3 }}
      transition={{ type: "spring", stiffness: 200, damping: 18 }}
    >
      <div className="mb-2 flex items-center gap-2">
        <div className="flex h-7 w-7 items-center justify-center rounded-full bg-slate-950/90 text-cyan-400">
          {Icon && <Icon className="h-3.5 w-3.5" />}
        </div>
        <div className="text-xs font-semibold">{title}</div>
      </div>
      <p className="mb-2 text-[0.8rem] text-slate-300">{body}</p>
      {footer && <p className="mt-auto text-[0.72rem] text-slate-400">{footer}</p>}
    </motion.div>
  );
}

function SkillGroup({ label, items, onSelect, selectedSkill }) {
  return (
    <div className="mb-2">
      <div className="mb-1 text-[0.8rem] font-medium text-slate-100">{label}</div>
      <div className="flex flex-wrap gap-1.5 text-[0.7rem] text-slate-300">
        {items.map((i) => {
          const isSelected = selectedSkill === i;
          return (
            <button
              key={i}
              type="button"
              onClick={() => onSelect && onSelect(i)}
              className={`rounded-full border px-2 py-1 transition ${
                isSelected
                  ? "border-cyan-400 bg-cyan-500/10 text-cyan-100 shadow shadow-cyan-500/40"
                  : "border-slate-700 bg-slate-950/80 text-slate-300 hover:border-cyan-400/80 hover:text-slate-50"
              }`}
            >
              {i}
            </button>
          );
        })}
      </div>
    </div>
  );
}

function SkillMeter({ label, value }) {
  return (
    <div className="mb-3">
      <div className="mb-1 flex items-center justify-between text-[0.76rem] text-slate-300">
        <span>{label}</span>
        <span>{value}%</span>
      </div>
      <div className="h-1.5 w-full rounded-full bg-slate-800/90">
        <motion.div
          className="h-full rounded-full bg-gradient-to-r from-cyan-400 via-violet-500 to-orange-400"
          initial={{ width: 0 }}
          whileInView={{ width: `${value}%` }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
        />
      </div>
    </div>
  );
}

function ProjectCard({ project, index }) {
  const handleCardClick = () => {
    if (project.github) {
      window.open(project.github, "_blank", "noopener,noreferrer");
    }
  };

  return (
    <motion.article
      className="flex h-full cursor-pointer flex-col rounded-2xl border border-slate-700/80 bg-slate-900/80 p-4 text-sm text-slate-200 shadow-lg shadow-slate-950/80"
      custom={0.08 * index}
      variants={fadeUp}
      whileHover={{ y: -4, scale: 1.01 }}
      transition={{ type: "spring", stiffness: 200, damping: 18 }}
      onClick={handleCardClick}
    >
      <div className="mb-2 flex items-start justify-between gap-2">
        <div>
          <h3 className="text-sm font-semibold">{project.title}</h3>
          <p className="text-[0.78rem] text-cyan-300">{project.badge}</p>
        </div>
      </div>
      <p className="mb-3 text-[0.8rem] text-slate-300">{project.description}</p>
      <div className="mb-3 flex flex-wrap gap-1.5 text-[0.7rem]">
        {project.tech.map((t) => (
          <span
            key={t}
            className="rounded-full border border-slate-700 bg-slate-950/80 px-2 py-1 text-slate-300"
          >
            {t}
          </span>
        ))}
      </div>
      <div
        className="mt-auto flex items-center justify-between pt-2 text-[0.76rem] text-slate-400"
        onClick={(e) => e.stopPropagation()}
      >
        {project.live ? (
          <a
            href={project.live}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-1 text-cyan-300 hover:text-cyan-200"
          >
            <ExternalLink className="h-3.5 w-3.5" />
            Live
          </a>
        ) : (
          <span className="inline-flex items-center gap-1 text-slate-500">
            <ExternalLink className="h-3.5 w-3.5" />
            Live coming soon
          </span>
        )}
        {project.github && (
          <a
            href={project.github}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-1 text-slate-300 hover:text-slate-100"
          >
            <Github className="h-3.5 w-3.5" />
            Code
          </a>
        )}
      </div>
    </motion.article>
  );
}

function CertList({ title, items }) {
  return (
    <motion.div
      className="rounded-2xl border border-slate-700/80 bg-slate-900/80 p-4 text-xs text-slate-300 shadow-lg shadow-slate-950/80"
      whileHover={{ y: -3 }}
      transition={{ type: "spring", stiffness: 200, damping: 18 }}
    >
      <h3 className="mb-2 flex items-center gap-2 text-sm font-semibold">
        <Database className="h-4 w-4 text-violet-400" />
        {title} Certifications
      </h3>
      <ul className="space-y-1">
        {items.map((c) => (
          <li key={c} className="leading-snug">
            • {c}
          </li>
        ))}
      </ul>
    </motion.div>
  );
}

function ContactRow({ icon: Icon, label, value, href }) {
  const content = (
    <>
      <div className="text-[0.78rem] text-slate-400">{label}</div>
      <div className="text-[0.8rem] text-slate-200">{value}</div>
    </>
  );
  return (
    <div className="flex items-center gap-3">
      <div className="flex h-7 w-7 items-center justify-center rounded-full border border-slate-700 bg-slate-950/90 text-cyan-400">
        {Icon && <Icon className="h-3.5 w-3.5" />}
      </div>
      {href ? (
        <a href={href} target={href.startsWith("http") ? "_blank" : undefined} rel="noreferrer">
          {content}
        </a>
      ) : (
        <div>{content}</div>
      )}
    </div>
  );
}

function Field({ label, children }) {
  return (
    <label className="block text-[0.75rem] text-slate-300">
      <span className="mb-1 block">{label}</span>
      {children}
    </label>
  );
}

export default App;
