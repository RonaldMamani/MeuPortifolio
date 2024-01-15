import Blogr from "@/../public/Projects/Blogr.jpg"
import Sunnyside from "@/../public/Projects/Sunnyside.jpg"
import News from "@/../public/Projects/NewsHP.jpg"
import TypeMaster from "@/../public/Projects/TypeMaster.jpg"
import Loop from "@/../public/Projects/LoopStudio.jpg"
import Art from "@/../public/Projects/ArtGallery.jpg"
import Spitter from "@/../public/Projects/Splitter.jpg"
import GitHub from "@/../public/Projects/GitHub.jpg"
import HealtyRecipes from "@/../public/Projects/healty-Recipes.jpg"
import ReactStock from "@/../public/Projects/React-Stock.jpg"
import PlanetsFact from "@/../public/Projects/PlanetsFact.jpg"
import SpaceTourism from "@/../public/Projects/SpaceTourism.jpg"

import { Project } from "../types/Project"

export const MeusProjetos: Project[] = [
    {
        id: 1,
        imageSrc: HealtyRecipes,
        title: "Healty Recipes",
        description: `
            Site de Receitas e Busca de Receitas, o projeto tem o objetivo de mostrar receitas consumindo API de Receitas,
            existe também a busca de receitas relacionadas na busca.
            `,
        gitLink: "https://github.com/RonaldMamani/Healty_Recipes",
        hostedLink: "https://healty-recipes-pi.vercel.app/",
        technologies: ["HTML", "CSS", "TypeScript", "Bootstrap", "Angular"],
    },
    {
        id: 2,
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
        id: 3,
        imageSrc: SpaceTourism,
        title: "Space Tourism",
        description: `
            Site de Turismo Espacial, onde podemos navegar para saber sobre a empresa e onde encontramos pessoas, projetos e planetas 
            relacionados a empresa. o site foi construido utilizando Angular 17 com Typescript com TailwindCSS com Router.
            `,
        gitLink: "https://github.com/RonaldMamani/SpaceTourism_Angular",
        hostedLink: "https://space-tourism-angular-sigma.vercel.app/",
        technologies: ["HTML", "CSS", "TypeScript", "TailwindCSS", "Angular"],
    },
    {
        id: 4,
        imageSrc: ReactStock,
        title: "React Stock",
        description: `
            Sistema de Gerenciamento de Estoque, onde tem a funcionalidade de Adicionar, Modificar e Excluir objetos do Estoque,
            Tambem podemos vizualizar a quantidade de produtos no estoque.
            `,
        gitLink: "https://github.com/RonaldMamani/Stock-React",
        hostedLink: "https://stock-react-eight.vercel.app/",
        technologies: ["HTML", "CSS", "JavaScript", "ReactJs"],
    },
    {
        id: 5,
        imageSrc: GitHub,
        title: "GitHub User Search",
        description: `
            Site de Busca de Usuario consumindo API do GitHub, utilizando ReactJS, NextJS e StyledComponents, o site e responsivo
            para diversas telas.
            `,
        gitLink: "https://github.com/RonaldMamani/GitHub_User_Search",
        hostedLink: "https://git-hub-user-search-ashy.vercel.app/",
        technologies: ["HTML", "CSS", "JavaScript", "StyledComponents", "ReactJs", "NextJs"],
    },
    {
        id: 6,
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
        id: 7,
        imageSrc: Art,
        title: "Art Gallery",
        description: `
            Site de Art Gallery, com estrutura baseado em uma pagina de Galeria, a pagina utiliza links com React Router, o site foi desenvolvido com NextJs, ReactJs e utilizando o 
            Framework do TailwindCSS, a pagina é totalmente responsiva em diferentes tipos de telas.`,
        gitLink: "https://github.com/RonaldMamani/Art_Gallety",
        hostedLink: "https://art-gallety.vercel.app/",
        technologies: ["HTML", "CSS", "JavaScript", "TailwindCSS", "ReactJs", "NextJs"],
    },
    {
        id: 8,
        imageSrc: Loop,
        title: "Loop Studios",
        description: `
            Site de LoopStudios, com estrutura baseado em uma pagina de Studio, o site foi desenvolvido em ReactJS com Vite e utilizando o 
            Framework do TailwindCSS, a pagina é totalmente responsiva em diferentes tipos de telas como Mobile, Tablet e Desktop.`,
        gitLink: "https://github.com/RonaldMamani/LoopStudios_Page",
        hostedLink: "https://loop-studios-page.vercel.app/",
        technologies: ["HTML", "CSS", "JavaScript", "TailwindCSS", "ReactJs"],
    },
    {
        id: 9,
        imageSrc: Blogr,
        title: "Blogr",
        description: `
            Site de Blogr, com estrutura baseado em pagina em Landing Page, o site foi desenvolvido em ReactJS com Vite e utilizando o 
            Framework do TailwindCSS, a pagina é totalmente responsiva em diferentes tipos de telas como Mobile, Tablet e Desktop.`,
        gitLink: "https://github.com/RonaldMamani/Blogr_Page",
        hostedLink: "https://blogr-page-dusky.vercel.app/",
        technologies: ["HTML", "CSS", "JavaScript", "TailwindCSS", "ReactJs"],
    },
    {
        id: 10,
        imageSrc: Sunnyside,
        title: "SunnySide",
        description: `
            Site de Sunnyside, com estrutura baseado em pagina de nutrição, o site foi desenvolvido em ReactJS com Vite e usando Framework
            do TailwindCSS, a pagina é totalmente responsiva em diferentes tipos de telas como Mobile, Tablet e Desktop.
            `,
        gitLink: "https://github.com/RonaldMamani/SunnySide-Page",
        hostedLink: "https://sunny-side-page.vercel.app/",
        technologies: ["HTML", "CSS", "JavaScript", "TailwindCSS", "ReactJs"],
    },
    {
        id: 11,
        imageSrc: News,
        title: "News HomePage",
        description: `
            Site de News, a estrutura é baseado em uma pagina de Noticias de Games, o site foi desenvolvido em ReactJS com Vite e com os Frameworks
            de TailwindCSS e Bootstrap, a pagina é totalmente responsiva em diferentes tipos de telas como Mobile, Tablet e Desktop.
            `,
        gitLink: "https://github.com/RonaldMamani/News-HomePage",
        hostedLink: "https://news-home-page-ten.vercel.app/",
        technologies: ["HTML","JavaScript", "TailwindCSS", "Bootstrap", "ReactJs"],
    },
    {
        id: 12,
        imageSrc: TypeMaster,
        title: "TypeMaster",
        description: `
            Site de TypeMaster, a pagina e baseada em uma pagina de produto a venda, o site foi desenvolvido em ReactJS com Vite e utilizando o Framework
            do TailwindCSS, a pagina é totalmente responsiva em diferentes tipos de telas como Mobile, Tablet e Desktop.
            `,
        gitLink: "https://github.com/RonaldMamani/Typemaster-Page",
        hostedLink: "https://typemaster-page.vercel.app/",
        technologies: ["HTML", "CSS", "JavaScript", "TailwindCSS", "ReactJs"],
    },
]