import Navber from "@/shared/Navber";
import Banner from "@/shared/Banner";
import Image from "next/image";
import TopCourses from "@/components/Home/TopCourse/TopCourses";
import LearningTips from "@/components/Home/LearningTips";
import TopInstructors from "@/components/Home/TopInstructors";

export default function Home() {
  return (
    <div>
      <Banner></Banner>
      <TopCourses></TopCourses>
      <LearningTips></LearningTips>
      <TopInstructors></TopInstructors>
    </div>
  );
}
