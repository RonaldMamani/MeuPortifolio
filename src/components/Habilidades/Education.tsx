import TextSecundary from "../Text/TextSecundary";
import CardEducation from "../Cards/CardEducation";

export default function Education() {
    return (
        <div className="
            grid grid-cols-1 gap-5
            md:grid-cols-2 md:gap-10
            lg:gap-10
            ">
            <div className="flex flex-col items-center gap-8">
                <TextSecundary className="text-4xl font-bold" text="Formação" />
                <div className="
                    grid grid-cols-1 gap-5 items-center
                    md:grid-cols-1
                    lg:grid-cols-2 lg:gap-10
                    ">
                    <CardEducation 
                        NameInstitution="Governo Estadual - Escola Publica" 
                        Status="Ensino Medio - Completo" 
                        className="bg-[url('../../public/Educacao/SP-logo.png')]" />
                    <CardEducation 
                        NameInstitution="Anhembi Morumbi - Sistemas de Informação" 
                        Status="Bacharelato - 2020 - 2023" 
                        className="bg-[url('../../public/Educacao/UAM.jpg')]" />
                    <CardEducation 
                        NameInstitution="Centro Educacional das Americas - Analise e Desenvolvimento de Sistemas" 
                        Status="Bacharelato - 2024 - Em Andamento" 
                        className="bg-[url('../../public/Educacao/FAM.png')]" />
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
                        Status="Cursos Online" 
                        className="bg-[url('../../public/Educacao/alura-logo.png')]" />
                    <CardEducation 
                        NameInstitution="One Bit Code" 
                        Status="Cursos Online" 
                        className="bg-[url('../../public/Educacao/OBC-logo.jpg')]" />
                    <CardEducation 
                        NameInstitution="B7 Web" 
                        Status="Cursos Online" 
                        className="bg-[url('../../public/Educacao/B7WEB.jpg')]" />
                    <CardEducation 
                        NameInstitution="Udemy" 
                        Status="Cursos Online" 
                        className="bg-[url('../../public/Educacao/UDEMY.jpg')]" />
                </div>
            </div>
        </div>
    )
}