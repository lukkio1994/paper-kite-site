import { NextIntlClientProvider, hasLocale } from "next-intl";
import { notFound } from "next/navigation";
import { routing } from "@/i18n/routing";
import HeaderClient from "../components/layout/HeaderClient";
import FooterClient from "../components/layout/FooterClient";

export default async function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;

  if (!hasLocale(routing.locales, locale)) {
    notFound();
  }

  return (
    <NextIntlClientProvider>
      <HeaderClient />
      {children}
      <FooterClient />
    </NextIntlClientProvider>
  );
}
