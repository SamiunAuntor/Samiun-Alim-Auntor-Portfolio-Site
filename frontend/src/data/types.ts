import { z } from "zod";

export const socialLinkSchema = z.object({
  label: z.string(),
  href: z
    .string()
    .min(1)
    .refine(
      (value) => value.startsWith("mailto:") || value.startsWith("https://"),
      "Expected an https or mailto link."
    ),
  shortLabel: z.string(),
  external: z.boolean().default(true)
});

export const heroStatSchema = z.object({
  label: z.string(),
  value: z.string(),
  detail: z.string()
});

export const skillCategorySchema = z.object({
  title: z.string(),
  description: z.string(),
  items: z.array(z.string()).min(1)
});

export const projectDetailFactSchema = z.object({
  label: z.string(),
  value: z.string()
});

export const projectDetailGroupSchema = z.object({
  label: z.string(),
  items: z.array(z.string()).min(1)
});

export const projectDetailSectionSchema = z
  .object({
    id: z.string(),
    title: z.string(),
    intro: z.string().optional(),
    bullets: z.array(z.string()).optional(),
    groups: z.array(projectDetailGroupSchema).optional(),
    facts: z.array(projectDetailFactSchema).optional(),
    code: z.string().optional()
  })
  .refine(
    (value) =>
      Boolean(
        value.intro ||
          value.bullets?.length ||
          value.groups?.length ||
          value.facts?.length ||
          value.code
      ),
    "Project detail section needs some content."
  );

export const projectDetailSchema = z.object({
  slug: z.string(),
  tagline: z.string(),
  quickFacts: z.array(projectDetailFactSchema).min(2),
  sections: z.array(projectDetailSectionSchema).min(1)
});

export const projectSchema = z.object({
  slug: z.string(),
  title: z.string(),
  eyebrow: z.string(),
  description: z.string(),
  impact: z.string(),
  features: z.array(z.string()).min(3),
  stack: z.array(z.string()).min(3),
  links: z.object({
    live: z.string().url().optional(),
    github: z.string().url().optional(),
    backend: z.string().url().optional(),
    caseStudy: z.string().optional()
  }),
  featured: z.boolean().default(false)
});

export const certificationSchema = z.object({
  title: z.string(),
  provider: z.string(),
  summary: z.string(),
  status: z.enum(["Completed", "Ongoing"]),
  track: z.string().optional(),
  note: z.string().optional()
});

export const educationSchema = z.object({
  degree: z.string(),
  institution: z.string(),
  range: z.string(),
  status: z.string(),
  areas: z.array(z.string()).min(1)
});

export type SocialLink = z.infer<typeof socialLinkSchema>;
export type HeroStat = z.infer<typeof heroStatSchema>;
export type SkillCategory = z.infer<typeof skillCategorySchema>;
export type ProjectDetailFact = z.infer<typeof projectDetailFactSchema>;
export type ProjectDetailGroup = z.infer<typeof projectDetailGroupSchema>;
export type ProjectDetailSection = z.infer<typeof projectDetailSectionSchema>;
export type ProjectDetail = z.infer<typeof projectDetailSchema>;
export type Project = z.infer<typeof projectSchema>;
export type Certification = z.infer<typeof certificationSchema>;
export type Education = z.infer<typeof educationSchema>;
