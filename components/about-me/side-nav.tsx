'use client'
import { personalLink, workLink } from '@/constants/constant'
import clsx from 'clsx'
import { ChevronDown, File, FileCode2, Folder, FolderClosedIcon } from 'lucide-react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import React from 'react'

function SideNav() {
    const pathName = usePathname()
    console.log(pathName)
    return (
        <div className='w-56 flex-none border-border border-r h-full text-primary-foreground text-sm'
        >
            <div className='flex items-center text-sm px-5 b border-[#1e2d3d] border-b py-2 gap-1 text-primary-foreground'><ChevronDown size={18} /><p>personal-info</p></div>
            <Link
                href="/about-me/bio"

                className={clsx('px-5 text-sm my-2 flex items-center gap-2 hover:text-[#ffffff]', { 'text-[#ffffff]': pathName === '/about-me/bio' })}>
                <FolderClosedIcon size={16} fill="#45d9ac" strokeWidth={0} /> <p>bio</p>
            </Link>
            <Link
                href="/about-me/education/bachelor"

                className={clsx('px-5 text-sm my-2 flex items-center gap-2 hover:text-[#ffffff]', { 'text-[#ffffff]': pathName === '/about-me/education/bachelor' })}>
                <FolderClosedIcon size={16} fill="#fea35d" strokeWidth={0} /> <p>education</p>
            </Link>
            {personalLink.map((link) => {
                return (
                    <Link
                        className={clsx('px-5 text-sm my-2 flex items-center gap-2 hover:text-[#ffffff]', { 'text-[#ffffff]': pathName === link.to })}
                        key={`nav-${link.name}`}
                        href={link.to}>
                        <FileCode2 size={16} />
                        <p>{link.value}</p>
                    </Link>
                )
            })}
            <Link
                href="/about-me/hobbies"

                className={clsx('px-5 text-sm my-2 flex items-center gap-2 hover:text-[#ffffff]', { 'text-[#ffffff]': pathName === '/about-me/hobbies' })}>
                <FolderClosedIcon size={16} fill="#4b5ace" strokeWidth={0} /><p>hobbies</p>
            </Link>
            <div className='flex items-center text-sm px-5 b border-[#1e2d3d] border-y py-2 mt-5 gap-1 text-primary-foreground'><ChevronDown size={18} /><p> work-experience</p></div>
            {workLink.map((link) => {
                return (
                    <Link
                        className={clsx('px-5 text-sm my-2 flex items-center gap-2 hover:text-[#ffffff]', { 'text-[#ffffff]': pathName === link.to })}
                        key={`nav-${link.name}`}
                        href={link.to}>
                        <FileCode2 size={16} />
                        <p>{link.value}</p>
                    </Link>
                )
            })
            }
            <Link
                className={clsx('px-5 text-sm my-2 flex items-center gap-2 hover:text-[#ffffff]', { 'text-primary-foreground': pathName === '/about-me/resume' })}
                key={`nav-resume`}
                href='/about-me/resume'>
                <FileCode2 size={16} />
                <p>resume</p>
            </Link>
        </div>
    )
}

export default SideNav