import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { shortAns } from '../redux/FormSlice'
import { shortAns1 } from '../redux/RequiredSlice'

const textArea = document.querySelector(".shortAns")

const ShortAnswer = () => {
  const dispatch = useDispatch()
  const [value, setValue] = useState("")
  const require = useSelector((state) => state.required)


  const handleChange = (e) => {
    setValue(e.target.value)
    if(e.target.value.length === 0){
     textArea.classList.add("empty")
     dispatch(shortAns1(false))
    } else {
      textArea.classList.remove("empty")
      dispatch(shortAns1(true))
    }
  }
  useEffect(()=>{
    dispatch(shortAns(value))
}, [value])


  return (
    <div className='layout p-[1.5rem]'>
      <div className='flex'>
                <p>Short Answer</p>
                <p className='text-red-600'>*</p>
            </div>
            <div className='flex flex-col gap-[1rem] p-[1rem]'>
                <input type='text' name='shortAnswer' className='texts' onChange={handleChange} placeholder='Your answer'/>
                <div className='shortAns'></div>
            </div>
    </div>
  )
}

export default ShortAnswer
