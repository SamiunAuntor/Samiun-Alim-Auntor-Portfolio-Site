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
    caseStudy: z.string().optional()
  }),
  featured: z.boolean().default(false)
});

export const highlightSchema = z.object({
  title: z.string(),
  description: z.string(),
  outcome: z.string()
});

export const certificationSchema = z.object({
  title: z.string(),
  provider: z.string(),
  summary: z.string(),
  status: z.string()
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
export type Project = z.infer<typeof projectSchema>;
export type Highlight = z.infer<typeof highlightSchema>;
export type Certification = z.infer<typeof certificationSchema>;
export type Education = z.infer<typeof educationSchema>;
