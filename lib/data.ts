import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaReact, FaStar } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";
import corpcommentImg from "@/public/nhatnguyet/1.png";
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
    path: "nhatnguyet",
    title: "Nhật Nguyệt",
    description:
      "Nhật Nguyệt - Sản phẩm đạt giải tại cuộc thi Nghệ thuật công cộng Hà Nội năm 2022 do Sở Văn Hóa và Thể Thao Hà Nội và Hội Kiến Trúc Sư tổ chức.",
    tags: ["Dự án", "Sketchup", "Đồ họa", "Giải thưởng", "Lumion"],
    imageUrl: corpcommentImg,
    slider: [
      {
        title: "Nhật Nguyệt",
        description: "",
        url: "/nhatnguyet/1.png"
      },
      {
        title: "",
        description: "",
        url: "/nhatnguyet/2.png"
      },
      {
        title: "",
        description: "",
        url: "/nhatnguyet/3.png"
      },
      {
        title: "",
        description: "",
        url: "/nhatnguyet/4.png"
      },
      {
        title: "",
        description: "",
        url: "/nhatnguyet/5.png"
      },
      {
        title: "",
        description: "",
        url: "/nhatnguyet/7.png"
      },
    ]

  }

] as const;

export const skillsData = [
  "SketchUp",
  "Adobe Photoshop",
  "Adobe Illustrator",
  "Lumion",
  "Vray",

] as const;
