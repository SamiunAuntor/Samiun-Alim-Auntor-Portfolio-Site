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

export const projectRoleSchema = z.object({
  summary: z.string(),
  contributions: z.array(z.string()).min(1)
});

export const projectFeatureGroupSchema = z.object({
  title: z.string(),
  items: z.array(z.string()).min(1)
});

export const projectTechCategorySchema = z.object({
  category: z.string(),
  items: z.array(z.string()).min(1)
});

export const projectArchitectureStepSchema = z.object({
  title: z.string(),
  description: z.string()
});

export const projectVisualSchema = z.object({
  title: z.string(),
  description: z.string()
});

export const projectChallengeSchema = z.object({
  challenge: z.string(),
  solution: z.string()
});

export const projectDetailSchema = z.object({
  slug: z.string(),
  type: z.string(),
  status: z.string(),
  tagline: z.string(),
  overview: z.string(),
  purpose: z.string(),
  role: projectRoleSchema.optional(),
  keyFeatures: z.array(projectFeatureGroupSchema).default([]),
  techStack: z.array(projectTechCategorySchema).default([]),
  architecture: z
    .object({
      intro: z.string(),
      steps: z.array(projectArchitectureStepSchema).min(1)
    })
    .optional(),
  visuals: z.array(projectVisualSchema).default([]),
  challenges: z.array(projectChallengeSchema).default([]),
  learnings: z.array(z.string()).default([])
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
  href: z.string().url().optional(),
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

export const academicRecordSchema = z.object({
  degree: z.string(),
  institution: z.string(),
  range: z.string(),
  status: z.string(),
  result: z.string(),
  group: z.string(),
  classYear: z.string()
});

export type SocialLink = z.infer<typeof socialLinkSchema>;
export type HeroStat = z.infer<typeof heroStatSchema>;
export type SkillCategory = z.infer<typeof skillCategorySchema>;
export type ProjectRole = z.infer<typeof projectRoleSchema>;
export type ProjectFeatureGroup = z.infer<typeof projectFeatureGroupSchema>;
export type ProjectTechCategory = z.infer<typeof projectTechCategorySchema>;
export type ProjectArchitectureStep = z.infer<typeof projectArchitectureStepSchema>;
export type ProjectVisual = z.infer<typeof projectVisualSchema>;
export type ProjectChallenge = z.infer<typeof projectChallengeSchema>;
export type ProjectDetail = z.infer<typeof projectDetailSchema>;
export type Project = z.infer<typeof projectSchema>;
export type Certification = z.infer<typeof certificationSchema>;
export type Education = z.infer<typeof educationSchema>;
export type AcademicRecord = z.infer<typeof academicRecordSchema>;
