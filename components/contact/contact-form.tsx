import React from 'react'

function ContactForm() {
    return (
        <div className='flex  justify-center h-full w-full'>
            <div className='mt-10 w-96'>
                <div className='flex flex-col gap-1 mb-2'>
                    <label className='font-mono text-md text-[#607B96]'>_name</label>
                    <input className="bg-[#011221] border py-1 border-[#1E2D3D] rounded text-[#465E77]" type='text' />
                </div>
                <div className='flex flex-col gap-2 mb-2'>
                    <label className='font-mono text-md text-[#607B96]'>_email</label>
                    <input className="bg-[#011221] border py-1 border-[#1E2D3D] rounded text-[#465E77]" type='text' />
                </div>
                <div className='flex flex-col gap-2 mb-2'>
                    <label className='font-mono text-md text-[#607B96]'>_message</label>
                    <textarea className="bg-[#011221] border py-1 border-[#1E2D3D] rounded text-[#465E77] h-32" />
                </div>
                <button className='mt-3 w-full font-mono bg-[#1C2B3A] py-2 px-1 rounded-md text-[#ffffff] text-sm tracking-wider'>submit-message</button>
            </div>
        </div>
    )
}

export default ContactForm