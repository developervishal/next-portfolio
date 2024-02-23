'use client'
import React, { useEffect, useRef } from 'react'
import hljs from 'highlight.js/lib/core';
import javascript from 'highlight.js/lib/languages/javascript';
import 'highlight.js/styles/base16/equilibrium-dark.css'
import { MessageCircleMore, Star } from 'lucide-react';
import Image from 'next/image';

hljs.registerLanguage('javascript', javascript);

function CodeSnippet({ snippet }: { snippet: string }) {
    const codeRef = useRef(null);
    useEffect(() => {
        if (codeRef.current) {
            hljs.highlightBlock(codeRef.current);
        }
    }, [snippet]);

    return (
        <div className='mb-2 py-2 mt-5'>
            <div className='flex justify-between items-center px-2'>
                <div className='flex gap-2 items-center'>
                    <Image
                        alt='avatar'
                        width={24}
                        height={24}
                        style={{objectFit: "contain"}}  
                        className='rounded-full'
                        src="/profile.jpeg" />
                    <div className='text-primary-foreground text-xs'>
                        <p className='text-secondary font-bold'>@s96vishal</p>
                        <p>Created 1 month ago</p>
                    </div>
                </div>
                <div className='text-primary-foreground text-xs flex flex-row items-center gap-2'>
                    <p className='flex flex-row items-center gap-1'><MessageCircleMore size={16} /><span>details</span></p>
                    <p className='flex flex-row items-center gap-1'><Star size={16} /><span>stars</span></p>
                </div>
            </div>
            <pre className='text-primary-foreground text-xs rouded-lg max-h-68 overflow-hidden mt-5 rounded-lg bg-background' >
                <code className='language-javascript' ref={codeRef}>
                    {snippet}
                </code>
            </pre>
        </div>
    )
}

export default CodeSnippet



