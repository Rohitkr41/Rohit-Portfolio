import { createFileRoute } from "@tanstack/react-router";
import { lazy, Suspense, useEffect, useRef, useState } from "react";
import { motion, useInView, useScroll, useTransform, animate } from "framer-motion";
import {
  ArrowRight, Download, Mail, Github, Linkedin, Phone, MapPin,
  Code2, Bug, Cpu, Database, GitBranch, TestTube, Workflow, Globe,
  Sparkles, ExternalLink, Trophy, CheckCircle2, Rocket, Activity,
  Award, ShieldCheck, Quote, Star, FileCheck2, Gauge, Layers, Zap,
} from "lucide-react";
import heroImg from "@/assets/hero-qa.jpg";
import Particles from "@/components/portfolio/Particles";
import BubbleCursor from "@/components/portfolio/BubbleCursor";

const Scene3D = lazy(() => import("@/components/portfolio/Scene3D"));

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Rohit Kumar — QA & Automation Engineer" },
      { name: "description", content: "Portfolio of Rohit Kumar — Software QA Engineer & Test Automation Engineer. Selenium, Java, TestNG, API testing, SQL, CI/CD." },
      { property: "og:title", content: "Rohit Kumar — QA & Automation Engineer" },
      { property: "og:description", content: "Ensuring Quality Through Automation and Innovation." },
    ],
  }),
  component: Portfolio,
});

function Portfolio() {
  return (
    <div className="relative min-h-screen overflow-x-hidden text-foreground">
      <BubbleCursor />
      <Particles />
      <div className="grid-bg pointer-events-none fixed inset-0 z-0" />
      <Nav />
      <main className="relative z-10">
        <Hero />
        <About />
        <Services />
        <Skills />
        <TechMarquee />
        <Projects />
        <Experience />
        <Certifications />
        <Achievements />
        <Testimonials />
        <Contact />
        <Footer />
      </main>
    </div>
  );
}

/* ---------- NAV ---------- */
const navItems = [
  { id: "about", label: "About" },
  { id: "services", label: "Services" },
  { id: "skills", label: "Skills" },
  { id: "projects", label: "Projects" },
  { id: "experience", label: "Experience" },
  { id: "certifications", label: "Certs" },
  { id: "contact", label: "Contact" },
];

function Nav() {
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  return (
    <motion.header
      initial={{ y: -40, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6 }}
      className={`fixed inset-x-0 top-0 z-50 transition-all ${scrolled ? "py-2" : "py-4"}`}
    >
      <div className={`mx-auto flex max-w-6xl items-center justify-between px-5 ${scrolled ? "glass rounded-full" : ""} px-6 py-3`}>
        <a href="#top" className="flex items-center gap-2 font-display text-base font-semibold tracking-tight">
          <span className="grid h-8 w-8 place-items-center rounded-lg bg-gradient-to-br from-neon-cyan via-neon-blue to-neon-purple text-background">
            <Sparkles className="h-4 w-4" />
          </span>
          <span>Rohit<span className="gradient-text">.QA</span></span>
        </a>
        <nav className="hidden items-center gap-7 text-sm text-muted-foreground md:flex">
          {navItems.map((i) => (
            <a key={i.id} href={`#${i.id}`} data-bubble-hover className="transition-colors hover:text-foreground">
              {i.label}
            </a>
          ))}
        </nav>
        <a
          href="/Rohit_Kumar_1y Exp.pdf"
          download
          className="hidden items-center gap-2 rounded-full border border-white/15 bg-white/5 px-4 py-2 text-xs font-medium text-foreground transition hover:bg-white/10 md:inline-flex"
        >
          <Download className="h-3.5 w-3.5" /> Resume
        </a>
      </div>
    </motion.header>
  );
}

