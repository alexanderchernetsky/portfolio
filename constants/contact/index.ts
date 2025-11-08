import type { StaticImageData } from 'next/image';
import githubIcon from '../../public/images/soc-icons/github.svg';
import instagramIcon from '../../public/images/soc-icons/instagram.svg';
import linkedinIcon from '../../public/images/soc-icons/linkedin.svg';

interface SocIcon {
	src: StaticImageData;
	name: string;
	linkTo: string;
}

const socIcons: SocIcon[] = [
	{
		name: 'linkedin',
		src: linkedinIcon,
		linkTo: 'https://www.linkedin.com/in/alexander-chernetsky/',
	},
	{
		name: 'instagram',
		src: instagramIcon,
		linkTo: 'https://www.instagram.com/alexander_chernetsky/',
	},
	{
		name: 'github',
		src: githubIcon,
		linkTo: 'https://github.com/alexanderchernetsky',
	},
];

export default socIcons;
