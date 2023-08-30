import React,{useState, useEffect} from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { checkbox } from '../redux/FormSlice'
import { checkbox1 } from '../redux/RequiredSlice'

const CheckBox = () => {
    const dispatch = useDispatch()
    const require = useSelector((state) => state.required)
    const [value, setValue] = useState({
        checkbox1: false,
        checkbox2: false,
        checkbox3: false,
    })

    const handleChange = (event) => {
        const {name, checked} = event.target
        setValue(prev => ({
            ...prev,
            [name]: checked
        }))
        
    }
    console.log(require.checkbox1)
    
    useEffect(()=>{
        dispatch(checkbox(value))
        if(value.checkbox1 || value.checkbox2 || value.checkbox3 === true){
            dispatch(checkbox1(true))
        } else {
            dispatch(checkbox1(false))
    
        }
    }, [value])

  return (
    <div className='layout p-[1.5rem]'>
       <div className='flex'>
                <p>Checkbox</p>
                <p className='text-red-600'>*</p>
            </div>
            <div className='flex flex-col gap-[1rem] p-[1rem]'>
                <div className='gap-[1rem] flex'>
                    <input type='checkbox' id='option1' name='checkbox1' checked={value.checkbox1} onChange={handleChange}/>
                    <label htmlFor="option1">Option1</label>
                </div>
                <div className='gap-[1rem] flex'>
                    <input type='checkbox' id='option2' name='checkbox2' checked={value.checkbox2} onChange={handleChange}/>
                    <label htmlFor="option2">Option2</label>
                </div>
                <div className='gap-[1rem] flex'>
                    <input type='checkbox' id='option3' name='checkbox3' checked={value.checkbox3} onChange={handleChange}/>
                    <label htmlFor="option3">Option3</label>
                </div>
            </div>
    </div>
  )
}

export default CheckBox