/* ---------- HERO ---------- */
function Hero() {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], [0, 200]);
  const opacity = useTransform(scrollYProgress, [0, 1], [1, 0]);

  return (
    <section id="top" ref={ref} className="relative flex min-h-screen items-center pt-28">
      <motion.div style={{ y, opacity }} className="mx-auto grid w-full max-w-6xl gap-10 px-5 lg:grid-cols-2 lg:gap-8">
        <div className="flex flex-col justify-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }}
            className="glass mb-6 inline-flex w-fit items-center gap-2 rounded-full px-4 py-1.5 text-xs"
          >
            <span className="relative flex h-2 w-2">
              <span className="absolute inset-0 animate-ping rounded-full bg-emerald-400/60" />
              <span className="relative h-2 w-2 rounded-full bg-emerald-400" />
            </span>
            Available for QA & Automation Roles
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2, duration: 0.7 }}
            className="font-display text-5xl font-bold leading-[1.05] tracking-tight md:text-7xl"
          >
            Rohit <span className="gradient-text">Kumar</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.35 }}
            className="mt-4 text-lg text-muted-foreground md:text-xl"
          >
            Software QA Engineer <span className="text-foreground/70">|</span> Test Automation Engineer
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.5 }}
            className="mt-6 max-w-xl text-base text-muted-foreground"
          >
            Ensuring quality through{" "}
            <span className="font-mono text-neon-cyan">automation</span> and{" "}
            <span className="font-mono text-neon-purple">innovation</span>. I build reliable test
            frameworks with Selenium, Java, and modern CI/CD pipelines.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.65 }}
            className="mt-8 flex flex-wrap gap-3"
          >
            <a href="#projects" className="group inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-neon-cyan via-neon-blue to-neon-purple px-6 py-3 text-sm font-semibold text-background shadow-lg shadow-neon-purple/30 transition hover:scale-[1.03]">
              View Projects <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </a>
            <a href="/Rohit_Kumar_1y Exp.pdf" download className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-6 py-3 text-sm font-medium backdrop-blur transition hover:bg-white/10">
              <Download className="h-4 w-4" /> Download Resume
            </a>
            <a href="#contact" className="inline-flex items-center gap-2 rounded-full px-6 py-3 text-sm font-medium text-muted-foreground transition hover:text-foreground">
              Contact Me <Mail className="h-4 w-4" />
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.9 }}
            className="mt-10 flex items-center gap-6 text-xs text-muted-foreground"
          >
            {["Selenium", "Java", "TestNG", "Postman", "SQL", "JIRA"].map((t) => (
              <span key={t} className="font-mono">{t}</span>
            ))}
          </motion.div>
        </div>

        {/* Right: 3D + image */}
        <div className="relative">
          <div className="relative aspect-square w-full overflow-hidden rounded-3xl glass animate-pulse-glow">
            <Suspense fallback={
              <img src={heroImg} alt="QA Engineer" width={1280} height={1280} className="h-full w-full object-cover" />
            }>
              <Scene3D />
            </Suspense>
            <div className="pointer-events-none absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-background/80 to-transparent" />
          </div>

          {/* Floating chips */}
          <FloatChip className="left-[-10px] top-10" icon={<TestTube className="h-4 w-4" />} label="Selenium" delay={0} />
          <FloatChip className="right-[-10px] top-1/3" icon={<Globe className="h-4 w-4" />} label="API" delay={0.4} />
          <FloatChip className="bottom-10 left-6" icon={<Database className="h-4 w-4" />} label="SQL" delay={0.8} />
          <FloatChip className="bottom-20 right-2" icon={<GitBranch className="h-4 w-4" />} label="CI/CD" delay={1.2} />
        </div>
      </motion.div>
    </section>
  );
}

function FloatChip({ className, icon, label, delay }: { className?: string; icon: React.ReactNode; label: string; delay: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.6 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ delay: 1 + delay, type: "spring" }}
      className={`glass animate-float absolute z-20 flex items-center gap-2 rounded-full px-3 py-2 text-xs font-medium ${className ?? ""}`}
      style={{ animationDelay: `${delay}s` }}
    >
      <span className="text-neon-cyan">{icon}</span> {label}
    </motion.div>
  );
}

/* ---------- ABOUT ---------- */
const aboutPills = [
  "Manual Testing", "Automation Testing", "Selenium + Java", "TestNG",
  "API Testing", "Postman", "SQL", "Java", "Python", "CI/CD", "Git & GitHub",
];

function About() {
  return (
    <Section id="about" eyebrow="About" title="Detail-driven engineer with a builder's mindset">
      <div className="grid gap-6 lg:grid-cols-5">
        <RevealCard className="lg:col-span-3">
          <p className="text-base leading-relaxed text-muted-foreground">
            I'm a passionate Software Test Engineer with hands-on experience in
            <span className="text-foreground"> manual testing, Selenium automation, API testing with Postman, SQL</span>
            and defect tracking with JIRA. I specialize in designing test cases, executing scenarios,
            reporting defects and ensuring software quality in Agile environments — currently shipping a
            production Eye Hospital Management System end-to-end.
          </p>
          <div className="mt-6 flex flex-wrap gap-2">
            {aboutPills.map((p) => (
              <span key={p} className="glass rounded-full px-3 py-1.5 text-xs font-medium">{p}</span>
            ))}
          </div>
        </RevealCard>

        <div className="grid gap-4 lg:col-span-2">
          <RevealCard>
            <div className="flex items-start gap-3">
              <div className="grid h-10 w-10 place-items-center rounded-lg bg-gradient-to-br from-neon-cyan to-neon-blue text-background">
                <Trophy className="h-5 w-5" />
              </div>
              <div>
                <div className="font-semibold">BE — Computer Science</div>
                <div className="text-sm text-muted-foreground">Vinayaka Mission's Kirupananda Variyar Engineering College · CGPA 8.19 · 2025</div>
              </div>
            </div>
          </RevealCard>
          <RevealCard>
            <div className="flex items-start gap-3">
              <div className="grid h-10 w-10 place-items-center rounded-lg bg-gradient-to-br from-neon-purple to-neon-blue text-background">
                <MapPin className="h-5 w-5" />
              </div>
              <div>
                <div className="font-semibold">Based in Noida, India</div>
                <div className="text-sm text-muted-foreground">Open to remote & hybrid QA / SDET roles</div>
              </div>
            </div>
          </RevealCard>
        </div>
      </div>
    </Section>
  );
}

