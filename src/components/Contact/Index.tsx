import { SiFacebook, SiGithub, SiGmail, SiInstagram, SiLinkedin, SiWhatsapp } from "@icons-pack/react-simple-icons";
import TextDinamic from "../Text/TextDinamic";
import TextSecundary from "../Text/TextSecundary";
import TextCommon from "../Text/TextCommon";

export default function Contact() {
    return (
        <section id="contato" className="
            bg-[url('../../public/contact-bg.jpg')] bg-cover bg-center 
            min-h-screen
            lg:h-screen">
            <div className="bg-black/80 h-full">
                <div className="
                    flex flex-col gap-10 py-6 px-4
                    md:px-10 md:py-14 
                    lg:px-32 lg:py-24
                    ">
                    <TextSecundary className="text-4xl md:text-5xl font-bold uppercase text-center text-white" text="Entre em Contato Comigo" />
                    <div className="flex flex-col gap-14 items-center">
                        <div className="flex flex-col text-center gap-8">
                            <TextDinamic 
                                className="text-2xl font-bold" classNameDinamic="text-sky-700 uppercase" 
                                text="Entre em contato comigo pelo" textDinamic1="_Email" textDinamic2="_WhatsApp" 
                            />
                            <div className="
                                flex flex-col justify-center gap-8 items-center
                                lg:flex-row
                                ">
                                <a 
                                    target="_blank" 
                                    href="https://api.whatsapp.com/send?phone=5511912628484" 
                                    className="
                                    border-4 border-gray-500 rounded-full py-2 px-4 items-center flex gap-3 text-white
                                    group hover:border-green-500 transition-colors
                                    ">
                                    <SiWhatsapp className="group-hover:fill-[#25D366] rounded-full transition-colors" />
                                    <span 
                                        className="text-xl font-bold group-hover:text-green-500 transition-colors">(11) 91262-8484</span>
                                </a>
                                <button className="
                                    border-4 border-gray-500 rounded-full py-2 px-4 items-center flex gap-3 text-white
                                    group hover:border-[#EA4335] transition-colors
                                    ">
                                    <SiGmail className="group-hover:fill-[#EA4335] rounded-full transition-colors" width={25} height={20} />
                                    <span 
                                        className="text-xl font-bold group-hover:text-[#EA4335] transition-colors">Ronaldmamani140@gmail.com</span>
                                </button>
                            </div>
                        </div>
                        <div className="flex flex-col gap-8 items-center">
                            <TextDinamic 
                                    className="text-2xl font-bold" classNameDinamic="text-sky-700 uppercase" 
                                    text="Minhas" textDinamic1="_Redes" textDinamic2="_Sociais" 
                            />
                            <div className="flex justify-center gap-10">
                                <a target="_blank" href="https://www.facebook.com/RonaldMamani1400/">
                                    <SiFacebook className="fill-white hover:fill-[#1877F2] transition-colors" width={50} height={50} />
                                </a>
                                <a target="_blank" href="https://www.instagram.com/ronald_mamani1000/">
                                    <SiInstagram className="fill-white hover:fill-[#E4405F] transition-colors" width={50} height={50} />
                                </a>
                                <a target="_blank" href="https://www.linkedin.com/in/ronaldo-mamani-339b0b192/">
                                    <SiLinkedin className="fill-white hover:fill-[#0A66C2] transition-colors" width={50} height={50} />
                                </a>
                                <a target="_blank" href="https://github.com/RonaldMamani">
                                    <SiGithub className="fill-white hover:fill-[#5f5f5f] transition-colors" width={50} height={50} />
                                </a>
                            </div>
                        </div>
                        <TextCommon className="text-4xl font-bold border-b-4 p-3 uppercase" text="São Paulo - SP" />
                    </div>
                </div>
            </div>
        </section>
    )
}