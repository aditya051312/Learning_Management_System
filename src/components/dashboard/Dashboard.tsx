import React from "react";
import CourseList from "../courses/CourseList";
import { courses } from "../../utils/courses";
import CourseCard from "../courses/CourseCard";
import { useNavigate } from "react-router-dom";

const Dashboard = () => {
    const courseArray = courses;
    const navigate = useNavigate();
    
    const navigateToCourseDetails = (id: any) => {
      navigate("/courses-details/"+(id+1));
    }

    return(
        <section>
            <div className="w-full flex flex-row">
                <div className="w-4/12 p-3">
                    <div className="p-4 bg-white rounded-lg">
                        <h2 className="font-bold text-primary text-[40px]">08</h2>
                        <p>Total Courses</p>
                    </div>
                </div>
                <div className="w-4/12 p-3">
                    <div className="p-4 bg-white rounded-lg">
                        <h2 className="font-bold text-primary text-[40px]">08</h2>
                        <p>Total Active Courses</p>
                    </div>
                </div>
                <div className="w-4/12 p-3">
                    <div className="p-4 bg-white rounded-lg">
                        <h2 className="font-bold text-primary text-[40px]">140</h2>
                        <p>Total Users</p>
                    </div>
                </div>
            </div>
            <section>
                <div className="w-full flex flex-row justify-between pt-3 px-3">
                    <h2 className="font-semibold text-lg">Course</h2>
                    <p className="font-medium text-primary cursor-pointer" onClick={() => navigate("/courses")}>View All</p>
                </div>
                <div className="w-full flex flex-row flex-wrap">
                    {courseArray?.map((course: any, index: any) => (
                        (index < 4) && (
                            <div className="w-3/12 p-3" key={index}>
                                <CourseCard cardDetails={course} onClick={() => navigateToCourseDetails(index)}/>
                            </div>
                        )
                    ))}
                </div>
            </section>
        </section>
    )
}

export default Dashboard;