/* ---------- SKILLS ---------- */
const skillGroups: { title: string; icon: React.ReactNode; items: { name: string; level: number }[] }[] = [
  { title: "Automation Testing", icon: <Workflow className="h-5 w-5" />, items: [
    { name: "Selenium WebDriver", level: 90 },
    { name: "TestNG", level: 85 },
    { name: "POM Framework", level: 82 },
    { name: "Maven", level: 75 },
  ]},
  { title: "Manual Testing", icon: <Bug className="h-5 w-5" />, items: [
    { name: "Functional / Regression", level: 92 },
    { name: "Smoke & Exploratory", level: 88 },
    { name: "STLC / SDLC", level: 90 },
    { name: "Defect Life Cycle", level: 90 },
  ]},
  { title: "API Testing", icon: <Globe className="h-5 w-5" />, items: [
    { name: "Postman", level: 88 },
    { name: "REST Assured", level: 75 },
    { name: "JSON / XML", level: 85 },
    { name: "CRUD Validation", level: 88 },
  ]},
  { title: "Database Testing", icon: <Database className="h-5 w-5" />, items: [
    { name: "MySQL", level: 82 },
    { name: "SQL Queries / Joins", level: 85 },
    { name: "Data Integrity Checks", level: 80 },
  ]},
  { title: "Programming", icon: <Code2 className="h-5 w-5" />, items: [
    { name: "Java", level: 82 },
    { name: "Python", level: 70 },
    { name: "XPath / CSS Selectors", level: 88 },
  ]},
  { title: "Tools & DevOps", icon: <Cpu className="h-5 w-5" />, items: [
    { name: "JIRA / Zephyr", level: 88 },
    { name: "Jenkins / CI-CD", level: 78 },
    { name: "Git & GitHub", level: 85 },
    { name: "FireFlink (AI Testing)", level: 72 },
  ]},
];

function Skills() {
  return (
    <Section id="skills" eyebrow="Skills" title="The stack behind reliable releases">
      <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
        {skillGroups.map((g, i) => (
          <RevealCard key={g.title} delay={i * 0.05}>
            <div className="mb-4 flex items-center gap-3">
              <div className="grid h-10 w-10 place-items-center rounded-lg bg-gradient-to-br from-neon-blue/30 to-neon-purple/30 text-neon-cyan ring-1 ring-white/10">
                {g.icon}
              </div>
              <div className="font-display font-semibold">{g.title}</div>
            </div>
            <div className="space-y-3">
              {g.items.map((it) => (
                <SkillBar key={it.name} name={it.name} level={it.level} />
              ))}
            </div>
          </RevealCard>
        ))}
      </div>
    </Section>
  );
}

