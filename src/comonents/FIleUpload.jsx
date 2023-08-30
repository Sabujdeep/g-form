import React, { useState } from 'react'
import './Fileupload.css'

const FileUpload = ({upfile, register}) => {
    const [file, setFile] = useState()
    const handleFile = (event) => {
        setFile(event.target.files[0])      
        upfile(file)
    }
    return (
        <div className='layout p-[1.5rem]'>
            <div className='flex'>
                <p>File upload</p>
                <p className='text-red-600'>*</p>
            </div>
            <div className='flex flex-col gap-[1rem] p-[1rem] w-[30%]'>
                <label class="label">
                    <input type="file" required name='file' onChange={handleFile}/>
                    <span>Add file</span>
                </label>
            </div>
        </div>
    )
}

export default FileUpload
