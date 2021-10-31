import {coursesStateType} from "./App";
import {useParams} from "react-router-dom";
import Course from './Course'

type coursesType = {
    courses: coursesStateType[];
    changePrice:(value:number, id:number)=>void;
    changeDescription:(description:string, id:number)=>void;
    changeDate: (date: string, id: number) => void;
}

const Courses = ({courses,changePrice,changeDescription,changeDate}:coursesType) =>{
    const {courseId} = useParams<{courseId:string}>()
    return(
        <div className={'course'}>
            {courses.map(el=><div key={el.id}>
                {el.id===+courseId &&
                    <Course course={el}
                            changePrice={changePrice}
                            changeDescription={changeDescription}
                            changeDate={changeDate}
                    />}
            </div>)}
        </div>
    )
}
export default Courses;