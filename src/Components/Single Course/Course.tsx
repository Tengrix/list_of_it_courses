import {useState} from "react";
import {courseType} from "../../redux/App-reducer";
import {useForm} from "react-hook-form";

type CourseType = {
    course: courseType;
    changeOldCourse: (course: courseType, id: number) => void;
}

const Course = ({course, changeOldCourse}: CourseType) => {
    const {register, handleSubmit,formState: {errors}} = useForm();

    const [edit, setEdit] = useState<boolean>(false)
    const saveHandler = () => {
        setEdit(false)
    }
    const editHandler = () => {
        setEdit(!edit)
    }
    const onSubmit = (data: any) => {
        changeOldCourse(data,course.id)
        saveHandler()

    };
    return (
        <div className={'course'}>
            <form onSubmit={handleSubmit(onSubmit)}>

                <div>
                    <div><b>Description:</b> {edit ?
                        <div>
                            <textarea {...register('description')} placeholder={'Describe course...'}/>
                        </div> : course.description}
                    </div>
                    <div>
                        <b>Price:</b>
                        {edit ?
                            <input {...register("price")} placeholder="Price"/> :
                            course.price}
                    </div>
                    <div>
                        <b>Beginning Date:</b>
                        {edit ?
                            <input {...register('dateOfBeginning')} placeholder={'Date'}/> : course.dateOfBeginning}
                    </div>
                </div>
                {edit && <input type="submit"/>}
            </form>
            <button onClick={editHandler}>edit</button>

        </div>

)
}
export default Course;