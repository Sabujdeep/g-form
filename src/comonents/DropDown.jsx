import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { dropDown } from '../redux/FormSlice'
import { dropDown1 } from '../redux/RequiredSlice'

const DropDown = () => {
  const dispatch = useDispatch()
  const [value, setValue] = useState("")
  const require = useSelector((state) => state.required)


  const handleChange = (e) => {
    setValue(e.target.value)
    
    if(e.target.value){
      if(e.target.value === "Select"){
        dispatch(dropDown1(false))
      } else {
        dispatch(dropDown1(true))
      }
    } else {
      dispatch(dropDown1(false))
    }
  }
  useEffect(()=>{
    // console.log(value)
    dispatch(dropDown(value))
}, [value])

  return (
    <div className='layout p-[1.5rem]'>
      <div className='flex'>
                <p>Drop down</p>
                <p className='text-red-600'>*</p>
            </div>
            <div className='flex flex-col gap-[1rem] p-[1rem] w-[30%]'>
                <select onChange={handleChange} name="dropdown" id="dropdown" className='rounded h-[2rem] w-[10rem] p-2'>
                    <option value={"Select"} >Select</option>
                    <option value={"option1"}>Option 1</option>
                    <option value={"option2"}>Option 2</option>
                    <option value={"option3"}>Option 3</option>
                </select>
            </div>
    </div>
  )
}

export default DropDown
