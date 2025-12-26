import { FacebookIcon, Github, Instagram, Twitter } from 'lucide-react'
import React from 'react'

function Footer() {
    return (
        <footer className='flex flex-none h-9 border-border border-t text-primary-foreground text-sm w-full flex-shrink-0'>
            <p
                className='border-r h-full border-[#1e2d3d] px-3 flex items-center flex-1 md:flex-none'>
                find me in:
            </p>
            <div className='flex flex-1 md:justify-between'>
            <div className='flex '>
                <a href="https://www.facebook.com/vishal.shrivastav.374" target='_blank' rel='noopener noreferrer' className='border-r h-full border-border px-4 flex items-center hover:bg-border focus:outline-none focus:ring-2 focus:ring-secondary' aria-label='Visit Facebook profile'><FacebookIcon size={18} /></a>
                <a href="https://www.instagram.com/vishaalovercome" target='_blank' rel='noopener noreferrer' className='border-r h-full border-border px-4 flex items-center hover:bg-border focus:outline-none focus:ring-2 focus:ring-secondary' aria-label='Visit Instagram profile'><Instagram size={18} /></a>
                <a href="https://twitter.com/s96viky" target='_blank' rel='noopener noreferrer' className='border-r h-full border-border px-4 flex items-center hover:bg-border focus:outline-none focus:ring-2 focus:ring-secondary' aria-label='Visit Twitter profile'><Twitter size={18} /></a>
            </div>
            <a href="https://github.com/developervishal" target='_blank' rel='noopener noreferrer' className='border-l gap-2 h-full border-border px-4 flex items-center hover:bg-border focus:outline-none focus:ring-2 focus:ring-secondary' aria-label='Visit GitHub profile'>
                <p className='hidden md:block'>@s96vishal</p>
                <Github size={18} />
            </a>
            </div>
        </footer>
    )
}

export default Footer