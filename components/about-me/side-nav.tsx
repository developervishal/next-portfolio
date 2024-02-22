import { personalLink } from '@/constants/constant'
import { ChevronDown } from 'lucide-react'
import Link from 'next/link'
import React from 'react'

function SideNav() {
    return (
        <div className='w-56  border-border border-r h-full text-primary-foreground text-sm'
        >
            <div className='flex items-center text-sm px-5 b border-[#1e2d3d] border-b py-2 gap-1 text-[#ffffff]'><ChevronDown size={18} /><p>personal-info</p></div>
            {personalLink.map((link) => {
                return (
                    <Link
                        className='px-5 text-sm my-2 flex items-center gap-2 hover:text-[#ffffff]'
                        key={`nav-${link.name}`}
                        href={link.to}>
                        <p>{link.value}</p>
                    </Link>
                )
            })}
            <div className='flex items-center text-sm px-5 b border-[#1e2d3d] border-y py-2 mt-5 gap-1 text-[#ffffff]'><ChevronDown size={18} /><p> work-experience</p></div>
            <Link
                className='text-primary-foreground px-5 text-sm my-2 flex items-center gap-2 hover:text-[#ffffff]'
                key={`nav-resume`}
                href='/resume'>
                <p>resume</p>
            </Link>
        </div>
    )
}

export default SideNav