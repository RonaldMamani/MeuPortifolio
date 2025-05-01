import Foto from "@/../public/Perfil.jpg"
import Image from "next/image"
import TextCommon from "../Text/TextCommon"
import TextDinamic from "../Text/TextDinamic"
import TextSecundary from "../Text/TextSecundary"
import { US } from "country-flag-icons/react/3x2"
import { BR } from "country-flag-icons/react/3x2"
import { ES } from "country-flag-icons/react/3x2"

export default function Sobre() {
    return(
        <section id="sobre" className="
            px-4 py-8 flex flex-col gap-10
            md:p-10
            lg:px-32 lg:py-20 lg:h-screen lg:grid lg:grid-cols-3
            ">
                <Image 
                    src={Foto} alt="Foto de Perfil de Ronaldo Arley" title="Foto Perfil"
                    className="rounded-full m-auto" height={450}
                />
                <div className="
                    py-10 flex flex-col gap-5 text-center 
                    lg:col-span-2 lg:text-start">
                    <TextDinamic className="text-2xl font-extrabold font-serif" classNameDinamic="uppercase text-sky-700" text="Sou Ronaldo Arley e sou " textDinamic1="Desenvolvedor Front-End" textDinamic2="Programador Front-End" />
                    <TextCommon className="text font-serif" 
                    text="
                    Olá! Me chamo Ronaldo Arley, sou de São Paulo, SP, e atualmente curso Análise e Desenvolvimento de Sistemas. Minha trajetória na programação 
                    começou em 2020, por meio da universidade, com as linguagens Java e C++. Desde então, aprofundei meus conhecimentos em estrutura de dados, 
                    Programação Orientada a Objetos (POO) e, com o tempo, direcionei meu interesse na área de desenvolvimento. No Front-End, venho estudando e 
                    desenvolvendo projetos acadêmicos e pessoais com React.js, Angular, Next.js, HTML, CSS, JavaScript e TypeScript. No Back-End, adquiri experiência 
                    prática com Node.js, Express, Python e Java, criando APIs, aplicando lógica de negócios e integrando com bancos de dados. Tenho também conhecimento 
                    em bancos de dados relacionais, como MySQL, SQL Server e Oracle, com foco em modelagem, consultas SQL e estruturação de dados. Além da parte técnica, 
                    possuo fluência em espanhol, inglês avançado e soft skills como comunicação, adaptabilidade e organização. Atualmente, estou em transição para o 
                    mercado de tecnologia, pronto para contribuir com projetos de desenvolvimento e continuar evoluindo profissionalmente ao lado de equipes colaborativas 
                    e inovadoras.
                    " 
                    />
                    <div className="
                    flex flex-col gap-5
                    ">
                        <TextSecundary text="Idiomas:" className="text-lg font-bold" />
                        <div className="lg:grid lg:grid-cols-2">
                            <div className="grid grid-cols-3 gap-12 ">
                                <div className="flex flex-col items-center gap-1">
                                    <US className="" title="Inglês" />
                                    <TextCommon className="text-gray-300 text-sm" text="Avançado" />
                                </div>
                                <div className="flex flex-col items-center gap-1">
                                    <BR className="" title="Português - Brasil" />
                                    <TextCommon className="text-gray-300 text-sm" text="Fluente Nativo" />
                                </div>
                                <div className="flex flex-col items-center gap-1">
                                    <ES className="" title="Espanhol" />
                                    <TextCommon className="text-gray-300 text-sm" text="Fluente Nativo" />
                                </div>
                            </div>
                            <div className="max-[1023px]:hidden"></div>
                        </div>
                    </div>
                </div>
        </section>
    )
}