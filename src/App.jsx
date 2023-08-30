import { useEffect, useState } from 'react'
import './App.css'
import Assignment from './comonents/Assignment'
import Mcq from './comonents/Mcq'
import CheckBox from './comonents/CheckBox'
import ShortAnswer from './comonents/ShortAnswer'
import Paragraph from './comonents/Paragraph'
import DropDown from './comonents/DropDown'
import FileUpload from './comonents/FIleUpload'
import LinearScale from './comonents/LinearScale'
import MultipleChoice from './comonents/MultipleChoice'
import MultipleCheck from './comonents/MultipleCheck'
import { useSelector } from 'react-redux'

function App() {
  const mcqValue = useSelector((state) => state.form)
  const require = useSelector((state) => state.required)
  const [upFile, setUpFile] = useState()
  const [border, setBorder] = useState(require)
  
  const handleSubmit = (e) => {
    e.preventDefault();
  }

  return (
    <form onSubmit={handleSubmit} className='flex flex-col gap-4'>
      <Assignment/>
      <Mcq border={border}/>
      <CheckBox/>
      <ShortAnswer/>
      <Paragraph/>
      <DropDown/>
      <FileUpload upfile={setUpFile}/>
      <LinearScale/>
      <MultipleChoice/>
      <MultipleCheck/>
      <button type='submit' className='mr-auto bg-indigo-700 text-white rounded h-9 w-24 hover:bg-indigo-800'>Submit</button>
    </form>
  )
}

export default App
 