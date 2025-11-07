'use client';
import React from 'react';

type SkillBlockProps = {
    title: string;
};

const SkillBlock: React.FC<SkillBlockProps> = ({ title }) => {
    return (
        <div
            className="flex flex-col items-center justify-center
                 bg-green-button
                 h-[24px] px-[15px] m-[5px]
                 rounded-md shadow-sm text-[16px] md:text-[14px] font-medium text-primary"
        >
            {title}
        </div>
    );
};

export default SkillBlock;
