import TextSecundary from "../Text/TextSecundary";
import CardEducation from "../Cards/CardEducation";

export default function Education() {
    return (
        <div className="
            grid grid-cols-1 gap-5
            md:grid-cols-2 md:gap-10
            lg:gap-16
            ">
            <div className="flex flex-col items-center gap-8">
                <TextSecundary className="text-4xl font-bold" text="Formação" />
                <div className="
                    grid grid-cols-1 gap-5
                    md:grid-cols-1
                    lg:grid-cols-2 lg:gap-8
                    ">
                    <CardEducation 
                        NameInstitution="Governo Estadual - Escola Publica" 
                        Status="Ensino Medio - Completo" 
                        className="bg-[url('../../public/Educacao/SP-logo.png')]" />
                    <CardEducation 
                        NameInstitution="Anhembi Morumbi - Sistemas de Informação" 
                        Status="Bacharelato - 2020 - 2023" 
                        className="bg-[url('../../public/Educacao/UAM.jpg')]" />
                </div>
            </div>
            <div className="flex flex-col items-center gap-8">
                <TextSecundary className="text-4xl font-bold" text="Cursos" />
                <div className="
                    grid grid-cols-1 gap-5
                    md:grid-cols-1
                    lg:grid-cols-2 lg:gap-8
                    ">
                    <CardEducation 
                        NameInstitution="Alura" 
                        Status="Cursos Online - 2022" 
                        className="bg-[url('../../public/Educacao/alura-logo.png')]" />
                    <CardEducation 
                        NameInstitution="One Bit Code" 
                        Status="Cursos Online - 2023" 
                        className="bg-[url('../../public/Educacao/OBC-logo.jpg')]" />
                </div>
            </div>
        </div>
    )
}