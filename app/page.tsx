import type { Metadata } from 'next';
import HomePageContent from '@/components/home/HomePageContent';
import Layout from '@/components/shared/Layout';

export const metadata: Metadata = {
	title: 'Full-stack Developer | Alexander Chernetsky',
	description: 'Alexander Chernetsky - a full-stack web developer from Warsaw, Poland',
	verification: {
		google: '', // todo: add google verification
	},
};

export default function Page() {
	return (
		<Layout>
			<HomePageContent />
		</Layout>
	);
}
