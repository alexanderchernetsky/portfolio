import {ChevronLeft, ChevronRight, LinkExternal01, XClose} from '@untitled-ui/icons-react';
import type { StaticImageData } from 'next/image';
import {type FC, useCallback, useEffect, useRef, useState } from 'react';
import {useDisablePageScrolling} from "@/hooks/useDisablePageScrolling";
import { useIsDesktop } from '@/hooks/useMediaQuery';
import Button from '../../shared/Button';
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

    // Smooth enter animation state
    const [isEntering, setIsEntering] = useState(false);
    useEffect(() => {
        const id = requestAnimationFrame(() => setIsEntering(true));
        return () => cancelAnimationFrame(id);
    }, []);

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

    // More robust close handler for mobile devices where click can be swallowed after a slight drag
    const handleClose = useCallback((e?: { preventDefault?: () => void; stopPropagation?: () => void }) => {
        e?.preventDefault?.();
        e?.stopPropagation?.();
        onClose();
    }, [onClose]);

    const isDesktop = useIsDesktop();
    const isMobileDevice = !isDesktop;

	return (
		<>
            {/* Overlay */}
            <div
                className={`bg-black/80 backdrop-blur-sm fixed inset-0 min-h-[100dvh] transition-opacity duration-300 z-[2] ${
                    isEntering ? 'opacity-100' : 'opacity-0'
                }`}
                onClick={handleClose}
                aria-hidden="true"
            />

			{/* Modal container (always centered from the first paint) */}
			<div className="fixed inset-0 min-h-[100dvh] z-3 flex items-center justify-center">
				{/* Modal content with enter animation */}
				<div
					className={`
					  transition-all duration-300 ease-out transform-gpu
					  ${
							isMobileDevice
								? `${isEntering ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-2'} w-auto max-lg:w-[375px]`
								: `${isEntering ? 'opacity-100 scale-100' : 'opacity-0 scale-95'} w-[800px] lg:w-[800px]`
					  }
					`}
				>
 				<div
 					className={`
 				  relative w-[800px] h-[450px] flex overflow-x-auto
 				  lg:w-[800px] lg:h-[450px]
 				  max-lg:w-[375px] max-lg:h-[250px]
 				`}
 				>
                    {/* Previous Button */}
                    {!isFirstSlide && (
                        <button
                            type="button"
                            onClick={() => sliderControlClickHandler('previous')}
                            className="cursor-pointer absolute bg-slider-navigation text-primary z-1 bottom-0 left-0 px-4 py-5 flex flex-col items-center justify-center"
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
                        className="flex overflow-x-hidden scroll-smooth snap-x snap-mandatory overflow-y-hidden"
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

				{/* Info Section */}
				<div
					className={`
					    w-full bg-gray-900 px-[30px] pt-[20px] lg:pt-[35px] pb-[25px] border-t-[3px] border-slider
					    lg:w-full
					    max-lg:w-[375px]
					  `}
				>
					{/* Title */}
					<h3 className="text-2xl lg:text-3xl font-raleway m-0 mb-[5px] text-white">{title}</h3>

					{/* Subtitle */}
					<div className="text-sm lg:text-[17px] uppercase font-medium text-gray-400 border-b border-gray-700 pb-[15px]">
						{subtitle}
					</div>

					{/* Description */}
					<p className="text-[15px] leading-[18px] mt-[15px] text-white">{description}</p>

					{/* Footer */}
					<div
						className="w-full flex flex-row flex-nowrap justify-between items-center mt-[35px]"
					>
						{/* View Site Button */}
                        <Button
                            href={href}
                            target="_blank"
                            leadingIcon={<LinkExternal01 width={20} height={20} />}
                            className="no-underline"
                        >
                            View site
                        </Button>

						{/* Close Button */}
                        <button
                            type="button"
                            className="flex flex-row justify-center text-primary items-center w-[44px] h-[44px] cursor-pointer rounded focus:outline-none focus:ring-2 focus:ring-cyan-400"
                            onClick={handleClose}
                            onTouchEnd={handleClose}
                            onPointerUp={handleClose}
                            tabIndex={0}
                            onKeyPress={(e) => handleKeyPress(e, () => handleClose())}
                            aria-label="Close slider"
                            style={{ touchAction: 'manipulation' }}
                        >
                            <XClose width={24} height={24} className="text-primary" />
                        </button>
					</div>
				</div>
				</div>
			</div>
		</>
	);
};

export default Slider;
