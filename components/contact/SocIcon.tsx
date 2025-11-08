import Image, { type StaticImageData } from "next/image";

export interface SocIconProps {
    src: StaticImageData;
    name: string;
    linkTo: string;
}

export default function SocIcon({
                                    src,
                                    name,
     linkTo,
    }: SocIconProps) {
    return (
        <a
            href={linkTo}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={name}
        >
            <div className="flex items-center justify-center bg-[color:var(--icon-bg)] hover:bg-[color:var(--hover-color)] transform hover:scale-95 transition-all duration-200 w-14 h-14 overflow-hidden rounded">
                <Image
                    src={src}
                    alt={name}
                    width={24}
                    height={24}
                    className="w-6 h-6 object-contain"
                />
            </div>
        </a>
    );
}
