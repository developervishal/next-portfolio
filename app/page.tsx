import Image from "next/image";

export default function Home() {
  return (
    <section className='flex flex-1 items-center justify-center gap-10 h-full'>
      < div >
        <h1 className='text-[#E5E9F0] text - [18px] font - mono text - lg'>Hi all, I am</h1>
        <h1 className='text-[#E5E9F0] text-[62px] font-mono' > Vishal Shrivastava</h1 >
        <h1 className='text-[#4D5BCE] text-[32px] font-mono'>MERN Stack Developer</h1>
        <br />
        <br />
        <p className='text-[#607B96] text-sm mb-2'>// complete the game to continue</p>
        <p className='text-[#607B96] text-sm mb-2'>// you can also see on my github page</p>
        <p className='text-[#607B96] text-sm'><span className='text-[#4D5BCE]'>const</span> <span className='text-[#43D9AD]'>githubLink</span> = <a className='text-[#E99287]' href='https://github.com/developervishal' target='_blank'>&quot;https://github.com/s96vishal&quot;</a></p>
      </ div>
    </section >
  );
}
