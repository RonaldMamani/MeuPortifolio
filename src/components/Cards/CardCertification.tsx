import Image, { StaticImageData } from "next/image";
import TextCommon from "../Text/TextCommon";
import TextSecundary from "../Text/TextSecundary";

type CardCertification = {
    image: StaticImageData,
    NameCertification: string,
    Institution: string,
    Age: string,
    Url?: string
}

export default function CardCertification({image, NameCertification, Institution, Age, Url} : CardCertification) {
    return (
        <a 
            target="_blank" 
            href={Url} 
            className="
                grid grid-cols-2 gap-5 border-4 border-gray-600 rounded-xl p-4
                group hover:border-gray-300 transition-colors
                ">
            <Image className="rounded-full" src={image} alt="Instituição de Certificação" />
            <div className="flex flex-col gap-1">
                <TextSecundary className="font-bold text-lg" text={NameCertification} />
                <span className="text-white/75">{Institution}</span>
                <span className="text-gray-500">{Age}</span>
            </div>
        </a>
    )
}