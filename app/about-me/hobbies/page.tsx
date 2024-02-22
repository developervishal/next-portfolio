import { hobbies } from '@/constants/constant'
import React from 'react'

function Page() {
    return (
        <div className='mb-2 py-2 mt-5 px-5'>
            <ol className='text-primary-foreground tracking-wide text-sm mb-3 list-decimal ml-5'>
                <li>/**</li>
                {hobbies.map((item, index) => (<li key={index}>* {item}</li>))}
                <li>**/</li>
            </ol>
        </div>
    )
}

export default Page