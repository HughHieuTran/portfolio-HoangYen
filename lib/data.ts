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
    location: "",
    description:
      "Bắt đầu sự nghiệp học thuật của bản thân ngành Mỹ Thuật Đô Thị Khóa 18",
    icon: React.createElement(LuGraduationCap),
    date: "2018",
  },
  {
    title: "Giải Nghệ Thuật Sắp Đặt Chủ Đề Tuổi Trẻ Và Tương Lai Thành Phố",
    location: "Tp.Hồ Chí Minh",
    description:
      "Đoạt giải ba trong cuộc thi Nghệ Thuật Sắp Đặt Chủ Đề Tuổi Trẻ Và Tương Lai Thành Phố tổ chức bởi Liên hiệp các Hội Văn Học Nghệ Thuật thành phố Hồ Chí Minh",
    icon: React.createElement(CgWorkAlt),
    date: "Tháng 2, 2020",
  },
  {
    title: "Học bổng do Trường đại học Kiến Trúc cấp",
    location: "",
    description:
      "Được trao tặng học bổng xuất sắc bởi trường Đại học Kiến Trúc Thành Phố Hồ Chí Minh cho các học kì năm 2020, 2021, 2022",
    icon: React.createElement(FaStar),
    date: "Từ 2020 - 2022",
  },
  {
    title: "Giải thiết kế Nghệ Thuật Công Cộng",
    location: "Hà Nội, Việt Nam",
    description:
      "Đoạt Giải ý tưởng sáng tạo mới trong cuộc thi thiết kế Nghệ Thuật Công Cộng Hà Nội năm 2022 do Sở Văn Hóa và Thể Thao Hà Nội và Hội Kiến Trúc Sư tổ chức.",
    icon: React.createElement(FaStar),
    date: "Tháng 11, 2022",
  },
  {
    title: "Bắt đầu việc làm thiết kế",
    location: "Tp.Hồ Chí Minh",
    description:
      "Bắt đầu công việc thiết kế các cho bữa tiệc và hội nghị có tính mỹ thuật cao ở công ty TNHH Cát Hoa bằng các kỹ năng thiết kế nghệ thuật và dựng ảnh 2D, 3D",
    icon: React.createElement(FaStar),
    date: "Tháng 10, 2023",
  },


] as const;

export const projectsData = [
  {
    path: "du-an-abc",
    title: "á bờ",
    description:
      "I worked as a full-stack developer on this startup project for 2 years. Users can give public feedback to companies.",
    tags: ["Dự án", "Sketchup", "Đồ họa", "Giải thưởng", "abc"],
    imageUrl: corpcommentImg,
    slider: [
      {
        title: "Donut 1",
        description: "Our Donut Collection Offers a Mouthwatering Array of Flavors, Toppings, and Shapes for Every Craving and Occasion.",
        url: "https://images.unsplash.com/photo-1612240498936-65f5101365d2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80"
      },
      {
        title: "Donut 2",
        description: "Our Donut Collection Offers a Mouthwatering Array of Flavors, Toppings, and Shapes for Every Craving and Occasion.",
        url: "https://images.unsplash.com/photo-1551024601-bec78aea704b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=764&q=80"
      },
      {
        title: "Donut 3",
        description: "Our Donut Collection Offers a Mouthwatering Array of Flavors, Toppings, and Shapes for Every Craving and Occasion.",
        url: "https://images.unsplash.com/photo-1646615077267-97c6088b74d9?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=415&q=80"
      },

      {
        title: "Donut 4",
        description: "Our Donut Collection Offers a Mouthwatering Array of Flavors, Toppings, and Shapes for Every Craving and Occasion.",
        url: "https://images.unsplash.com/photo-1631397833242-fc6213046352?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80"
      },
      {
        title: "Donut 5",
        description: "Our Donut Collection Offers a Mouthwatering Array of Flavors, Toppings, and Shapes for Every Craving and Occasion.",
        url: "https://images.unsplash.com/photo-1533137138-ba67dc90d752?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80"
      },
    ]

  },
  {
    path: "du-an-abc2",
    title: "rmtDev",
    description:
      "Job board for remote developer jobs. I was the front-end developer. It has features like filtering, sorting and pagination.",
    tags: ["Dự án", "Sketchup", "Đồ họa", "Giải thưởng", "abc"],
    imageUrl: rmtdevImg,
    slider: [
      {
        title: "Donut 1",
        description: "Our Donut Collection Offers a Mouthwatering Array of Flavors, Toppings, and Shapes for Every Craving and Occasion.",
        url: "https://images.unsplash.com/photo-1612240498936-65f5101365d2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80"
      },
      {
        title: "Donut 2",
        description: "Our Donut Collection Offers a Mouthwatering Array of Flavors, Toppings, and Shapes for Every Craving and Occasion.",
        url: "https://images.unsplash.com/photo-1551024601-bec78aea704b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=764&q=80"
      },
      {
        title: "Donut 3",
        description: "Our Donut Collection Offers a Mouthwatering Array of Flavors, Toppings, and Shapes for Every Craving and Occasion.",
        url: "https://images.unsplash.com/photo-1646615077267-97c6088b74d9?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=415&q=80"
      },

      {
        title: "Donut 4",
        description: "Our Donut Collection Offers a Mouthwatering Array of Flavors, Toppings, and Shapes for Every Craving and Occasion.",
        url: "https://images.unsplash.com/photo-1631397833242-fc6213046352?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80"
      },
      {
        title: "Donut 5",
        description: "Our Donut Collection Offers a Mouthwatering Array of Flavors, Toppings, and Shapes for Every Craving and Occasion.",
        url: "https://images.unsplash.com/photo-1533137138-ba67dc90d752?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80"
      },
    ]
  },
  {
    path: "du-an-abc3",
    title: "Word Analytics",
    description:
      "A public web app for quick analytics on text. It shows word count, character count and social media post limits.",
    tags: ["Dự án", "Sketchup", "Đồ họa", "Giải thưởng", "abc"],
    imageUrl: wordanalyticsImg,
    slider: [
      {
        title: "Donut 1",
        description: "Our Donut Collection Offers a Mouthwatering Array of Flavors, Toppings, and Shapes for Every Craving and Occasion.",
        url: "https://images.unsplash.com/photo-1612240498936-65f5101365d2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80"
      },
      {
        title: "Donut 2",
        description: "Our Donut Collection Offers a Mouthwatering Array of Flavors, Toppings, and Shapes for Every Craving and Occasion.",
        url: "https://images.unsplash.com/photo-1551024601-bec78aea704b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=764&q=80"
      },
      {
        title: "Donut 3",
        description: "Our Donut Collection Offers a Mouthwatering Array of Flavors, Toppings, and Shapes for Every Craving and Occasion.",
        url: "https://images.unsplash.com/photo-1646615077267-97c6088b74d9?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=415&q=80"
      },

      {
        title: "Donut 4",
        description: "Our Donut Collection Offers a Mouthwatering Array of Flavors, Toppings, and Shapes for Every Craving and Occasion.",
        url: "https://images.unsplash.com/photo-1631397833242-fc6213046352?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80"
      },
      {
        title: "Donut 5",
        description: "Our Donut Collection Offers a Mouthwatering Array of Flavors, Toppings, and Shapes for Every Craving and Occasion.",
        url: "https://images.unsplash.com/photo-1533137138-ba67dc90d752?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80"
      },
    ]
  },
] as const;

export const skillsData = [
  "SketchUp",
  "Adobe Photoshop",
  "Adobe Illustrator",
  "Lumion",
  "Vray",

] as const;
