'use client'
import Image from 'next/image';
import type React from 'react';
import blocks from '../../constants/about/blocks';
import {backendSkills, cloudAndDevOpsSkills, frontendSkills, web3skills} from '../../constants/about/skills';
import alexander from '../../public/images/about/alex.jpg';
import Button from '../shared/Button';
import Block from './Block';
import SkillBlock from './SkillBlock';



const Expertise: React.FC = () => {
    const handleContactButtonClick = () => {
        const contactSection = document.getElementById('contact');
        contactSection?.scrollIntoView({ behavior: 'smooth', block: 'start' });
    };

    return (
            <section className="min-h-screen flex flex-col items-center justify-start bg-primary">
                <div className="w-full max-w-[1440px] flex flex-col items-center bg-primary pt-[60px] pb-[60px] px-0 md:px-5">
                    <div className="w-full px-6 sm:px-8 md:px-0 max-w-[1440px] mx-auto flex flex-col items-center">
                        <h1 className="text-[34px] font-bold uppercase text-page-title">EXPERTISE</h1>
                        <div className="w-16 h-1 bg-secondary mt-3" />
                    </div>

                    {/* Blocks */}
                    <div className="flex flex-row flex-wrap justify-center items-center mt-20 gap-6 px-6">
                        {blocks.map((item) => (
                            <Block key={item.title} src={item.src} title={item.title} text={item.text} />
                        ))}
                    </div>

                    {/* Main info */}
                    <div className="w-full px-6 lg:mt-8 mt-4">
                        <div className="grid grid-rows-1 grid-cols-2 items-start gap-8 md:flex-col">
                            {/* Left column - About Section */}
                            <div className="flex flex-col items-center max-w-[590px] w-full px-2">
                                {/* Photo wrapper with hexagon-ish clipPath */}
                                <div
                                    className="relative w-[300px] h-[350px] overflow-hidden"
                                    style={{
                                        clipPath:
                                            'polygon(25% 0%, 75% 0%, 100% 45%, 75% 90%, 25% 90%, 0% 45%)',
                                    }}
                                >
                                    <Image src={alexander} alt="Alexander Chernetsky" fill className="object-cover" />
                                </div>

                                <h2 className="lg:text-xl text-lg font-semibold text-block text-center">
                                    Alex Chernetsky - Full-Stack Developer
                                </h2>

                                <p className="mt-3 lg:text-base text-sm font-normal text-block text-center leading-6">
                                    I&apos;m a full-stack developer, who is passionate about creating stunning modern websites. I have worked on a
                                    multitude of web projects for a range of clients and have received numerous grateful testimonials from my clients.
                                    I look forward to speaking with you about your unique project, be it landing website or large and complicated web
                                    application.
                                </p>

                                <div className="mt-6">
                                    <Button
                                        colorTheme="green"
                                        onClick={handleContactButtonClick}
                                    >
                                        Contact me
                                    </Button>
                                </div>
                            </div>

                            {/* Right column - Skills */}
                            <aside className="flex flex-col items-center w-full max-w-[590px] px-2">
                                <h3 className="mt-5 lg:text-2xl text-lg font-semibold text-block">Frontend:</h3>
                                <div className="w-full flex flex-row flex-wrap justify-center items-center mt-2 gap-2">
                                    {frontendSkills.map((item) => (
                                        <SkillBlock key={item} title={item} />
                                    ))}
                                </div>

                                <h3 className="mt-5 lg:text-2xl text-lg font-semibold text-block">Backend:</h3>
                                <div className="w-full flex flex-row flex-wrap justify-center items-center mt-2 gap-2">
                                    {backendSkills.map((item) => (
                                        <SkillBlock key={item} title={item} />
                                    ))}
                                </div>

                                <h3 className="mt-5 lg:text-2xl text-lg font-semibold text-block">Cloud & DevOps:</h3>
                                <div className="w-full flex flex-row flex-wrap justify-center items-center mt-2 gap-2">
                                    {cloudAndDevOpsSkills.map((item) => (
                                        <SkillBlock key={item} title={item} />
                                    ))}
                                </div>

                                <h3 className="mt-5 lg:text-2xl text-lg font-semibold text-block">Web3:</h3>
                                <div className="w-full flex flex-row flex-wrap justify-center items-center mt-2 gap-2">
                                    {web3skills.map((item) => (
                                        <SkillBlock key={item} title={item} />
                                    ))}
                                </div>
                            </aside>
                        </div>
                    </div>
                </div>
            </section>
    );
};

export default Expertise;
