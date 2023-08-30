import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import { multipleChoice } from '../redux/FormSlice'
import { multipleChoice1 } from '../redux/RequiredSlice'

const MultipleChoice = () => {
    const dispatch = useDispatch()
    const [value, setValue] = useState({
        row1: "",
        row2: "",
        row3: ""
    })

    const handleChange = (event) => {
        const {name, value} = event.target
        setValue((prev)=>({
            ...prev,
            [name]: value
        }))
        if(event.target.value){
            dispatch(multipleChoice1(true))
        } else {
            dispatch(multipleChoice1(false))

        }
    }
    
    useEffect(()=>{
        // console.log(value)
        dispatch(multipleChoice(value))
    }, [value])

    return (
        <div className='layout p-[1.5rem]'>
            <div className='flex mb-[2rem]'>
                <p>Multiple Choice Grid</p>
                <p className='text-red-600'>*</p>
            </div>
            <div className='table'>
                <div className='row'>
                    <div className='col'></div>
                    <div className='col'>Column 1</div>
                    <div className='col'>Column 2</div>
                    <div className='col'>Column 3</div>
                </div>
                <div className='row'>
                    <div className='col'>Row 1</div>
                    <div className='col'><input type='radio' name='row1' value={"column1"} onChange={handleChange}/></div>
                    <div className='col'><input type='radio' name='row1' value={"column2"} onChange={handleChange}/></div>
                    <div className='col'><input type='radio' name='row1' value={"column3"} onChange={handleChange}/></div>
                    
                </div>
                <div className='row'>
                    <div className='col'>Row 2</div>
                    <div className='col'><input type='radio' name='row2' value={"column1"} onChange={handleChange}/></div>
                    <div className='col'><input type='radio' name='row2' value={"column2"} onChange={handleChange}/></div>
                    <div className='col'><input type='radio' name='row2' value={"column3"} onChange={handleChange}/></div>
                    
                </div>
                <div className='row'>
                    <div className='col'>Row 3</div>
                    <div className='col'><input type='radio' name='row3' value={"column1"} onChange={handleChange}/></div>
                    <div className='col'><input type='radio' name='row3' value={"column2"} onChange={handleChange}/></div>
                    <div className='col'><input type='radio' name='row3' value={"column3"} onChange={handleChange}/></div>
                    
                </div>
            </div>



        </div>
    )
}

export default MultipleChoice
