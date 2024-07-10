import CoursesDetail from "@/components/courses-detail";
import HeaderCourses from "@/components/header-courses";

export default function Courses() {
  return (
    <main className='flex min-h-screen flex-col items-center'>
      <HeaderCourses />
      <CoursesDetail />
    </main>
  );
}
