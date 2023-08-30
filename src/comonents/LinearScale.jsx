import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { linearScale } from '../redux/FormSlice'
import { linearScale1 } from '../redux/RequiredSlice'

const LinearScale = () => {
    const dispatch = useDispatch()
    const [value, setValue] = useState(0)
    const require = useSelector((state) => state.required)


    const handleChange = (event) => {
        setValue(event.target.value)
        dispatch(linearScale1(true))
    }
    
    useEffect(()=>{
        // console.log(value)
        dispatch(linearScale(value))
    }, [value])

    return (
        <div className='layout p-[1.5rem]'>
            <div className='flex'>
                <p>Linear Scale</p>
                <p className='text-red-600'>*</p>
            </div>
            <div className='flex p-[1rem] items-end w-full gap-16'>
                <p>Worst</p>
                <div className='gap-[1rem] flex flex-col'>
                    <label htmlFor="option1">1</label>
                    <input type='radio' id='option1' name='linear' value={1} onChange={handleChange}/>
                </div>
                <div className='gap-[1rem] flex flex-col'>
                    <label htmlFor="option2">2</label>
                    <input type='radio' id='option2' name='linear' value={2} onChange={handleChange}/>
                </div>
                <div className='gap-[1rem] flex flex-col'>
                    <label htmlFor="option3">3</label>
                    <input type='radio' id='option3' name='linear' value={3} onChange={handleChange}/>
                </div>
                <div className='gap-[1rem] flex flex-col'>
                    <label htmlFor="option3">4</label>
                    <input type='radio' id='option3' name='linear' value={4} onChange={handleChange}/>
                </div>
                <div className='gap-[1rem] flex flex-col'>
                    <label htmlFor="option3">5</label>
                    <input type='radio' id='option3' name='linear' value={5} onChange={handleChange}/>
                </div>
                <p>Best</p>
            </div>



        </div>
    )
}

export default LinearScale
