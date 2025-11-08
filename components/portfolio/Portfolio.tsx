'use client';
import type { StaticImageData } from 'next/image';
import type {FC} from 'react';
import { useCallback, useState } from 'react';
import equitecInfo from '../../constants/portfolio/equitec';
import equitecitInfo from '../../constants/portfolio/equitec-it';
import ergInfo from '../../constants/portfolio/erg';
import projects from '../../constants/portfolio/projects';
import storytrekInfo from '../../constants/portfolio/storytrek';
import totepoolInfo from '../../constants/portfolio/totepool';
import ProjectCard from './ProjectCard';
import Slider from './slider/Slider';

interface ProjectInfo {
	slides: Array<{
		imageUrl: StaticImageData;
	}>;
	title: string;
	subtitle: string;
	description: string;
	href: string;
}

interface ProjectItem {
	title: string;
	slug: string;
	technologies: string;
	image: StaticImageData;
}

type ProjectSlug = 'equitec-it' | 'storytrek' | 'erg' | 'equitec' | 'totepool' | 'default';


// todo: disable page scrolling when modal is open
// todo: clean up unused low-quality and mobile images from projects data
const Portfolio: FC = () => {
	const [isSliderVisible, toggleSliderVisibility] = useState(false);
	const [currentProject, setCurrentProject] = useState<ProjectSlug>('default');

	const onLearnMoreClickHandler = useCallback((slug: string) => {
		setCurrentProject(slug as ProjectSlug);
		toggleSliderVisibility(true);
	}, []);

	const onSliderCloseBtnClick = () => {
		toggleSliderVisibility(false);
	};

	const getProject = (slug: ProjectSlug): ProjectInfo => {
		const projectMap: Record<ProjectSlug, ProjectInfo> = {
			'equitec-it': equitecitInfo,
			storytrek: storytrekInfo,
			erg: ergInfo,
			equitec: equitecInfo,
			totepool: totepoolInfo,
			default: equitecitInfo,
		};

		return projectMap[slug];
	};

	const project = getProject(currentProject);


    // todo: find more sophisticated grid layout for projects
	return (
		<section id="projects" className="relative w-full min-h-screen flex flex-col items-center justify-start bg-contact">
			<div className="max-w-[1440px]">
				{/* Page Title */}
				<div className="mt-16 w-full px-6 sm:px-8 md:px-0 mx-auto flex flex-col items-center">
					<h1 className="text-[34px] font-bold uppercase text-primary">Projects</h1>
					<div className="w-16 h-1 bg-primary mt-3" />
				</div>

				{/* Cards Grid */}
				<div className="grid grid-cols-[repeat(3,1fr)] grid-rows-[repeat(3,1fr)] gap-2 mt-20 ">
					{projects.map((item: ProjectItem) => (
						<ProjectCard
							key={item.title}
							title={item.title}
							slug={item.slug}
							imageUrl={item.image}
							onClickHandler={() => onLearnMoreClickHandler(item.slug)}
						/>
					))}
				</div>

				{/* Slider */}
				{isSliderVisible && (
					<Slider
						slides={project.slides}
						title={project.title}
						subtitle={project.subtitle}
						description={project.description}
						onClose={onSliderCloseBtnClick}
						href={project.href}
					/>
				)}
			</div>
		</section>
	);
};

export default Portfolio;
