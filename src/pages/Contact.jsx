import React, { useState } from 'react';
import profile from '../data/profile.json';
import { API_URL } from '../lib/api';
import { ArrowIcon, Card, Container, GitHubIcon, LinkedInIcon, MailIcon, PageHeader, Reveal } from '../components/ui';

const channels = [
  { label: 'Email', value: profile.links.email, href: `mailto:${profile.links.email}`, Icon: MailIcon },
  { label: 'LinkedIn', value: 'in/suyash-roy', href: profile.links.linkedin, Icon: LinkedInIcon },
  { label: 'GitHub', value: 'SuyashRoy', href: profile.links.github, Icon: GitHubIcon },
];

const fieldClass =
  'w-full rounded-xl border border-line bg-surface px-4 py-3 text-fg placeholder:text-fg-subtle transition-colors focus:border-accent focus:outline-none focus:ring-2 focus:ring-accent/25';

const Contact = () => {
  const [formData, setFormData] = useState({ name: '', email: '', subject: '', message: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  const handleChange = (e) => setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    try {
      const response = await fetch(`${API_URL}/api/contact`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });
      const result = await response.json();
      if (result.success) {
        setSubmitStatus('success');
        setFormData({ name: '', email: '', subject: '', message: '' });
      } else {
        setSubmitStatus('error');
      }
    } catch (error) {
      console.error('Error submitting form:', error);
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
      setTimeout(() => setSubmitStatus(null), 6000);
    }
  };

  return (
    <>
      <PageHeader eyebrow="Contact" title="Let's build something">
        {profile.availability}, starting after I graduate in December 2026. Email is the fastest way to reach me, and
        the form below lands straight in my inbox.
      </PageHeader>

      <Container className="max-w-5xl">
        <div className="grid gap-6 lg:grid-cols-[minmax(0,2fr)_minmax(0,3fr)]">
          <div className="space-y-3">
            {channels.map(({ label, value, href, Icon }, i) => (
              <Reveal key={label} delay={i * 80}>
                <Card
                  as="a"
                  href={href}
                  target={href.startsWith('http') ? '_blank' : undefined}
                  rel="noreferrer"
                  className="group flex items-center gap-4 p-5"
                >
                  <span className="grid h-11 w-11 shrink-0 place-items-center rounded-xl border border-line bg-surface text-accent-text">
                    <Icon className="h-5 w-5" />
                  </span>
                  <span className="min-w-0 flex-1">
                    <span className="block text-xs text-fg-subtle">{label}</span>
                    <span className="block truncate text-fg">{value}</span>
                  </span>
                  <ArrowIcon className="h-4 w-4 text-fg-subtle" />
                </Card>
              </Reveal>
            ))}
            <Reveal delay={260}>
              <Card className="p-5">
                <span className="block text-xs text-fg-subtle">Based in</span>
                <span className="block text-fg">{profile.location} · open to relocation and remote</span>
              </Card>
            </Reveal>
          </div>

          <Reveal delay={100}>
            <Card as="form" onSubmit={handleSubmit} className="space-y-4 p-6 sm:p-8">
              <div className="grid gap-4 sm:grid-cols-2">
                <label className="block">
                  <span className="mb-1.5 block text-sm text-fg-muted">Name</span>
                  <input name="name" required value={formData.name} onChange={handleChange} className={fieldClass} placeholder="Your name" autoComplete="name" />
                </label>
                <label className="block">
                  <span className="mb-1.5 block text-sm text-fg-muted">Email</span>
                  <input type="email" name="email" required value={formData.email} onChange={handleChange} className={fieldClass} placeholder="you@company.com" autoComplete="email" />
                </label>
              </div>
              <label className="block">
                <span className="mb-1.5 block text-sm text-fg-muted">Subject</span>
                <input name="subject" required value={formData.subject} onChange={handleChange} className={fieldClass} placeholder="What's this about?" />
              </label>
              <label className="block">
                <span className="mb-1.5 block text-sm text-fg-muted">Message</span>
                <textarea name="message" required rows={6} value={formData.message} onChange={handleChange} className={`${fieldClass} resize-none`} placeholder="Tell me a bit about the role or idea…" />
              </label>

              <div className="flex flex-col-reverse items-start gap-4 pt-2 sm:flex-row sm:items-center sm:justify-between">
                <p className="min-h-5 text-sm" role="status">
                  {submitStatus === 'success' && <span className="text-emerald-600 dark:text-emerald-300">Thanks! Your message is on its way.</span>}
                  {submitStatus === 'error' && (
                    <span className="text-rose-700 dark:text-rose-300">
                      Couldn't send right now. Email me at{' '}
                      <a className="underline" href={`mailto:${profile.links.email}`}>{profile.links.email}</a>.
                    </span>
                  )}
                </p>
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="group inline-flex h-12 shrink-0 items-center gap-2 rounded-full bg-fg px-6 text-sm font-medium text-bg transition-opacity hover:opacity-90 disabled:opacity-50"
                >
                  {isSubmitting ? 'Sending…' : 'Send message'} <ArrowIcon />
                </button>
              </div>
            </Card>
          </Reveal>
        </div>
      </Container>
    </>
  );
};

export default Contact;
