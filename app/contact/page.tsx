import React from 'react'

function Page() {
    return (
        <div className='flex justify-center h-full w-full p-2 md:p-0'>
            <div className='mt-10 w-96'>
                <div className='flex flex-col gap-1 mb-2'>
                    <label className='font-mono text-md text-primary-foreground'>_name</label>
                    <input className="bg-[#011221] border py-1 border-border rounded text-primary-foreground" type='text' />
                </div>
                <div className='flex flex-col gap-2 mb-2'>
                    <label className='font-mono text-md text-primary-foreground'>_email</label>
                    <input className="bg-[#011221] border py-1 border-border rounded text-primary-foreground" type='text' />
                </div>
                <div className='flex flex-col gap-2 mb-2'>
                    <label className='font-mono text-md text-primary-foreground'>_message</label>
                    <textarea className="bg-[#011221] border py-1 border-border rounded text-primary-foreground h-32" />
                </div>
                <button className='mt-3 w-full font-mono bg-secondary py-2 px-1 rounded-md text-[#ffffff] text-sm tracking-wider'>submit-message</button>
            </div>
        </div>
    )
}

export default Page