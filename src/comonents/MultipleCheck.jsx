import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import { multipleCheck } from '../redux/FormSlice'
import { multipleCheck1 } from '../redux/RequiredSlice'

const MultipleCheck = () => {
    const dispatch = useDispatch()
    const [value, setValue] = useState({
        R1checkbox1: false,
        R1checkbox2: false,
        R1checkbox3: false,
        R2checkbox1: false,
        R2checkbox2: false,
        R2checkbox3: false,
        R3checkbox1: false,
        R3checkbox2: false,
        R3checkbox3: false
    })

    const handleChange = (event) => {
        const {name, checked} = event.target
        setValue((prev)=>({
            ...prev,
            [name]: checked
        }))
        
    }
    
    useEffect(()=>{
        // console.log(value)
        dispatch(multipleCheck(value))
        if(value.R1checkbox1 || value.R1checkbox2 || value.R1checkbox3 
            || value.R2checkbox1 || value.R2checkbox2 || value.R2checkbox3 ||
             value.R3checkbox1 || value.R3checkbox2 || value.R3checkbox3 === true){
                dispatch(multipleCheck1(true))
             } else {
                dispatch(multipleCheck1(false))
             }
    }, [value])

    const isChecked = () => {
        
        if(value.R1checkbox1 || value.R1checkbox2 || value.R1checkbox3 
            || value.R2checkbox1 || value.R2checkbox2 || value.R2checkbox3 ||
             value.R3checkbox1 || value.R3checkbox2 || value.R3checkbox3){
                console.log("select at least one checkbox from each row")
             } else if 
             ((value.R1checkbox1 || value.R1checkbox2 || value.R1checkbox3 )
                && (value.R2checkbox1 || value.R2checkbox2 || value.R2checkbox3)
                && (value.R3checkbox1 || value.R3checkbox2 || value.R3checkbox3)
             )
             {
                console.log("donekjk")
             }
    } 
    isChecked()

    return (
        <div className='layout p-[1.5rem]'>
            <div className='flex mb-[2rem]'>
                <p>Tick Box Grid</p>
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
                    <div className='col'><input type='checkbox' name='R1checkbox1' checked={value.R1checkbox1} onChange={handleChange}/></div>
                    <div className='col'><input type='checkbox' name='R1checkbox2' checked={value.R1checkbox2} onChange={handleChange}/></div>
                    <div className='col'><input type='checkbox' name='R1checkbox3' checked={value.R1checkbox3} onChange={handleChange}/></div>
                    
                </div>
                <div className='row'>
                    <div className='col'>Row 2</div>
                    <div className='col'><input type='checkbox' name='R2checkbox1' checked={value.R2checkbox1} onChange={handleChange}/></div>
                    <div className='col'><input type='checkbox' name='R2checkbox2' checked={value.R2checkbox2} onChange={handleChange}/></div>
                    <div className='col'><input type='checkbox' name='R2checkbox3' checked={value.R2checkbox3} onChange={handleChange}/></div>
                    
                </div>
                <div className='row'>
                    <div className='col'>Row 3</div>
                    <div className='col'><input type='checkbox' name='R3checkbox1' checked={value.R3checkbox1} onChange={handleChange}/></div>
                    <div className='col'><input type='checkbox' name='R3checkbox2' checked={value.R3checkbox2} onChange={handleChange}/></div>
                    <div className='col'><input type='checkbox' name='R3checkbox3' checked={value.R3checkbox3} onChange={handleChange}/></div>
                    
                </div>
            </div>



        </div>
    )
}

export default MultipleCheck
