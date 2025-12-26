import React from 'react'

function Page() {
    return (
        <div className='flex justify-center h-full w-full p-2 md:p-0'>
            <div className='mt-10 w-96'>
                <div className='flex flex-col gap-1 mb-2'>
                    <label className='font-mono text-md text-primary-foreground'>_name</label>
                    <input className="bg-[#011221] border py-2 px-1 border-border rounded text-foreground placeholder-primary-foreground" type='text' placeholder='Enter your name' />
                </div>
                <div className='flex flex-col gap-2 mb-2'>
                    <label className='font-mono text-md text-primary-foreground'>_email</label>
                    <input className="bg-[#011221] border py-2 px-1 border-border rounded text-foreground placeholder-primary-foreground" type='email' placeholder='Enter your email' />
                </div>
                <div className='flex flex-col gap-2 mb-2'>
                    <label className='font-mono text-md text-primary-foreground'>_message</label>
                    <textarea className="bg-[#011221] border py-2 px-1 border-border rounded text-foreground placeholder-primary-foreground h-32" placeholder='Enter your message' />
                </div>
                <button className='mt-3 w-full font-mono bg-secondary hover:bg-opacity-90 py-2 px-1 rounded-md text-[#ffffff] text-sm tracking-wider transition-all focus:outline-none focus:ring-2 focus:ring-secondary focus:ring-offset-2'>submit-message</button>
            </div>
        </div>
    )
}

export default Page