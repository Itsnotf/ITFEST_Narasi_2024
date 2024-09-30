import React, { useState, useEffect, useRef } from 'react';
import { FaArrowRight } from "react-icons/fa6";

const CircleFollow = (props) => {
    const [position, setPosition] = useState({ x: 0, y: 0 });
    const [targetPosition, setTargetPosition] = useState({ x: 0, y: 0 });
    const [hover, setHover] = useState(false);
    const animationRef = useRef(null);

    // Fungsi untuk menangkap posisi mouse dan mengatur target position
    const handleMouseMove = (e) => {
        const rect = e.currentTarget.getBoundingClientRect();
        let x = e.clientX - rect.left - 15; // Pusat lingkaran
        let y = e.clientY - rect.top - 15;

        // Membatasi lingkaran agar tidak keluar dari div
        const maxX = rect.width - 30; // Lebar div dikurangi lebar lingkaran
        const maxY = rect.height - 30; // Tinggi div dikurangi tinggi lingkaran

        if (x < 0) x = 0;
        if (y < 0) y = 0;
        if (x > maxX) x = maxX;
        if (y > maxY) y = maxY;

        setTargetPosition({ x, y });
    };

    // Fungsi untuk memuluskan gerakan lingkaran menggunakan lerping
    const smoothMove = () => {
        setPosition((prevPos) => ({
            x: prevPos.x + (targetPosition.x - prevPos.x) * 0.1, // Interpolasi posisi X
            y: prevPos.y + (targetPosition.y - prevPos.y) * 0.1, // Interpolasi posisi Y
        }));
        animationRef.current = requestAnimationFrame(smoothMove); // Memanggil ulang animasi
    };

    useEffect(() => {
        // Memulai animasi ketika komponen di-mount
        animationRef.current = requestAnimationFrame(smoothMove);

        return () => {
            cancelAnimationFrame(animationRef.current); // Membersihkan animasi ketika komponen di-unmount
        };
    }, [targetPosition]);

    const handleMouseEnter = () => setHover(true);
    const handleMouseLeave = () => setHover(false);

    return (
        <div
            className={`relative w-full`}
            onMouseMove={handleMouseMove}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            style={{ height: props.h, position: 'relative', overflow: 'hidden' }}
        >
            {/* Elemen lingkaran */}
            <div
                className='circle'
                style={{
                    left: `${position.x}px`,
                    top: `${position.y}px`,
                    position: 'absolute',
                    width: '100px',
                    height: '100px',
                    borderRadius: '50%',
                    backgroundColor: '#0262D7',
                    transform: hover ? 'none' : 'translate(-50%, -50%)',
                }}
            ></div>

            {/* Background dengan efek blur */}
            <div className='h-full bg-[#6E6E6E]/10  rounded-[20px] border-[0.5px] border-white/20 w-full backdrop-blur-[100px]'>
                <div className='mx-10 my-5 flex flex-col justify-start items-start gap-[20px]'>
                    <h1 className='text-white font-jost text-2xl'>{props.header}</h1>
                    <p className='text-[#97999A] text-lg font-jost'>{props.desk}</p>
                    <div className='mt-5 '>
                        <button className="text-lg flex items-center gap-2 text-white font-jost  group">
                            <p>Jelajahi Sekarang </p>
                            <FaArrowRight className='text-white translate-y-[1px] group-hover:translate-x-2 transition-all ' />
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CircleFollow;
