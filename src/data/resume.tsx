import React from "react";
import { Icons } from "@/components/icons";
import { HomeIcon, NotebookIcon } from "lucide-react";
import { ReactLight } from "@/components/ui/svgs/reactLight";
import { NextjsIconDark } from "@/components/ui/svgs/nextjsIconDark";
import { Typescript } from "@/components/ui/svgs/typescript";
import { Nodejs } from "@/components/ui/svgs/nodejs";
import { Python } from "@/components/ui/svgs/python";
import { Golang } from "@/components/ui/svgs/golang";
import { Postgresql } from "@/components/ui/svgs/postgresql";
import { Docker } from "@/components/ui/svgs/docker";
import { Kubernetes } from "@/components/ui/svgs/kubernetes";
import { Java } from "@/components/ui/svgs/java";
import { Csharp } from "@/components/ui/svgs/csharp";

export const DATA = {
  name: "Yerzhan Kosbayev",
  initials: "YK",
  url: "https://yerzhan.dev",
  location: "Dubai, UAE",
  locationLink: "https://www.google.com/maps/place/dubai",
  description:
    "Full-Stack Developer building fast, clean, and scalable web applications. Turning ideas into working products.",
  summary:
    "I'm a Full-Stack developer with hands-on experience building web, mobile, and desktop applications. I focus on creating **fast, clean, and scalable solutions** using React, Next.js, and modern backend tools. I've worked on projects from architecture to deployment, handling databases, APIs, and integrations. Currently working at [BIS Group](https://www.bisgroup.pro) in Dubai while pursuing education at [Astana Polytechnic](https://apt.kz). Always improving my stack and aiming to build software that actually solves real problems.",
  avatarUrl: "/me.png",
  skills: [
    { name: "React", icon: ReactLight },
    { name: "Next.js", icon: NextjsIconDark },
    { name: "Typescript", icon: Typescript },
    { name: "Node.js", icon: Nodejs },
    { name: "Python", icon: Python },
    { name: "Go", icon: Golang },
    { name: "Postgres", icon: Postgresql },
    { name: "Docker", icon: Docker },
    { name: "Kubernetes", icon: Kubernetes },
    { name: "Java", icon: Java },
    { name: "C#", icon: Csharp },
  ],
  navbar: [
    { href: "/", icon: HomeIcon, label: "Home" },
    { href: "/blog", icon: NotebookIcon, label: "Blog" },
  ],
  contact: {
    email: "erzhanbekboluly@gmail.com",
    tel: "+971585372070",
    social: {
      GitHub: {
        name: "GitHub",
        url: "https://github.com/gv1ry2239091",
        icon: Icons.github,
        navbar: true,
      },
      LinkedIn: {
        name: "LinkedIn",
        url: "https://linkedin.com/in/yerzhan-kosbayev",
        icon: Icons.linkedin,
        navbar: false,
      },
      X: {
        name: "X",
        url: "https://x.com/yerzhandev",
        icon: Icons.x,
        navbar: false,
      },
      email: {
        name: "Send Email",
        url: "mailto:erzhanbekboluly@gmail.com",
        icon: Icons.email,
        navbar: false,
      },
    },
  },

  work: [
    {
      company: "BIS Group",
      href: "https://www.bisgroup.pro",
      badges: [],
      location: "Dubai, UAE",
      title: "Full Stack Developer",
      logoUrl: "/bisgroup.svg",
      start: "Jan 2024",
      end: undefined,
      description:
        "Working on full-stack web development projects for a Dubai-based group, delivering scalable and modern business solutions. Building responsive, performant interfaces and implementing robust server-side logic with modern frameworks. Collaborating with cross-functional teams to deliver features end-to-end, from design to deployment.",
    },
    {
      company: "TestCom Caspian",
      href: "https://testcom.kz",
      badges: [],
      location: "Aktau, Kazakhstan",
      title: "Full Stack Developer",
      logoUrl: "/testcom.png",
      start: "Mar 2024",
      end: "Feb 2026",
      description:
        "Developed and maintained the company's internal ERP Management System in collaboration with a team of three developers. Worked on a Kazakhstan-based industrial inspection and service provider in the oil & gas sector. Translated business requirements into a scalable, modular ERP platform covering inventory, client management, reporting, and process automation. Designed front-end interfaces with React/Next.js, implemented backend logic, and integrated APIs and databases to ensure seamless data flows.",
    },
  ],
  education: [
    {
      school: "Astana Polytechnic",
      href: "https://apt.kz",
      degree: "Secondary Education — Software Engineering Focus",
      logoUrl: "",
      start: "2023",
      end: "Present",
    },
  ],
  projects: [
    {
      title: "Corporate Website — BIS Group",
      href: "https://www.bisgroup.pro",
      dates: "2025 - Present",
      active: true,
      description:
        "Multi-language corporate website for BIS Group with internationalization, contact forms, and modern premium design.",
      technologies: [
        "Next.js",
        "TypeScript",
        "TailwindCSS",
        "i18n",
        "Resend",
        "Vercel",
      ],
      links: [
        {
          type: "Website",
          href: "https://www.bisgroup.pro",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image: "/bisgroup-work.png",
      video: "",
    },
    {
      title: "M2 Semey — Real Estate Agency",
      href: "https://www.m2-semey.kz",
      dates: "2025",
      active: true,
      description:
        "Website for a real estate agency in Semey, Kazakhstan. Features property listings, search filters, and responsive design for an optimal browsing experience.",
      technologies: [
        "Next.js",
        "TypeScript",
        "TailwindCSS",
        "Vercel",
      ],
      links: [
        {
          type: "Website",
          href: "https://www.m2-semey.kz",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image: "/m2-semey-work.png",
      video: "",
    },
    {
      title: "Portfolio Website",
      href: "https://yerzhan.dev",
      dates: "2025 - Present",
      active: true,
      description:
        "Personal developer portfolio and blog built with Next.js, featuring blur animations, dark mode, and responsive design.",
      technologies: [
        "Next.js",
        "TypeScript",
        "TailwindCSS",
        "Shadcn UI",
        "Magic UI",
        "MDX",
      ],
      links: [
        {
          type: "Website",
          href: "https://yerzhan.dev",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "Source",
          href: "https://github.com/gv1ry2239091/portfolio",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "/portfolio-work.jpg",
      video: "",
    },
    {
      title: "PPE Management System",
      href: "#",
      dates: "2025 - 2026",
      active: false,
      description:
        "Internal PPE (Personal Protective Equipment) tracking system for an oil & gas company. Covers inventory, issuance, expiry tracking, stock management, role-based access, reporting, and full audit logging.",
      technologies: [
        "Next.js",
        "TypeScript",
        "Node.js",
        "PostgreSQL",
        "Prisma",
        "TailwindCSS",
        "REST API",
      ],
      links: [],
      image: "/ppe-managment-system.png",
      video: "",
    },
    {
      title: "TestCom ERP System",
      href: "https://testcom.kz",
      dates: "2024 - 2025",
      active: false,
      description:
        "Internal ERP platform for a Kazakhstan-based oil & gas inspection company. Covers inventory, client management, reporting, and process automation.",
      technologies: [
        "Next.js",
        "React",
        "TypeScript",
        "Node.js",
        "PostgreSQL",
        "Prisma",
      ],
      links: [
        {
          type: "Website",
          href: "https://testcom.kz",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image: "/testcom-work.png",
      video: "",
    },
  ],
  hackathons: [] as Array<{
    title: string;
    dates: string;
    location: string;
    description: string;
    image?: string;
    mlh?: string;
    win?: string;
    links: Array<{ title: string; icon: React.ReactElement; href: string }>;
  }>,
} as const;
