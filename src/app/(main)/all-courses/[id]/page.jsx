import CourseClient from "@/components/Details/CourseClient";
import { allCourses } from "@/lib/data";

export default async function CourseDetails({ params }) {
  const {id} = await params
  const courses = await allCourses();
  console.log(courses)

  const course = courses.find(
    (c) => String(c.id) === String(id)
  );
  console.log(course)
  console.log("PARAMS:", params);
console.log("PARAM ID:", params.id);

  if (!course) {
    return (
      <h1 className="text-center py-20 text-red-500 text-2xl">
        Course not found
      </h1>
    );
  }

  return <CourseClient course={course} />;
}