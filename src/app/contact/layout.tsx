import type { Metadata } from "next";
import { CONTACT_INFO, BRAND_CONTENT } from '@/lib/constants';

export const metadata: Metadata = {
  title: `Contact - ${CONTACT_INFO.company}`,
  description: `Get in touch with ${CONTACT_INFO.company}. ${BRAND_CONTENT.tagline} Contact us for support, press inquiries, or general questions.`,
};

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
