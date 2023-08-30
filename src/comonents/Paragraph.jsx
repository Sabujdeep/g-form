import React, { useEffect, useState } from 'react'
import { para } from '../redux/FormSlice'
import { useDispatch, useSelector } from 'react-redux'
import { para1 } from '../redux/RequiredSlice'

const divCol = document.querySelector(".para")
const Paragraph = () => {
  const dispatch = useDispatch()
  const [value, setValue] = useState("")
  const require = useSelector((state) => state.required)


  const handleChange = (e) => {
    setValue(e.target.value)
    if(e.target.value.length === 0){
      divCol.classList.add("empty")
      dispatch(para1(false))
    } else {
      divCol.classList.remove("empty")
      dispatch(para1(true))
    }
  }
  useEffect(()=>{
    // console.log(value)
    dispatch(para(value))
}, [value])

  return (
    <div className='layout p-[1.5rem]'>
      <div className='flex'>
                <p>ParaGraph</p>
                <p className='text-red-600'>*</p>
            </div>
            <div className='flex flex-col gap-[1rem] p-[1rem]'>
                <input type='text' name='paragraph' className='texts' onChange={handleChange} placeholder='Your answer'/>
                <div className='para'></div>
            </div>
    </div>
  )
}

export default Paragraph
