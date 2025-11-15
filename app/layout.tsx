import type { Metadata } from 'next';
import { Geist, Geist_Mono } from 'next/font/google';
import './globals.css';
import '../styles/colors.css';
import '../styles/backgrounds.css';
import { raleway } from '@/fonts/fonts';
import Script from 'next/script';

const geistSans = Geist({
	variable: '--font-geist-sans',
	subsets: ['latin'],
});

const geistMono = Geist_Mono({
	variable: '--font-geist-mono',
	subsets: ['latin'],
});

// todo: set correct site URL
const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? 'http://localhost:3000';

export const metadata: Metadata = {
    title: 'Full-stack Developer | Alexander Chernetsky',
    description: 'Alexander Chernetsky - a full-stack web developer from Warsaw, Poland',
    metadataBase: new URL(siteUrl),
    alternates: {
        canonical: '/',
    },
    openGraph: {
        type: 'website',
        url: siteUrl,
        siteName: 'Alexander Chernetsky — Full-stack Developer',
        title: 'Full-stack Developer | Alexander Chernetsky',
        description: 'Portfolio of Alexander Chernetsky, full-stack web developer based in Warsaw, Poland.',
        locale: 'en_US',
    },
    twitter: {
        card: 'summary',
        title: 'Full-stack Developer | Alexander Chernetsky',
        description: 'Portfolio of Alexander Chernetsky, full-stack web developer based in Warsaw, Poland.',
        creator: '@',
    },
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en" className={raleway.variable}>
            <body id="app-body" className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
                {/* JSON-LD Structured Data for Person */}
                <Script id="ld-json-person" type="application/ld+json" strategy="afterInteractive">
                    {JSON.stringify({
                        '@context': 'https://schema.org',
                        '@type': 'Person',
                        name: 'Alexander Chernetsky',
                        jobTitle: 'Full-stack Web Developer',
                        url: siteUrl,
                        address: {
                            '@type': 'PostalAddress',
                            addressLocality: 'Warsaw',
                            addressCountry: 'PL',
                        },
                    })}
                </Script>
                {children}
            </body>
        </html>
    );
}
