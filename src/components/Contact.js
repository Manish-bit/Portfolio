import React from 'react'

const Contact = () => {
  return (
    <div className='w-full min-h-screen bg-[#0a192f] flex justify-center items-center p-4' name="contact">
        <form method="POST" action='https://getform.io/f/c9c5ac7f-cbd8-474e-a4ec-01414cb52aab' className=' flex flex-col max-w-[600px] w-full'>
            <div className='pb-8'>
                <p className='text-4xl font-bold inline border-b-4 border-pink-600 text-gray-300'>Contact</p>
                <p className='text-gray-300 py-4'>Submit the form below or shoot me an email-manisharyal517@gmail.com</p>
            </div>
            <input type="text" className='bg-[#ccd6f6] p-2' placeholder='name' name='name'/>
            <input type='email' className='bg-[#ccd6f6] my-2 p-2' placeholder='Email' name='email'/>
            <textarea className='bg-[#ccd6f6] p-2' name='message' rows='10' placeholder="Message"></textarea>
            <button className='text-white border-2 hover:bg-pink-600 hover:border-pink-600 px-4 py-3 my-8 mx-auto flex items-center'>
             Let's Collaborate   
            </button>
        </form>
        
    </div>
  )
}

export default Contact