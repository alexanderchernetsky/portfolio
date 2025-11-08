'use client';
import { ArrowRight } from '@untitled-ui/icons-react';
import type React from 'react';
import cn from '@/utils/cn';

type ColorTheme = 'pink' | 'green';

interface ButtonProps {
	className?: string;
	disabled?: boolean;
	onClick?: () => void;
	href?: string;
	colorTheme?: ColorTheme;
	type?: 'button' | 'submit';
	loading?: boolean;
	children: React.ReactNode;
}

const getThemeClasses = (theme: ColorTheme) => {
	switch (theme) {
		case 'green':
			return {
				circleBg: 'bg-green-button',
				textColor: 'text-green-button-link',
			};
		default:
			return {
				circleBg: 'bg-highlight',
				textColor: 'text-pink-500',
			};
	}
};

const Button: React.FC<ButtonProps> = ({
	type = 'button',
	colorTheme = 'pink',
	className = '',
	disabled = false,
	onClick,
	loading = false,
	children,
}) => {
	const theme = getThemeClasses(colorTheme);

	return (
		<button
			type={type}
			disabled={disabled || loading}
			onClick={onClick}
			tabIndex={0}
			onKeyPress={onClick}
			className={cn(
				'relative inline-block w-52 align-middle bg-transparent text-lg cursor-pointer outline-none border-0 p-0 mt-2',
				'transition-all duration-300 ease-in-out',
				className,
			)}
		>
			{/* Circle with icon or loader */}
			<span
				className={cn(
					'circle relative flex items-center justify-center w-12 h-12 rounded-full transition-all duration-[450ms] ease-[cubic-bezier(0.65,0,0.076,1)]',
					theme.circleBg,
				)}
			>
				{loading ? (
					<span className="absolute top-[14px] left-[14px] w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
				) : (
					<span className="absolute top-[14px] left-[14px]">
						<ArrowRight
							className={cn(
								'w-5 h-5 text-white transition-transform duration-[450ms] ease-[cubic-bezier(0.65,0,0.076,1)]',
							)}
						/>
					</span>
				)}
			</span>

			{/* Button text */}
			<span
				className={cn(
					'text absolute top-0 left-0 right-0 bottom-0 py-3 pl-8 text-center uppercase font-normal leading-tight transition-all duration-[450ms] ease-[cubic-bezier(0.65,0,0.076,1)]',
					theme.textColor,
				)}
			>
				{children}
			</span>

			{/* Hover animation */}
			<style jsx>{`
                button:hover .circle {
                    width: 100%;
                }
                button:hover .text {
                    color: var(--primary-color);
                }
            `}</style>
		</button>
	);
};

export default Button;
