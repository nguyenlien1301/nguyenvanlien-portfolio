import ThemeProvider from "@/components/common/theme-provider";
import { Locale, locales } from "@/config";
import { ScrollSectionProvider } from "@/context/scroll-section-context";
import { routing } from "@/i18n/routing";
import { hasLocale, NextIntlClientProvider } from "next-intl";
import {
  getMessages,
  getTranslations,
  setRequestLocale,
} from "next-intl/server";
import { Geist, Geist_Mono } from "next/font/google";
import { notFound } from "next/navigation";
import { Toaster } from "sonner";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

// export const metadata: Metadata = {
//   title: "Portfolio",
//   description: "Personal portfolio",
// };
export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: Locale }>;
}) {
  const { locale } = await params; // ✅

  const t = await getTranslations<"Hero">({
    locale,
    namespace: "Hero",
  });
  //  `${t("greeting")} ${t("name")}`,
  return {
    title: {
      template: "%s | Portfolio",
      default: "Portfolio",
    },
    description: "Nguyen Van Lien Portfolio",
  };
}

export function generateStaticParams() {
  return locales.map((locale) => ({
    locale,
  }));
}

export default async function RootLayout({
  children,
  params,
}: Readonly<{
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}>) {
  const { locale } = await params;
  if (!hasLocale(routing.locales, locale)) {
    notFound();
  }
  // const messages = await getMessages();
  // Enable static rendering
  setRequestLocale(locale);
  const messages = await getMessages();
  return (
    <html lang={locale} suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Toaster richColors />
        <NextIntlClientProvider messages={messages}>
          <ScrollSectionProvider>
            <ThemeProvider
              attribute="class"
              defaultTheme="dark"
              enableSystem={false}
              disableTransitionOnChange
            >
              {children}
            </ThemeProvider>
          </ScrollSectionProvider>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
