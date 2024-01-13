"use client";

import React from "react";
import SectionHeading from "./section-heading";
import { motion } from "framer-motion";
import { useSectionInView } from "@/lib/hooks";

export default function About() {
  const { ref } = useSectionInView("Về tôi");

  return (
    <motion.section
      ref={ref}
      className="mb-28 max-w-[45rem] text-center leading-8 sm:mb-40 scroll-mt-28"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.175 }}
      id="about"
    >
      <SectionHeading>Về Tôi</SectionHeading>
      <p className="mb-3">
        Tôi là một nhà thiết kế sáng tạo với kinh nghiệm đa dạng trong lĩnh vực thiết kế 2D và 3D,
        sử dụng các phần mềm chính <span className="font-medium">SketchUp, Lumion, Adobe Illustrator, Photoshop</span>.
        Với kinh nghiệm thực tế trong việc thiết kế các sự kiện như hội nghị và tiệc cưới,
        Tôi đã chứng minh khả năng tổ chức và quản lý sự kiện một cách chuyên nghiệp .
      </p>
      <p>
        Nổi bật với thành tích xuất sắc trong lĩnh vực thiết kế nghệ thuật,
        Yến đã giành được <span className="font-medium">giải thưởng thiết kế nghệ thuật sắp đặt</span> hạng ba năm 2022
        và tiếp tục vươn lên với thành tích xuất sắc hạng ba thiết kế công trình công cộng vào năm 2024.
        Điều này là minh chứng cho sự đam mê và tâm huyết của tôi trong sự nghiệp.
      </p>
      <p>
        Với GPA trung bình <span className="font-medium">3.7/4</span> và thành tích học tập ấn tượng,
        tôi đã đạt được học bổng 100% suốt ba năm học đại học,
        là minh chứng cho khả năng học thuật vững về và cam kết cao với sự nghiệp của mình.

      </p>
      <p>
        Tôi có sở thích với các nhạc cụ âm nhạc và hiện tại đang nghiên cứu về ngành gốm ở Việt Nam
      </p>
      <p>
        <span className="italic">(Có thể xem thêm chi tiết ở phần dự án)</span>
      </p>
    </motion.section>
  );
}
