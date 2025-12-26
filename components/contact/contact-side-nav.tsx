import { contactInfo, socialLink } from '@/constants/constant'
import { ChevronDown } from 'lucide-react'
import React from 'react'

function ContactSideNav() {
    return (
        <div className='w-56  border-border border-r h-full'>
            <div className='flex items-center text-sm px-5 b border-border border-b py-2 gap-1 text-primary-foreground'>
                <ChevronDown size={18} />
                contacts
            </div>
            {contactInfo.map((value, index) => <p key={index} className='text-primary-foreground px-5 text-sm my-2'>{value}</p>)}
            <div className='flex items-center text-sm px-5 b border-border border-y py-2 gap-1 text-primary-foreground'>
                <ChevronDown size={18} />
                find-me-also-in
            </div>
            <div className='text-primary-foreground text-sm '>
                {socialLink.map((link, index) => (
                    <a
                        key={index}
                        href={link.href}
                        target="_blank"
                        className='px-5 my-2 hover:text-foreground block'>{link.name}</a>
                ))}
            </div>
        </div>
    )
}

export default ContactSideNav