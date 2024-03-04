import SpaceTourism from "@/../public/Projetos/SpaceTourism.jpg"
import PlanetsFact from "@/../public/Projetos/PlanetsFact.jpg"
import ArtGallery from "@/../public/Projetos/ArtGallery.jpg"
import Spitter from "@/../public/Projetos/Splitter.jpg"

import { Project } from "../types/Project";

export const MyProjects: Project[] = [
    {
        id: 1,
        imageSrc: PlanetsFact,
        title: "Planets Fact",
        description: `
            Site de Fatos de Planetas com todos os planetas do Sistema Solar, o site foi construido utilizando React com Typescript
            com Router para utilização de navegação dentro do site.
            `,
        gitLink: "https://github.com/RonaldMamani/Planets_Fact",
        hostedLink: "https://planets-fact-cyan.vercel.app/",
        technologies: ["HTML", "CSS", "TypeScript", "TailwindCSS", "ReactJs"],
    },
    {
        id: 2,
        imageSrc: SpaceTourism,
        title: "Space Tourism",
        description: `
            Site de Turismo Espacial, onde podemos navegar para saber sobre a empresa e onde encontramos pessoas, projetos e planetas 
            relacionados a empresa. o site foi construido utilizando Angular 17 com Typescript com TailwindCSS com Router.
            `,
        gitLink: "https://github.com/RonaldMamani/SpaceTourism_Angular",
        hostedLink: "https://space-tourism-angular-sigma.vercel.app/technology",
        technologies: ["HTML", "CSS", "TypeScript", "TailwindCSS", "Angular"],
    },
    {
        id: 3,
        imageSrc: Spitter,
        title: "Spitter",
        description: `
            Site de Splitter, e um sistema de calculo de Gorgeta, esse calculo e aplicando a porcentagem da gorgeta com o numero de pessoas, assim gerando um valor, 
            o site foi desenvolvido em ReactJS utilizando o Framework do TailwindCSS, a pagina é totalmente responsiva em diferentes tipos de telas.`,
        gitLink: "https://github.com/RonaldMamani/Splitter",
        hostedLink: "https://splitter-alpha.vercel.app/",
        technologies: ["HTML", "CSS", "JavaScript", "TailwindCSS", "ReactJs"],
    },
    {
        id: 4,
        imageSrc: ArtGallery,
        title: "Art Gallery",
        description: `
            Site de Art Gallery, com estrutura baseado em uma pagina de Galeria, a pagina utiliza links com React Router, o site foi desenvolvido com NextJs, ReactJs e utilizando o 
            Framework do TailwindCSS, a pagina é totalmente responsiva em diferentes tipos de telas.`,
        gitLink: "https://github.com/RonaldMamani/Art_Gallety",
        hostedLink: "https://art-gallety.vercel.app/",
        technologies: ["HTML", "CSS", "JavaScript", "TailwindCSS", "ReactJs", "NextJs"],
    },
]