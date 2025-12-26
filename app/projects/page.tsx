'use client'
import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { ExternalLink } from 'lucide-react'

interface Project {
  id: string
  name: string
  description: string
  image: string
  url: string
  tech: string[]
}

const projects: Project[] = [
  {
    id: 'url-shortener',
    name: 'URL Shortener',
    description: 'Lightning fast URL shortening service. Transform long, complex URLs into short, memorable links. Track performance, generate QR codes, and boost your digital presence.',
    image: '/shortly.png',
    url: 'https://url-shortner-seven-sage.vercel.app/',
    tech: ['Next.js', 'TypeScript', 'Tailwind CSS']
  },
  {
    id: 'genius-ai',
    name: 'Genius AI SaaS',
    description: 'A comprehensive AI-powered SaaS platform that leverages cutting-edge artificial intelligence to provide intelligent solutions. Generate content, code, and more with state-of-the-art AI capabilities.',
    image: '/genuis-ai.png',
    url: 'https://genius-ai-saas-gamma.vercel.app/',
    tech: ['Next.js', 'TypeScript', 'Tailwind CSS', 'API Integration']
  },
  {
    id: 'tic-tac-toe',
    name: 'Tic-Tac-Toe',
    description: 'Tic Tac Toe Game built for fun',
    image: '/tic-tac-toe.png',
    url: 'https://tic-tac-toe-chi-self-25.vercel.app/',
    tech: ['Next.js', 'TypeScript', 'Tailwind CSS']
  }
]

function Page() {
  return (
    <div className='h-full w-full p-5 overflow-y-auto'>
      <div className='text-foreground mb-10'>
        <h1 className='text-3xl font-mono mb-2 text-secondary font-bold'>_projects</h1>
        <p className='text-sm text-primary-foreground'>A collection of my recent work and side projects</p>
      </div>
      
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6' role='list'>
        {projects.map((project) => (
          <article 
            key={project.id} 
            className='border border-border rounded-lg overflow-hidden bg-primary hover:border-secondary transition-all duration-300 hover:shadow-lg flex flex-col h-full'
            role='listitem'
          >
            <div className='flex flex-col h-full'>
              {/* Image Section */}
              <div className='w-full relative h-56 flex-shrink-0 border-b border-border overflow-hidden bg-background'>
                <Image
                  src={project.image}
                  alt={`${project.name} - ${project.description.substring(0, 50)}...`}
                  fill
                  className='object-cover hover:scale-105 transition-transform duration-300'
                  priority
                  loading='eager'
                />
              </div>
              
              {/* Content Section */}
              <div className='w-full p-5 flex flex-col flex-grow'>
                <div className='flex-grow'>
                  <div className='flex items-start justify-between mb-2'>
                    <h2 className='text-lg font-mono text-secondary font-bold truncate' title={project.name}>{project.name}</h2>
                  </div>
                  <p className='text-xs text-primary-foreground mb-3 leading-relaxed line-clamp-2' title={project.description}>
                    {project.description}
                  </p>
                  
                  {/* Tech Stack */}
                  <div className='mb-4'>
                    <p className='text-xs text-primary-foreground mb-2 font-mono uppercase tracking-wider'>_tech-stack</p>
                    <div className='flex flex-wrap gap-2' role='list'>
                      {project.tech.map((tech) => (
                        <span 
                          key={tech} 
                          className='px-3 py-1.5 bg-background border border-border hover:border-secondary rounded text-xs text-foreground font-mono transition-colors'
                          role='listitem'
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
                
                {/* Button */}
                <div className='w-full mt-4'>
                  <Link 
                    href={project.url}
                    target='_blank'
                    rel='noopener noreferrer'
                    className='w-full inline-flex items-center justify-center gap-2 bg-secondary text-[#fff] hover:bg-opacity-90 font-mono py-2.5 px-6 rounded-md text-sm transition-all duration-300 hover:gap-3 border border-secondary hover:border-secondary focus:outline-none focus:ring-2 focus:ring-secondary focus:ring-offset-2'
                    aria-label={`Visit ${project.name} project`}
                  >
                    <span>visit-project</span>
                    <ExternalLink size={16} aria-hidden='true' />
                  </Link>
                </div>
              </div>
            </div>
          </article>
        ))}
      </div>
    </div>
  )
}

export default Page