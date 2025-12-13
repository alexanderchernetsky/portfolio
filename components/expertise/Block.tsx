import Image, { type StaticImageData } from 'next/image';
import type React from 'react';

type BlockProps = {
	title: string;
	text: string;
	src: StaticImageData;
};

const Block: React.FC<BlockProps> = ({ title, text, src }) => {
	return (
		<div
			className="lg:w-[240px] lg:h-[210px] flex flex-col items-center justify-start mx-[10px]
                    w-[200px] md:m-[10px] sm:h-auto"
		>
			{/* Image */}
			<div className="lg:w-[120px] lg:h-[100px] w-[100px] h-[80px]">
				<Image src={src} unoptimized alt={title} width={120} height={100} className="w-full h-full object-cover" />
			</div>

			{/* Title */}
			<h3 className="lg:text-[24px] lg:mt-[10px] text-[18px] mt-[5px] font-semibold text-block text-center">{title}</h3>

			{/* Text */}
			<p
				className="lg:text-[16px] lg:-[5px] font-normal text-block text-center leading-tight
                    text-[14px] mt-[3px]"
			>
				{text}
			</p>
		</div>
	);
};

export default Block;
