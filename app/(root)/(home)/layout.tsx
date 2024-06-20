
import Navbar from '@/components/Navbar'
import Sidebar from '@/components/Sidebar'
import React, { ReactNode } from 'react'

const HomeLayout = ({children}:{children:ReactNode}) => {
  return (
    <main className='relative'>
      <Navbar/>
      <div className='flex'>
        <Sidebar/>
        <section className='flex min-h-screen flex-1 flex-col px-6 pb-6 pt-28 max-md:pb-14 sm:px-14'>
        <div className='w-full'>{children}</div>
        </section>
        <div className='fixed bottom-0 right-0 pr-5 pb-2'>
          <p className='text-white'>&#169; Ishan Sharma</p>
          </div>
        

        </div>
    </main>
  )
}

export default HomeLayout