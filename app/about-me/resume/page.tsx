import React from 'react'


function Page() {
    return (
        <div className='h-full flex items-center justify-center'>
            <a href='/vishal_resume.pdf' target="_blank" rel='noopener noreferrer' className='text-primary-foreground hover:text-foreground p-2 hover:bg-border rounded-lg border border-border transition-colors focus:outline-none focus:ring-2 focus:ring-secondary' aria-label='Download resume'>Click Here to Download Resume</a>
        </div>
    )
}

export default Page