"use client";

import Link from "next/link";
import { Github, Linkedin, Mail, Send } from "lucide-react";
import { useMemo, useState } from "react";
import Swal from "sweetalert2";
import { PageContainer } from "@/components/shared/PageContainer";
import { Reveal } from "@/components/shared/Reveal";
import { SectionHeading } from "@/components/shared/SectionHeading";
import { contactFormSchema, type ContactFormValues } from "@/lib/contact-schema";
import { profile } from "@/data/site";
import { socialLinks } from "@/data/socialLinks";

const defaultValues: ContactFormValues = {
  name: "",
  email: "",
  subject: "",
  message: ""
};

type ContactApiResponse = {
  success?: boolean;
  message?: string;
};

export function Contact() {
  const [values, setValues] = useState<ContactFormValues>(defaultValues);
  const [fieldErrors, setFieldErrors] = useState<Partial<Record<keyof ContactFormValues, string>>>(
    {}
  );
  const [isSubmitting, setIsSubmitting] = useState(false);

  const githubLink = useMemo(
    () => socialLinks.find((link) => link.label === "GitHub")?.href ?? "#",
    []
  );
  const linkedInLink = useMemo(
    () => socialLinks.find((link) => link.label === "LinkedIn")?.href ?? "#",
    []
  );

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const parsed = contactFormSchema.safeParse(values);

    if (!parsed.success) {
      const flattened = parsed.error.flatten().fieldErrors;
      setFieldErrors({
        name: flattened.name?.[0],
        email: flattened.email?.[0],
        subject: flattened.subject?.[0],
        message: flattened.message?.[0]
      });
      return;
    }

    setFieldErrors({});
    setIsSubmitting(true);

    try {
      const endpoint =
        process.env.NEXT_PUBLIC_CONTACT_API_URL ?? "http://localhost:5000/api/contact";
      const response = await fetch(endpoint, {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(parsed.data)
      });

      const result = (await response.json().catch(() => ({}))) as ContactApiResponse;

      if (!response.ok || !result.success) {
        throw new Error(result.message ?? "The contact request could not be completed.");
      }

      setValues(defaultValues);
      await showFeedbackAlert({
        icon: "success",
        title: "Message sent",
        text: result.message ?? "Your message has been delivered successfully."
      });
    } catch (error) {
      await showFeedbackAlert({
        icon: "error",
        title: "Message not sent",
        text:
          error instanceof Error
            ? error.message
            : "The contact service is not reachable right now. Please try again later."
      });
    } finally {
      setIsSubmitting(false);
    }
  }

  function handleChange<K extends keyof ContactFormValues>(key: K, value: ContactFormValues[K]) {
    setValues((current) => ({ ...current, [key]: value }));
    setFieldErrors((current) => ({ ...current, [key]: undefined }));
  }

  return (
    <section id="contact" className="py-20 lg:py-28">
      <PageContainer className="grid gap-10 lg:grid-cols-[0.88fr_1.12fr]">
        <Reveal>
          <SectionHeading
            eyebrow="Contact"
            title="Have an idea, opportunity, or collaboration in mind?"
            description="Let&apos;s build something meaningful. I&apos;m open to internships, junior roles, startup projects, and product conversations that value thoughtful engineering."
          />

          <div className="mt-8 space-y-4 rounded-[1.8rem] border border-white/10 bg-white/[0.04] p-6">
            <div>
              <p className="text-sm text-slate-400">Email</p>
              <Link href={`mailto:${profile.email}`} className="text-lg font-semibold text-white">
                {profile.email}
              </Link>
            </div>
            <div>
              <p className="text-sm text-slate-400">Location</p>
              <p className="text-lg font-semibold text-white">{profile.location}</p>
            </div>
            <div className="flex flex-wrap gap-3 pt-2">
              <Link
                href={githubLink}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 rounded-full border border-white/12 bg-white/[0.05] px-4 py-3 text-sm text-white"
              >
                <Github className="h-4 w-4" />
                GitHub
              </Link>
              <Link
                href={linkedInLink}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 rounded-full border border-white/12 bg-white/[0.05] px-4 py-3 text-sm text-white"
              >
                <Linkedin className="h-4 w-4" />
                LinkedIn
              </Link>
              <Link
                href={`mailto:${profile.email}`}
                className="inline-flex items-center gap-2 rounded-full border border-white/12 bg-white/[0.05] px-4 py-3 text-sm text-white"
              >
                <Mail className="h-4 w-4" />
                Email me
              </Link>
            </div>
          </div>
        </Reveal>

        <Reveal delay={0.08}>
          <form
            onSubmit={handleSubmit}
            className="rounded-[2rem] border border-white/10 bg-[linear-gradient(180deg,rgba(15,23,42,0.86),rgba(2,6,23,0.94))] p-6 shadow-[0_24px_80px_rgba(2,6,23,0.35)]"
            noValidate
          >
            <div className="grid gap-5 sm:grid-cols-2">
              <Field
                id="name"
                label="Name"
                value={values.name}
                onChange={(value) => handleChange("name", value)}
                error={fieldErrors.name}
              />
              <Field
                id="email"
                label="Email"
                type="email"
                value={values.email}
                onChange={(value) => handleChange("email", value)}
                error={fieldErrors.email}
              />
            </div>

            <div className="mt-5">
              <Field
                id="subject"
                label="Subject"
                value={values.subject}
                onChange={(value) => handleChange("subject", value)}
                error={fieldErrors.subject}
              />
            </div>

            <div className="mt-5">
              <label htmlFor="message" className="mb-2 block text-sm font-medium text-slate-200">
                Message
              </label>
              <textarea
                id="message"
                value={values.message}
                onChange={(event) => handleChange("message", event.target.value)}
                className="min-h-40 w-full rounded-[1.4rem] border border-white/10 bg-slate-950/70 px-4 py-3 text-base text-white outline-none transition placeholder:text-slate-500 focus:border-cyan-300/30"
                placeholder="Tell me about the role, product, or collaboration."
              />
              {fieldErrors.message ? (
                <p className="mt-2 text-sm text-rose-300">{fieldErrors.message}</p>
              ) : null}
            </div>

            <div className="mt-6 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
              <p className="text-sm text-slate-400">
                Messages are sent through the backend contact workflow with SMTP delivery.
              </p>
              <button
                type="submit"
                disabled={isSubmitting}
                className="inline-flex items-center justify-center gap-2 rounded-full bg-cyan-300 px-6 py-3.5 text-sm font-semibold text-slate-950 transition hover:bg-cyan-200 disabled:cursor-not-allowed disabled:opacity-70"
              >
                {isSubmitting ? "Sending..." : "Send Message"}
                <Send className="h-4 w-4" />
              </button>
            </div>
          </form>
        </Reveal>
      </PageContainer>
    </section>
  );
}

async function showFeedbackAlert({
  icon,
  title,
  text
}: {
  icon: "success" | "error";
  title: string;
  text: string;
}) {
  await Swal.fire({
    icon,
    title,
    text,
    confirmButtonColor: "#22d3ee",
    background: "#020617",
    color: "#e2e8f0"
  });
}

type FieldProps = {
  id: "name" | "email" | "subject";
  label: string;
  value: string;
  onChange: (value: string) => void;
  error?: string;
  type?: "text" | "email";
};

function Field({ id, label, value, onChange, error, type = "text" }: FieldProps) {
  return (
    <div>
      <label htmlFor={id} className="mb-2 block text-sm font-medium text-slate-200">
        {label}
      </label>
      <input
        id={id}
        type={type}
        value={value}
        onChange={(event) => onChange(event.target.value)}
        className="w-full rounded-[1.4rem] border border-white/10 bg-slate-950/70 px-4 py-3 text-base text-white outline-none transition placeholder:text-slate-500 focus:border-cyan-300/30"
      />
      {error ? <p className="mt-2 text-sm text-rose-300">{error}</p> : null}
    </div>
  );
}
