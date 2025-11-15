import {ChevronLeft, ChevronRight, LinkExternal01, XClose} from '@untitled-ui/icons-react';
import type { StaticImageData } from 'next/image';
import {FC, useCallback} from 'react';
import { useEffect, useRef, useState } from 'react';
import {useDisablePageScrolling} from "@/hooks/useDisablePageScrolling";
import Slide from './Slide';

interface SlideData {
    id: number;
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


const Slider: FC<SliderProps> = ({ slides, title, subtitle, description, onClose, href }) => {
	const currentScrollXPosition = useRef(0);
	const [isFirstSlide, setIsFirstSlide] = useState(true);
	const [isLastSlide, setIsLastSlide] = useState(false);

    useDisablePageScrolling();

	const sliderControlClickHandler = useCallback((type: 'next' | 'previous') => {
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
	}, [slides]);

	// Keyboard navigation: ArrowRight -> next, ArrowLeft -> previous, Escape -> close
	useEffect(() => {
		const handleKeyDown = (e: KeyboardEvent) => {
			if (e.key === 'ArrowRight') {
				e.preventDefault();
				sliderControlClickHandler('next');
			} else if (e.key === 'ArrowLeft') {
				e.preventDefault();
				sliderControlClickHandler('previous');
			} else if (e.key === 'Escape') {
				e.preventDefault();
				onClose();
			}
		};

		window.addEventListener('keydown', handleKeyDown);
		return () => window.removeEventListener('keydown', handleKeyDown);
	}, [onClose, sliderControlClickHandler]);

	const handleKeyPress = (e: React.KeyboardEvent, callback: () => void) => {
		if (e.key === 'Enter' || e.key === ' ') {
			e.preventDefault();
			callback();
		}
	};

    // todo: implement mobile detection
	const isMobileDevice = false;

	return (
		<>
            {/* Overlay */}
            <div
                className="bg-black/80 h-full w-full opacity-100 fixed inset-0 transition-opacity duration-300 z-[2]"
                onClick={onClose}
                aria-hidden="true"
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
								<button
                                    type="button"
                                    onClick={() => sliderControlClickHandler('previous')}
                                    className="cursor-pointer absolute bg-slider-navigation text-primary z-[1] bottom-0 left-0 px-4 py-5 flex flex-col items-center justify-center"
									tabIndex={0}
									onKeyPress={(e) => handleKeyPress(e, () => sliderControlClickHandler('previous'))}
									aria-label="Previous slide"
								>
									<ChevronLeft />
								</button>
						)}

						{/* Slides */}
						<div
							id="slides-wrapper"
							className="flex overflow-x-hidden scroll-smooth snap-x snap-mandatory overflow-scroll"
							style={{ WebkitOverflowScrolling: 'touch' }}
						>
							{slides.map((slide) => (
								<div key={slide.id} className="snap-start flex-shrink-0">
									<Slide
										imageUrl={slide.imageUrl}
									/>
								</div>
							))}
						</div>

						{/* Next Button */}
						{!isLastSlide && (
                            <button
                                type="button"
                                onClick={() => sliderControlClickHandler('next')}
                                className="cursor-pointer absolute bg-slider-navigation text-primary z-[1] bottom-0 right-0 px-4 py-5 flex flex-col items-center justify-center"
                                tabIndex={0}
                                onKeyPress={(e) => handleKeyPress(e, () => sliderControlClickHandler('next'))}
                                aria-label="Next slide"
                            >
                                <ChevronRight />
                            </button>
						)}
					</div>
				)}

				{/* Info Section */}
				<div
					className={`
            w-full bg-gray-900 px-[30px] pt-[35px] pb-[25px] border-t-[3px] border-slider
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
                        <a
                            href={href}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="box-border text-lg text-white px-[30px] h-[42px] w-fit border-2 border-slider flex flex-row gap-2 items-center justify-center uppercase m-0 cursor-pointer transition-all duration-500 ease-out hover:bg-cyan-400 hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-cyan-400 no-underline"
                        >
                            <LinkExternal01 width={20} height={20} />
                            <span className="text-[14px]">View site</span>
                        </a>

						{/* Close Button */}
                        <button
                            type="button"
                            className="flex flex-row justify-center text-primary items-center w-[30px] h-[30px] cursor-pointer"
                            onClick={onClose}
                            tabIndex={0}
                            onKeyPress={(e) => handleKeyPress(e, onClose)}
                            aria-label="Close slider"
                        >
                            <XClose width={24} height={24} className="text-primary" />
                        </button>
					</div>
				</div>
			</div>
		</>
	);
};

export default Slider;
