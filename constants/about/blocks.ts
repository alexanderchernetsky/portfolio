import type { StaticImageData } from 'next/image';
import dynamic from '../../public/images/about/blocks/dynamic.jpg';
import fast from '../../public/images/about/blocks/fast.jpg';
import intuitive from '../../public/images/about/blocks/intuitive.jpg';
import responsive from '../../public/images/about/blocks/responsive.jpg';

interface BlockList {
	src: StaticImageData;
	title: string;
	text: string;
}

const blocks: BlockList[] = [
	{
		src: fast,
		title: 'Fast',
		text: 'Fast load times and absence of bugs are my highest priority.',
	},
	{
		src: responsive,
		title: 'Responsive',
		text: 'My layouts work immaculately on any device, either desktop or mobile device.',
	},
	{
		src: intuitive,
		title: 'Intuitive',
		text: 'Preference for intuitive UI/UX.',
	},
	{
		src: dynamic,
		title: 'Dynamic',
		text: "Websites don't have to be static. I like making pages dynamic.",
	},
];

export default blocks;
