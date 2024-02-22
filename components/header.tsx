'use client'
import React from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import clsx from 'clsx'
const headerLinks = [
    {
        name: 'introduction',
        displayName: '_hello',
        to: '/',
    },
    {
        name: 'aboutMe',
        displayName: '_about-me',
        to: '/about-me/bio',
    },
    {
        name: 'projects',
        displayName: '_projects',
        to: '/projects',
    },
]

function Header() {
    const pathName = usePathname()
    console.log(pathName)
    return (
        <header className='h-11 border-b  border-border flex  justify-between'>
            <div className='flex text-sm text-primary-foreground '>
                <Link
                    href="/"
                    className='border-r border-border flex items-center w-56 px-3'>
                    vishal-shrivastava
                </Link>
                {headerLinks.map(link => (
                    <Link
                        key={link.name}
                        className={clsx(
                            'text-primary-foreground border-r h-full border-border px-4 flex items-center hover:bg-border hover:text-[#ffffff] text-sm transition-all',
                            { 'border-b-warning border-b-2': pathName === link.to }
                        )}
                        href={link.to}>{link.displayName}</Link>
                ))}
            </div>
            <div className='flex items-center text-sm'>
                <Link
                    className={clsx(
                        'border-l h-full border-border flex items-center text-primary-foreground px-2 hover:bg-border',
                        { 'border-b-warning border-b-2': pathName === '/contact'}
                    )}
                    href="/contact"
                >_contact-me</Link>
            </div>
        </header >
    )
}

export default Header