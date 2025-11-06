'use client';
import React, { FC, useEffect, useState } from 'react';
import { usePathname } from 'next/navigation';
import Link from 'next/link';

const headerMenuItems = [
	{ name: 'Home', link: '/' },
	{ name: 'About', link: '/about' },
	{ name: 'Portfolio', link: '/portfolio' },
	{ name: 'Contact', link: '/contact' },
];

const HEADER_HEIGHT = 60;

const Header: FC = () => {
	const pathname = usePathname();
	const [isVisible, setIsVisible] = useState(true);
	const [lastScrollY, setLastScrollY] = useState(0);

	const activePage = pathname === '/' ? '' : pathname.substring(1);
	const isHomePage = activePage === '';

	useEffect(() => {
		let lastScrollTop = 0;

		const handleScroll = () => {
			const st = window.pageYOffset || document.documentElement.scrollTop;

			if (st > lastScrollTop && st > HEADER_HEIGHT) {
				setIsVisible(false);
			} else {
				setIsVisible(true);
			}

			lastScrollTop = st <= 0 ? 0 : st;
			setLastScrollY(st);
		};

		window.addEventListener('scroll', handleScroll, { passive: true });

		return () => {
			window.removeEventListener('scroll', handleScroll);
		};
	}, []);

	if (isHomePage) {
		return null;
	}

	return (
		<header
			className={`
        fixed left-1/2 -translate-x-1/2 z-[2] w-full max-w-[1920px]
        h-[60px] bg-white border-b-[3px] border-purple-600
        flex items-center justify-between lg:justify-center
        transition-transform duration-500 ease-out
        ${!isVisible ? '-translate-y-full' : 'translate-y-0'}
      `}
		>
			<nav>
				<ul className="list-none flex flex-row lg:pl-0">
					{headerMenuItems.map((item, index) => {
						const isActivePage = item.name.toLowerCase() === activePage;
						const isActiveHomePage = item.name === 'Home' && activePage === '';
						const isActive = isActivePage || isActiveHomePage;

						return (
							<li
								key={index}
								className="uppercase text-lg font-medium mr-5 cursor-pointer flex items-center sm:text-sm sm:mr-[15px] sm:last:mr-0"
							>
								<Link
									href={item.link}
									className="relative text-gray-800 no-underline text-center transition-all duration-200 ease-in-out group"
								>
									<span className="relative">
										{item.name}
										<span
											className={`
                        absolute bottom-[-10px] left-0 h-[5px] bg-gradient-to-r from-[#6303b1] to-[#ff0099]
                        transition-all duration-500 ease-in-out
                        ${isActive ? 'w-full opacity-100' : 'w-0 opacity-0 group-hover:w-full group-hover:opacity-100'}
                      `}
										/>
									</span>
								</Link>
							</li>
						);
					})}
				</ul>
			</nav>
		</header>
	);
};

export default Header;