function SkillBar({ name, level }: { name: string; level: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-50px" });
  return (
    <div ref={ref}>
      <div className="mb-1 flex justify-between text-xs">
        <span className="text-muted-foreground">{name}</span>
        <span className="font-mono text-neon-cyan">{level}%</span>
      </div>
      <div className="h-1.5 overflow-hidden rounded-full bg-white/5">
        <motion.div
          initial={{ width: 0 }}
          animate={inView ? { width: `${level}%` } : {}}
          transition={{ duration: 1.1, ease: "easeOut" }}
          className="h-full rounded-full bg-gradient-to-r from-neon-cyan via-neon-blue to-neon-purple"
        />
      </div>
    </div>
  );
}

/* ---------- PROJECTS ---------- */
const projects = [
  {
    title: "Eicher Driver Care Programme — Empowering Drivers with Health Checkups",
    description:
      "Eicher Driver Care Programme is a healthcare management application designed to provide comprehensive health screening and medical services for commercial drivers. The system streamlines the complete patient journey, from registration to clinical examination, billing, and spectacle management, ensuring efficient healthcare delivery and accurate record management.",
    roles: [
      "Requirement Analysis",
      "Test Scenario Preparation",
      "Test Case Design",
      "Manual Testing",
      "Automation Testing",
      "Regression Suite Execution",
      "API Testing",
      "Database Validation",
      "Bug Reporting",
      "Sprint Testing",
      "Release Validation",
      "Production Smoke Testing",
    ],
    tech: ["Selenium", "Java", "TestNG", "REST Assured", "Postman", "MySQL", "JIRA", "Jenkins", "BrowserStack"],
    accent: "from-neon-purple to-neon-blue",
    icon: <Activity className="h-5 w-5" />,
  },
  {
    title: "Hospital Management Testing Framework",
    description:
      "Developed and tested a web-based Eye Hospital Management System covering patient registration, appointments, billing, and reports.\n\nAs a Test Engineer, I performed end-to-end testing of core modules such as patient registration, appointment scheduling, clinical examination, diagnosis records, and treatment management. The system supports comprehensive eye care services including screening, diagnosis, and treatment workflows, similar to modern eye hospitals that provide advanced ophthalmic care and patient management.\n\nPerformed Functional, UI, and Regression Testing; designed and executed test cases and scenarios end-to-end.\n\nTracked and reported defects using JIRA; validated patient registration, booking, and billing workflows.",
    roles: [
      "Requirement Analysis",
      "Test Scenario Preparation",
      "Test Case Design",
      "Manual Testing",
      "Automation Testing",
      "Regression Suite Execution",
      "API Testing",
      "Database Validation",
      "Bug Reporting",
      "Sprint Testing",
      "Release Validation",
      "Production Smoke Testing",
    ],
    tech: ["Selenium", "Java", "TestNG", "MySQL", "JIRA"],
    accent: "from-neon-cyan to-neon-blue",
    icon: <Activity className="h-5 w-5" />,
  },
  {
    title: "Selenium Automation Framework",
    description:
      "Hybrid Page Object Model framework with TestNG data-driven tests, parallel execution, screenshots on failure and HTML reports.",
    tech: ["Selenium", "Java", "TestNG", "POM", "Maven"],
    accent: "from-neon-blue to-neon-purple",
    icon: <Workflow className="h-5 w-5" />,
  },
  {
    title: "API Automation Suite",
    description:
      "REST API automation covering CRUD flows, auth tokens, schema validation and contract testing across staging and production.",
    tech: ["Postman", "REST Assured", "JSON", "Newman"],
    accent: "from-neon-purple to-neon-cyan",
    icon: <Globe className="h-5 w-5" />,
  },
  {
    title: "Data Validation & Reporting Tool",
    description:
      "SQL-driven validation layer that cross-checks UI data with database tables, ships pass/fail reports and integrates with Jenkins pipelines.",
    tech: ["MySQL", "Python", "Jenkins", "Excel Reports"],
    accent: "from-neon-cyan to-neon-purple",
    icon: <Database className="h-5 w-5" />,
  },
];

function Projects() {
  return (
    <Section id="projects" eyebrow="Projects" title="Frameworks shipped, bugs caught, releases stabilized">
      <div className="grid gap-6 md:grid-cols-2">
        {projects.map((p, i) => (
          <motion.article
            key={p.title}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ delay: i * 0.08, duration: 0.6 }}
            whileHover={{ y: -6 }}
            className="group glass relative overflow-hidden rounded-3xl p-6 transition"
          >
            <div className={`pointer-events-none absolute -right-12 -top-12 h-44 w-44 rounded-full bg-gradient-to-br ${p.accent} opacity-20 blur-3xl transition group-hover:opacity-40`} />
            <div className="mb-4 flex items-center gap-3">
              <div className={`grid h-11 w-11 place-items-center rounded-xl bg-gradient-to-br ${p.accent} text-background`}>
                {p.icon}
              </div>
              <h3 className="font-display text-lg font-semibold">{p.title}</h3>
            </div>
            <p className="text-sm leading-relaxed text-muted-foreground whitespace-pre-line">{p.description}</p>
            {p.roles && (
              <div className="mt-5">
                <div className="mb-2 text-xs font-semibold uppercase tracking-wider text-foreground/70">Roles & Responsibilities</div>
                <ul className="space-y-1">
                  {p.roles.map((r) => (
                    <li key={r} className="flex items-center gap-2 text-xs text-muted-foreground">
                      <CheckCircle2 className="h-3 w-3 text-neon-cyan shrink-0" />
                      {r}
                    </li>
                  ))}
                </ul>
              </div>
            )}
            <div className="mt-5 flex flex-wrap gap-2">
              {p.tech.map((t) => (
                <span key={t} className="rounded-full border border-white/10 bg-white/5 px-2.5 py-1 font-mono text-[11px] text-muted-foreground">
                  {t}
                </span>
              ))}
            </div>
            <div className="mt-6 flex gap-3 text-sm">
              <a href="https://github.com/" target="_blank" rel="noreferrer" className="inline-flex items-center gap-1.5 text-muted-foreground transition hover:text-foreground">
                <Github className="h-4 w-4" /> Code
              </a>
              <a href="#" className="inline-flex items-center gap-1.5 text-muted-foreground transition hover:text-foreground">
                <ExternalLink className="h-4 w-4" /> Live Demo
              </a>
            </div>
          </motion.article>
        ))}
      </div>
    </Section>
  );
}

/* ---------- EXPERIENCE ---------- */
const experience = [
  {
    role: "Associate Software Test Engineer",
    company: "V3M Technologies Pvt Ltd",
    location: "Gurugram",
    when: "Jan 2026 — Present",
    points: [
      "Leading QA for Invision Eye Hospital Management System — a full-featured web app covering patient registration, appointment scheduling, billing, eye examinations and report generation. Owning the entire testing lifecycle in an Agile environment.",
      "Designed and executed 200+ test cases covering Functional, UI and Regression scenarios.",
      "Identified and tracked 80+ defects in JIRA — zero critical bugs escaped to production.",
      "Performed thorough database testing using MySQL queries to verify data integrity across modules.",
      "Automated patient registration, booking and billing flows using Selenium + TestNG (Java).",
      "Collaborated directly with developers in daily standups for rapid defect triage and resolution.",
      "Created detailed test reports and defect metrics for stakeholder reviews and release sign-offs.",
    ],
  },
  {
    role: "QA Trainee — Testing Projects",
    company: "Qspiders, Bangalore",
    location: "Bangalore",
    when: "Apr 2025 — Dec 2025",
    points: [
      "ShopperStack — tested an e-commerce portal across browsers and devices.",
      "Q-Bank — validated banking transfers, balance checks and OD application flows.",
      "YouTube clone — verified streaming, playback and account workflows.",
    ],
  },
  {
    role: "Academic Project",
    company: "Cultural Dispersion in SDLC",
    location: "Research",
    when: "Dec 2024 — Apr 2025",
    points: [
      "Investigated how cultural differences impact collaboration and communication in distributed software teams.",
    ],
  },
];

