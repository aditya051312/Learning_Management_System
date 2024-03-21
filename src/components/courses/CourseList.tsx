import React from "react";
import CourseBanner from "../../assets/images/DSA_u75h7q.png"
import { courses } from "../../utils/courses";
import { useNavigate } from "react-router-dom";
import CourseCard from "./CourseCard";

const CourseList = () => {
  const courseArray = courses;
  const navigate = useNavigate();
    
  const navigateToCourseDetails = (id: any) => {
    navigate("/courses-details/"+(id+1));
  }

    return(
        <>
            <div>
                <h2 className='font-semibold'>Course</h2>
                <div className='text-gray-400 text-sm'>Course {'>'} Course list</div>
            </div>
            <div className="w-full flex flex-row flex-wrap">
                {courseArray?.map((course: any, index: any) => (
                    <div className="w-3/12 p-3" key={index}>
                        <CourseCard cardDetails={course} onClick={() => navigateToCourseDetails(index)}/>
                    </div>
                ))}
            </div>
        </>
    )
}

export default CourseList;