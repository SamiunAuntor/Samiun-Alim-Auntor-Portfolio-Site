import { socialLinkSchema, type SocialLink } from "./types";

const rawSocialLinks = [
  {
    label: "GitHub",
    shortLabel: "@SamiunAuntor",
    href: "https://github.com/SamiunAuntor",
    external: true
  },
  {
    label: "LinkedIn",
    shortLabel: "Professional profile",
    href: "https://www.linkedin.com/in/samiun-alim-auntor/",
    external: true
  },
  {
    label: "Email",
    shortLabel: "samiunalimauntor@gmail.com",
    href: "mailto:samiunalimauntor@gmail.com",
    external: true
  }
] satisfies SocialLink[];

export const socialLinks = socialLinkSchema.array().parse(rawSocialLinks);
