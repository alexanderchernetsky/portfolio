import Image, { type StaticImageData } from 'next/image';
import type { FC } from 'react';

interface ProjectCardProps {
	title?: string;
	slug?: string;
	imageUrl: StaticImageData;
	onClickHandler: (slug: string) => void;
}

const ProjectCard: FC<ProjectCardProps> = ({ title = 'Project', slug = 'default', imageUrl, onClickHandler }) => {
	const handleClick = () => onClickHandler(slug);

	const handleKeyPress = (e: React.KeyboardEvent) => {
		if (e.key === 'Enter' || e.key === ' ') {
			e.preventDefault();
			onClickHandler(slug);
		}
	};

	return (
		<button
			type="button"
			className="w-[390px] lg:w-[390px] max-lg:w-[375px] flex flex-col cursor-pointer bg-input rounded-sm"
			onClick={handleClick}
			onKeyPress={handleKeyPress}
			tabIndex={0}
			aria-label={`Learn more about ${title}`}
		>
			{/* Image */}
			<div className="relative w-full h-[300px] max-lg:h-[288px] overflow-hidden rounded-sm group">
				<Image
					src={imageUrl}
					alt={title}
					fill
					placeholder="blur"
					sizes="(max-width: 1024px) 375px, 390px"
					className="object-cover transition-transform duration-500 ease-out group-hover:scale-105"
					priority={false}
				/>
			</div>

			{/* Content below image */}
			<div className="flex flex-row justify-between items-center gap-2 text-center p-4 rounded-sm">
				<h2 className="font-bold text-primary text-[16px]">{title}</h2>
			</div>
		</button>
	);
};

export default ProjectCard;
