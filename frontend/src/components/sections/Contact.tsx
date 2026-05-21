"use client";

import Link from "next/link";
import { Github, Linkedin, Mail, MapPin, Phone, Send } from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";
import { useMemo, useState } from "react";
import Swal from "sweetalert2";
import { PageContainer } from "@/components/shared/PageContainer";
import { Reveal } from "@/components/shared/Reveal";
import { contactFormSchema, type ContactFormValues } from "@/lib/contact-schema";
import { profile } from "@/data/site";
import { socialLinks } from "@/data/socialLinks";

const whatsappHref = "https://wa.me/8801988774499";
const phoneHref = "tel:+8801988774499";

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
          <div className="space-y-5">
            <p className="text-xs font-semibold uppercase tracking-[0.35em] text-sky-300/90">
              Contact
            </p>
            <h2 className="max-w-3xl text-3xl font-semibold leading-tight text-white sm:text-5xl">
              Let&apos;s turn a good idea into a{" "}
              <span className="bg-gradient-to-r from-cyan-200 via-sky-400 to-indigo-500 bg-clip-text text-transparent">
                polished product.
              </span>
            </h2>
            <p className="max-w-2xl text-base leading-8 text-slate-300">
              I&apos;m open to internships, junior roles, startup projects, and thoughtful
              collaboration around full-stack products.
            </p>
          </div>

          <div className="mt-8 overflow-hidden rounded-[1.8rem] border border-sky-300/18 bg-[radial-gradient(circle_at_20%_0%,rgba(56,189,248,0.18),transparent_34%),linear-gradient(145deg,rgba(15,23,42,0.86),rgba(2,6,23,0.96))] p-6 shadow-[0_24px_80px_rgba(2,6,23,0.32),inset_0_1px_0_rgba(255,255,255,0.08)]">
            <div className="space-y-5">
              <ContactItem
                icon={<Mail className="h-4 w-4" />}
                label="Email"
                href={`mailto:${profile.email}`}
                value={profile.email}
              />
              <ContactItem
                icon={<Phone className="h-4 w-4" />}
                label="Phone"
                href={phoneHref}
                value={profile.phone}
              />
              <ContactItem
                icon={<FaWhatsapp className="h-4 w-4" />}
                label="WhatsApp"
                href={whatsappHref}
                value={profile.phone}
                external
              />
              <ContactItem
                icon={<MapPin className="h-4 w-4" />}
                label="Location"
                value={profile.location}
              />
            </div>

            <div className="flex flex-wrap gap-3 pt-2">
              <Link
                href={githubLink}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 rounded-full border border-white/12 bg-white/[0.05] px-4 py-3 text-sm font-medium text-slate-100 transition hover:border-sky-300/30 hover:bg-white/[0.08]"
              >
                <Github className="h-4 w-4" />
                GitHub
              </Link>
              <Link
                href={linkedInLink}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 rounded-full border border-white/12 bg-white/[0.05] px-4 py-3 text-sm font-medium text-slate-100 transition hover:border-sky-300/30 hover:bg-white/[0.08]"
              >
                <Linkedin className="h-4 w-4" />
                LinkedIn
              </Link>
              <Link
                href={`mailto:${profile.email}`}
                className="inline-flex items-center gap-2 rounded-full border border-white/12 bg-white/[0.05] px-4 py-3 text-sm font-medium text-slate-100 transition hover:border-sky-300/30 hover:bg-white/[0.08]"
              >
                <Mail className="h-4 w-4" />
                Email me
              </Link>
              <Link
                href={whatsappHref}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 rounded-full border border-emerald-300/20 bg-emerald-300/[0.08] px-4 py-3 text-sm font-medium text-emerald-100 transition hover:border-emerald-300/35 hover:bg-emerald-300/[0.12]"
              >
                <FaWhatsapp className="h-4 w-4" />
                WhatsApp
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
                required
                value={values.name}
                onChange={(value) => handleChange("name", value)}
                error={fieldErrors.name}
              />
              <Field
                id="email"
                label="Email"
                required
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
                required
                value={values.subject}
                onChange={(value) => handleChange("subject", value)}
                error={fieldErrors.subject}
              />
            </div>

            <div className="mt-5">
              <label htmlFor="message" className="mb-2 block text-sm font-medium text-slate-200">
                Message <span className="text-cyan-300">*</span>
              </label>
              <textarea
                id="message"
                required
                value={values.message}
                onChange={(event) => handleChange("message", event.target.value)}
                className="min-h-40 w-full rounded-[1.4rem] border border-white/10 bg-slate-950/70 px-4 py-3 text-base text-white outline-none transition placeholder:text-slate-500 focus:border-cyan-300/30"
                placeholder="Tell me about the role, product, or collaboration."
              />
              {fieldErrors.message ? (
                <p className="mt-2 text-sm text-rose-300">{fieldErrors.message}</p>
              ) : null}
            </div>

            <div className="mt-6 flex justify-end">
              <button
                type="submit"
                disabled={isSubmitting}
                className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-cyan-300 px-6 py-3.5 text-sm font-semibold text-slate-950 transition hover:bg-cyan-200 disabled:cursor-not-allowed disabled:opacity-70 sm:w-auto"
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

function ContactItem({
  icon,
  label,
  value,
  href,
  external = false
}: {
  icon: React.ReactNode;
  label: string;
  value: string;
  href?: string;
  external?: boolean;
}) {
  const content = (
    <div className="flex items-center gap-4 rounded-[1.3rem] border border-white/10 bg-slate-950/35 px-4 py-3.5">
      <span className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-2xl border border-sky-300/15 bg-sky-300/[0.08] text-sky-200">
        {icon}
      </span>
      <div className="min-w-0">
        <p className="text-xs font-semibold uppercase tracking-[0.22em] text-sky-300/75">
          {label}
        </p>
        <p className="mt-1 break-words text-base font-semibold text-slate-100">{value}</p>
      </div>
    </div>
  );

  if (!href) {
    return content;
  }

  return (
    <Link href={href} target={external ? "_blank" : undefined} rel={external ? "noreferrer" : undefined}>
      {content}
    </Link>
  );
}

type FieldProps = {
  id: "name" | "email" | "subject";
  label: string;
  required?: boolean;
  value: string;
  onChange: (value: string) => void;
  error?: string;
  type?: "text" | "email";
};

function Field({ id, label, required = false, value, onChange, error, type = "text" }: FieldProps) {
  return (
    <div>
      <label htmlFor={id} className="mb-2 block text-sm font-medium text-slate-200">
        {label} {required ? <span className="text-cyan-300">*</span> : null}
      </label>
      <input
        id={id}
        type={type}
        required={required}
        value={value}
        onChange={(event) => onChange(event.target.value)}
        className="w-full rounded-[1.4rem] border border-white/10 bg-slate-950/70 px-4 py-3 text-base text-white outline-none transition placeholder:text-slate-500 focus:border-cyan-300/30"
      />
      {error ? <p className="mt-2 text-sm text-rose-300">{error}</p> : null}
    </div>
  );
}