function Experience() {
  return (
    <Section id="experience" eyebrow="Experience" title="A timeline of testing in production">
      <div className="relative pl-6 md:pl-10">
        <div className="absolute inset-y-0 left-1.5 w-px bg-gradient-to-b from-neon-cyan via-neon-blue to-neon-purple md:left-3" />
        <div className="space-y-8">
          {experience.map((e, i) => (
            <motion.div
              key={e.role + e.when}
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ delay: i * 0.1 }}
              className="relative"
            >
              <span className="absolute -left-[18px] top-2 h-3 w-3 rounded-full bg-neon-cyan shadow-[0_0_20px] shadow-neon-blue md:-left-[26px]" />
              <div className="glass rounded-2xl p-6">
                <div className="flex flex-wrap items-baseline justify-between gap-2">
                  <h3 className="font-display text-lg font-semibold">{e.role}</h3>
                  <span className="font-mono text-xs text-neon-cyan">{e.when}</span>
                </div>
                <div className="mt-1 text-sm text-muted-foreground">
                  {e.company} · {e.location}
                </div>
                <ul className="mt-4 space-y-2 text-sm text-muted-foreground">
                  {e.points.map((p) => (
                    <li key={p} className="flex gap-2">
                      <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-neon-cyan" /> <span>{p}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </Section>
  );
}

/* ---------- ACHIEVEMENTS ---------- */
const stats = [
  { label: "Test Cases Executed", value: 1500, suffix: "+", icon: <TestTube className="h-5 w-5" /> },
  { label: "Bugs Reported", value: 320, suffix: "+", icon: <Bug className="h-5 w-5" /> },
  { label: "Automation Scripts", value: 200, suffix: "+", icon: <Workflow className="h-5 w-5" /> },
  { label: "Projects Delivered", value: 6, suffix: "", icon: <Rocket className="h-5 w-5" /> },
];

function Achievements() {
  return (
    <Section id="achievements" eyebrow="By the numbers" title="Quality shipped, measured">
      <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
        {stats.map((s, i) => (
          <RevealCard key={s.label} delay={i * 0.08} className="text-center">
            <div className="mx-auto mb-3 grid h-12 w-12 place-items-center rounded-xl bg-gradient-to-br from-neon-cyan/30 to-neon-purple/30 text-neon-cyan ring-1 ring-white/10">
              {s.icon}
            </div>
            <Counter value={s.value} suffix={s.suffix} />
            <div className="mt-1 text-sm text-muted-foreground">{s.label}</div>
          </RevealCard>
        ))}
      </div>
    </Section>
  );
}

function Counter({ value, suffix }: { value: number; suffix: string }) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true });
  const [n, setN] = useState(0);
  useEffect(() => {
    if (!inView) return;
    const controls = animate(0, value, {
      duration: 1.8, ease: "easeOut",
      onUpdate: (v) => setN(Math.round(v)),
    });
    return () => controls.stop();
  }, [inView, value]);
  return (
    <div ref={ref} className="font-display text-4xl font-bold gradient-text md:text-5xl">
      {n.toLocaleString()}{suffix}
    </div>
  );
}

/* ---------- CONTACT ---------- */
function Contact() {
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">("idle");
  const [form, setForm] = useState({ name: "", email: "", subject: "", message: "" });

  function update<K extends keyof typeof form>(k: K, v: string) {
    setForm((f) => ({ ...f, [k]: v }));
  }

  function onSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (form.name.trim().length < 2 || form.message.trim().length < 5) {
      setStatus("error");
      return;
    }
    // Validate email lightly
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) {
      setStatus("error");
      return;
    }
    setStatus("sending");
    const subject = encodeURIComponent(form.subject || `Portfolio enquiry from ${form.name}`);
    const body = encodeURIComponent(
      `Hi Rohit,\n\n${form.message}\n\n— ${form.name}\n${form.email}`,
    );
    // Opens user's email client with prefilled content — works without backend
    window.location.href = `mailto:rokumar201@gmail.com?subject=${subject}&body=${body}`;
    setTimeout(() => setStatus("sent"), 400);
  }

  return (
    <Section id="contact" eyebrow="Contact" title="Let's ship something reliable together">
      <div className="grid gap-6 lg:grid-cols-5">
        <RevealCard className="lg:col-span-2">
          <div className="space-y-5">
            <ContactRow icon={<Mail className="h-4 w-4" />} label="Email" value="rokumar201@gmail.com" href="mailto:rokumar201@gmail.com" />
            <ContactRow icon={<Phone className="h-4 w-4" />} label="Phone" value="+91 8207572464" href="tel:+918207572464" />
            <ContactRow icon={<Linkedin className="h-4 w-4" />} label="LinkedIn" value="linkedin.com/in/rohit-kumar" href="https://www.linkedin.com/" />
            <ContactRow icon={<Github className="h-4 w-4" />} label="GitHub" value="github.com/rohit-kumar" href="https://github.com/" />
            <ContactRow icon={<MapPin className="h-4 w-4" />} label="Location" value="Noida, India" />
          </div>
        </RevealCard>

        <RevealCard className="lg:col-span-3">
          <form onSubmit={onSubmit} className="grid gap-4 sm:grid-cols-2">
            <Field label="Name" name="name" value={form.name} onChange={(v) => update("name", v)} />
            <Field label="Email" type="email" name="email" value={form.email} onChange={(v) => update("email", v)} />
            <Field label="Subject" name="subject" className="sm:col-span-2" value={form.subject} onChange={(v) => update("subject", v)} />
            <div className="sm:col-span-2">
              <label className="mb-1.5 block text-xs text-muted-foreground">Message</label>
              <textarea
                required
                rows={5}
                value={form.message}
                onChange={(e) => update("message", e.target.value)}
                maxLength={1000}
                className="w-full resize-none rounded-xl border border-white/10 bg-white/5 p-3 text-sm outline-none transition focus:border-neon-cyan/60 focus:bg-white/10"
              />
              <div className="mt-1 text-right font-mono text-[10px] text-muted-foreground">{form.message.length}/1000</div>
            </div>
            {status === "error" && (
              <div className="sm:col-span-2 rounded-xl border border-rose-500/30 bg-rose-500/10 px-3 py-2 text-xs text-rose-200">
                Please fill in a valid name, email and message (5+ chars).
              </div>
            )}
            <button
              type="submit"
              disabled={status === "sending"}
              className="sm:col-span-2 inline-flex items-center justify-center gap-2 rounded-full bg-gradient-to-r from-neon-cyan via-neon-blue to-neon-purple px-6 py-3 text-sm font-semibold text-background transition hover:scale-[1.02] disabled:opacity-70"
            >
              {status === "sent" ? "Opened in your mail app ✓" : status === "sending" ? "Opening…" : <>Send Message <ArrowRight className="h-4 w-4" /></>}
            </button>
            <p className="sm:col-span-2 text-center text-[11px] text-muted-foreground">
              Submitting opens your email client prefilled — fastest way to reach me.
            </p>
          </form>
        </RevealCard>
      </div>
    </Section>
  );
}

