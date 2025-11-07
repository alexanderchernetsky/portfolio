import type { Metadata } from 'next';
import Expertise from "@/components/Expertise/Expertise";
import Intro from '@/components/Intro/Intro';
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
			<Intro />
            {/* todo: portfolio */}
            <Expertise />
            {/* todo: contact */}
		</Layout>
	);
}
