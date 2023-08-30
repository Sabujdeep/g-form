import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { mcq } from '../redux/FormSlice'
import { mcq1 } from '../redux/RequiredSlice'

// const border = document.querySelector("#borderrr")

const Mcq = () => {
    const dispatch = useDispatch()
    const [value, setValue] = useState("")
    const require = useSelector((state) => state.required)


    const handleChange = (event) => {
        setValue(event.target.value)
        dispatch(mcq1(!require))
    }
    
    useEffect(()=>{
        // console.log(value)
        dispatch(mcq(value))

    }, [value])

    let border = {}

    if(require.mcq1 === false){
        // border.classList.add("error-border")
        border = {border: '1px solid red'}
    }

    return (
        <div className='layout p-[1.5rem]' style={border} id='borderrr'>
            <div className='flex'>
                <p>MCQ</p>
                <p className='text-red-600'>*</p>
            </div>
            <div className='flex flex-col gap-[1rem] p-[1rem]'>
                <div className='gap-[1rem] flex'>
                    <input type='radio' id='option1' name='mcq' value={"option1"} onChange={handleChange}/>
                    <label htmlFor="option1">Option1</label>
                </div>
                <div className='gap-[1rem] flex'>
                    <input type='radio' id='option2' name='mcq' value={"option2"} onChange={handleChange}/>
                    <label htmlFor="option2">Option2</label>
                </div>
                <div className='gap-[1rem] flex'>
                    <input type='radio' id='option3' name='mcq' value={"option3"} onChange={handleChange}/>
                    <label htmlFor="option3">Option3</label>
                </div>
            </div>



        </div>
    )
}

export default Mcq
