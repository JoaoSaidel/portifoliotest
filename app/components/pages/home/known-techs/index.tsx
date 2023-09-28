'use client' 

import { SectionTitle } from "@/app/components/section-title"
import { KnownTech } from "./known-tech"
import { TbBrandNextjs } from "react-icons/tb"
import { KnownTech as IKnowTech } from "@/app/types/projects"

type KnownTechsProps = {
    techs: IKnowTech[]
}

export const KnownTechs = ({ techs}: KnownTechsProps) => {
    return (
        <section className="container py-16">
            <SectionTitle subtitle="competencias" title="Conhecimento" />

            <div className="grid grid-cols-[repeat(auto-fit,minmax(264px,1fr))] gap-3 mt-[60px]">
                {techs?.map((tech) => (
                <KnownTech key={tech.name} tech={tech} />
                ))}
            </div>
        </section>
    )
}