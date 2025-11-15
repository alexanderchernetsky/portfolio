'use client';
import type { StaticImageData } from 'next/image';
import type {FC} from 'react';
import { useCallback, useState } from 'react';
import fanstrikeInfo from "@/constants/portfolio/fanstrike";
import fantiumInfo from "@/constants/portfolio/fantium";
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
        id: number;
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

type ProjectSlug = 'equitec-it' | 'storytrek' | 'erg' | 'equitec' | 'totepool' | 'fantium' | 'fanstrike' | 'default';


const Projects: FC = () => {
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
            fantium: fantiumInfo,
            fanstrike: fanstrikeInfo,
			default: equitecitInfo,
		};

		return projectMap[slug];
	};

	const project = getProject(currentProject);

    return (
		<section id="projects" className="relative w-full min-h-screen flex flex-col items-center justify-start bg-contact">
			<div className="w-full py-12 lg:py-16 px-6 lg:px-0 max-w-[1440px]">
				{/* Page Title */}
				<div className="w-full px-6 sm:px-8 md:px-0 mx-auto flex flex-col items-center">
					<h1 className="text-[24px] lg:text-[34px] font-bold uppercase text-primary">Projects</h1>
					<div className="w-16 h-1 bg-primary mt-3" />
				</div>

				{/* Cards Grid */}
				<div className="max-w-[1440px] mt-5 lg:mt-20 flex flex-col gap-4 md:grid md:grid-cols-2 lg:grid-cols-3 lg:gap-6">
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

export default Projects;
