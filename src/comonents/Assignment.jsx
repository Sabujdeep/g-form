import React from 'react'
import { BsCloudCheck } from 'react-icons/bs'

const Assignment = () => {
    return (
        <div className='layout'>
            <div className='top-color'></div>
            <div className='p-[1rem]'>
            <h2 className='text-[2rem]'>Assignment Task</h2>
            </div>
            <hr />
            <div className='flex flex-col gap-[1rem] p-[1rem]'>
                <div className='flex justify-between items-center'>
                    <div className='flex items-center gap-1'>
                        <p className='font-bold text-sm text-gray-500'>sabujdeeptudu123@gmail.com</p>
                        <a className='text-blue-500 text-sm' href='#'>Switch Account</a>
                    </div>
                    <BsCloudCheck className=' text-xl' />
                </div>
                <p className='text-gray-700 text-sm'>The name and photo associated with your Google account will be recorded when you upload files and submit this form. Your email is not part of your response.
                </p>
            </div>
            <hr />
            <div className='flex p-3'> <p className='text-red-600 text-sm'>* Indicates required question</p></div>
        </div>
    )
}

export default Assignment
