import CoursesDetail from "@/components/courses-detail";
import HeaderCourses from "@/components/header-courses";
import { useParams } from "next/navigation";

export default function Courses() {
  return (
    <main className='flex min-h-screen flex-col items-center'>
      <HeaderCourses />
      <CoursesDetail />
    </main>
  );
}
