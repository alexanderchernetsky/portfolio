export interface TextareaProps extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
	errorMessage?: boolean | string;
}

export default function Textarea({ errorMessage, className = '', ...rest }: TextareaProps) {
	const showError = Boolean(errorMessage);

	return (
		<div className={`w-full ${className}`}>
			{showError && (
				<div className="text-sm text-highlight mb-1">
					{typeof errorMessage === 'string' ? errorMessage : 'Error'}
				</div>
			)}
			<textarea
				{...rest}
				className={`w-full h-[150px] p-5 pt-4 box-border bg-input text-primary text-sm font-normal resize-none placeholder:opacity-60 focus:outline-none ${
					showError ? 'border-2 border-highlight' : 'border-none'
				}`}
			/>
		</div>
	);
}
