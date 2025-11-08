import type { Metadata } from 'next';
import Contact from "@/components/contact/Contact";
import Expertise from "@/components/expertise/Expertise";
import Intro from '@/components/intro/Intro';
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
            <Contact />
		</Layout>
	);
}
