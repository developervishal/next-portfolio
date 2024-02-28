import { FacebookIcon, Github, Instagram, Twitter } from 'lucide-react'
import React from 'react'

function Footer() {
    return (
        <footer className='flex flex-none h-9 border-border border-t text-primary-foreground text-sm w-full'>
            <p
                className='border-r h-full border-[#1e2d3d] px-3 flex items-center flex-1 md:flex-none'>
                find me in:
            </p>
            <div className='flex flex-1 md:justify-between'>
            <div className='flex '>
                <a href="https://www.facebook.com/vishal.shrivastav.374" target='_blank' className='border-r h-full border-border px-4 flex items-center hover:bg-border'><FacebookIcon size={18} /></a>
                <a href="https://www.instagram.com/vishaalovercome" target='_blank' className='border-r h-full border-border px-4 flex items-center hover:bg-border'><Instagram size={18} /></a>
                <a href="https://twitter.com/s96viky" target='_blank' className='border-r h-full border-border px-4 flex items-center hover:bg-border'><Twitter size={18} /></a>
            </div>
            <a href="https://github.com/developervishal" target='_blank' className='border-l gap-2 h-full border-border px-4 flex items-center hover:bg-border'>
                <p className='hidden md:block'>@s96vishal</p>
                <Github size={18} />
            </a>
            </div>
        </footer>
    )
}

export default Footer