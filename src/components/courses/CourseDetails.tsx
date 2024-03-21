import React, { useEffect, useState } from "react";
import CourseBanner from "../../assets/images/DSA_u75h7q.png"
import { useNavigate, useParams } from "react-router-dom";
import { courses } from "../../utils/courses";

const CourseDetails = () => {
    const [courseDetails, setCourseDetails] = useState<any>();
    const navigate = useNavigate();
    const courseArray: any = courses;
    let params:any = useParams();
    
    useEffect(() => {
        console.log(params.id);
        setCourseDetails(courseArray[params.id - 1]);
        console.log(courseArray[params.id - 1])
    }, [params.id]);


    return(
        <>
            <div className="mb-3">
                <h2 className='font-semibold'>Course</h2>
                <div className='text-gray-400 text-sm'><span className="cursor-pointer" onClick={() => navigate("/courses")}>Course list</span> {'>'} Course Details</div>
            </div>
            <div className="w-full flex flex-row flex-wrap">
                <div className="bg-white w-full p-5 rounded-lg flex flex-row">
                    <div className="min-w-[350px] h-[200px] overflow-hidden rounded-xl me-5 ring-2 ring-gray-100">
                        <img className="object-center object-cover w-full h-[200px]" src={courseDetails?.image} alt="CourseBanner" />
                    </div>
                    <div>
                        <h2 className="font-semibold text-[30px] mb-2 text-black">{courseDetails?.name}</h2>
                        <p className="mb-2 text-gray-600">{courseDetails?.description}</p>
                        <div className="mt-3">
                            <p className="font-semibold">{courseDetails?.lessons} Lessons</p>
                        </div>
                    </div>
                </div>
                <div className="bg-white w-full mt-4 p-5 rounded-lg">
                    <h2 className="font-semibold mb-3">Syllabus</h2>
                    <div>
                        {courseDetails?.topics?.map((topic: any, tindex: any) => (
                            <div className="bg-slate-50 ring-2 ring-slate-100 rounded-md p-3 mb-3" key={tindex}>
                                <p className="font-medium">{tindex < 9? '0'+(tindex + 1):tindex}. {topic?.name}</p>
                                <p className="text-sm ms-5">{topic?.lessons} Lessons</p>
                            </div>
                            )) 
                        }               
                    </div>
                </div>
            </div> 
        </>
    )
}

export default CourseDetails;