import React, { useMemo, useState } from "react";
import { motion } from "framer-motion";
import {
  ArrowRight,
  CheckCircle2,
  ClipboardList,
  FileText,
  Gauge,
  GitBranch,
  Layers,
  LineChart,
  Mail,
  Map,
  ShieldCheck,
  Sparkles,
  Target,
  Users,
} from "lucide-react";

// --- Minimal UI components (safe for CodeSandbox) ---
function Card({ className = "", children }) {
  return <div className={`border bg-white ${className}`}>{children}</div>;
}
function CardContent({ className = "", children }) {
  return <div className={className}>{children}</div>;
}
function Button({ asChild = false, className = "", children, ...props }) {
  // supports <Button asChild><a/></Button>
  if (asChild && React.isValidElement(children)) {
    return React.cloneElement(children, {
      ...props,
      className: `${children.props.className || ""} ${className}`.trim(),
    });
  }
  return (
    <button className={className} {...props}>
      {children}
    </button>
  );
}
// --- end minimal UI components ---

const container = {
  hidden: { opacity: 0, y: 10 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, staggerChildren: 0.08 },
  },
};

const item = {
  hidden: { opacity: 0, y: 12 },
  show: { opacity: 1, y: 0, transition: { duration: 0.45 } },
};

const Badge = ({ children }) => (
  <span className="inline-flex items-center rounded-full border border-red-600 bg-red-50 px-3 py-1 text-xs font-semibold text-red-700 shadow-sm backdrop-blur">
    {children}
  </span>
);

const SectionTitle = ({ eyebrow, title, subtitle }) => (
  <div className="mx-auto max-w-3xl text-center">
    {eyebrow ? (
      <div className="mb-3 flex items-center justify-center gap-2">
        <Sparkles className="h-4 w-4" />
        <span className="text-sm font-semibold tracking-wide text-neutral-700">
          {eyebrow}
        </span>
      </div>
    ) : null}
    <h2 className="text-2xl font-semibold tracking-tight text-neutral-900 sm:text-3xl">
      {title}
    </h2>
    {subtitle ? (
      <p className="mt-3 text-base leading-relaxed text-neutral-600 sm:text-lg">
        {subtitle}
      </p>
    ) : null}
  </div>
);

const Pill = ({ icon: Icon, title, desc }) => (
  <div className="flex items-start gap-3">
    <div className="mt-0.5 rounded-xl border border-neutral-200 bg-white p-2 shadow-sm">
      <Icon className="h-5 w-5" />
    </div>
    <div>
      <div className="text-sm font-semibold text-neutral-900">{title}</div>
      <div className="mt-1 text-sm leading-relaxed text-neutral-600">
        {desc}
      </div>
    </div>
  </div>
);

