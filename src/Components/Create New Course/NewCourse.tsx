import {useState} from "react";
import CourseForm from "../CourseForm/CourseForm";
import {DataType} from "../../types/Types";


type NewCourseType = {
    addCourse: (name: string, price: number, date: string, description: string, pic: string) => void
    uploadPic: (title: string, pageNumber: number, per_page: number) => void;
    find: boolean;
    totalCountOfImg: number;
    listOfImg: DataType[];
    getPic: (id: string) => void;
    pic?: string
}


const NewCourse = ({addCourse, uploadPic, find, totalCountOfImg, listOfImg, getPic, pic}: NewCourseType) => {
    const [currentPage, setCurrentPage] = useState<number>(1)
    const per_page = 6
    const onPageChanged = (title: string, pageNumber: number, per_page: number) => {
        setCurrentPage(pageNumber)
        uploadPic(title, pageNumber, per_page)
    }

    return (
        <div className={'newCourse'}>
           <CourseForm
               find={find}
               currentPage={currentPage}
               uploadPic={uploadPic}
               per_page={per_page}
               pic={pic}
               addCourse={addCourse}
               listOfImg={listOfImg}
               getPic={getPic}
               totalCountOfImg={totalCountOfImg}
               onPageChanged={onPageChanged}
           />
        </div>
    )
}
export default NewCourse;