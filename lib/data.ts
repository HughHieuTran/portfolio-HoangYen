import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaReact, FaStar } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";
import corpcommentImg from "@/public/corpcomment.png";
import rmtdevImg from "@/public/rmtdev.png";
import wordanalyticsImg from "@/public/wordanalytics.png";

export const links = [
  {
    name: "Home",
    hash: "/",
  },
  {
    name: "Về tôi",
    hash: "/about",
  },
  {
    name: "Dự Án",
    hash: "/projects",
  },
  {
    name: "Kỹ năng",
    hash: "/skills",
  },
  {
    name: "Kinh Nghiệm",
    hash: "/experience",
  },
  {
    name: "Liên Hệ",
    hash: "/contact",
  },
] as const;

export const experiencesData = [
  {
    title: "Tham gia học thuật ở Trường Đại Học Kiến Trúc Tp.HCM",
    location: "Ho Chi Minh city",
    description:
      "Bắt đầu sự nghiệp học thuật của bản thân ngành Mỹ Thuật Đô Thị Khóa 18",
    icon: React.createElement(LuGraduationCap),
    date: "2018",
  },

  {
    title: "Full-Stack Developer",
    location: "Houston, TX",
    description:
      "I'm now a full-stack developer working as a freelancer. My stack includes React, Next.js, TypeScript, Tailwind, Prisma and MongoDB. I'm open to full-time opportunities.",
    icon: React.createElement(FaStar),
    date: "2021 - present",
  },
  {
    title: "Đoạt giải thưởng X",
    location: "Orlando, FL",
    description:
      "I worked as a front-end developer for 2 years in 1 job and 1 year in another job. I also upskilled to the full stack.",
    icon: React.createElement(CgWorkAlt),
    date: "2019 - 2021",
  },
] as const;

export const projectsData = [
  {
    title: "CorpComment",
    description:
      "I worked as a full-stack developer on this startup project for 2 years. Users can give public feedback to companies.",
    tags: ["React", "Next.js", "MongoDB", "Tailwind", "Prisma"],
    imageUrl: corpcommentImg,
    html: `<a href="abc.com">abc</a>`

  },
  {
    title: "rmtDev",
    description:
      "Job board for remote developer jobs. I was the front-end developer. It has features like filtering, sorting and pagination.",
    tags: ["React", "TypeScript", "Next.js", "Tailwind", "Redux"],
    imageUrl: rmtdevImg,
    html: ""
  },
  {
    title: "Word Analytics",
    description:
      "A public web app for quick analytics on text. It shows word count, character count and social media post limits.",
    tags: ["React", "Next.js", "SQL", "Tailwind", "Framer"],
    imageUrl: wordanalyticsImg,
    html: ""
  },
] as const;

export const skillsData = [
  "SketchUp",
  "Adobe Photoshop",
  "Adobe Illustrator",
  "Lumion",
  "Vray",

] as const;
