import type { Metadata } from 'next';
import Contact from '@/components/contact/Contact';
import Expertise from '@/components/expertise/Expertise';
import Intro from '@/components/intro/Intro';
import Portfolio from '@/components/portfolio/Portfolio';
import Layout from '@/components/shared/Layout';

export const metadata: Metadata = {
	title: 'Full-stack Developer | Alexander Chernetsky',
	description: 'Alexander Chernetsky - a full-stack web developer from Warsaw, Poland',
	verification: {
		google: 'FNubKiwZ4Bs9WdO_ExujOXcJ0pC5NxImc6EYTr9N_NY', // todo: add google verification
	},
};

// todo: fix mobile UI
export default function Page() {
	return (
		<Layout>
			<Intro />
			<Portfolio />
			<Expertise />
			<Contact />
		</Layout>
	);
}
