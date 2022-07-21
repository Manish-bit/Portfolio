import React from 'react'

const About = () => {
  return (
    <div className='w-full h-screen bg-[#0a192f] text-gray-300' name="about">
        <div className='flex flex-col justify-center items-center w-full h-full'>
            <div className='max-w-[1000px] w-full px-4 grid grid-cols-2 gap-8'>
                <div className='sm:text-right pb-8 pl-4'>
                    <p className='text-4xl font-bold inline border-b-4 border-pink-600'>About</p>
                </div>
                <div>
                </div>
                </div>
            <div className='max-w-[1000px] w-full grid sm:grid-cols-2 gap-8 px-4 '>
                <div className='sm:text-right text-4xl font-bold'>
                    <p>Hi, I'm Manish,nice to meet you.Please take a look around</p>
                </div>
                <div>
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis voluptates explicabo impedit id adipisci repellendus sunt vero necessitatibus veritatis aliquid voluptatibus magnam pariatur dolorem, dignissimos alias quidem ad minima esse ut asperiores inventore unde. Eaque asperiores rerum, iusto possimus voluptas quam, nobis cupiditate commodi tempore, sint ut neque quo ab.
                    </p>
                </div>
            </div>
            <div>
            </div>
        </div>
    </div>
  )
}

export default About