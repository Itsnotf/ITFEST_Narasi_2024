'use client'
import Nav from '@/components/Navbar'
import React from 'react'
import { IoMdPeople } from "react-icons/io";


export default function Komunitas() {
  return (
    <>
      <div className='z-50 fixed top-5 w-full  flex md:justify-center md:items-center mx-[30px] md:mx-0'>
        {/* <Nav isScrolled={0} /> */}
      </div>
      <section className='h-screen relative my-10 mx-10 '>
        {/* <div className='absolute bg-black/50 mx-10 z-10 w-full rounded-3xl h-full'></div> */}
        <div className='bg-heroz relative flex justify-end items-end bg-cover rounded-3xl bg-center mx-10 h-[90%] '>
          <div className='absolute bottom-[50%] z-20 flex flex-col items-end right-[40%] font-jost text-white'>
            <span className='text-8xl'>CERITA</span>
            <span className='text-2xl'>Dan Inspirasi</span>
          </div>
          <button className="px-10 z-20 py-2 m-10 font-jost font-normal rounded-[10px] text-[16px] md:text-[20px] bg-[#0095FF]">
            Mari Bercerita
          </button>
        </div>
      </section>

      <section className='w-full h-screen mx-20'>
        <div className=' font-jost text-white'>
          <h1 className='text-4xl'>Bercerita, Baca sepraktis mungkin</h1>
          <p className='text-xl text-[#97999A]'>Melalui cerita yang ringkas dan bacaan yang mudah, kami menghadirkan pengalaman membaca yang praktis dan menyenangkan.</p>
        </div>

        <div className='flex gap-20 my-10'>
          <div className='w-[400px] h-[400px] bg-[#6E6E6E]/10  rounded-[20px] border-[0.5px] border-white/20  backdrop-blur-[100px]'>
            <div className='flex flex-col gap-5 m-10 text-white font-jost '>
              <div className='w-12 h-12 bg-[#C4FB6D]/30 rounded-xl'>

              </div>
              <h1 className='text-3xl'>Networking</h1>
              <p>Bertemu dengan sesama kreator dan podcaster yang bisa menjadi teman kolaborasi atau tempat berbagi ide.
              </p>
            </div>
          </div>

          <div className='w-[400px] h-[400px] bg-[#6E6E6E]/10  rounded-[20px] border-[0.5px] border-white/20  backdrop-blur-[100px]'>
            <div className='flex flex-col gap-5 m-10 text-white font-jost '>
              <div className='w-12 h-12 bg-[#C4FB6D]/30 rounded-xl'>

              </div>
              <h1 className='text-3xl'>Inspirasi</h1>
              <p>Mendapatkan inspirasi dari cerita dan konten kreator lain yang bisa memperkaya ide dan format podcast kamu.
              </p>
            </div>
          </div>

          <div className='w-[400px] h-[400px] bg-[#6E6E6E]/10  rounded-[20px] border-[0.5px] border-white/20  backdrop-blur-[100px]'>
            <div className='flex flex-col gap-5 m-10 text-white font-jost '>
              <div className='w-12 h-12 bg-[#C4FB6D]/30 rounded-xl'>

              </div>
              <h1 className='text-3xl'>Dukungan</h1>
              <p>Mendapatkan dukungan dari komunitas yang bisa menjadi motivasi untuk terus konsisten dan berkembang.</p>
            </div>
          </div>
        </div>
      </section>

      <section className='w-full h-screen mx-20'>
        <div className=' font-jost text-white'>
          <h1 className='text-4xl'>Serangkaian Kegiatan Komunitas</h1>
          <p className='text-xl text-[#97999A]'>Serangkaian kegiatan komunitas mencakup berbagai aktivitas yang mempererat hubungan antar anggota dan memberikan dampak positif bagi lingkungan sekitar.</p>
        </div>

        <div className='flex gap-20 my-10'>
          <div className='flex flex-col gap-2 font-jost'>
            <div className='w-[400px] h-[350px] bg-img1 bg-cover relative bg-center rounded-3xl'>
              <div className='bg-black/50 w-full h-full'></div>
            </div>
            <h1 className='text-white text-xl'>Bakti Sosial: Begerak Untuk Sekitar</h1>
            <div className='w-full relative h-[5px] bg-white rounded-full'>
              <div className='absolute w-[70%] bg-[#C4FB6D] h-full rounded-full '></div>
            </div>
            <div className='flex justify-between'>
              <div className='flex text-white gap-2 items-center'>
                <IoMdPeople className='text-3xl' />
                <p>64+</p>
              </div>
              <p className='text-white'>September, 11 2023</p>
            </div>
          </div>
          <div className='flex flex-col gap-2 font-jost'>
            <div className='w-[400px] h-[350px] bg-img2 bg-cover relative bg-center rounded-3xl'>
              <div className='bg-black/50 w-full h-full'></div>
            </div>
            <h1 className='text-white text-xl'>Bakti Sosial: Workshop atau Pelatihan</h1>
            <div className='w-full relative h-[5px] bg-white rounded-full'>
              <div className='absolute w-[70%] bg-[#C4FB6D] h-full rounded-full '></div>
            </div>
            <div className='flex justify-between'>
              <div className='flex text-white gap-2 items-center'>
                <IoMdPeople className='text-3xl' />
                <p>64+</p>
              </div>
              <p className='text-white'>September, 11 2023</p>
            </div>
          </div>
          <div className='flex flex-col gap-2 font-jost'>
            <div className='w-[400px] h-[350px] bg-img3 bg-cover relative bg-center rounded-3xl'>
              <div className='bg-black/50 w-full h-full'></div>
            </div>
            <h1 className='text-white text-xl'>Internal: Meetup atau Gathering</h1>
            <div className='w-full relative h-[5px] bg-white rounded-full'>
              <div className='absolute w-[70%] bg-[#C4FB6D] h-full rounded-full '></div>
            </div>
            <div className='flex justify-between'>
              <div className='flex text-white gap-2 items-center'>
                <IoMdPeople className='text-3xl' />
                <p>64+</p>
              </div>
              <p className='text-white'>September, 11 2023</p>
            </div>
          </div>

         
        </div>
      </section>


    </>
  )
}