function Field({ label, name, type = "text", className = "", value, onChange }: { label: string; name: string; type?: string; className?: string; value?: string; onChange?: (v: string) => void }) {
  return (
    <div className={className}>
      <label className="mb-1.5 block text-xs text-muted-foreground">{label}</label>
      <input
        required
        type={type}
        name={name}
        value={value}
        onChange={(e) => onChange?.(e.target.value)}
        maxLength={120}
        className="w-full rounded-xl border border-white/10 bg-white/5 px-3 py-2.5 text-sm outline-none transition focus:border-neon-cyan/60 focus:bg-white/10"
      />
    </div>
  );
}

function ContactRow({ icon, label, value, href }: { icon: React.ReactNode; label: string; value: string; href?: string }) {
  const inner = (
    <div className="flex items-center gap-3 rounded-xl border border-white/5 bg-white/[0.02] p-3 transition hover:border-neon-cyan/40 hover:bg-white/[0.06]">
      <div className="grid h-9 w-9 place-items-center rounded-lg bg-gradient-to-br from-neon-blue/30 to-neon-purple/30 text-neon-cyan">{icon}</div>
      <div className="min-w-0">
        <div className="text-[11px] uppercase tracking-wider text-muted-foreground">{label}</div>
        <div className="truncate text-sm font-medium">{value}</div>
      </div>
    </div>
  );
  return href ? <a href={href} target="_blank" rel="noreferrer">{inner}</a> : inner;
}

/* ---------- SERVICES ---------- */
const services = [
  {
    icon: <Workflow className="h-5 w-5" />,
    title: "Test Automation Frameworks",
    desc: "Selenium + Java + TestNG hybrid POM frameworks with parallel runs, data-driven tests, screenshots & HTML reports — wired into Jenkins/GitHub Actions.",
    points: ["Selenium 4", "Page Object Model", "Maven + TestNG", "Allure / Extent reports"],
    accent: "from-neon-cyan to-neon-blue",
  },
  {
    icon: <Globe className="h-5 w-5" />,
    title: "API & Backend Testing",
    desc: "REST contract, schema, auth and CRUD validation with Postman, Newman and REST Assured — including negative, boundary and security checks.",
    points: ["Postman / Newman", "REST Assured", "JSON Schema", "OAuth / JWT flows"],
    accent: "from-neon-blue to-neon-purple",
  },
  {
    icon: <Bug className="h-5 w-5" />,
    title: "Manual & Exploratory QA",
    desc: "Test plans, test cases, STLC ownership, regression cycles and crisp bug reports in JIRA with clear repro steps, severity and root-cause notes.",
    points: ["Functional / Regression", "Smoke / Sanity", "Exploratory charters", "JIRA + Zephyr"],
    accent: "from-neon-purple to-neon-cyan",
  },
  {
    icon: <Database className="h-5 w-5" />,
    title: "DB & Data Validation",
    desc: "SQL-driven validation between UI, APIs and database — joins, aggregates, integrity checks and reconciliation reports for production-grade releases.",
    points: ["MySQL / PostgreSQL", "Joins & Aggregates", "Data reconciliation", "ETL spot-checks"],
    accent: "from-neon-cyan to-neon-purple",
  },
  {
    icon: <Gauge className="h-5 w-5" />,
    title: "Performance & Load Smoke",
    desc: "Baseline load and stress checks for critical user journeys with JMeter — surfacing slow endpoints before they hit production.",
    points: ["JMeter scripts", "Throughput & p95", "Soak tests", "Bottleneck triage"],
    accent: "from-neon-blue to-neon-cyan",
  },
  {
    icon: <ShieldCheck className="h-5 w-5" />,
    title: "Release & CI/CD Quality Gates",
    desc: "Smoke + regression suites gated in Jenkins/GitHub Actions, browser matrix via BrowserStack and a clean go / no-go report each release.",
    points: ["Jenkins / GH Actions", "BrowserStack matrix", "Release sign-off", "Quality dashboards"],
    accent: "from-neon-purple to-neon-blue",
  },
];

