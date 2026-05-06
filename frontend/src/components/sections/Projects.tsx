import { ProjectCard } from "@/components/shared/ProjectCard";
import { Reveal } from "@/components/shared/Reveal";
import { SectionHeading } from "@/components/shared/SectionHeading";
import { projects } from "@/data/projects";

export function Projects() {
  const featuredProject = projects.find((project) => project.featured);
  const supportingProjects = projects.filter((project) => !project.featured);

  return (
    <section id="projects" className="px-4 py-20 sm:px-6 lg:py-28">
      <div className="mx-auto flex w-full max-w-7xl flex-col gap-10">
        <Reveal>
          <SectionHeading
            eyebrow="Featured Projects"
            title="Product builds that show systems thinking, not just interface work."
            description="These projects highlight the kind of workflows I enjoy building: marketplaces, dashboards, verification logic, reminders, payments, and multi-role platform behavior."
          />
        </Reveal>

        {featuredProject ? (
          <Reveal delay={0.06}>
            <ProjectCard project={featuredProject} priority />
          </Reveal>
        ) : null}

        <div className="grid gap-6 xl:grid-cols-3">
          {supportingProjects.map((project, index) => (
            <Reveal key={project.slug} delay={0.05 * index}>
              <ProjectCard project={project} />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
