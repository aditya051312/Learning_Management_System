import React from "react";

const CourseCard = ({cardDetails, onClick}: any) => {
    return(
        <div onClick={() => onClick()} className="w-full cursor-pointer bg-white transition duration-150 ease-in hover:ring-slate-200 ring-2 rounded-xl ring-2 ring-slate-100 p-3">
            <div className="rounded-xl overflow-hidden h-[150px] ring-1 ring-slate-200">
                <img className="object-cover object-center w-full h-full" src={cardDetails?.image} alt="Attendance Tracker System" />
            </div>
            <div className="py-3 px-2">
                <h2 className="font-semibold text-md h-[56px]">{cardDetails?.name}</h2>
                <div>
                    <p>{cardDetails?.lessons} Lessons</p>
                    <div className="font-medium">
                        $ {cardDetails?.price} <span className="ms-2 line-through text-slate-500">$ {cardDetails?.actualPrice}</span>
                    </div>
                </div>
            </div>
        </div>
    )
};

export default CourseCard;