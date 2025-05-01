"use client"

import TextCommon from "../Text/TextCommon";

import { useState } from "react";
import TextDinamic from "../Text/TextDinamic";
import { SiAngular, SiBootstrap, SiCss3, SiExpress, SiGit, SiGithub, SiHtml5, SiJavascript, SiMicrosoftsqlserver, SiMysql, SiNextdotjs, SiNodedotjs, SiOracle, SiPython, SiReact, SiSass, SiStyledcomponents, SiTailwindcss, SiTypescript } from "@icons-pack/react-simple-icons";
import { Technologies } from "@/app/types/Techonologies";

const Stacks: Technologies[] = [
    {
        name: "HTML5",
        imageTech: <SiHtml5 size={100} />,
        
        className: "text-[#909090] hover:text-[#E34F26] hover:scale-110 transition-all duration-300",
    },
    {
        name: "CSS3",
        imageTech: <SiCss3 size={100} />,
        className: "text-[#909090] hover:text-[#1572B6] hover:scale-110 transition-all duration-300",
    },
    {
        name: "Sass",
        imageTech: <SiSass size={100} />,
        className: "text-[#909090] hover:text-[#CC6699] hover:scale-110 transition-all duration-300",
    },
    {
        name: "JavaScript",
        imageTech: <SiJavascript  size={100} />,
        className: "text-[#909090] hover:text-[#F7DF1E] hover:scale-110 transition-all duration-300",
    },
    {
        name: "TypeScript",
        imageTech: <SiTypescript  size={100} />,
        className: "text-[#909090] hover:text-[#3178C6] hover:scale-110 transition-all duration-300",
    },
    {
        name: "Python",
        imageTech: <SiPython  size={100} />,
        className: "text-[#909090] hover:text-[#3776AB] hover:scale-110 transition-all duration-300",
    },
    {
        name: "React",
        imageTech: <SiReact  size={100} />,
        className: "text-[#909090] hover:text-[#61DAFB] hover:scale-110 transition-all duration-300",
    },
    {
        name: "Angular",
        imageTech: <SiAngular size={100} />,
        className: "text-[#909090] hover:text-[#DD0031] hover:scale-110 transition-all duration-300",
    },
    {
        name: "Nextjs",
        imageTech: <SiNextdotjs size={100} />,
        className: "text-[#909090] bg-white rounded-full p-1 hover:text-[#000000] hover:scale-110 transition-all duration-300",
    },
    {
        name: "Node.js",
        imageTech: <SiNodedotjs  size={100} />,
        className: "text-[#909090] hover:text-[#339933] hover:scale-110 transition-all duration-300",
    },
    {
        name: "Express",
        imageTech: <SiExpress size={100} />,
        className: "text-[#909090] hover:text-[#505050] hover:scale-110 transition-all duration-300",
    },
    {
        name: "Styled Components",
        imageTech: <SiStyledcomponents  size={100} />,
        className: "text-[#909090] hover:text-[#DB7093] hover:scale-110 transition-all duration-300",
    },
    {
        name: "TailwindCss",
        imageTech: <SiTailwindcss size={100} />,
        className: "text-[#909090] hover:text-[#38B2AC] hover:scale-110 transition-all duration-300",
    },
    {
        name: "Bootstrap",
        imageTech: <SiBootstrap  size={100} />,
        className: "text-[#909090] hover:text-[#7952B3] hover:scale-110 transition-all duration-300",
    },
    {
        name: "MySQL",
        imageTech: <SiMysql size={100} />,
        className: "text-[#909090] hover:text-[#4479A1] hover:scale-110 transition-all duration-300",
    },
    {
        name: "SQL Server",
        imageTech: <SiMicrosoftsqlserver  size={100}/>,
        className: "text-[#909090]  hover:text-[#CC2927] hover:scale-110 transition-all duration-300",
    },
    {
        name: "Oracle",
        imageTech: <SiOracle size={100} />,
        className: "text-[#909090] hover:text-[#F80000] hover:scale-110 transition-all duration-300",
    },
    {
        name: "Git",
        imageTech: <SiGit size={100} />,
        className: "text-[#909090] hover:text-[#F1502F] hover:scale-110 transition-all duration-300",
    },
    {
        name: "Git Hub",
        imageTech: <SiGithub  size={100} />,
        className: "text-[#909090] hover:text-[#181717] hover:scale-110 transition-all duration-300",
    },
];

export default function Techs() {
    const [open, setOpen] = useState(false)
    return (
        <div className="
            flex flex-col items-center text-center gap-5
            md:grid md:grid-cols-2 md:gap-10 md:items-start md:text-start
            ">
            <div className="flex flex-col gap-5">
                <TextDinamic className="text-3xl font-bold" classNameDinamic="uppercase text-sky-700" text="Minhas " textDinamic1="Tecnologias" textDinamic2="Habilidades" />
                <TextCommon 
                    className="text-gray-400" 
                    text="
                        Tenho um compromisso constante com o aprendizado e a evolução na área de tecnologia. Desde meu primeiro contato com programação, venho me 
                        aprofundando em diversas ferramentas e conceitos fundamentais do desenvolvimento. Acredito que o conhecimento se fortalece na prática, por 
                        isso desenvolvo projetos, participo de cursos e estou sempre acompanhando as tendências do mercado. 
                        "
                    />
                <TextCommon 
                    className="text-gray-400"
                    text="
                        Ao longo dessa jornada, adquiri experiência sólida em tecnologias como HTML5, CSS3, Sass, JavaScript, TypeScript, Python, ReactJS, Angular, 
                        Next.js, Node.js, Express, Styled Components, TailwindCSS, Bootstrap, além de bancos de dados como MySQL, SQL Server e Oracle. Também domino 
                        ferramentas de versionamento como Git e GitHub. Minha dedicação e curiosidade me impulsionam a crescer continuamente como desenvolvedor, buscando 
                        sempre soluções modernas e eficientes.
                        "
                    />
            </div>
            <div className="
                p-5 rounded-3xl bg-black/80
                md:p-10
            ">
                <div className="
                    grid grid-cols-3 gap-5 items-center
                    lg:grid-cols-4 lg:gap-8
                    ">
                        {(open ? Stacks : Stacks.slice(0, 12)).map((tech, index) => (
                            <div key={index} className="text-4xl flex justify-center items-center">
                            <div className={tech.className}>
                                {tech.imageTech}
                            </div>
                            </div>
                        ))}
                </div>
                {!open ? (
                    <button className="text-sky-700 font-extrabold pt-5 transition-colors hover:text-white hover:border-b-4" onClick={() => setOpen(!open)}>Mostrar Mais</button>
                ) : (
                    <button className="text-sky-700 font-extrabold pt-5 transition-colors hover:text-white hover:border-b-4" onClick={() => setOpen(!open)}>Mostrar Menos</button>
                )}
            </div>
        </div>
    )
}