import { skills } from '@/constants/constant'
import React from 'react'

function Page() {
    return (
        <div className='mb-2 py-2 mt-5 px-5'>
            {skills.map((skill) => {
                return (<>
                    <p className='text-primary-foreground text-sm my-5'>/** {skill.displayName} **/</p>
                    <div className='flex gap-2 flex-nowrap'>
                        {skill.techStack.map((tech, index) => {
                            return (
                                <div key={index} className='text-primary-foreground border border-border p-2 text-sm rounded-lg hover:bg-border transition-colors focus:outline-none focus:ring-2 focus:ring-secondary hover:text-foreground'>
                                    {tech.displayName}
                                </div>
                            )
                        })
                        }
                    </div>
                </>
                )
            })}
        </div>
    )
}

export default Page