import type { StaticImageData } from 'next/image';
import equitecCard from '../../public/images/projects/equitec/main.png';
import equitecitCard from '../../public/images/projects/equitec-it/main.png';
import ergCard from '../../public/images/projects/erg/main.png';
import storytrackCard from '../../public/images/projects/storytrek/main.png';
import totepoolCard from '../../public/images/projects/totepool/main.png';

interface Project {
	title: string;
	slug: string;
	technologies: string;
	image: StaticImageData;
}

// todo: add FANtium and FANstrike
const projects: Project[] = [
	{
		title: 'Storytrek',
		slug: 'storytrek',
		technologies: 'React, MST, Ant Design, Jest',
		image: storytrackCard,
	},
	{
		title: 'Equitec-it',
		slug: 'equitec-it',
		technologies: 'Next, React, Styled Components',
		image: equitecitCard,
	},
	{
		title: 'Equity Release Group',
		slug: 'erg',
		technologies: 'Next, React, Styled Components',
		image: ergCard,
	},
	{
		title: 'Equitec',
		slug: 'equitec',
		technologies: 'React, MobX, Ant Design',
		image: equitecCard,
	},
	{
		title: 'Totepool',
		slug: 'totepool',
		technologies: 'React, Typescript, Cypress, React Testing Library',
		image: totepoolCard,
	},
];

export default projects;
