'use client';
import React, { useState, useEffect, useRef } from 'react';
import Lenis from 'lenis';
import CircleFollow from '@/components/StoryCard';
import Hantu1 from '../../public/Vec.svg'
import Hantu2 from '../../public/Vec2.svg'
import Hantu3 from '../../public/Vec3.svg'
import disc from '../../public/disc.png'
import Image from 'next/image';
import { FaMaxcdn } from 'react-icons/fa6';
import Navbar from '@/components/Navbar';
import Nav from '@/components/Navbar';

export default function Page() {
    const [scrollY, setScrollY] = useState(0);
    const [isScrolled, setIsScrolled] = useState(false);
    const [isBelow3078, setIsBelow3078] = useState(false);
    const backgrounds = ['bg-hero1', 'bg-hero2', 'bg-hero3'];
    const [background, setBackground] = useState(backgrounds[0]);
    const [autoTop, setAutoTop] = useState(0);
    const auto = useRef();
    const scrollHeight = 300;
    const handleScroll = () => {
        setScrollY(window.scrollY);
    };

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    useEffect(() => {
        const interval = setInterval(() => {
            setBackground((prevBackground) => {
                const currentIndex = backgrounds.indexOf(prevBackground);
                const nextIndex = (currentIndex + 1) % backgrounds.length;
                return backgrounds[nextIndex];
            });
        }, 10000);
        return () => clearInterval(interval);
    }, []);

    // Infinite scroll effect
    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                const entry = entries[0];
                if (entry.isIntersecting) {
                    const interval = setInterval(() => {
                        setAutoTop((prevAutoTop) => {
                            if (prevAutoTop >= scrollHeight) {
                                return 0; // Reset ke posisi awal ketika mencapai batas
                            }
                            return prevAutoTop + 0.1;
                        });
                    }, 16); // 16ms interval for smoother animation (~60FPS)

                    return () => clearInterval(interval);
                }
            },
            {
                threshold: 0.2, // Trigger when 10% of the element is visible
            }
        );

        if (auto.current) {
            observer.observe(auto.current);
        }

        return () => {
            if (auto.current) {
                observer.unobserve(auto.current);
            }
        };
    }, []);

    useEffect(() => {
        const lenis = new Lenis({
            duration: 1.2, // Smoothing duration
            easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)), // Easing for smoother scroll
        });

        function raf(time) {
            lenis.raf(time);
            requestAnimationFrame(raf);
        }

        requestAnimationFrame(raf);

        return () => {
            lenis.destroy();
        };
    }, []);

    const handleChangeBg = (image) => {
        setBackground(image);
    };


    useEffect(() => {
        const handleScroll = () => {
            const scrollY = window.scrollY;
    
            if (scrollY > 3 && scrollY < 3090) {
                setIsScrolled(true);
                setIsBelow3078(false); // Reset isBelow3078 when between 3 and 3090
            } else if (scrollY >= 3090) {
                setIsScrolled(false);
                setIsBelow3078(true); 
            } else {
                setIsScrolled(false);
                setIsBelow3078(false); // Reset isBelow3078 when above 3
            }
        };
    
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);
    
    const heightDiv = Math.min(500, scrollY / 1);
    const weightDiv = Math.max(0, scrollY / 1);
    const scalebg = Math.min(6, 1 + scrollY / 200);
    const blackOpacity = scrollY >= 300 ? 1 : 0;
    const blackTranslateY = scrollY >= 300 ? 0 : 100;

    const minScroll = 1600;
    const maxScroll = 2300;
    const minScale = 0.5;
    const maxScale = 2;
    const maxY = 40;
    const minY = 0;

    const scaleHantu2 = scrollY < minScroll
        ? minScale
        : scrollY > maxScroll
            ? maxScale
            : minScale + ((scrollY - minScroll) / (maxScroll - minScroll)) * (maxScale - minScale);

    const THantu = scrollY < minScroll
        ? maxY
        : scrollY > maxScroll
            ? minY
            : maxY - ((scrollY - minScroll) / (maxScroll - minScroll)) * (maxY - minY);

    console.log(scrollY);


    return (
        <>
            <div className='z-50 fixed top-5 w-full  flex md:justify-center md:items-center mx-[30px] md:mx-0'>
                <Nav  isScrolled={isScrolled} isBelow3078={isBelow3078}/>
            </div>
            <div
                className={`h-screen ${background} bg-cover bg-no-repeat transition-all ease-in sticky top-0 overflow-hidden grid grid-cols-12 items-center justify-center`}
                style={{
                    transform: `scale(${scalebg})`,
                    transformOrigin: 'center',
                    willChange: 'transform',
                }}
            >
                <div className="bg-gradient-radial absolute top-0 left-0 w-full h-full z-10"></div>
                <div className="bg-gradient-lenier absolute bottom-0 left-0 w-full h-full z-10"></div>
                <div className="text-white text-center z-20 col-span-12 lg:mx-[200px] md:mx-[100px] sm:mx-[80px] mx-[60px]">
                    <h1
                        className="text-[48px] md:text-[70px] lg:text-[110px] leading-none mb-4 font-jost font-semibold"
                        style={{
                            transform: `scale(${1 / scalebg})`,
                        }}
                    >
                        NARASI BEBAS
                    </h1>
                    <div className="absolute right-5 lg:right-20  flex-col top-[35%] gap-2 z-30 hidden lg:flex">
                        {backgrounds.map((bg, index) => (
                            <button
                                key={index}
                                onClick={() => handleChangeBg(bg)}
                                className={`h-10 w-1 rounded-full ${background === bg ? 'bg-blue-500' : 'bg-gray-600'}`}
                            ></button>
                        ))}
                    </div>
                    <div
                        className="bg-black absolute shadow-inner z-50 shadow-white rounded-full"
                        style={{
                            height: `${4 * heightDiv}px`,
                            width: `${4 * weightDiv}px`,
                            top: '50%',
                            left: '50%',
                            transform: 'translate(-50%, -50%)',
                        }}
                    ></div>

                    <div
                        style={{
                            transform: `translateY(${90 * (scalebg - 1)}px)`,
                        }}
                    >
                        <p className="text-[#97999A] text-base md:text-lg lg:text-xl mb-2 max-w-[90%] md:max-w-[800px] mx-auto font-jost">
                            tempat para kreator berbagi kisah tanpa batas. Dari cerita horor hingga pengalaman hidup, temukan atau bagikan narasi yang menginspirasi. Suaramu, ceritamu, bebas di sini!
                        </p>
                        <div className="font-jost flex flex-col md:flex-row gap-5 md:gap-10 mx-auto justify-center mt-10">
                            <button className="px-5 py-2 font-normal rounded-[10px] text-[16px] md:text-[20px] bg-[#0095FF]">
                                Bergabung Sekarang
                            </button>
                            <button className="px-5 py-2 rounded-[10px] font-normal text-[16px] md:text-[20px] h-[50px] border">
                                Komunitas
                            </button>
                        </div>
                    </div>
                </div>
            </div>

            <div
                className='bg-black h-fit z-50'
                style={{
                    transform: `translateY(${blackTranslateY}px)`,
                    opacity: blackOpacity,
                    transition: 'transform 0.8s ease, opacity 0.8s ease',
                }}
            >
                <div className=' grid grid-cols-12 py-10 relative lg:mx-[0px] md:mx-[100px] sm:mx-[80px] mx-[20px] overflow-hidden' ref={auto}>
                    <div className='bg-gradient-radials absolute top-0 left-0 w-full h-full z-10'></div>
                    <div className='lg:col-span-6 col-span-12 flex gap-2 relative lg:h-screen h-[100px]   -translate-y-96 -rotate-6'>
                        <div className='overflow-y-scroll h-fit flex  flex-col gap-2 w-[50%] '
                            style={{
                                transform: `translateY(${autoTop}px)`,
                                transition: 'transform 0.6s ease-out', // Smoother animation
                                willChange: 'transform',
                            }}
                        >
                            <div className='bg-hero1 bg-cover rounded-md h-[30rem]'></div>
                            <div className='bg-hero2 bg-cover rounded-md h-[20rem]'></div>
                            <div className='bg-hero2 bg-cover rounded-md h-[20rem]'></div>
                            <div className='bg-hero1 bg-cover rounded-md h-[30rem]'></div>
                            <div className='bg-hero2 bg-cover rounded-md h-[20rem]'></div>
                        </div>
                        <div className='overflow-y-scroll flex flex-col h-fit gap-2 w-[50%] '
                            style={{
                                transform: `translateY(${-autoTop}px)`,
                                transition: 'transform 0.6s ease-out', // Smoother animation
                                willChange: 'transform',
                            }}
                        >
                            <div className='bg-hero2 bg-cover rounded-md h-[20rem]'></div>
                            <div className='bg-hero3 bg-cover rounded-md h-[30rem]'></div>
                            <div className='bg-hero1 bg-cover rounded-md h-[10rem]'></div>
                            <div className='bg-hero2 bg-cover rounded-md h-[20rem]'></div>
                            <div className='bg-hero3 bg-cover rounded-md h-[30rem]'></div>
                        </div>
                    </div>

                    <div className='lg:col-start-8 lg:col-span-5 col-span-12 text-white flex justify-center items-center  '>
                        <div className='max-w-[600px] z-30 gap-10 h-screen flex flex-col justify-center'>
                            <h1 className='font-jost font-semibold lg:text-6xl md:text-5xl sm:text-4xl text-3xl bg-clip-text text-transparent bg-gradient-to-r from-[#0095FF]  to-white'>
                                BERKEMBANG BERSAMA KONTEN CREATOR FAVORITE
                            </h1>

                            <p className=' font-jost lg:text-xl sm:text-base text-[#97999A]'>Gabung bersama komunitas kreator konten yang berfokus pada cerita! Baik kamu seorang podcaster, pencerita motivasi, atau pembawa kisah horor, di sini tempatnya berbagi inspirasi, menemukan ide-ide segar, dan berkembang bersama dengan kreator favoritmu.</p>

                            <button className='w-full md:w-fit px-5 py-2 font-jost rounded-[10px] font-normal text-lg bg-[#0095FF]'>
                                Temukan Konten Creator
                            </button>
                        </div>


                    </div>
                </div>

                <div className='bg-black grid grid-cols-12 lg:py-72 md:py-60 sm:py-52 py-20 relative  h-fit lg:mx-[100px] md:mx-[100px] sm:mx-[80px] mx-[20px]'>
                    <div className='col-span-12 flex justify-center  mb-20 text-center h-fit'>
                        <h1 className='lg:text-6xl md:text-5xl sm:text-4xl text-3xl max-w-[40rem]  mb-5 font-jost bg-clip-text text-transparent font-semibold bg-gradient-to-l from-[#0095FF] to-white uppercase'>Temukan Cerita Dengan Cara Baru</h1>
                    </div>
                    <div className='col-span-12 flex flex-col gap-3'>
                        <div className='w-full flex md:flex-row flex-col md:gap-0 gap-5 justify-between'>
                            <div className="relative inline-block overflow-hidden md:w-[64%] w-full">
                                <div className='absolute text-white bottom-[20%]  right-[10%] scale-50 z-30'
                                    style={{
                                        transform: `scale(${scaleHantu2})`,
                                    }}
                                >
                                    <Image src={Hantu1} />
                                </div>
                                <div className='absolute text-white bottom-[52%] right-[50%] scale-150 z-20 translate-y-40'
                                    style={{
                                        transform: `translateY(${THantu}em)`,
                                    }}
                                >
                                    <Image src={Hantu2} />
                                </div>
                                <div className='absolute text-white bottom-[20%] right-[80%] scale-50 z-20'
                                    style={{
                                        transform: `scale(${scaleHantu2 - 0.4})`,
                                    }}
                                >
                                    <Image src={Hantu3} />
                                </div>
                                <CircleFollow
                                    h="600px"
                                    header="Horor"
                                    desk="Temukan cerita menarik yang ditulis dari pengalaman para penulis dan bagikan kisah Anda di sini. Kami menyajikan cerita horor berkualitas baik fiksi maupun realita dengan plot yang menarik dan twist yang tak terduga. Bergabunglah dengan komunitas kami yang aktif dan berbagi pengalaman horor bersama!"
                                />
                            </div>
                            <div className="relative inline-block  w-full md:w-[35%]">
                                <CircleFollow
                                    h='600px'
                                    header="Pengalaman Hidup"
                                    desk="Temukan cerita menarik yang akan membuatmu merasa tidak sendirian mengikuti petualangan literasi tanpa batas. Ini adalah ruang yang aman bagi semua cerita, dari yang paling sederhana hingga yang paling kompleks. Mari Bagikan kisah kalian di sini tanpa perlu khawatir dihakimi. Mari bersama-sama menjelajahi dunia melalui kata-kata."
                                />
                            </div>
                        </div>
                        <div className='w-full flex md:flex-row flex-col md:gap-0 gap-5 justify-between '>
                            <div className="relative inline-block w-full  md:w-[35%]">
                                <CircleFollow
                                    h="400px"
                                    header="Motivasi"
                                    desk="Temukan cerita menarik atau bagikan kisah Anda di NarasiBebas. Dari horor hingga inspirasi, eksplorasi narasi tanpa batasan. Kreativitas Anda, bebas di sini!"
                                />
                            </div>
                            <div className="relative inline-block w-full md:w-[64%]">
                                <CircleFollow
                                    h="400px"
                                    header="Drama"
                                    desk="Temukan cerita menarik atau bagikan kisah Anda di NarasiBebas. Dari horor hingga inspirasi, eksplorasi narasi tanpa batasan. Kreativitas Anda, bebas di sini!"
                                />
                            </div>

                        </div>
                    </div>

                </div>
            </div>

            <div className='w-full relative h-screen'>
                <div className='bg-gradient-radialz absolute top-0 left-0 w-full h-full z-20'></div>
                <div className='bg-gradient-lenier absolute bottom-0 left-0 w-full h-full z-30'></div>
                <div className='grid grid-cols-12  lg:mx-[0px] md:mx-[100px] sm:mx-[80px] mx-[20px]  h-screen'>
                    <div className='md:col-span-5 col-span-12  bg-black h-screen text-white flex flex-col justify-center items-center '>
                        <div className='w-[80%] z-40'>
                            <h1 className='text-[55px] font-jost font-medium leading-tight'>Bagikan Cerita Ceritakan Pengalaman</h1>
                            <p className='text-xl font-jost my-5 text-[#97999A]'>Temukan cerita menarik atau bagikan kisah Anda di NarasiBebas. Dari horor hingga inspirasi, eksplorasi narasi tanpa batasan. Kreativitas Anda, bebas di sini!</p>
                            <div className='font-jost flex gap-10  w-full mt-10'>
                                <button className='px-5 py-2 font-normal  rounded-[10px] text-[20px]  bg-[#0095FF]'>
                                    Bergabung Sekarang
                                </button>
                                <button className='px-5 py-2 rounded-[10px] font-normal text-[20px] h-[50px] border'>
                                    Komunitas
                                </button>
                            </div>
                        </div>
                    </div>
                    <div className='md:col-span-7  col-span-12 z-10 flex justify-center'>
                        <Image src={disc} className='w-[70%] scale-150' />
                    </div>
                </div>
            </div>
        </>
    );
}
