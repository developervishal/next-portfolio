'use client'
import React from 'react'
import Link from 'next/link'
const headerLinks = [
    {
        name: 'introduction',
        displayName: '_hello',
        to: '/',
    },
    {
        name: 'aboutMe',
        displayName: '_about-me',
        to: '/about-me',
    },
    {
        name: 'projects',
        displayName: '_projects',
        to: '/projects',
    },
]

function Header() {
    return (
        <header className='h-11 border-b  border-border flex  justify-between'>
            <div className='flex text-sm text-primary-foreground '>
                <Link
                    href=""
                    className=' border-r border-border flex items-center w-56 px-3'>
                    vishal-shrivastava
                </Link>
                {headerLinks.map(link => (
                    <Link
                        key={link.name}
                        className=' border-border border-r px-4 flex items-center hover:bg-border'
                        href={link.to}>{link.displayName}</Link>
                ))}
            </div>
            <div className='flex items-center text-sm'>
                <Link
                    className='border-l h-full border-border flex items-center text-primary-foreground px-2 hover:bg-border'
                    href="contact"
                >_contact-me</Link>
            </div>
        </header>
    )
}

export default Header