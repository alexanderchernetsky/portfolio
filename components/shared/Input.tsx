import type { InputHTMLAttributes } from 'react';

export interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
	errorMessage?: boolean | string;
}

export default function Input({ errorMessage, className = '', ...rest }: InputProps) {
	const showError = Boolean(errorMessage);

	return (
		<div className={`w-full ${className}`}>
			{showError && (
				<div className="text-sm text-highlight mb-1">
					{typeof errorMessage === 'string' ? errorMessage : 'Error'}
				</div>
			)}

			<input
				{...rest}
				className={`w-full h-[65px] px-6 box-border bg-input text-primary text-sm font-normal placeholder:opacity-60 focus:outline-none ${
					showError ? 'border-2 border-highlight' : 'border-none'
				}`}
			/>
		</div>
	);
}
