import { educationDetails } from '@/constants/constant'
import { notFound } from 'next/navigation'
import React from 'react'

function Page({ params }: { params: { id: string } }) {
    const id = params.id
    const educationData = educationDetails.find((ed) => ed.name === id)
    if (!educationData) {
        notFound()
    }

    return (
        <div className='mb-2 py-2 mt-5 px-5'>
            <ol className='text-primary-foreground tracking-wide text-sm mb-3 list-decimal ml-5'>
                <li>/**</li>
                {educationData?.values.map((item, index) => (<li key={index}>* {item}</li>))}
                <li>**/</li>
            </ol>
        </div>
    )
}

export default Page