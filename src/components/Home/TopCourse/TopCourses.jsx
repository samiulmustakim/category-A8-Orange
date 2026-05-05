import { allCourses } from "@/lib/data";
import TopCoursesClient from "./TopCoursesClient";

export default async function TopCourses() {
  const courses = await allCourses();

  const topCourses = [...courses]
    .sort((a, b) => b.rating - a.rating)
    .slice(0, 3);

  return <TopCoursesClient courses={topCourses} />;
}