function Services() {
  return (
    <Section id="services" eyebrow="Services" title="What I do as your QA partner">
      <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
        {services.map((s, i) => (
          <motion.div
            key={s.title}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ delay: i * 0.05, duration: 0.5 }}
            whileHover={{ y: -4 }}
            className="group glass relative overflow-hidden rounded-3xl p-6"
          >
            <div className={`pointer-events-none absolute -right-10 -top-10 h-32 w-32 rounded-full bg-gradient-to-br ${s.accent} opacity-20 blur-3xl transition group-hover:opacity-40`} />
            <div className={`mb-4 grid h-11 w-11 place-items-center rounded-xl bg-gradient-to-br ${s.accent} text-background`}>
              {s.icon}
            </div>
            <h3 className="font-display text-lg font-semibold">{s.title}</h3>
            <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{s.desc}</p>
            <ul className="mt-4 space-y-1.5 text-xs text-muted-foreground">
              {s.points.map((p) => (
                <li key={p} className="flex items-center gap-2">
                  <Zap className="h-3 w-3 text-neon-cyan" /> {p}
                </li>
              ))}
            </ul>
          </motion.div>
        ))}
      </div>
    </Section>
  );
}

/* ---------- TECH MARQUEE ---------- */
const techList = [
  "Selenium", "Java", "TestNG", "JUnit", "Cucumber", "Postman", "Newman", "REST Assured",
  "JMeter", "Jenkins", "GitHub Actions", "JIRA", "Zephyr", "Maven", "Git", "MySQL",
  "PostgreSQL", "BrowserStack", "Allure", "ExtentReports", "Python", "FireFlink",
];

