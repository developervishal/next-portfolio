import { FacebookIcon, Github, Instagram, Twitter } from 'lucide-react'
import React from 'react'

function Footer() {
    return (
        <footer className='flex h-9 border-border border-t justify-between px-3'>
            <div className='flex text-primary-foreground text-sm'>
                <p
                    className='border-r h-full border-[#1e2d3d] px-3 flex items-center'>
                    find me in:
                </p>
                <p className='border-r h-full border-border px-4 flex items-center hover:bg-border'><FacebookIcon size={18} /></p>
                <p className='border-r h-full border-border px-4 flex items-center hover:bg-border'><Instagram size={18} /></p>
                <p className='border-r h-full border-border px-4 flex items-center hover:bg-border'><Twitter size={18} /></p>
            </div>
            <div className='flex items-center border-border border-l text-primary-foreground text-sm'>
                <p className='px-3'>@s96vishal</p>
                <Github size={18} />
            </div>
        </footer>
    )
}

export default Footer