// src/data/experience.ts

export interface ExperienceProject {
  year: string
  date: string
  title: string
  category: string
  reference: string
  completedAt: string
}

export const experienceProjects: ExperienceProject[] = [
  {
    year: "2019",
    date: "April 24",
    title: "Procurement of Rubber Boats - Tactical Water Patrol",
    category: "APBN Fiscal Year 2019",
    reference: "SPPB-14/APBN/IV/2019/KORPOLAIRUD",
    completedAt: "April 24, 2019",
  },
  {
    year: "2018",
    date: "May 11",
    title: "Digitalization AK23 - Central Region",
    category: "APBN Fiscal Year 2018",
    reference: "SPPB-17/V/2018/PUSINAFIS",
    completedAt: "May 11, 2018",
  },
  {
    year: "2018",
    date: "May 4",
    title: "Procurement of Increased Sail Ability of Class B Patrol Vessels",
    category: "National Procurement Program",
    reference: "SPPP/26/V/2018/PPK/KOPOLAIRUD",
    completedAt: "May 4, 2018",
  },
]