'use client';
import Button from '@/components/shared/Button';

// todo: choose a better color for the background
export default function HomePage() {
	const handleViewWorkButtonClick = () => {
		const contactSection = document.getElementById('projects');
		contactSection?.scrollIntoView({ behavior: 'smooth', block: 'start' });
	};

	return (
		<section className="diagonal-gradient relative flex flex-col justify-start min-h-screen">
			<div className="absolute left-1/2 top-[45%] -translate-x-1/2 -translate-y-1/2 w-full lg:max-w-[600px] px-5 md:max-w-[360px]">
				<div className="w-full flex flex-col items-center">
					<h1 className="w-full text-[23px] lg:text-[38px] font-light text-center text-primary leading-tight m-0">
						Hello! I&apos;m <span className="text-highlight font-normal">Alex Chernetsky</span>,
						<br /> a full-stack web developer based in Warsaw, Poland.
					</h1>

					<div className="mt-3">
						<Button colorTheme="pink" onClick={handleViewWorkButtonClick}>
							<span className="font-raleway text-primary font-normal text-decoration-none">View my work</span>
						</Button>
					</div>
				</div>
			</div>
		</section>
	);
}
