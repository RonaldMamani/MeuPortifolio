import TextPrincipal from "../Text/TextPrincipal";
import TextSecundary from "../Text/TextSecundary";
import TextDinamic from "../Text/TextDinamic";
import { SiGithub, SiLinkedin } from "@icons-pack/react-simple-icons";


export default function HomePage(){
    return(
        <section className="relative">
            <div className="
                bg-[url('../../public/bg.webp')] bg-cover blur-sm h-[calc(100vh-4rem)]
                md:h-[calc(100vh-7rem)]">
                <div className="bg-black/80 h-full"></div>
            </div>
            <div className="
                absolute flex flex-col gap-8
                px-4 py-4 text-center top-20
                md:p-10 md:text-start
                lg:px-32 lg:top-32
                ">
                    <TextPrincipal className="text-3xl font-semibold text-white" text="Olá, Meu Nome é"/>
                    <TextSecundary className="uppercase text-6xl font-extrabold text-white" text="Ronaldo Arley"/>
                    <TextDinamic text="Eu sou " 
                        className="text-4xl font-extrabold" classNameDinamic="uppercase text-sky-700" 
                        textDinamic1="Programador Front-End" textDinamic2="Desenvolvedor Front-End" 
                    />
                    <div className="
                        flex justify-center gap-5 items-center
                        md:justify-start
                        ">
                        <a target="_blank" href="https://www.linkedin.com/in/ronaldo-mamani-339b0b192/" className="">
                            <SiLinkedin className="fill-white hover:fill-[#0A66C2] hover:bg-white rounded-lg transition-colors" width={40} height={40} />
                        </a>
                        <a target="_blank" href="https://github.com/RonaldMamani">
                            <SiGithub className="fill-white hover:fill-[#181717] hover:bg-white rounded-full transition-colors" width={40} height={40} />
                        </a>
                    </div>
                </div>
        </section>
    )
}