function TechMarquee() {
  const row = [...techList, ...techList];
  return (
    <section aria-label="Tech stack" className="relative py-12">
      <div className="mx-auto mb-6 max-w-6xl px-5">
        <div className="inline-flex items-center gap-2 text-[11px] font-medium uppercase tracking-[0.25em] text-neon-cyan">
          <span className="h-px w-8 bg-gradient-to-r from-neon-cyan to-transparent" /> Tech Stack
        </div>
      </div>
      <div className="relative overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]">
        <motion.div
          className="flex gap-4 whitespace-nowrap"
          animate={{ x: ["0%", "-50%"] }}
          transition={{ duration: 35, repeat: Infinity, ease: "linear" }}
        >
          {row.map((t, i) => (
            <span
              key={`${t}-${i}`}
              className="glass inline-flex items-center gap-2 rounded-full border border-white/10 px-5 py-2.5 font-mono text-sm text-muted-foreground"
            >
              <span className="h-1.5 w-1.5 rounded-full bg-gradient-to-r from-neon-cyan to-neon-purple" />
              {t}
            </span>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

/* ---------- CERTIFICATIONS ---------- */
const certs = [
  {
    title: "ISTQB® Foundation Level — CTFL",
    issuer: "ISTQB",
    year: "2025",
    desc: "Core testing principles, STLC, test design techniques, defect management and test management fundamentals.",
    icon: <Award className="h-5 w-5" />,
    accent: "from-neon-cyan to-neon-blue",
  },
  {
    title: "Selenium WebDriver with Java",
    issuer: "Qspiders",
    year: "2025",
    desc: "Hands-on Selenium 4 + Java + TestNG — locators, waits, POM, data-driven tests, parallel execution and reporting.",
    icon: <Workflow className="h-5 w-5" />,
    accent: "from-neon-blue to-neon-purple",
  },
  {
    title: "Postman API Testing — Student Expert",
    issuer: "Postman Academy",
    year: "2025",
    desc: "REST fundamentals, collections, environments, scripting with chai/JS assertions, and Newman CLI runs.",
    icon: <Globe className="h-5 w-5" />,
    accent: "from-neon-purple to-neon-cyan",
  },
  {
    title: "SQL for Testers",
    issuer: "Qspiders",
    year: "2024",
    desc: "DDL/DML, joins, aggregates, subqueries and data validation patterns used in real backend test scenarios.",
    icon: <Database className="h-5 w-5" />,
    accent: "from-neon-cyan to-neon-purple",
  },
  {
    title: "Agile & Scrum Fundamentals",
    issuer: "Online Course",
    year: "2024",
    desc: "Sprint ceremonies, user stories, acceptance criteria and how QA plugs into a healthy Agile delivery cycle.",
    icon: <Layers className="h-5 w-5" />,
    accent: "from-neon-blue to-neon-cyan",
  },
  {
    title: "Java Programming",
    issuer: "Qspiders",
    year: "2024",
    desc: "OOP, collections, exception handling and file I/O — the foundation behind every automation script I write.",
    icon: <Code2 className="h-5 w-5" />,
    accent: "from-neon-purple to-neon-blue",
  },
];

function Certifications() {
  return (
    <Section id="certifications" eyebrow="Certifications" title="Verified credentials & continuous learning">
      <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
        {certs.map((c, i) => (
          <motion.div
            key={c.title}
            initial={{ opacity: 0, rotateY: -12, y: 30 }}
            whileInView={{ opacity: 1, rotateY: 0, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ delay: i * 0.06, duration: 0.6 }}
            whileHover={{ y: -4, rotateX: 2, rotateY: -2 }}
            style={{ transformPerspective: 1000 }}
            className="group glass relative overflow-hidden rounded-3xl p-6"
          >
            <div className={`pointer-events-none absolute -left-12 -top-12 h-36 w-36 rounded-full bg-gradient-to-br ${c.accent} opacity-25 blur-3xl transition group-hover:opacity-50`} />
            <div className="flex items-start justify-between">
              <div className={`grid h-12 w-12 place-items-center rounded-xl bg-gradient-to-br ${c.accent} text-background shadow-lg`}>
                {c.icon}
              </div>
              <span className="font-mono text-[11px] text-neon-cyan">{c.year}</span>
            </div>
            <h3 className="mt-4 font-display text-base font-semibold leading-tight">{c.title}</h3>
            <div className="mt-1 text-xs text-muted-foreground">{c.issuer}</div>
            <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{c.desc}</p>
            <div className="mt-4 inline-flex items-center gap-1.5 text-xs font-medium text-neon-cyan">
              <FileCheck2 className="h-3.5 w-3.5" /> Verified
            </div>
          </motion.div>
        ))}
      </div>
    </Section>
  );
}

/* ---------- TESTIMONIALS ---------- */
const testimonials = [
  {
    quote:
      "Rohit caught critical edge cases in our billing flow that two previous releases had missed. His Selenium suite cut our regression cycle from two days to under four hours.",
    name: "Project Manager",
    role: "V3M Technologies",
    avatar: "PM",
  },
  {
    quote:
      "One of the most detail-oriented testers I've worked with. Every bug ticket had clean repro steps, severity and even a suggested fix area — saved the dev team hours.",
    name: "Senior Developer",
    role: "Invision Eye Hospital",
    avatar: "SD",
  },
  {
    quote:
      "Took complete ownership of QA for the hospital module — manual, automation, API and DB. Shipped a stable release with zero P0 defects in production for 3 sprints straight.",
    name: "QA Lead",
    role: "V3M Technologies",
    avatar: "QL",
  },
  {
    quote:
      "Strong fundamentals in STLC and automation. Picks up new tools quickly — got REST Assured into our pipeline within a week and improved API coverage by 40%.",
    name: "Engineering Mentor",
    role: "Qspiders",
    avatar: "EM",
  },
];

function Testimonials() {
  return (
    <Section id="testimonials" eyebrow="Testimonials" title="What teams say about working with me">
      <div className="grid gap-5 md:grid-cols-2">
        {testimonials.map((t, i) => (
          <motion.figure
            key={t.name + i}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ delay: i * 0.08, duration: 0.6 }}
            whileHover={{ y: -4 }}
            className="group glass relative overflow-hidden rounded-3xl p-7"
          >
            <Quote className="absolute right-5 top-5 h-10 w-10 text-neon-purple/30" />
            <div className="mb-3 flex gap-0.5 text-neon-cyan">
              {Array.from({ length: 5 }).map((_, idx) => (
                <Star key={idx} className="h-3.5 w-3.5 fill-current" />
              ))}
            </div>
            <blockquote className="text-sm leading-relaxed text-muted-foreground">
              "{t.quote}"
            </blockquote>
            <figcaption className="mt-5 flex items-center gap-3 border-t border-white/5 pt-4">
              <div className="grid h-10 w-10 place-items-center rounded-full bg-gradient-to-br from-neon-cyan via-neon-blue to-neon-purple font-display text-sm font-bold text-background">
                {t.avatar}
              </div>
              <div>
                <div className="text-sm font-semibold">{t.name}</div>
                <div className="text-xs text-muted-foreground">{t.role}</div>
              </div>
            </figcaption>
          </motion.figure>
        ))}
      </div>
    </Section>
  );
}

/* ---------- FOOTER ---------- */
function Footer() {
  return (
    <footer className="relative z-10 mt-20 border-t border-white/5 px-5 py-8 text-center text-xs text-muted-foreground">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 md:flex-row">
        <div>© {new Date().getFullYear()} Rohit Kumar. Built with care.</div>
        <div className="flex items-center gap-4">
          <a href="mailto:rokumar201@gmail.com" className="hover:text-foreground"><Mail className="h-4 w-4" /></a>
          <a href="https://github.com/" target="_blank" rel="noreferrer" className="hover:text-foreground"><Github className="h-4 w-4" /></a>
          <a href="https://www.linkedin.com/" target="_blank" rel="noreferrer" className="hover:text-foreground"><Linkedin className="h-4 w-4" /></a>
        </div>
      </div>
    </footer>
  );
}

/* ---------- PRIMITIVES ---------- */
function Section({ id, eyebrow, title, children }: { id: string; eyebrow: string; title: string; children: React.ReactNode }) {
  return (
    <section id={id} className="relative mx-auto max-w-6xl px-5 py-24 md:py-32">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.5 }}
        className="mb-10"
      >
        <div className="mb-3 inline-flex items-center gap-2 text-[11px] font-medium uppercase tracking-[0.25em] text-neon-cyan">
          <span className="h-px w-8 bg-gradient-to-r from-neon-cyan to-transparent" /> {eyebrow}
        </div>
        <h2 className="font-display text-3xl font-bold tracking-tight md:text-5xl">
          {title}
        </h2>
      </motion.div>
      {children}
    </section>
  );
}

function RevealCard({ children, className = "", delay = 0 }: { children: React.ReactNode; className?: string; delay?: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ delay, duration: 0.6 }}
      className={`glass rounded-3xl p-6 ${className}`}
    >
      {children}
    </motion.div>
  );
}
