"use client";

import React, { useState, useRef } from 'react';
import Link from 'next/link';

const Toolbar = () => {
    const [isDropdownVisible, setDropdownVisible] = useState(false);
    const timeoutRef = useRef(null);

    const showDropdown = () => {
        clearTimeout(timeoutRef.current);
        setDropdownVisible(true);
    };

    const hideDropdown = () => {
        timeoutRef.current = setTimeout(() => {
            setDropdownVisible(false);
        }, 200); // Adjust the delay as needed
    };

    return (
        <div className='fixed top-0 left-0 w-full bg-gray-800 text-white py-2 z-50'>
            <div className="container flex items-center justify-between">
                <div className="logo">
                    <Link href="/">
                        <img className='object-fill h-5 w-16 sm:h-6 sm:w-20 lg:h-7 lg:w-24 xl:w-40 xl:h-10' src="/assets/images/logo.png" alt="Logo" />
                    </Link>
                </div>
                <div className="flex-1 flex justify-around items-center">
                    <Link href="/" className='px-4 hover:text-gray-400'>News</Link>
                    <div 
                        className='relative group'
                        onMouseEnter={showDropdown}
                        onMouseLeave={hideDropdown}
                    >
                        <button className='px-4 hover:text-gray-400'>
                            Services
                        </button>
                        <div className={`absolute left-0 mt-2 w-48 bg-gray-800 shadow-lg ${isDropdownVisible ? 'block' : 'hidden'}`}>
                            <Link href="/services/ai-tool-consultation" className='block px-4 py-2 hover:bg-gray-700 hover:text-gray-300'>AI Tool Consultation</Link>
                            <Link href="/services/workflow-generation" className='block px-4 py-2 hover:bg-gray-700 hover:text-gray-300'>Workflow Generation</Link>
                            <Link href="/services/enterprise-ai-training" className='block px-4 py-2 hover:bg-gray-700 hover:text-gray-300'>Enterprise AI Training</Link>
                            <Link href="/services/enterprise-ai-solutions" className='block px-4 py-2 hover:bg-gray-700 hover:text-gray-300'>Enterprise AI Solutions</Link>
                            <Link href="/services/ai-strategy-development" className='block px-4 py-2 hover:bg-gray-700 hover:text-gray-300'>AI Strategy Development</Link>
                        </div>
                    </div>
                    <Link href="/about" className='px-4 hover:text-gray-400'>About</Link>
                    <Link href="/use-cases" className='px-4 hover:text-gray-400'>Portfolio</Link>
                    {/* <Link href="/blog" className='px-4 hover:text-gray-400'>Blog</Link>
                    <Link href="/downloads" className='px-4 hover:text-gray-400'>Downloads</Link> */}
                </div>
            </div>
        </div>
    );
};

export default Toolbar; 