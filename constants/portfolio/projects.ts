import type { StaticImageData } from 'next/image';
import equitecCard from '../../public/images/projects/equitec/main.png';
import equitecitCard from '../../public/images/projects/equitec-it/main.png';
import ergCard from '../../public/images/projects/erg/main.png';
import fanstrikeCard from '../../public/images/projects/fanstrike/main.png';
import fantiumCard from '../../public/images/projects/fantium/main.png';
import storytrackCard from '../../public/images/projects/storytrek/main.png';
import totepoolCard from '../../public/images/projects/totepool/main.png';

interface Project {
	title: string;
	slug: string;
	technologies: string;
	image: StaticImageData;
}

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
    {
        title: 'FANtium',
        slug: 'fantium',
        technologies: 'Next.js, React, Typescript, GraphQL, Strapi, React-query, Tailwind, Zustand, Solidity, Wagmi, View',
        image: fantiumCard,
    },
    {
        title: 'FANstrike',
        slug: 'fanstrike',
        technologies: 'Next.js, React, Typescript, GraphQL, Strapi, React-query, Tailwind, solana/web3.js, solana/spl-token',
        image: fanstrikeCard,
    }
];

export default projects;
