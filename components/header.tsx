'use client'
import React from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import clsx from 'clsx'
import { Menu } from 'lucide-react'
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
        <header className='h-11 border-b border-border flex text-primary-foreground'>
            <div className='w-full flex items-center justify-between md:border-r border-border md:w-56 gap-2 px-2'>
                <Menu className='md:hidden' />
                <Link
                    href="/"
                    className='md:px-4 text-sm order-[-1]'>
                    vishal-shrivastava
                </Link>
            </div>
            <div className='md:flex hidden justify-between flex-grow'>
                <div className='flex'>
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
                <Link
                    className={clsx(
                        'border-l h-full border-border flex items-center text-primary-foreground px-2 hover:bg-border',
                        { 'border-b-warning border-b-2': pathName === '/contact' }
                    )}
                    href="/contact"
                >_contact-me</Link>
            </div>
        </header >
    )
}

export default Header