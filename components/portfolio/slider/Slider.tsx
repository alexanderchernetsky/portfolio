import {ArrowLeft, ArrowRight, LinkExternal01, XClose} from '@untitled-ui/icons-react';
import type { StaticImageData } from 'next/image';
import type { FC } from 'react';
import { useRef, useState } from 'react';
import Slide from './Slide';
import {useDisablePageScrolling} from "@/hooks/useDisablePageScrolling";

interface SlideData {
	imageUrl: StaticImageData;
}

interface SliderProps {
	slides: SlideData[];
	title: string;
	subtitle: string;
	description: string;
	onClose: () => void;
	href: string;
}


// todo: fix this component
const Slider: FC<SliderProps> = ({ slides, title, subtitle, description, onClose, href }) => {
	const currentScrollXPosition = useRef(0);
	const [isFirstSlide, setIsFirstSlide] = useState(true);
	const [isLastSlide, setIsLastSlide] = useState(false);

    useDisablePageScrolling();

	const sliderControlClickHandler = (type: 'next' | 'previous') => {
		const slidesCount = slides.length;
		const slidesWrapperEl = document.getElementById('slides-wrapper');

		if (!slidesWrapperEl) return;

		const slidesWrapperElWidth = slidesWrapperEl.scrollWidth;
		const oneSlideWidth = slidesWrapperElWidth / slidesCount;

		if (type === 'next') {
			currentScrollXPosition.current += oneSlideWidth;
			setIsFirstSlide(false);

			if (currentScrollXPosition.current >= slidesWrapperElWidth - oneSlideWidth) {
				currentScrollXPosition.current = slidesWrapperElWidth - oneSlideWidth;
				setIsLastSlide(true);
			}
		} else {
			currentScrollXPosition.current -= oneSlideWidth;
			setIsLastSlide(false);

			if (currentScrollXPosition.current <= 0) {
				currentScrollXPosition.current = 0;
				setIsFirstSlide(true);
			}
		}

		slidesWrapperEl.scrollLeft = currentScrollXPosition.current;
	};

	const onViewSiteBtnClick = () => {
		window.open(href, '_blank', 'noopener,noreferrer');
	};

	const handleKeyPress = (e: React.KeyboardEvent, callback: () => void) => {
		if (e.key === 'Enter' || e.key === ' ') {
			e.preventDefault();
			callback();
		}
	};

	const isMobileDevice = false;

	return (
		<>
			{/* Overlay */}
			<div
				className="bg-black/80 h-full w-full opacity-100 fixed inset-0 transition-opacity duration-300 z-[2]"
				onClick={onClose}
			/>

			{/* Modal */}
			<div
				className={`
          fixed z-[3]
          ${
						isMobileDevice
							? 'w-auto flex flex-col items-center justify-center inset-0'
							: 'w-[800px] lg:w-[800px] max-lg:w-[375px] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2'
					}
        `}
			>
				{!isMobileDevice && (
					<div
						className={`
              relative w-[800px] h-[450px] flex overflow-x-auto
              lg:w-[800px] lg:h-[450px]
              max-lg:w-[375px] max-lg:h-[250px]
              ${isMobileDevice ? 'flex-col' : ''}
            `}
					>
						{/* Previous Button */}
						{!isFirstSlide && (
							<div
								onClick={() => sliderControlClickHandler('previous')}
								className="cursor-pointer absolute bg-gray-800 z-[1] bottom-0 left-0 w-[65px] h-[55px] flex flex-col items-center justify-center rotate-180"
							>
								<button
									className="sr-only"
									tabIndex={0}
									onKeyPress={(e) => handleKeyPress(e, () => sliderControlClickHandler('previous'))}
									aria-label="Previous slide"
								>
									<ArrowLeft />
									Previous
								</button>
							</div>
						)}

						{/* Slides */}
						<div
							id="slides-wrapper"
							className="flex overflow-x-hidden scroll-smooth snap-x snap-mandatory overflow-scroll"
							style={{ WebkitOverflowScrolling: 'touch' }}
						>
							{slides.map((slide, index) => (
								<div key={index} className="snap-start flex-shrink-0">
									<Slide
										imageUrl={slide.imageUrl}
										mobileImageUrl={slide.mobileImageUrl}
										backupImageUrl={slide.backupImageUrl}
									/>
								</div>
							))}
						</div>

						{/* Next Button */}
						{!isLastSlide && (
							<div
								onClick={() => sliderControlClickHandler('next')}
								className="cursor-pointer absolute bg-gray-800 z-[1] bottom-0 right-0 w-[65px] h-[55px] flex flex-col items-center justify-center"
							>
								<button
									className="sr-only"
									tabIndex={0}
									onKeyPress={(e) => handleKeyPress(e, () => sliderControlClickHandler('next'))}
									aria-label="Next slide"
								>
									Next <ArrowRight />
								</button>
							</div>
						)}
					</div>
				)}

				{/* Info Section */}
				<div
					className={`
            w-full bg-gray-900 px-[30px] pt-[35px] pb-[25px] border-t-[3px] border-cyan-400
            lg:w-full
            max-lg:w-[375px]
            ${isMobileDevice ? 'flex flex-col min-h-[460px] h-[60vh]' : ''}
          `}
				>
					{/* Title */}
					<h3 className="text-3xl font-raleway m-0 mb-[5px] text-white">{title}</h3>

					{/* Subtitle */}
					<div className="text-[17px] uppercase font-medium text-gray-400 border-b border-gray-700 pb-[15px]">
						{subtitle}
					</div>

					{/* Description */}
					<p className="text-[15px] leading-[18px] mt-[15px] text-white">{description}</p>

					{/* Footer */}
					<div
						className={`
              w-full flex flex-row flex-nowrap justify-between items-center mt-[35px]
              ${isMobileDevice ? 'mt-auto' : ''}
            `}
					>
						{/* View Site Button */}
						<button
							onClick={onViewSiteBtnClick}
							className="box-border text-lg text-white px-[30px] h-[42px] w-fit border-2 border-cyan-400 flex items-center justify-center uppercase m-0 cursor-pointer transition-all duration-500 ease-out hover:bg-cyan-400 hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-cyan-400 focus:ring-offset-2"
						>
							<a
								href={href}
								target="_blank"
								rel="noopener noreferrer"
								className="flex flex-row gap-2 items-center text-[14px] no-underline text-white hover:text-gray-900"
							>
                                <LinkExternal01 width={20} height={20} />
								View site
							</a>
						</button>

						{/* Close Button */}
						<div
							className="flex flex-row justify-center items-center w-[30px] h-[30px] cursor-pointer"
							onClick={onClose}
						>
							<button
								className="sr-only"
								tabIndex={0}
								onKeyPress={(e) => handleKeyPress(e, onClose)}
								aria-label="Close slider"
							>
								Close <XClose />
							</button>
						</div>
					</div>
				</div>
			</div>
		</>
	);
};

export default Slider;
