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
                    text="Olá sou Ronaldo Arley, sou de São Paulo, SP, sou formado em Sistemas de Informação da Universidade Anhembi Morumbi(UAM), 
                        sou alguem interessado pela área de Tecnologia, meu primeiro acesso com a programação foi atravez da Universidade em 2020, comecei utilizando a linguagem Java e C++,
                        logo depois escalonei em estrutura de dados, POO(Programação Orientada a Objetos), logo ápos comecei a me interessar pela área
                        Front-End, onde busquei conhecimentos em HTML, CSS e JavaScript através de aulas virtuais e cursos e  durante a Graduação na Universidade.
                        Atualmente tenho trabalhado minha especialidade é em Desenvolvimento em projetos com ReactJS, Angular e Next, busco sempre aprender e expandir meus conhecimentos
                        e esta a par das novas tecnologias e sempre visando entrar na area de desenvolvimento.
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
                                    <TextCommon className="text-gray-300 text-sm" text="Intermediario" />
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