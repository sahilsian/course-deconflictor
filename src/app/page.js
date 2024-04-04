'use client'
import Image from "next/image";
import Button from "../../components/Button";
import Header from "../../components/Header";
import Text from "../../components/Text";
import SearchBar from "../../components/SearchBar";
import Navigation from "../../components/Navigation";
import styled from "styled-components";
import CourseItem from "../../components/CourseItem";
import endpoints from "../../constants/endpoints";
import { useQuery } from "@tanstack/react-query";
import { useSearchParams } from 'next/navigation'
import { useEffect } from "react";

async function getRESTCourses() {
  const response = await fetch("/api/courses");
  return response.json();
}
async function getRESTCoursesDeconflicted(search) {
  const response = await fetch(`/api/deconflicted`, {
    body: JSON.stringify({ search }),
    headers: {
      'Content-Type': 'application/json', // specify content type as JSON
    },

  });
  return response.json();
}

export default function Home() {
  const searchParams = useSearchParams()
  const search = searchParams.get('query')

  const { data: courses } = useQuery({
    queryKey: ['courses'],
    queryFn: () => getRESTCourses(),
    cacheTime: 0,
    refetchOnWindowFocus: 'always',
    
  })

  const { data: coursesDeconflcited } = useQuery({
    queryKey: ['courses'],
    queryFn: () => getRESTCoursesDeconflicted(search),
    refetchOnWindowFocus: 'always',
    cacheTime: 0,
    enabled: !!search
  })

  useEffect(()=> {
    console.log("COURSES: ", courses);
    console.log("COURSES DECONFLICTED: ", coursesDeconflcited);
  }, [courses, coursesDeconflcited])

  return (
    <main className=" bg-[#F8F8FB] min-h-[100vh]">
      <Navigation></Navigation>
      <div className=" max-w-[1200px] mx-auto px-7">
        <div className="mb-7">
          <Header text="Find Courses without Conflict"></Header>
          <Text text="Enter all your selected current courses. Course De-Conflicter will find courses without conflicts for you."></Text>
        </div>

        <SearchBar></SearchBar>
        <div className="mt-7 flex flex-col gap-7">
          {
          search?.length > 0 ?
          coursesDeconflcited && coursesDeconflcited?.map((item, key)=> {
            return (
              <CourseItem 
              key={key} 
              credits={item.credits} 
              title={item.courseTitle}
              description={item.description}
              timeslots={item.timeslots}
              showConflict={true}
              CRN={item.crn}
              ></CourseItem>
            )
          })
          :
          courses && courses?.map((item, key)=> {
            return (
              <CourseItem 
              key={key} 
              credits={item.credits} 
              title={item.courseTitle}
              description={item.description}
              timeslots={item.timeslots}
              CRN={item.crn}
              ></CourseItem>
            )
          })
          
          }
        </div>
      </div>
    </main>
  );
}