export default function App() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    org: "",
    message: "",
  });
  const [aboutTab, setAboutTab] = useState("overview");

  const mailto = useMemo(() => {
    const subject = encodeURIComponent(
      "Consulting inquiry – The Mitchell Firm, LLC"
    );
    const body = encodeURIComponent(
      `Name: ${form.name}\nEmail: ${form.email}\nOrganization: ${form.org}\n\nMessage:\n${form.message}`
    );
    return `mailto:reginamitchell@tmfconsulting.org?subject=${subject}&body=${body}`;
  }, [form]);

  const services = [
    {
      icon: ClipboardList,
      title: "Program & Process Evaluation",
      desc: "Assess effectiveness, fidelity, equity, and outcomes—then translate findings into actionable improvements.",
      tags: ["logic models", "KPIs", "mixed methods"],
    },
    {
      icon: GitBranch,
      title: "Process Mapping & Streamlining",
      desc: "Map end-to-end workflows, reduce bottlenecks, and build practical SOPs for consistent execution.",
      tags: ["SIPOC", "swim lanes", "SOPs"],
    },
    {
      icon: Layers,
      title: "Duplication & Gap Analysis",
      desc: "Identify duplication of services, gaps in coverage, and opportunities to consolidate for better impact.",
      tags: ["service inventory", "gap/overlap"],
    },
    {
      icon: Map,
      title: "Value Mapping",
      desc: "Clarify what creates value for clients and stakeholders—and align resources to the highest-value activities.",
      tags: ["value streams", "stakeholder needs"],
    },
    {
      icon: LineChart,
      title: "Kaizen Facilitation",
      desc: "Facilitate structured, continuous improvement sessions that engage staff, identify root causes, and implement rapid, sustainable process improvements.",
      tags: ["continuous improvement", "root cause", "rapid cycles"],
    },
    {
      icon: Gauge,
      title: "Operational Performance",
      desc: "Design dashboards and routines that keep teams aligned and accountable to measurable results.",
      tags: ["scorecards", "cadence"],
    },
    {
      icon: ShieldCheck,
      title: "Policy & Implementation Support",
      desc: "Support policy development and implementation planning with an equity-centered, practical approach.",
      tags: ["implementation", "governance"],
    },
  ];

  const approach = [
    {
      icon: Target,
      title: "Define success",
      desc: "We start with outcomes, constraints, and decision points—so the work stays focused and useful.",
    },
    {
      icon: Users,
      title: "Engage stakeholders",
      desc: "Structured interviews, focus groups, and working sessions to capture what’s real on the ground.",
    },
    {
      icon: LineChart,
      title: "Analyze & synthesize",
      desc: "Data + lived experience → insights. We look for patterns, duplication, gaps, and leverage points.",
    },
    {
      icon: FileText,
      title: "Deliver tools",
      desc: "You leave with clear recommendations, maps, templates, and an implementation roadmap.",
    },
  ];

  const engagements = [
    {
      title: "Rapid Assessment (2–4 weeks)",
      points: [
        "Stakeholder input + quick data review",
        "High-level process map",
        "Top recommendations & next steps",
      ],
    },
    {
      title: "Full Evaluation / Redesign (6–12+ weeks)",
      points: [
        "Program/process evaluation plan",
        "Service duplication & gap analysis",
        "Value map + streamlined workflow",
        "Implementation roadmap",
      ],
    },
    {
      title: "Ongoing Advisory (Monthly)",
      points: [
        "Executive coaching & decision support",
        "Performance routines & dashboards",
        "Change management support",
      ],
    },
  ];

  return (
    <div className="min-h-screen bg-neutral-50 text-neutral-900">
      <header className="sticky top-0 z-50 border-b border-neutral-200 bg-white/80 backdrop-blur">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3 sm:px-6">
          <a href="#top" className="group flex items-center gap-2">
            <div className="grid h-9 w-9 place-items-center rounded-2xl border-2 border-red-600 bg-white shadow-sm">
              <span className="text-sm font-bold tracking-tight">TMF</span>
            </div>
            <div className="leading-tight">
              <div className="text-sm font-semibold">
                The Mitchell Firm, LLC
              </div>
              <div className="text-xs text-neutral-500">
                Consulting • Evaluation • Operational Excellence
              </div>
            </div>
          </a>

          <nav className="hidden items-center gap-6 text-sm text-neutral-600 sm:flex">
            <a className="hover:text-neutral-900" href="#about">
              About
            </a>
            <a className="hover:text-neutral-900" href="#services">
              Services
            </a>
            <a className="hover:text-neutral-900" href="#approach">
              Approach
            </a>
            <a className="hover:text-neutral-900" href="#engagements">
              Engagements
            </a>
            <a className="hover:text-neutral-900" href="#contact">
              Contact
            </a>
          </nav>

          <Button
            asChild
            className="rounded-2xl bg-red-600 hover:bg-red-700 text-white px-4 py-2 text-sm font-semibold"
          >
            <a href="#contact">Start a conversation</a>
          </Button>
        </div>
      </header>

      {/* HERO */}
      <main id="top">
        <section className="relative overflow-hidden">
          <div className="absolute inset-0">
            <div className="absolute -top-24 left-1/2 h-72 w-[42rem] -translate-x-1/2 rounded-full bg-neutral-200/40 blur-3xl" />
            <div className="absolute bottom-0 right-[-10rem] h-72 w-72 rounded-full bg-neutral-200/40 blur-3xl" />
          </div>

          <div className="relative mx-auto max-w-6xl px-4 py-14 sm:px-6 sm:py-20">
            <motion.div
              variants={container}
              initial="hidden"
              animate="show"
              className="grid gap-10 lg:grid-cols-12 lg:items-center"
            >
              <motion.div variants={item} className="lg:col-span-7">
                <div className="flex flex-wrap items-center gap-2">
                  <Badge>Program & process evaluation</Badge>
                  <Badge>Duplication & gap analysis</Badge>
                  <Badge>Value & process mapping</Badge>
                </div>

                <h1 className="mt-5 text-3xl font-semibold tracking-tight text-neutral-900 sm:text-5xl">
                  Practical consulting that turns complex systems into clear,
                  measurable progress.
                </h1>
                <p className="mt-4 max-w-2xl text-base leading-relaxed text-neutral-600 sm:text-lg">
                  The Mitchell Firm, LLC partners with organizations to evaluate
                  programs, streamline operations, reduce duplication of
                  services, and improve outcomes—using an equity-centered,
                  implementation-ready approach.
                </p>

                <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:items-center">
                  <Button
                    asChild
                    className="rounded-2xl bg-red-600 hover:bg-red-700 text-white px-4 py-2 text-sm font-semibold"
                  >
                    <a
                      href="#contact"
                      className="inline-flex items-center gap-2"
                    >
                      Request a consult <ArrowRight className="h-4 w-4" />
                    </a>
                  </Button>
                  <a
                    href="#services"
                    className="inline-flex items-center justify-center gap-2 rounded-2xl border border-neutral-200 bg-white px-4 py-2 text-sm font-medium text-neutral-700 shadow-sm hover:bg-neutral-50"
                  >
                    Explore services
                  </a>
                </div>

                <div className="mt-8 grid gap-3 sm:grid-cols-3">
                  <Pill
                    icon={CheckCircle2}
                    title="Actionable"
                    desc="Clear recommendations and tools you can implement."
                  />
                  <Pill
                    icon={LineChart}
                    title="Data-informed"
                    desc="Evidence + lived experience to guide decisions."
                  />
                  <Pill
                    icon={ShieldCheck}
                    title="Equity-centered"
                    desc="Focus on fairness, access, and measurable impact."
                  />
                </div>
              </motion.div>

              <motion.div variants={item} className="lg:col-span-5">
                <Card className="rounded-3xl border-neutral-200 bg-white/80 shadow-sm backdrop-blur">
                  <CardContent className="p-6">
                    <div className="flex items-start justify-between gap-4">
                      <div>
                        <div className="text-sm font-semibold text-neutral-900">
                          What you’ll get
                        </div>
                        <div className="mt-1 text-sm text-neutral-600">
                          Typical deliverables for engagements
                        </div>
                      </div>
                      <div className="grid h-10 w-10 place-items-center rounded-2xl border border-neutral-200 bg-white">
                        <FileText className="h-5 w-5" />
                      </div>
                    </div>

                    <ul className="mt-5 space-y-3 text-sm text-neutral-700">
                      {[
                        "Current-state process maps",
                        "Service duplication & gap findings",
                        "Value map + streamlined workflows",
                        "Implementation roadmap",
                        "Metrics and reporting cadence",
                      ].map((t) => (
                        <li key={t} className="flex items-start gap-2">
                          <CheckCircle2 className="mt-0.5 h-4 w-4" />
                          <span className="leading-relaxed">{t}</span>
                        </li>
                      ))}
                    </ul>

                    <div className="mt-6 rounded-2xl border border-neutral-200 bg-neutral-50 p-4">
                      <div className="flex items-center gap-2 text-sm font-semibold text-neutral-900">
                        <ClipboardList className="h-4 w-4" />
                        <span>Quick start</span>
                      </div>
                      <p className="mt-1 text-sm leading-relaxed text-neutral-600">
                        Book a 20–30 minute discovery call. We’ll clarify goals,
                        scope, timeline, and the fastest path to impact.
                      </p>
                      <div className="mt-3">
                        <Button
                          asChild
                          className="w-full rounded-2xl bg-red-600 hover:bg-red-700 text-white px-4 py-2 text-sm font-semibold"
                        >
                          <a
                            href="#contact"
                            className="inline-flex items-center justify-center gap-2"
                          >
                            Contact <Mail className="h-4 w-4" />
                          </a>
                        </Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            </motion.div>
          </div>
        </section>

        {/* ABOUT (Overview / About Us tabs) */}
        <section id="about" className="border-t border-neutral-200 bg-white">
          <div className="mx-auto max-w-6xl px-4 py-14 sm:px-6 sm:py-20">
            <SectionTitle
              eyebrow="About"
              title="Grounded expertise. Practical solutions."
              subtitle="Learn about our work—and, if you’d like, meet the leadership and credentials behind it."
            />

            <div className="mx-auto mt-8 flex max-w-3xl flex-col items-center">
              <div className="inline-flex rounded-2xl border border-neutral-200 bg-white p-1 shadow-sm">
                <button
                  type="button"
                  onClick={() => setAboutTab("overview")}
                  className={`rounded-2xl px-4 py-2 text-sm font-semibold transition ${
                    aboutTab === "overview"
                      ? "bg-red-600 text-white"
                      : "text-neutral-700 hover:bg-neutral-50"
                  }`}
                >
                  Overview
                </button>
                <button
                  type="button"
                  onClick={() => setAboutTab("aboutus")}
                  className={`rounded-2xl px-4 py-2 text-sm font-semibold transition ${
                    aboutTab === "aboutus"
                      ? "bg-red-600 text-white"
                      : "text-neutral-700 hover:bg-neutral-50"
                  }`}
                >
                  About Us
                </button>
              </div>
            </div>

            {aboutTab === "overview" ? (
              <div className="mx-auto mt-10 max-w-4xl">
                <Card className="rounded-3xl border-neutral-200 bg-neutral-50 shadow-sm">
                  <CardContent className="p-6">
                    <p className="text-base leading-relaxed text-neutral-700">
                      The Mitchell Firm, LLC partners with public agencies,
                      nonprofits, and foundations to evaluate programs,
                      streamline operations, reduce duplication of services, and
                      improve outcomes—using an equity-centered,
                      implementation-ready approach.
                    </p>
                    <p className="mt-4 text-base leading-relaxed text-neutral-700">
                      Our work is grounded in practical tools: process maps,
                      value maps, service inventories, clear recommendations,
                      and implementation roadmaps that help teams move from
                      intention to measurable progress.
                    </p>
                    <div className="mt-6 grid gap-3 sm:grid-cols-3">
                      <Pill
                        icon={CheckCircle2}
                        title="Clarity"
                        desc="Make complex work visible and understandable."
                      />
                      <Pill
                        icon={LineChart}
                        title="Alignment"
                        desc="Reduce duplication and focus on value."
                      />
                      <Pill
                        icon={ShieldCheck}
                        title="Sustainability"
                        desc="Support adoption so improvements stick."
                      />
                    </div>
                  </CardContent>
                </Card>
              </div>
            ) : (
              <div className="mt-10 grid gap-6 lg:grid-cols-12">
                <div className="lg:col-span-4">
                  <Card className="rounded-3xl border-neutral-200 bg-white shadow-sm">
                    <CardContent className="p-6">
                      <div className="flex flex-col items-center text-center">
                        <div className="h-40 w-40 overflow-hidden rounded-full border-4 border-red-600 bg-neutral-100">
                          <img
                            src="/IMG_2507.jpeg"
                            alt="Regina Mitchell"
                            className="h-full w-full object-cover"
                          />
                        </div>
                        <div className="mt-4 text-base font-semibold text-neutral-900">
                          Regina Mitchell
                        </div>
                        <div className="mt-2 flex flex-wrap justify-center gap-2">
                          {[
                            "Policy & Systems Reform",
                            "Program Evaluation",
                            "Operational Excellence",
                            "PROSCI® Change Management",
                            "Lean Ohio Black Belt",
                            "M.S. Criminal Justice Admin.",
                          ].map((b) => (
                            <span
                              key={b}
                              className="rounded-full border border-red-600 bg-red-50 px-3 py-1 text-[11px] font-semibold text-red-700"
                            >
                              {b}
                            </span>
                          ))}
                        </div>
                        <div className="text-sm text-neutral-600">
                          Founder & Principal Consultant
                        </div>

                        <div className="mt-6 rounded-2xl border border-neutral-200 bg-neutral-50 p-4 text-left">
                          <div className="text-sm font-semibold text-neutral-900">
                            Why The Mitchell Firm
                          </div>
                          <p className="mt-2 text-sm leading-relaxed text-neutral-700">
                            Clients partner with The Mitchell Firm for clear
                            analysis, honest assessments, and
                            implementation-ready recommendations. We focus on
                            what can actually change—within real-world
                            constraints—and help leaders move forward with
                            confidence.
                          </p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>

                <div className="lg:col-span-8">
                  <Card className="rounded-3xl border-neutral-200 bg-neutral-50 shadow-sm">
                    <CardContent className="p-6">
                      <p className="text-base leading-relaxed text-neutral-700">
                        Founded by <strong>Regina Mitchell</strong>, The
                        Mitchell Firm, LLC partners with public agencies,
                        nonprofits, and community-based organizations to improve
                        outcomes through thoughtful evaluation, operational
                        clarity, and equity-centered implementation.
                      </p>

                      <p className="mt-4 text-base leading-relaxed text-neutral-700">
                        Regina brings extensive senior leadership experience
                        across juvenile justice, policy, and program
                        administration, including statewide systems reform,
                        cross-agency collaboration, and national technical
                        assistance.
                      </p>

                      <p className="mt-4 text-base leading-relaxed text-neutral-700">
                        Her work is grounded in the belief that organizations do
                        their best work when processes are clear, services are
                        aligned, duplication is reduced, and staff are supported
                        with practical tools they can use every day.
                      </p>

                      <div className="mt-6 grid gap-6 sm:grid-cols-2">
                        <div>
                          <div className="text-sm font-semibold text-neutral-900">
                            Past roles
                          </div>
                          <ul className="mt-3 space-y-2 text-sm text-neutral-700">
                            {[
                              "Chief Policy & Programs Officer – national nonprofit",
                              "State Juvenile Justice Administrator",
                              "Program Director & Policy Lead",
                              "Adjunct Faculty (Criminal Justice / Public Policy)",
                            ].map((x) => (
                              <li key={x} className="flex items-start gap-2">
                                <CheckCircle2 className="mt-0.5 h-4 w-4" />
                                <span className="leading-relaxed">{x}</span>
                              </li>
                            ))}
                          </ul>
                        </div>

                        <div>
                          <div className="text-sm font-semibold text-neutral-900">
                            Credentials & affiliations
                          </div>
                          <ul className="mt-3 space-y-2 text-sm text-neutral-700">
                            {[
                              "Master’s in Criminal Justice Administration",
                              "PROSCI Change Management Certification",
                              "Lean Ohio Black Belt",
                              "State and national justice reform initiatives",
                              "Foundations, government agencies, and TA providers",
                              "Cross-system collaboratives and advisory groups",
                              "Equity-focused policy and practice networks",
                            ].map((x) => (
                              <li key={x} className="flex items-start gap-2">
                                <CheckCircle2 className="mt-0.5 h-4 w-4" />
                                <span className="leading-relaxed">{x}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </div>
            )}
          </div>
        </section>

        {/* EXPLAINERS */}
        <section
          id="explainers"
          className="border-t border-neutral-200 bg-neutral-50"
        >
          <div className="mx-auto max-w-6xl px-4 py-14 sm:px-6 sm:py-20">
            <SectionTitle
              eyebrow="Explainers"
              title="How Kaizen and PROSCI drive sustainable change"
              subtitle="Structured improvement + change management ensures gains stick—not just look good on paper."
            />
            <div className="mt-10 grid gap-6 lg:grid-cols-2">
              <Card className="rounded-3xl border-neutral-200 bg-white shadow-sm">
                <CardContent className="p-6">
                  <div className="text-base font-semibold text-neutral-900">
                    What a Kaizen Facilitation Looks Like
                  </div>
                  <ul className="mt-4 space-y-2 text-sm text-neutral-700">
                    {[
                      "Define the problem and success metrics",
                      "Map the current process with staff",
                      "Identify root causes and waste",
                      "Design and test improvements in rapid cycles",
                      "Leave with a clear action plan and owners",
                    ].map((x) => (
                      <li key={x} className="flex gap-2">
                        <CheckCircle2 className="mt-0.5 h-4 w-4" />
                        {x}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>

              <Card className="rounded-3xl border-neutral-200 bg-white shadow-sm">
                <CardContent className="p-6">
                  <div className="text-base font-semibold text-neutral-900">
                    Why PROSCI + Lean Matters
                  </div>
                  <p className="mt-3 text-sm leading-relaxed text-neutral-700">
                    Process improvements fail when people are not supported
                    through change. PROSCI change management ensures leaders
                    address communication, readiness, and adoption—while Lean
                    tools focus the work on value, efficiency, and measurable
                    results.
                  </p>
                  <p className="mt-3 text-sm leading-relaxed text-neutral-700">
                    Together, they help organizations move faster, reduce
                    resistance, and sustain improvements over time.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* SERVICES */}
        <section id="services" className="border-t border-neutral-200 bg-white">
          <div className="mx-auto max-w-6xl px-4 py-14 sm:px-6 sm:py-20">
            <SectionTitle
              eyebrow="Services"
              title="Services designed for clarity, alignment, and results"
              subtitle="From evaluation to operational redesign, we help you understand what’s working, what’s duplicative, and where to streamline for better outcomes."
            />

            <motion.div
              variants={container}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.2 }}
              className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3"
            >
              {services.map((s) => (
                <motion.div key={s.title} variants={item}>
                  <Card className="h-full rounded-3xl border-neutral-200 shadow-sm">
                    <CardContent className="p-6">
                      <div className="flex items-start justify-between gap-4">
                        <div className="grid h-11 w-11 place-items-center rounded-2xl border border-neutral-200 bg-white">
                          <s.icon className="h-5 w-5" />
                        </div>
                        <div className="flex flex-wrap gap-2">
                          {s.tags.map((t) => (
                            <span
                              key={t}
                              className="rounded-full bg-neutral-100 px-3 py-1 text-[11px] font-medium text-neutral-700"
                            >
                              {t}
                            </span>
                          ))}
                        </div>
                      </div>
                      <div className="mt-4 text-base font-semibold text-neutral-900">
                        {s.title}
                      </div>
                      <p className="mt-2 text-sm leading-relaxed text-neutral-600">
                        {s.desc}
                      </p>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* APPROACH */}
        <section
          id="approach"
          className="border-t border-neutral-200 bg-neutral-50"
        >
          <div className="mx-auto max-w-6xl px-4 py-14 sm:px-6 sm:py-20">
            <SectionTitle
              eyebrow="How we work"
              title="A structured approach that respects your time and realities"
              subtitle="We keep the work grounded, collaborative, and built for implementation—so recommendations don’t sit on a shelf."
            />
            <motion.div
              variants={container}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.2 }}
              className="mt-10 grid gap-4 lg:grid-cols-4"
            >
              {approach.map((a, idx) => (
                <motion.div key={a.title} variants={item}>
                  <Card className="h-full rounded-3xl border-neutral-200 bg-white shadow-sm">
                    <CardContent className="p-6">
                      <div className="flex items-center justify-between">
                        <div className="grid h-11 w-11 place-items-center rounded-2xl border border-neutral-200 bg-white">
                          <a.icon className="h-5 w-5" />
                        </div>
                        <span className="text-xs font-semibold text-neutral-500">
                          Step {idx + 1}
                        </span>
                      </div>
                      <div className="mt-4 text-base font-semibold text-neutral-900">
                        {a.title}
                      </div>
                      <p className="mt-2 text-sm leading-relaxed text-neutral-600">
                        {a.desc}
                      </p>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </motion.div>

            <div className="mx-auto mt-10 max-w-4xl rounded-3xl border border-neutral-200 bg-white p-6 shadow-sm">
              <div className="flex flex-col items-start justify-between gap-4 sm:flex-row sm:items-center">
                <div>
                  <div className="text-sm font-semibold text-neutral-900">
                    Typical project inputs
                  </div>
                  <div className="mt-1 text-sm text-neutral-600">
                    We tailor to your context—these are common starting points.
                  </div>
                </div>
                <div className="flex flex-wrap gap-2">
                  {[
                    "Policies & SOPs",
                    "Program data",
                    "Service lists",
                    "Staff insights",
                    "Stakeholder feedback",
                  ].map((b) => (
                    <Badge key={b}>{b}</Badge>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ENGAGEMENTS */}
        <section
          id="engagements"
          className="border-t border-neutral-200 bg-white"
        >
          <div className="mx-auto max-w-6xl px-4 py-14 sm:px-6 sm:py-20">
            <SectionTitle
              eyebrow="Engagements"
              title="Right-sized options for your timeline"
              subtitle="Choose a scope that fits—then we’ll refine together during discovery."
            />
            <motion.div
              variants={container}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.2 }}
              className="mt-10 grid gap-4 lg:grid-cols-3"
            >
              {engagements.map((e) => (
                <motion.div key={e.title} variants={item}>
                  <Card className="h-full rounded-3xl border-neutral-200 shadow-sm">
                    <CardContent className="p-6">
                      <div className="flex items-start justify-between gap-4">
                        <div className="text-base font-semibold text-neutral-900">
                          {e.title}
                        </div>
                        <div className="grid h-10 w-10 place-items-center rounded-2xl border border-neutral-200 bg-white">
                          <Gauge className="h-5 w-5" />
                        </div>
                      </div>
                      <ul className="mt-4 space-y-2 text-sm text-neutral-700">
                        {e.points.map((p) => (
                          <li key={p} className="flex items-start gap-2">
                            <CheckCircle2 className="mt-0.5 h-4 w-4" />
                            <span className="leading-relaxed">{p}</span>
                          </li>
                        ))}
                      </ul>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* CONTACT */}
        <section
          id="contact"
          className="border-t border-neutral-200 bg-neutral-50"
        >
          <div className="mx-auto max-w-6xl px-4 py-14 sm:px-6 sm:py-20">
            <SectionTitle
              eyebrow="Contact"
              title="Let’s talk about your goals"
              subtitle="Share a bit about your organization and what you’re trying to accomplish. We’ll respond to schedule a discovery call."
            />

            <div className="mt-10 grid gap-6 lg:grid-cols-12">
              <div className="lg:col-span-5">
                <Card className="rounded-3xl border-neutral-200 bg-white shadow-sm">
                  <CardContent className="p-6">
                    <div className="text-sm font-semibold text-neutral-900">
                      Why organizations reach out
                    </div>
                    <div className="mt-4 space-y-3">
                      <Pill
                        icon={Layers}
                        title="Reduce duplication"
                        desc="Clarify overlapping services and streamline toward the highest impact."
                      />
                      <Pill
                        icon={GitBranch}
                        title="Improve handoffs"
                        desc="Map workflows across teams and remove bottlenecks and confusion."
                      />
                      <Pill
                        icon={LineChart}
                        title="Strengthen outcomes"
                        desc="Evaluate effectiveness and align metrics to what matters most."
                      />
                    </div>

                    <div className="mt-6 rounded-2xl border border-neutral-200 bg-neutral-50 p-4">
                      <div className="text-sm font-semibold text-neutral-900">
                        Email
                      </div>
                      <p className="mt-1 text-sm text-neutral-600">
                        This page uses a mail link and is currently set to
                        reginamitchell@tmfconsulting.org.
                      </p>
                    </div>
                  </CardContent>
                </Card>
              </div>

              <div className="lg:col-span-7">
                <Card className="rounded-3xl border-neutral-200 bg-white shadow-sm">
                  <CardContent className="p-6">
                    <div className="grid gap-4 sm:grid-cols-2">
                      <label className="grid gap-2 text-sm">
                        <span className="font-medium text-neutral-700">
                          Name
                        </span>
                        <input
                          className="h-11 rounded-2xl border border-neutral-200 bg-white px-4 text-sm outline-none ring-neutral-900/10 focus:ring-2"
                          value={form.name}
                          onChange={(e) =>
                            setForm((s) => ({ ...s, name: e.target.value }))
                          }
                          placeholder="Your name"
                        />
                      </label>

                      <label className="grid gap-2 text-sm">
                        <span className="font-medium text-neutral-700">
                          Email
                        </span>
                        <input
                          className="h-11 rounded-2xl border border-neutral-200 bg-white px-4 text-sm outline-none ring-neutral-900/10 focus:ring-2"
                          value={form.email}
                          onChange={(e) =>
                            setForm((s) => ({ ...s, email: e.target.value }))
                          }
                          placeholder="you@organization.org"
                        />
                      </label>

                      <label className="grid gap-2 text-sm sm:col-span-2">
                        <span className="font-medium text-neutral-700">
                          Organization
                        </span>
                        <input
                          className="h-11 rounded-2xl border border-neutral-200 bg-white px-4 text-sm outline-none ring-neutral-900/10 focus:ring-2"
                          value={form.org}
                          onChange={(e) =>
                            setForm((s) => ({ ...s, org: e.target.value }))
                          }
                          placeholder="Agency / nonprofit / foundation"
                        />
                      </label>

                      <label className="grid gap-2 text-sm sm:col-span-2">
                        <span className="font-medium text-neutral-700">
                          How can we help?
                        </span>
                        <textarea
                          className="min-h-[140px] rounded-2xl border border-neutral-200 bg-white px-4 py-3 text-sm outline-none ring-neutral-900/10 focus:ring-2"
                          value={form.message}
                          onChange={(e) =>
                            setForm((s) => ({ ...s, message: e.target.value }))
                          }
                          placeholder="Tell us about your project, timeline, and what success looks like."
                        />
                      </label>
                    </div>

                    <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:items-center">
                      <Button
                        asChild
                        className="rounded-2xl bg-red-600 hover:bg-red-700 text-white px-4 py-2 text-sm font-semibold"
                      >
                        <a
                          href={mailto}
                          className="inline-flex items-center gap-2"
                        >
                          Send inquiry <Mail className="h-4 w-4" />
                        </a>
                      </Button>
                      <p className="text-sm text-neutral-600">
                        Prefer a quick start? Include your availability for a
                        20–30 minute discovery call.
                      </p>
                    </div>

                    <div className="mt-6 rounded-2xl border border-neutral-200 bg-neutral-50 p-4">
                      <div className="flex items-center gap-2 text-sm font-semibold text-neutral-900">
                        <Users className="h-4 w-4" />
                        <span>Common stakeholders</span>
                      </div>
                      <p className="mt-1 text-sm leading-relaxed text-neutral-600">
                        Program leadership, operations, finance, frontline
                        staff, partner agencies, and community voices—aligned to
                        the decision-makers who will implement change.
                      </p>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>

        {/* FOOTER */}
        <footer className="border-t border-neutral-200 bg-white">
          <div className="mx-auto max-w-6xl px-4 py-10 sm:px-6">
            <div className="flex flex-col items-start justify-between gap-6 sm:flex-row sm:items-center">
              <div>
                <div className="text-sm font-semibold text-neutral-900">
                  The Mitchell Firm, LLC
                </div>
                <div className="mt-1 text-sm text-neutral-600">
                  Consulting • Evaluation • Process improvement • Service
                  alignment
                </div>
              </div>
              <div className="flex flex-wrap items-center gap-3 text-sm text-neutral-600">
                <a className="hover:text-neutral-900" href="#services">
                  Services
                </a>
                <span className="text-neutral-300">•</span>
                <a className="hover:text-neutral-900" href="#approach">
                  Approach
                </a>
                <span className="text-neutral-300">•</span>
                <a className="hover:text-neutral-900" href="#contact">
                  Contact
                </a>
              </div>
            </div>
            <div className="mt-8 text-xs text-neutral-500">
              © {new Date().getFullYear()} The Mitchell Firm, LLC. All rights
              reserved.
            </div>
          </div>
        </footer>
      </main>
    </div>
  );
}
