"use client"

import CardCertification from "../Cards/CardCertification"
import { useState } from "react"
import { MyCertifications } from "@/app/data/MyCertifications"
import { Certification } from "@/app/types/Certification";

export default function Certification () {
    const [visibleCount, setVisibleCount] = useState(8);
    const [showAll, setShowAll] = useState(false);

    const handleShowMore = () => {
        setShowAll(true);
    };

    const handleShowLess = () => {
        setShowAll(false);
    };

    return (
        <div className="flex flex-col gap-5 items-center">
            <div className="
                grid grid-cols-1 gap-5
                md:grid-cols-2
                lg:grid-cols-3
                xl:grid-cols-4
                ">
                {MyCertifications.slice(0, showAll ? MyCertifications.length : visibleCount).map((certification) => (
                    <CardCertification
                        key={certification.id}
                        image={certification.ImageInstitutional}
                        NameCertification={certification.NameCertification}
                        Institution={certification.Institution}
                        Age={certification.Age}
                        Url={certification.UrlCertification}
                    />
                ))}
            </div>
            {!showAll && visibleCount < MyCertifications.length &&
                <button 
                    className="bg-sky-800 mt-10 px-5 py-2 rounded-full text-xl text-white font-bold transition-colors hover:bg-blue-500" 
                    onClick={handleShowMore} >
                    Mostrar Mais
                </button>
            }
            {showAll &&
                <button 
                    className="bg-sky-800 mt-10 px-5 py-2 rounded-full text-xl text-white font-bold transition-colors hover:bg-blue-500" 
                    onClick={handleShowLess}>
                    Mostrar Menos
                </button>
            }
        </div>
    )
}