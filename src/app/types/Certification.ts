import { StaticImageData } from "next/image";

export type Certification = {
    id: number;
    ImageInstitutional: StaticImageData;
    NameCertification: string;
    Institution: string;
    Age: string;
    UrlCertification: string
}