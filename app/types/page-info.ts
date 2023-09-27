// import type { RichTextContent } from "@graphcms/rich-text-types";
// import { KnownTech } from "./projects"

// export type Social = {
//     url: string;
//     iconSvg: string;
//     name: string;
// }

// export type HomePageInfo = {
//     introduction: {
//         raw: RichTextContent;
//     }
//     technologies: KnownTech[]
//     profilePicture: {
//         url: string;
//     }
//     socials: Social[]
//     KnownTech: KnownTech[]
// }

// export type HomePageData = {
//     page: HomePageInfo
// }

import type { RichTextContent } from '@graphcms/rich-text-types'
import { KnownTech } from './projects'

export type Social = {
  url: string
  iconSvg: string
}

export type HomePageInfo = {
  introduction: {
    raw: RichTextContent
  }
  technologies: KnownTech[]
  profilePicture: {
    url: string
  }
  socials: Social[]
  knownTechs: KnownTech[]
}


export type ProjectsPageStaticData = {
  projects: {
    slug: string
  }[]
}

export type HomePageData = {
  page: HomePageInfo
}