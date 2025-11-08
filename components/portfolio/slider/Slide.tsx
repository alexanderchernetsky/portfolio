import Image, { type StaticImageData } from 'next/image';
import type { FC } from 'react';

interface SlideProps {
	imageUrl: StaticImageData;
	mobileImageUrl: StaticImageData;
	backupImageUrl: StaticImageData;
}

const Slide: FC<SlideProps> = ({ imageUrl }) => {
	return (
		<div className="bg-gray-900 w-[800px] lg:w-[800px] max-lg:w-[375px] flex-shrink-0 h-full flex flex-row lg:flex-row max-lg:flex-col justify-start box-border">
			<div className="w-full relative lg:bg-transparent max-lg:bg-black/70 max-lg:w-[375px] max-lg:h-[250px] max-lg:pt-0">
				<Image
					src={imageUrl}
					alt="project screenshot"
					fill
					placeholder="blur"
					sizes="(max-width: 1024px) 375px, 800px"
					className="object-cover"
				/>
			</div>
		</div>
	);
};

export default Slide;
