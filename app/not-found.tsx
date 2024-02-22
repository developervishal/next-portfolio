import { Bird } from 'lucide-react'
import React from 'react'

function NotFound() {
  return (
    <section className='flex-1 flex items-center justify-center h-full'>
      <div className='text-primary-foreground text-2xl text-center'>
        <Bird size={96} strokeWidth={1} className='m-auto hover:scale-x-[-1]' />
        <code>
          {
            `<Page Not Found>`
          }
        </code>
        <p className='text-center text-sm'>

        </p>
      </div>

    </section>
  )
}

export default NotFound