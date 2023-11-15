import { StaticImageData } from "next/image"

export type Project = {
    id: number;
    imageSrc: StaticImageData;
    title: string;
    description: string;
    gitLink: string;
    hostedLink: string;
    technologies: string[]
}