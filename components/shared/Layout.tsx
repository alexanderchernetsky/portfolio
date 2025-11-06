import React from 'react';
import Header from './Header';
import cn from '@/utils/cn';

interface LayoutProps {
	children: React.ReactNode;
	className?: string;
}

export default function Layout({ children, className = '' }: LayoutProps) {
	// todo: choose a better color for the background
	return (
		<div className={cn('diagonal-gradient', className)}>
			{/*<Header />*/}
			<main className="flex-auto min-w-[355px] max-w-[1920px] mx-auto">{children}</main>
		</div>
	);
}
