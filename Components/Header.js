'use client';

import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';

const ArrowIcon = () => (
    <svg width="16" height="16" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M1 11L11 1M11 1H3M11 1V9" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
);

const Header = () => {
    const [isOpen, setIsOpen] = useState(false);
    const pathname = usePathname(); // Dynamic URL path detect karne ke liye

    const navItems = [
        { label: 'Home', href: '/' },
        { label: 'About', href: '/about' },
        { label: 'Our Menu', href: '/menu' },
        { label: 'Gallery', href: '/gallery' },
        { label: 'Contact', href: '/contact' },
    ];

    // Check karega ki Current URL aur Tab href match kar rahe hain ya nahi
    const isActive = (href) => {
        if (href === '/') {
            return pathname === '/';
        }
        return pathname.startsWith(href);
    };

    return (
        <header className="bg-[#f8f8f8] text-black relative">
            <nav className="max-w-7xl mx-auto flex items-center justify-between py-4 px-6 md:px-8">
                <div className="flex items-center gap-3">
                    <Link href="/">
                        <div className="w-16 h-16 rounded-full overflow-hidden cursor-pointer">
                            <Image
                                src="/images/res1.JFIF"
                                alt="Logo"
                                width={80}
                                height={80}
                                className="w-full h-full object-cover"
                            />
                        </div>
                    </Link>
                </div>

                {/* Desktop Navigation */}
                <div className="hidden md:flex items-center gap-8 text-lg font-medium">
                    {navItems.map((item) => {
                        const active = isActive(item.href);
                        return (
                            <Link
                                key={item.label}
                                href={item.href}
                                className={`transition-colors duration-300 ${
                                    active 
                                        ? 'text-red-600 font-bold border-b-2 border-red-600 pb-1' 
                                        : 'text-black hover:text-red-600'
                                }`}
                            >
                                {item.label}
                            </Link>
                        );
                    })}
                </div>

                {/* Desktop Button */}
                <div className="hidden md:block">
                    <a
                        href="/contact"
                        className="inline-flex items-center gap-2.5 px-7 py-3 rounded-full bg-[#8B1E1B] text-white font-bold text-md transition-colors duration-300 hover:bg-red-700"
                    >
                        Order Now
                        <ArrowIcon />
                    </a>
                </div>

                {/* Mobile Hamburger Button */}
                <div className="md:hidden flex items-center">
                    <button
                        onClick={() => setIsOpen(true)}
                        className="text-black p-2 focus:outline-none"
                        aria-label="Open menu"
                    >
                        <Menu className="w-8 h-8" />
                    </button>
                </div>
            </nav>

            {/* Mobile Side Drawer Panel */}
            <div
                className={`fixed top-0 left-0 bottom-0 z-50 w-full bg-[#f8f8f8] text-black shadow-2xl transition-transform duration-300 ease-in-out md:hidden flex flex-col px-6 py-6 ${
                    isOpen ? 'translate-x-0' : '-translate-x-full'
                }`}
            >

                {/* Top Bar with Logo & Circular Close Button */}
                <div className="flex items-center justify-between mb-8">
                    <Link href="/">
                        <div className="w-16 h-16 rounded-full overflow-hidden cursor-pointer">
                            <Image
                                src="/images/res1.JFIF"
                                alt="Logo"
                                width={80}
                                height={80}
                                className="w-full h-full object-cover"
                            />
                        </div>
                    </Link>
                    <button
                        onClick={() => setIsOpen(false)}
                        className="w-10 h-10 rounded-full border border-gray-300 flex items-center justify-center text-black hover:bg-gray-200 transition-colors focus:outline-none"
                        aria-label="Close menu"
                    >
                        <X className="w-5 h-5" />
                    </button>
                </div>

                {/* Navigation Items List with Dividers */}
                <div className="flex flex-col w-full">
                    {navItems.map((item) => {
                        const active = isActive(item.href);
                        return (
                            <div
                                key={item.label}
                                className="border-b border-gray-200 py-4 flex items-center justify-between"
                            >
                                <Link
                                    href={item.href}
                                    onClick={() => setIsOpen(false)}
                                    className={`text-lg font-bold tracking-wide transition-colors ${
                                        active ? 'text-red-600' : 'text-black hover:text-red-600'
                                    }`}
                                >
                                    {item.label}
                                </Link>
                            </div>
                        );
                    })}
                </div>

                {/* Mobile Action Button */}
                <div className="mt-8">
                    <a
                        href="#"
                        onClick={() => setIsOpen(false)}
                        className="inline-flex items-center justify-center gap-2.5 w-full px-6 py-3.5 rounded-full bg-[#8B1E1B] text-white font-bold text-lg transition-colors duration-300 hover:bg-red-700"
                    >
                        Order Now
                        <ArrowIcon />
                    </a>
                </div>
            </div>
        </header>
    );
};

export default Header;