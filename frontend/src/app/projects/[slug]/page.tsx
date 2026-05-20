import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { ProjectCaseStudy } from "@/components/shared/ProjectCaseStudy";
import { projectDetails } from "@/data/projectDetails";
import { projectImages, projects } from "@/data/projects";

type ProjectDetailPageProps = {
  params: Promise<{
    slug: string;
  }>;
};

export async function generateStaticParams() {
  return projects.map((project) => ({
    slug: project.slug
  }));
}

export async function generateMetadata({
  params
}: ProjectDetailPageProps): Promise<Metadata> {
  const { slug } = await params;
  const project = projects.find((item) => item.slug === slug);
  const detail = projectDetails.find((item) => item.slug === slug);

  if (!project || !detail) {
    return {
      title: "Project Not Found | Samiun Alim Auntor"
    };
  }

  return {
    title: `${project.title} Case Study | Samiun Alim Auntor`,
    description: detail.overview
  };
}

export default async function ProjectDetailPage({ params }: ProjectDetailPageProps) {
  const { slug } = await params;
  const project = projects.find((item) => item.slug === slug);
  const detail = projectDetails.find((item) => item.slug === slug);

  if (!project || !detail) {
    notFound();
  }

  const previewImage = projectImages[project.slug as keyof typeof projectImages];

  return <ProjectCaseStudy project={project} detail={detail} previewImage={previewImage} />;
}
